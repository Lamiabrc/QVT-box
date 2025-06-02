
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  accountType: 'abonne_salarie' | 'administrateur_entreprise' | 'particulier_travailleur';
  entreprise?: string;
  enterpriseRole?: string;
  familyCode?: string;
  age?: number;
}

export const useAuthOperations = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const registerUser = async (data: RegisterData) => {
    setLoading(true);
    console.log('Starting user registration process');
    
    try {
      // Validate input data
      if (!data.email || !data.password || !data.fullName) {
        throw new Error('Email, mot de passe et nom complet sont requis');
      }

      if (data.password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères');
      }

      // Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/entreprise`,
          data: {
            full_name: data.fullName,
            account_type: data.accountType,
            enterprise_role: data.enterpriseRole || 'employee'
          }
        }
      });

      if (authError) {
        console.error('Auth error:', authError);
        throw authError;
      }

      if (!authData.user) {
        throw new Error('Erreur lors de la création du compte utilisateur');
      }

      console.log('User created successfully:', authData.user.id);

      // Create user profile
      const profileData = {
        id: authData.user.id,
        email: data.email,
        full_name: data.fullName,
        account_type: data.accountType,
        enterprise_role: data.enterpriseRole || 'employee',
        role: 'user',
        entreprise: data.entreprise || null,
        family_code: data.familyCode || null,
        age: data.age || null
      };

      const { error: profileError } = await supabase
        .from('profiles')
        .insert([profileData]);

      if (profileError) {
        console.error('Profile creation error:', profileError);
        throw new Error('Erreur lors de la création du profil utilisateur');
      }

      // Create user role entry
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert([{
          user_id: authData.user.id,
          role: 'user'
        }]);

      if (roleError) {
        console.error('Role creation error:', roleError);
        // Don't throw here as it's not critical
      }

      console.log('User registration completed successfully');

      toast({
        title: "Compte créé avec succès",
        description: "Veuillez vérifier votre email pour confirmer votre compte.",
      });

      return { user: authData.user, error: null };

    } catch (error: any) {
      console.error('Registration error:', error);
      
      let errorMessage = 'Erreur lors de la création du compte';
      
      if (error.message?.includes('already registered')) {
        errorMessage = 'Cette adresse email est déjà utilisée';
      } else if (error.message?.includes('Invalid email')) {
        errorMessage = 'Adresse email invalide';
      } else if (error.message?.includes('Password')) {
        errorMessage = 'Le mot de passe ne respecte pas les critères requis';
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        variant: "destructive",
        title: "Erreur de création de compte",
        description: errorMessage,
      });

      return { user: null, error: errorMessage };
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
