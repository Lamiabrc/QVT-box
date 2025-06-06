
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Users, Heart, Shield, Palette, Star } from "lucide-react";
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
          icon: <Heart className="w-8 h-8 text-pink-300" />,
          description: 'Accède à ton espace créatif sécurisé',
          redirectPath: '/teens',
          gradient: 'from-pink-500 to-purple-500'
        };
      case 'parent':
        return {
          title: 'Connexion Parent',
          icon: <Shield className="w-8 h-8 text-blue-300" />,
          description: 'Gérez l\'espace famille coloré',
          redirectPath: '/teens/dashboard-parent',
          gradient: 'from-blue-500 to-cyan-500'
        };
      default:
        return {
          title: 'Connexion Famille',
          icon: <Palette className="w-8 h-8 text-yellow-300" />,
          description: 'Accédez à l\'espace familial créatif',
          redirectPath: '/teens',
          gradient: 'from-red-500 to-yellow-500'
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
          description: `Bienvenue dans ton espace ${role === 'teen' ? 'créatif' : 'parent'} !`,
        });
        
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 relative overflow-hidden">
      {/* Floating cubes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 rounded-2xl animate-bounce transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-2xl animate-pulse transform -rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500 rounded-2xl animate-spin-slow transform rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-18 h-18 bg-purple-500 rounded-2xl animate-bounce transform -rotate-12"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-orange-500 rounded-2xl animate-pulse transform rotate-12"></div>
      </div>

      <header className="relative z-10 border-b border-white/30 bg-white/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/auth')}
              className="flex items-center space-x-2 text-white hover:bg-white/20 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-black text-white">QV FAMILLE BOX</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl rounded-3xl">
            <CardHeader className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${roleInfo.gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-6`}>
                {roleInfo.icon}
              </div>
              <CardTitle className="text-3xl font-black text-white mb-2">
                {roleInfo.title}
              </CardTitle>
              <p className="text-white font-semibold text-lg">{roleInfo.description}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-bold text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl py-3"
                    placeholder="ton@email.com"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-bold text-lg">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl py-3"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className={`w-full bg-gradient-to-r ${roleInfo.gradient} hover:shadow-2xl text-white font-black py-4 rounded-2xl text-lg transform hover:scale-105 transition-all`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Connexion...' : '🚀 Se connecter'}
                </Button>

                <div className="text-center space-y-3">
                  <Button 
                    variant="link" 
                    className="text-white hover:text-yellow-300 font-bold"
                  >
                    Mot de passe oublié ?
                  </Button>
                  <div className="text-white font-semibold">
                    Pas encore de compte ?{' '}
                    <Button 
                      variant="link" 
                      onClick={() => navigate(`/teens/register?role=${role}`)}
                      className="text-yellow-300 hover:text-yellow-100 p-0 font-black"
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
