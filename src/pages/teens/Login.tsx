
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Users, Heart, Shield, Brain, Star } from "lucide-react";
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
          icon: <Heart className="w-8 h-8 text-blue-300" />,
          description: 'Accède à ton espace bien-être personnalisé',
          redirectPath: '/teens',
          gradient: 'from-blue-500 to-purple-500'
        };
      case 'parent':
        return {
          title: 'Connexion Parent',
          icon: <Shield className="w-8 h-8 text-green-300" />,
          description: 'Gérez l\'espace famille et le suivi bien-être',
          redirectPath: '/teens/dashboard-parent',
          gradient: 'from-green-500 to-emerald-500'
        };
      default:
        return {
          title: 'Connexion Famille',
          icon: <Brain className="w-8 h-8 text-purple-300" />,
          description: 'Accédez à votre espace bien-être familial',
          redirectPath: '/teens',
          gradient: 'from-purple-500 to-pink-500'
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
          description: `Bienvenue dans votre espace ${role === 'teen' ? 'bien-être' : 'famille'} !`,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating wellness elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-18 h-18 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl transform -rotate-12 animate-pulse"></div>
      </div>

      <header className="relative z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/auth')}
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">QVT BOX FAMILLE</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-xl rounded-3xl">
            <CardHeader className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${roleInfo.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                {roleInfo.icon}
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                {roleInfo.title}
              </CardTitle>
              <p className="text-gray-600 font-semibold text-lg">{roleInfo.description}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-bold text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 font-medium rounded-xl py-3"
                    placeholder="votre@email.com"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-bold text-lg">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 font-medium rounded-xl py-3"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className={`w-full bg-gradient-to-r ${roleInfo.gradient} hover:shadow-lg text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Connexion...' : '🚀 Se connecter'}
                </Button>

                <div className="text-center space-y-3">
                  <Button 
                    variant="link" 
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    Mot de passe oublié ?
                  </Button>
                  <div className="text-gray-600 font-medium">
                    Pas encore de compte ?{' '}
                    <Button 
                      variant="link" 
                      onClick={() => navigate(`/teens/register?role=${role}`)}
                      className="text-blue-600 hover:text-blue-800 p-0 font-bold"
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
