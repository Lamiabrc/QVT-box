
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Users, Heart, Shield, UserPlus, Palette, Star, Sparkles } from "lucide-react";
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
    gender: '',
    parentConnection: '',
    acceptTerms: false,
    parentalConsent: false
  });

  const getRoleInfo = () => {
    switch (role) {
      case 'teen':
        return {
          title: 'Inscription Ado',
          icon: <Heart className="w-8 h-8 text-pink-300" />,
          description: 'Crée ton espace créatif sécurisé',
          redirectPath: '/teens',
          gradient: 'from-pink-500 to-purple-500'
        };
      case 'parent':
        return {
          title: 'Inscription Parent',
          icon: <Shield className="w-8 h-8 text-blue-300" />,
          description: 'Créez votre espace famille coloré',
          redirectPath: '/teens/dashboard-parent',
          gradient: 'from-blue-500 to-cyan-500'
        };
      default:
        return {
          title: 'Inscription Famille',
          icon: <Palette className="w-8 h-8 text-yellow-300" />,
          description: 'Rejoignez l\'espace familial créatif',
          redirectPath: '/teens',
          gradient: 'from-red-500 to-yellow-500'
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

    if (role === 'teen' && (!formData.gender || !formData.parentConnection)) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Inscription réussie",
      description: `Bienvenue dans ton espace ${role === 'teen' ? 'créatif' : 'parent'} !`,
    });
    
    navigate(roleInfo.redirectPath);
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl rounded-3xl">
            <CardHeader className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${roleInfo.gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-6`}>
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-black text-white mb-2">
                {roleInfo.title}
              </CardTitle>
              <p className="text-white font-semibold text-lg">{roleInfo.description}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white font-bold">Prénom</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl"
                      placeholder="Prénom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white font-bold">Nom</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl"
                      placeholder="Nom"
                      required
                    />
                  </div>
                </div>

                {role === 'teen' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-white font-bold">Genre</Label>
                      <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
                        <SelectTrigger className="bg-white/20 border-white/30 text-white rounded-2xl">
                          <SelectValue placeholder="Sélectionne ton genre" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="garcon">Garçon</SelectItem>
                          <SelectItem value="fille">Fille</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                          <SelectItem value="prefere_pas_dire">Je préfère ne pas dire</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentConnection" className="text-white font-bold">Connexion parentale</Label>
                      <Select onValueChange={(value) => setFormData({...formData, parentConnection: value})}>
                        <SelectTrigger className="bg-white/20 border-white/30 text-white rounded-2xl">
                          <SelectValue placeholder="Avec qui veux-tu te connecter ?" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="papa">Papa</SelectItem>
                          <SelectItem value="maman">Maman</SelectItem>
                          <SelectItem value="les_deux">Papa et Maman</SelectItem>
                          <SelectItem value="tuteur">Tuteur/Tutrice</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-bold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl"
                    placeholder="ton@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-bold">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white font-bold">Confirmer le mot de passe</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 font-semibold rounded-2xl"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked as boolean})}
                      className="border-white/30 bg-white/20"
                    />
                    <label htmlFor="terms" className="text-white font-semibold">
                      J'accepte les conditions d'utilisation et la politique de confidentialité
                    </label>
                  </div>

                  {role === 'teen' && (
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="parental"
                        checked={formData.parentalConsent}
                        onCheckedChange={(checked) => setFormData({...formData, parentalConsent: checked as boolean})}
                        className="border-white/30 bg-white/20"
                      />
                      <label htmlFor="parental" className="text-white font-semibold">
                        J'ai l'autorisation de mes parents (requis pour les mineurs)
                      </label>
                    </div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className={`w-full bg-gradient-to-r ${roleInfo.gradient} hover:shadow-2xl text-white font-black py-4 rounded-2xl text-lg transform hover:scale-105 transition-all`}
                >
                  🚀 S'inscrire
                </Button>

                <div className="text-center">
                  <div className="text-white font-semibold">
                    Déjà un compte ?{' '}
                    <Button 
                      variant="link" 
                      onClick={() => navigate(`/teens/login?role=${role}`)}
                      className="text-yellow-300 hover:text-yellow-100 p-0 font-black"
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
