
import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useSecureAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [isHR, setIsHR] = useState(false);
  const [enterpriseRole, setEnterpriseRole] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Check user roles and enterprise role (defer with setTimeout to avoid deadlock)
          setTimeout(async () => {
            try {
              // Check admin role
              const { data: roleData } = await supabase
                .from('user_roles')
                .select('role')
                .eq('user_id', session.user.id)
                .single();
              
              setIsAdmin(roleData?.role === 'admin');

              // Check enterprise role and permissions
              const { data: profileData } = await supabase
                .from('profiles')
                .select('enterprise_role')
                .eq('id', session.user.id)
                .single();
              
              if (profileData?.enterprise_role) {
                setEnterpriseRole(profileData.enterprise_role);
                setIsManager(profileData.enterprise_role === 'manager');
                setIsHR(profileData.enterprise_role === 'hr');
              }
            } catch (error) {
              console.error('Error checking user roles:', error);
              setIsAdmin(false);
              setIsManager(false);
              setIsHR(false);
              setEnterpriseRole(null);
            }
          }, 0);
        } else {
          setIsAdmin(false);
          setIsManager(false);
          setIsHR(false);
          setEnterpriseRole(null);
        }
        
        setLoading(false);
      }
    );

    // THEN check for existing session
    const checkInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Initial session check:', session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Check roles for existing session
          const { data: roleData } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', session.user.id)
            .single();
          
          setIsAdmin(roleData?.role === 'admin');

          const { data: profileData } = await supabase
            .from('profiles')
            .select('enterprise_role')
            .eq('id', session.user.id)
            .single();
          
          if (profileData?.enterprise_role) {
            setEnterpriseRole(profileData.enterprise_role);
            setIsManager(profileData.enterprise_role === 'manager');
            setIsHR(profileData.enterprise_role === 'hr');
          }
        }
      } catch (error) {
        console.error('Error checking initial session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkInitialSession();

    return () => subscription.unsubscribe();
  }, []);

  const requireAdmin = () => {
    if (!isAdmin) {
      toast({
        variant: "destructive",
        title: "Accès refusé",
        description: "Vous devez avoir les privilèges administrateur pour effectuer cette action.",
      });
      return false;
    }
    return true;
  };

  const requireManager = () => {
    if (!isManager && !isHR && !isAdmin) {
      toast({
        variant: "destructive",
        title: "Accès refusé",
        description: "Vous devez être manager, RH ou administrateur pour effectuer cette action.",
      });
      return false;
    }
    return true;
  };

  const requireHR = () => {
    if (!isHR && !isAdmin) {
      toast({
        variant: "destructive",
        title: "Accès refusé",
        description: "Vous devez être RH ou administrateur pour effectuer cette action.",
      });
      return false;
    }
    return true;
  };

  return {
    user,
    session,
    loading,
    isAdmin,
    isManager,
    isHR,
    enterpriseRole,
    requireAdmin,
    requireManager,
    requireHR
  };
};
