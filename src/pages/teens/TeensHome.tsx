
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Heart, Shield, ArrowLeft, LogIn, UserPlus, GamepadIcon, Palette, Star, Sparkles } from "lucide-react";

const TeensHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 relative overflow-hidden">
      {/* Floating cubes inspired by Rubik's cube */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-lg transform rotate-12 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400 rounded-lg transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-500 rounded-lg transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-orange-500 rounded-lg transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-500 rounded-lg transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-10 h-10 bg-pink-500 rounded-lg transform rotate-45 animate-spin-slow"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/20 backdrop-blur-sm relative z-10">
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
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-black text-white">QVT Famille</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
              🎨 Bienvenue dans l'univers
            </h1>
            <div className="text-5xl font-black bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              FAMILLE CRÉATIVE
            </div>
            <div className="absolute -top-4 -right-8 text-4xl animate-spin">🎲</div>
            <div className="absolute -bottom-4 -left-6 text-3xl animate-bounce">✨</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 max-w-4xl mx-auto shadow-2xl">
            <p className="text-xl text-white font-semibold mb-6">
              Accompagnement des adolescents et de leurs parents vers un meilleur bien-être familial. 
              Une approche colorée, ludique et sécurisée pour toute la famille.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-red-500/80 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transform rotate-1">#Créativité</span>
              <span className="bg-yellow-500/80 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transform -rotate-1">#Couleurs</span>
              <span className="bg-green-500/80 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transform rotate-2">#Famille</span>
              <span className="bg-blue-500/80 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transform -rotate-2">#Ludique</span>
            </div>
          </div>
        </div>

        {/* Options principales */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Simulateur gratuit */}
          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-to-br from-green-400 to-emerald-500 border-4 border-white/50"
                onClick={() => navigate('/simulator/famille')}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-white/20 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-black">Simulateur Famille</CardTitle>
              <div className="text-sm bg-yellow-400 text-black px-4 py-2 rounded-full font-black">✨ GRATUIT ✨</div>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-white font-semibold text-lg mb-6">
                Évaluez le bien-être familial en quelques minutes. Aucune inscription requise.
              </p>
              <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-black text-lg py-3 rounded-2xl shadow-lg">
                🚀 Tester maintenant
              </Button>
            </CardContent>
          </Card>

          {/* Connexion/Inscription */}
          <Card className="group hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white/50">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-white/20 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-black">Accès complet</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 space-y-4">
              <p className="text-white font-semibold text-lg mb-6">
                Accédez à l'espace personnalisé, suivi parental, activités ludiques et recommandations colorées.
              </p>
              <Button 
                onClick={() => navigate('/auth/login?universe=famille')}
                className="w-full bg-white text-purple-600 hover:bg-gray-100 font-black text-lg py-3 rounded-2xl shadow-lg mb-3"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Se connecter
              </Button>
              <Button 
                onClick={() => navigate('/auth/register?universe=famille')}
                className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-black text-lg py-3 rounded-2xl shadow-lg"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Créer un compte famille
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Types de profils */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-white text-center mb-8 drop-shadow-lg">🌈 Qui peut utiliser l'espace famille ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center p-8 bg-gradient-to-br from-blue-400 to-cyan-500 border-4 border-white/50 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <GamepadIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-white text-xl mb-4">🎮 Adolescents (13-18 ans)</h3>
              <p className="text-white font-semibold">Interface ultra-colorée, activités créatives, espace d'expression sécurisé</p>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-orange-400 to-red-500 border-4 border-white/50 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-white text-xl mb-4">🛡️ Parents</h3>
              <p className="text-white font-semibold">Dashboard coloré, suivi bienveillant, respect de l'intimité</p>
            </Card>
          </div>
        </div>

        {/* Avantages */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30 shadow-2xl">
          <h2 className="text-3xl font-black text-white text-center mb-8 drop-shadow-lg">🎨 Pourquoi choisir QVT Box Famille ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-white text-xl mb-4">💖 Approche créative</h3>
              <p className="text-white font-semibold">Accompagnement coloré et respectueux du développement adolescent</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform -rotate-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-white text-xl mb-4">🌈 Lien familial coloré</h3>
              <p className="text-white font-semibold">Outils ludiques pour améliorer la communication parent-ado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform rotate-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-white text-xl mb-4">🔒 Sécurité maximale</h3>
              <p className="text-white font-semibold">Consentement parental, données protégées, environnement safe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button 
          className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-2xl text-white animate-pulse border-4 border-white/50"
          onClick={() => navigate('/simulator/famille')}
        >
          <Sparkles className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default TeensHome;
