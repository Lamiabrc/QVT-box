
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Building2, UserCheck, Settings } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EntrepriseLogin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const getRoleInfo = () => {
    switch (role) {
      case 'employee':
        return {
          title: 'Connexion Salarié',
          icon: <UserCheck className="w-8 h-8 text-blue-400" />,
          description: 'Accédez à votre espace salarié QVT',
          redirectPath: '/entreprise/dashboard'
        };
      case 'qvt-manager':
        return {
          title: 'Connexion Responsable QVT',
          icon: <Settings className="w-8 h-8 text-indigo-400" />,
          description: 'Gérez votre équipe et les budgets QVT',
          redirectPath: '/entreprise/admin-dashboard'
        };
      default:
        return {
          title: 'Connexion Entreprise',
          icon: <Building2 className="w-8 h-8 text-blue-400" />,
          description: 'Accédez à votre espace QVT',
          redirectPath: '/entreprise'
        };
    }
  };

  const roleInfo = getRoleInfo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login
    toast({
      title: "Connexion réussie",
      description: `Bienvenue dans votre espace ${role === 'employee' ? 'salarié' : 'responsable QVT'}`,
    });
    
    navigate(roleInfo.redirectPath);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header */}
      <header className="border-b border-white/20 bg-black/30 backdrop-blur-sm">
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
              <Building2 className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-bold text-white">QVT BOX</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border-2 border-white/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
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
                  <Label htmlFor="email" className="text-white">Email professionnel</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="votre@entreprise.com"
                    required
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
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl">
                  Se connecter
                </Button>

                <div className="text-center space-y-2">
                  <Button 
                    variant="link" 
                    onClick={() => navigate('/entreprise/forgot-password')}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Mot de passe oublié ?
                  </Button>
                  <div className="text-gray-400">
                    Pas encore de compte ?{' '}
                    <Button 
                      variant="link" 
                      onClick={() => navigate('/entreprise/register')}
                      className="text-blue-400 hover:text-blue-300 p-0"
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

export default EntrepriseLogin;
