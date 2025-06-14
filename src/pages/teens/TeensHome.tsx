
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Heart, Shield, ArrowLeft, LogIn, UserPlus, Brain, Palette, Star, Sparkles, Target, Zap } from "lucide-react";

const TeensHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating elements inspired by mental wellness */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl transform rotate-12 animate-pulse"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-bounce"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm relative z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">QVT Box Famille</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              🌈 Bienvenue dans l'univers
            </h1>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              BIEN-ÊTRE FAMILIAL
            </div>
            <div className="absolute -top-4 -right-8 text-3xl animate-pulse">💙</div>
            <div className="absolute -bottom-4 -left-6 text-3xl animate-bounce">✨</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 max-w-4xl mx-auto shadow-lg">
            <p className="text-xl text-gray-700 font-medium mb-6">
              Solution phygitale innovante au service de la santé mentale et du bien-être des adolescents et de leur famille. 
              Une approche moderne, bienveillante et scientifiquement validée.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold shadow-sm">#SantéMentale</span>
              <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold shadow-sm">#BienÊtre</span>
              <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold shadow-sm">#Famille</span>
              <span className="bg-pink-100 text-pink-800 px-6 py-3 rounded-full font-semibold shadow-sm">#Innovation</span>
            </div>
          </div>
        </div>

        {/* Options principales */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Simulateur gratuit */}
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200"
                onClick={() => navigate('/simulator/famille')}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 font-bold">Évaluation Bien-être</CardTitle>
              <div className="text-sm bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">✨ GRATUIT ✨</div>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-700 font-medium text-lg mb-6">
                Outils IA d'évaluation du bien-être familial. Aucune inscription requise.
              </p>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg py-3 rounded-xl shadow-lg">
                🚀 Commencer l'évaluation
              </Button>
            </CardContent>
          </Card>

          {/* Connexion/Inscription */}
          <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 font-bold">Accès complet</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 space-y-4">
              <p className="text-gray-700 font-medium text-lg mb-6">
                Dashboard famille, box mensuelles, ressources spécialisées et suivi personnalisé.
              </p>
              <Button 
                onClick={() => navigate('/auth/login?universe=famille')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg py-3 rounded-xl shadow-lg mb-3"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Se connecter
              </Button>
              <Button 
                onClick={() => navigate('/auth/register?universe=famille')}
                className="w-full bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50 font-bold text-lg py-3 rounded-xl shadow-lg"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Créer un compte famille
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Types de profils */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">🌟 Qui peut bénéficier de QVT Box Famille ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4">🎯 Adolescents (13-18 ans)</h3>
              <p className="text-gray-700 font-medium">Outils d'évaluation du bien-être, ressources psychoéducatives, espace d'expression sécurisé</p>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4">🛡️ Parents</h3>
              <p className="text-gray-700 font-medium">Dashboard de suivi, ressources spécialisées, prévention des risques psychosociaux</p>
            </Card>
          </div>
        </div>

        {/* Avantages */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">💡 Pourquoi choisir QVT Box Famille ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4">🧠 IA & Science</h3>
              <p className="text-gray-700 font-medium">Outils d'évaluation basés sur l'intelligence artificielle et validés scientifiquement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4">💚 Bien-être global</h3>
              <p className="text-gray-700 font-medium">Approche holistique du bien-être mental et de la santé familiale</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4">⚡ Solution phygitale</h3>
              <p className="text-gray-700 font-medium">Combinaison unique d'outils numériques et de box physiques mensuelles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button 
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full shadow-2xl text-white border-4 border-white/20"
          onClick={() => navigate('/simulator/famille')}
        >
          <Sparkles className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default TeensHome;
