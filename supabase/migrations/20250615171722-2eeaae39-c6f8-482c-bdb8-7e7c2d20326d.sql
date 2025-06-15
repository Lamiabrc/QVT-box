
-- Étape 1: Supprimer les anciennes règles de sécurité qui bloquent la migration
DROP POLICY IF EXISTS "Parents can view their teen's checkins" ON public.teen_checkins;
DROP POLICY IF EXISTS "Parents can view their teen's boxes" ON public.monthly_boxes;

-- Étape 2: Supprimer les anciennes tables et types avec CASCADE pour forcer la suppression des dépendances
DROP TABLE IF EXISTS public.family_connections CASCADE;
DROP TABLE IF EXISTS public.family_profiles CASCADE;
DROP TYPE IF EXISTS public.parent_teen_role CASCADE;

-- Étape 3: Recréer la structure de base de données pour les familles et entreprises

-- Créer un type ENUM pour les rôles dans la famille (de manière idempotente)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'family_role') THEN
        CREATE TYPE public.family_role AS ENUM ('parent', 'teen');
    END IF;
END$$;

-- Créer la nouvelle table pour les familles
CREATE TABLE public.families (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    family_code TEXT NOT NULL UNIQUE,
    created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Activer la sécurité au niveau des lignes (RLS) pour la table families
ALTER TABLE public.families ENABLE ROW LEVEL SECURITY;

-- Créer la table de jonction pour les membres de la famille
CREATE TABLE public.family_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    family_id UUID NOT NULL REFERENCES public.families(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role public.family_role NOT NULL,
    is_approved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(family_id, user_id)
);

-- Activer RLS pour la table family_members
ALTER TABLE public.family_members ENABLE ROW LEVEL SECURITY;

-- Créer la nouvelle table pour les entreprises
CREATE TABLE public.enterprises (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    enterprise_code TEXT NOT NULL UNIQUE,
    created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Activer RLS pour la table enterprises
ALTER TABLE public.enterprises ENABLE ROW LEVEL SECURITY;

-- Créer un type ENUM pour les rôles en entreprise (de manière idempotente)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enterprise_role_enum') THEN
        CREATE TYPE public.enterprise_role_enum AS ENUM ('employee', 'manager', 'hr', 'admin');
    END IF;
END$$;

-- Créer la table de jonction pour les membres de l'entreprise
CREATE TABLE public.enterprise_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enterprise_id UUID NOT NULL REFERENCES public.enterprises(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role public.enterprise_role_enum NOT NULL,
    is_approved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(enterprise_id, user_id)
);

-- Activer RLS pour la table enterprise_members
ALTER TABLE public.enterprise_members ENABLE ROW LEVEL SECURITY;

-- Mettre à jour la table des profils utilisateurs
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS family_id UUID REFERENCES public.families(id) ON DELETE SET NULL;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS family_code;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS enterprise_id UUID REFERENCES public.enterprises(id) ON DELETE SET NULL;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS entreprise;

-- Mettre à jour la colonne enterprise_role si elle existe
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'profiles' AND column_name = 'enterprise_role') THEN
        IF (SELECT data_type FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'enterprise_role') != 'USER-DEFINED' THEN
            UPDATE public.profiles SET enterprise_role = 'employee' WHERE enterprise_role IS NULL OR enterprise_role NOT IN ('employee', 'manager', 'hr', 'admin');
            ALTER TABLE public.profiles ALTER COLUMN enterprise_role TYPE public.enterprise_role_enum USING enterprise_role::public.enterprise_role_enum;
        END IF;
    END IF;
END $$;

-- Étape 4: Recréer toutes les politiques de sécurité nécessaires avec la nouvelle structure
-- Politiques pour 'families'
CREATE POLICY "Les membres approuvés peuvent voir les détails de leur famille" ON public.families FOR SELECT USING (id IN (SELECT fm.family_id FROM public.family_members fm WHERE fm.user_id = auth.uid() AND fm.is_approved = TRUE));
CREATE POLICY "Le créateur peut gérer sa famille" ON public.families FOR ALL USING (created_by = auth.uid());
-- Politiques pour 'family_members'
CREATE POLICY "Les utilisateurs peuvent voir leur propre statut de membre" ON public.family_members FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Les membres approuvés peuvent voir les autres membres de leur famille" ON public.family_members FOR SELECT USING (is_approved = TRUE AND family_id IN (SELECT fm.family_id FROM public.family_members fm WHERE fm.user_id = auth.uid() AND fm.is_approved = TRUE));
CREATE POLICY "Les utilisateurs peuvent demander à rejoindre une famille" ON public.family_members FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Les parents peuvent gérer les membres de leur famille" ON public.family_members FOR ALL USING (family_id IN (SELECT fm.family_id FROM public.family_members fm WHERE fm.user_id = auth.uid() AND fm.role = 'parent' AND fm.is_approved = TRUE));
-- Politiques pour 'enterprises'
CREATE POLICY "Les membres peuvent voir leur entreprise" ON public.enterprises FOR SELECT USING (id IN (SELECT enterprise_id FROM public.enterprise_members WHERE user_id = auth.uid() AND is_approved = TRUE));
CREATE POLICY "Le créateur peut gérer son entreprise" ON public.enterprises FOR ALL USING (created_by = auth.uid());
-- Politiques pour 'enterprise_members'
CREATE POLICY "Les utilisateurs peuvent voir leur propre adhésion à l'entreprise" ON public.enterprise_members FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Les admins/RH/managers peuvent voir les autres membres" ON public.enterprise_members FOR SELECT USING (enterprise_id IN (SELECT em.enterprise_id FROM public.enterprise_members em WHERE em.user_id = auth.uid() AND em.role IN ('admin', 'hr', 'manager') AND em.is_approved = TRUE));
CREATE POLICY "Les utilisateurs peuvent demander à rejoindre une entreprise" ON public.enterprise_members FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Les admins/RH/managers peuvent gérer les membres" ON public.enterprise_members FOR ALL USING (enterprise_id IN (SELECT em.enterprise_id FROM public.enterprise_members em WHERE em.user_id = auth.uid() AND em.role IN ('admin', 'hr', 'manager') AND em.is_approved = TRUE));

-- Étape 5: Recréer les politiques dépendantes qui ont été supprimées
CREATE POLICY "Parents can view their teen's checkins" ON public.teen_checkins
FOR SELECT USING (
    EXISTS (
        SELECT 1
        FROM public.family_members AS parent_member
        JOIN public.family_members AS teen_member ON parent_member.family_id = teen_member.family_id
        WHERE parent_member.user_id = auth.uid()
        AND parent_member.role = 'parent'
        AND parent_member.is_approved = TRUE
        AND teen_member.user_id = teen_checkins.teen_id
        AND teen_member.role = 'teen'
        AND teen_member.is_approved = TRUE
    )
);

CREATE POLICY "Parents can view their teen's boxes" ON public.monthly_boxes
FOR SELECT USING (
    EXISTS (
        SELECT 1
        FROM public.family_members AS parent_member
        JOIN public.family_members AS teen_member ON parent_member.family_id = teen_member.family_id
        WHERE parent_member.user_id = auth.uid()
        AND parent_member.role = 'parent'
        AND parent_member.is_approved = TRUE
        AND teen_member.user_id = monthly_boxes.teen_id
        AND teen_member.role = 'teen'
        AND teen_member.is_approved = TRUE
    )
);
