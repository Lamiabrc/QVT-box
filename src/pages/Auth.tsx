
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Users, ArrowLeft, Zap, Target, UserPlus } from "lucide-react";
import FloatingBubbles from "@/components/bubble/FloatingBubbles";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <FloatingBubbles />
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-yellow-500 rounded-full animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h1 className="text-2xl font-black text-white">QVT BOX</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mb-6">
            CONNEXION
          </h1>
          <p className="text-xl text-white mb-8">
            Accédez à votre espace personnalisé
          </p>
        </div>

        {/* Quick Access Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Entreprise */}
          <Card className="group bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Espace Entreprise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl"
                  onClick={() => navigate('/entreprise/simulator')}
                >
                  🎯 Simulateur QVT (Gratuit)
                </Button>
                <Button 
                  className="w-full bg-blue-600/80 hover:bg-blue-700/80 text-white py-3 text-lg rounded-xl"
                  onClick={() => navigate('/auth/register')}
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  S'inscrire
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-3 text-lg rounded-xl"
                  onClick={() => navigate('/entreprise/login')}
                >
                  Se connecter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Famille */}
          <Card className="group bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Espace Famille
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg rounded-xl"
                  onClick={() => navigate('/famille/simulator')}
                >
                  🏠 Simulateur Famille (Gratuit)
                </Button>
                 <Button 
                  className="w-full bg-pink-600/80 hover:bg-pink-700/80 text-white py-3 text-lg rounded-xl"
                  onClick={() => navigate('/auth/register')}
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  S'inscrire
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white py-3 text-lg rounded-xl"
                  onClick={() => navigate('/teens/login')}
                >
                  Se connecter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick info */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Target className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Testez nos simulateurs sans inscription</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
