
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Users, Heart, Shield, UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TeensRegister = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    acceptTerms: false,
    parentalConsent: false
  });

  const getRoleInfo = () => {
    switch (role) {
      case 'teen':
        return {
          title: 'Inscription Ado',
          icon: <Heart className="w-8 h-8 text-pink-400" />,
          description: 'Crée ton espace perso sécurisé',
          redirectPath: '/teens'
        };
      case 'parent':
        return {
          title: 'Inscription Parent',
          icon: <Shield className="w-8 h-8 text-purple-400" />,
          description: 'Créez votre espace famille',
          redirectPath: '/teens/dashboard-parent'
        };
      default:
        return {
          title: 'Inscription Famille',
          icon: <Users className="w-8 h-8 text-pink-400" />,
          description: 'Rejoignez l\'espace familial',
          redirectPath: '/teens'
        };
    }
  };

  const roleInfo = getRoleInfo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.acceptTerms) {
      toast({
        title: "Erreur",
        description: "Vous devez accepter les conditions d'utilisation.",
        variant: "destructive"
      });
      return;
    }

    if (role === 'teen' && !formData.parentalConsent) {
      toast({
        title: "Erreur",
        description: "Le consentement parental est requis pour les adolescents.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Inscription réussie",
      description: `Bienvenue dans ton espace ${role === 'teen' ? 'ado' : 'parent'} !`,
    });
    
    navigate(roleInfo.redirectPath);
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
                <UserPlus className="w-8 h-8 text-pink-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-white">
                {roleInfo.title}
              </CardTitle>
              <p className="text-gray-300">{roleInfo.description}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">Prénom</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Prénom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">Nom</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>

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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">Confirmer le mot de passe</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked as boolean})}
                      className="border-white/20"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-300">
                      J'accepte les conditions d'utilisation et la politique de confidentialité
                    </label>
                  </div>

                  {role === 'teen' && (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="parental"
                        checked={formData.parentalConsent}
                        onCheckedChange={(checked) => setFormData({...formData, parentalConsent: checked as boolean})}
                        className="border-white/20"
                      />
                      <label htmlFor="parental" className="text-sm text-gray-300">
                        J'ai l'autorisation de mes parents (requis pour les mineurs)
                      </label>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-2xl">
                  S'inscrire 🚀
                </Button>

                <div className="text-center">
                  <div className="text-gray-400">
                    Déjà un compte ?{' '}
                    <Button 
                      variant="link" 
                      onClick={() => navigate(`/teens/login?role=${role}`)}
                      className="text-pink-400 hover:text-pink-300 p-0"
                    >
                      Se connecter
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

export default TeensRegister;
