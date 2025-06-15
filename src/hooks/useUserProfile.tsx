
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useSecureAuth } from './useSecureAuth';
import { useToast } from './use-toast';
import { Database } from '@/integrations/supabase/types';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type UpdateProfileData = Partial<Profile>;

export const useUserProfile = () => {
  const { user } = useSecureAuth();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const fetchProfile = async () => {
    if (!user) return null;
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
      
    if (error && error.code !== 'PGRST116') { // PGRST116: single row not found
        throw error;
    }
    return data;
  };

  const { data: profile, isLoading, error } = useQuery<Profile | null>({
    queryKey: ['profile', user?.id],
    queryFn: fetchProfile,
    enabled: !!user,
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (updateData: UpdateProfileData) => {
      if (!user) throw new Error("Utilisateur non authentifié");
      const { error } = await supabase
        .from('profiles')
        .update(updateData)
        .eq('id', user.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', user?.id] });
      toast({
        title: "Profil mis à jour",
        description: "Vos modifications ont été sauvegardées.",
      });
    },
    onError: (err: any) => {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `La mise à jour du profil a échoué: ${err.message}`,
      });
    },
  });

  return {
    profile,
    isLoading,
    error,
    updateProfile: updateProfileMutation.mutate,
    isUpdating: updateProfileMutation.isPending,
  };
};
