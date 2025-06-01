
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  full_name?: string;
  role?: string;
}

export const useUserRoles = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, full_name, role')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les utilisateurs.",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId: string, role: string): Promise<void> => {
    try {
      // Validate role
      if (role !== 'admin' && role !== 'user') {
        throw new Error('Invalid role. Must be "admin" or "user"');
      }

      // Mise à jour dans la table profiles
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ role })
        .eq('id', userId);

      if (profileError) throw profileError;

      // Mise à jour ou insertion dans user_roles avec la bonne structure
      const { error: roleError } = await supabase
        .from('user_roles')
        .upsert({ 
          user_id: userId, 
          role: role as 'admin' | 'user'
        }, { 
          onConflict: 'user_id' 
        });

      if (roleError) throw roleError;

      // Mise à jour de l'état local
      setUsers(prev => prev.map(user => 
        user.id === userId ? { ...user, role } : user
      ));

      toast({
        title: "Succès",
        description: "Rôle utilisateur mis à jour avec succès.",
      });
    } catch (error) {
      console.error('Error updating user role:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de mettre à jour le rôle.",
      });
      throw error;
    }
  };

  const checkIsAdmin = async (userId?: string) => {
    try {
      const targetUserId = userId || (await supabase.auth.getUser()).data.user?.id;
      
      if (!targetUserId) return false;

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', targetUserId)
        .eq('role', 'admin')
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      
      return !!data;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    updateUserRole,
    checkIsAdmin,
    refetch: fetchUsers
  };
};
