
-- Ajouter les colonnes manquantes à la table profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS entreprise text,
ADD COLUMN IF NOT EXISTS account_type text DEFAULT 'user';

-- Vérifier et corriger la relation team_members -> profiles
-- D'abord, s'assurer que la table team_members a la bonne structure
ALTER TABLE public.team_members 
DROP CONSTRAINT IF EXISTS team_members_employee_id_fkey;

-- Ajouter la contrainte de clé étrangère correcte
ALTER TABLE public.team_members 
ADD CONSTRAINT team_members_employee_id_fkey 
FOREIGN KEY (employee_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

-- Ajouter la contrainte pour team_id si elle n'existe pas
ALTER TABLE public.team_members 
DROP CONSTRAINT IF EXISTS team_members_team_id_fkey;

ALTER TABLE public.team_members 
ADD CONSTRAINT team_members_team_id_fkey 
FOREIGN KEY (team_id) REFERENCES public.teams(id) ON DELETE CASCADE;
