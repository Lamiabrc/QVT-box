import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Nouvelle interface pour les données d'inscription
export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  accountType: 'create_enterprise' | 'create_family' | 'join_with_code' | 'individual' | 'teen';
  entityName?: string; // Nom de l'entreprise ou de la famille
  joinCode?: string;
  age?: number;
}

const generateCode = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const useAuthOperations = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const registerUser = async (data: RegisterData) => {
    setLoading(true);
    console.log('Starting user registration process with data:', data);
    
    try {
      if (!data.email || !data.password || !data.fullName) {
        throw new Error('Email, mot de passe et nom complet sont requis');
      }
      if (data.password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères');
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: data.fullName,
            account_type: data.accountType,
          }
        }
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('Erreur lors de la création du compte utilisateur');
      
      const user = authData.user;
      console.log('User created in Auth:', user.id);

      let profileData: any = {
        id: user.id,
        email: data.email,
        full_name: data.fullName,
        account_type: data.accountType,
        role: 'user', // default role
        age: data.age || null,
        onboarding_completed: true, // Par défaut, l'onboarding est considéré comme fait
      };
      
      let resultPayload: any = { user, error: null, joinCode: null };

      switch (data.accountType) {
        case 'create_enterprise': {
          if (!data.entityName) throw new Error("Le nom de l'entreprise est requis.");
          const enterpriseCode = generateCode();
          const { data: enterprise, error: enterpriseError } = await supabase
            .from('enterprises')
            .insert({ name: data.entityName, enterprise_code: enterpriseCode, created_by: user.id })
            .select()
            .single();
          if (enterpriseError) throw enterpriseError;
          console.log('Enterprise created:', enterprise.id);
          
          await supabase.from('enterprise_members').insert({ enterprise_id: enterprise.id, user_id: user.id, role: 'admin', is_approved: true });
          profileData.enterprise_id = enterprise.id;
          profileData.enterprise_role = 'admin';
          profileData.onboarding_completed = false; // L'admin devra aussi compléter son profil pro
          resultPayload.joinCode = enterpriseCode;
          break;
        }
        case 'create_family': {
          if (!data.entityName) throw new Error("Le nom de la famille est requis.");
          const familyCode = generateCode();
          const { data: family, error: familyError } = await supabase
            .from('families')
            .insert({ name: data.entityName, family_code: familyCode, created_by: user.id })
            .select()
            .single();
          if (familyError) throw familyError;
          console.log('Family created:', family.id);
          
          await supabase.from('family_members').insert({ family_id: family.id, user_id: user.id, role: 'parent', is_approved: true });
          profileData.family_id = family.id;
          resultPayload.joinCode = familyCode;
          break;
        }
        case 'join_with_code': {
          if (!data.joinCode) throw new Error("Un code est requis pour rejoindre.");
          const code = data.joinCode.toUpperCase();

          const { data: enterprise } = await supabase
            .from('enterprises')
            .select('id')
            .eq('enterprise_code', code)
            .single();
          
          if (enterprise) {
            await supabase.from('enterprise_members').insert({ enterprise_id: enterprise.id, user_id: user.id, role: 'employee', is_approved: true });
            profileData.enterprise_id = enterprise.id;
            profileData.enterprise_role = 'employee';
            profileData.onboarding_completed = false; // Cet utilisateur devra faire l'onboarding
            break; 
          }

          const { data: family } = await supabase
            .from('families')
            .select('id')
            .eq('family_code', code)
            .single();

          if (family) {
            await supabase.from('family_members').insert({ family_id: family.id, user_id: user.id, role: 'teen', is_approved: true });
            profileData.family_id = family.id;
            // onboarding_completed reste true par défaut pour les membres de famille
            break;
          }

          throw new Error("Code de jonction invalide.");
        }
        case 'teen':
          profileData.role = 'teen';
          break;
        case 'individual':
        default:
          // onboarding_completed reste true par défaut
          break;
      }

      const { error: profileError } = await supabase.from('profiles').insert(profileData);
      if (profileError) throw profileError;
      console.log('Profile created/updated for user:', user.id);

      const { error: roleError } = await supabase.from('user_roles').insert([{ user_id: user.id, role: 'user' }]);
      if (roleError) console.error('Role creation error:', roleError); // Non-critical

      toast({
        title: "Compte créé avec succès",
        description: "Veuillez vérifier votre email pour confirmer votre compte.",
      });

      return resultPayload;

    } catch (error: any) {
      console.error('Registration error:', error);
      let errorMessage = error.message || 'Erreur lors de la création du compte';
      if (error.message?.includes('already registered')) errorMessage = 'Cette adresse email est déjà utilisée';
      
      toast({
        variant: "destructive",
        title: "Erreur de création de compte",
        description: errorMessage,
      });

      return { user: null, error: errorMessage, joinCode: null };
    } finally {
      setLoading(false);
    }
  };

  const signInUser = async (email: string, password: string) => {
    setLoading(true);
    console.log('Starting user sign in process');
    
    try {
      if (!email || !password) {
        throw new Error('Email et mot de passe sont requis');
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
        throw error;
      }

      if (!data.user) {
        throw new Error('Erreur lors de la connexion');
      }

      console.log('User signed in successfully:', data.user.id);

      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté.",
      });

      return { user: data.user, session: data.session, error: null };

    } catch (error: any) {
      console.error('Sign in error:', error);
      
      let errorMessage = 'Erreur lors de la connexion';
      
      if (error.message?.includes('Invalid login credentials')) {
        errorMessage = 'Email ou mot de passe incorrect';
      } else if (error.message?.includes('Email not confirmed')) {
        errorMessage = 'Veuillez confirmer votre email avant de vous connecter';
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: errorMessage,
      });

      return { user: null, session: null, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }

      toast({
        title: "Déconnexion réussie",
        description: "À bientôt !",
      });

      return { error: null };

    } catch (error: any) {
      console.error('Sign out error:', error);
      
      toast({
        variant: "destructive",
        title: "Erreur de déconnexion",
        description: error.message || 'Erreur lors de la déconnexion',
      });

      return { error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    registerUser,
    signInUser,
    signOutUser,
    loading
  };
};
