
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Users, Heart, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TeensLogin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate(getRoleInfo().redirectPath);
      }
    };
    checkAuth();
  }, []);

  const getRoleInfo = () => {
    switch (role) {
      case 'teen':
        return {
          title: 'Connexion Ado',
          icon: <Heart className="w-8 h-8 text-pink-400" />,
          description: 'Accède à ton espace perso sécurisé',
          redirectPath: '/teens'
        };
      case 'parent':
        return {
          title: 'Connexion Parent',
          icon: <Shield className="w-8 h-8 text-purple-400" />,
          description: 'Gérez l\'espace famille et suivez le bien-être',
          redirectPath: '/teens/dashboard-parent'
        };
      default:
        return {
          title: 'Connexion Famille',
          icon: <Users className="w-8 h-8 text-pink-400" />,
          description: 'Accédez à l\'espace familial',
          redirectPath: '/teens'
        };
    }
  };

  const roleInfo = getRoleInfo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast({
          title: "Erreur de connexion",
          description: error.message,
          variant: "destructive"
        });
        return;
      }

      if (data.user && data.session) {
        toast({
          title: "Connexion réussie",
          description: `Bienvenue dans ton espace ${role === 'teen' ? 'ado' : 'parent'} !`,
        });
        
        // Wait a bit for session to be properly set
        setTimeout(() => {
          navigate(roleInfo.redirectPath);
        }, 100);
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur inattendue s'est produite",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full animate-ping"></div>
      </div>

      <header className="relative z-10 border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/auth')}
              className="flex items-center space-x-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-pink-400" />
              <h1 className="text-xl font-bold text-white">QV TEEN BOX</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-pink-400/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                {roleInfo.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-white">
                {roleInfo.title}
              </CardTitle>
              <p className="text-gray-300">{roleInfo.description}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="ton@email.com"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-2xl"
                  disabled={isLoading}
                >
                  {isLoading ? 'Connexion...' : 'Se connecter 🚀'}
                </Button>

                <div className="text-center space-y-2">
                  <Button 
                    variant="link" 
                    className="text-pink-400 hover:text-pink-300"
                  >
                    Mot de passe oublié ?
                  </Button>
                  <div className="text-gray-400">
                    Pas encore de compte ?{' '}
                    <Button 
                      variant="link" 
                      onClick={() => navigate(`/teens/register?role=${role}`)}
                      className="text-pink-400 hover:text-pink-300 p-0"
                    >
                      S'inscrire
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeensLogin;
