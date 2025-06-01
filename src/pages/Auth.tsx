
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Users, Heart, ArrowLeft } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
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
              <Heart className="w-6 h-6 text-pink-400" />
              <h1 className="text-2xl font-black text-white">QVT BOX</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mb-8">
            CHOISIR TON UNIVERS
          </h1>
          <p className="text-2xl text-white mb-12">
            Connecte-toi à ton espace dédié pour une expérience personnalisée 🚀
          </p>
        </div>

        {/* Universe Selection */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* QVTBox Enterprise */}
          <Card className="group bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-4"
                onClick={() => navigate('/entreprise/login')}>
            <CardHeader className="text-center pb-6">
              <div className="w-24 h-24 bg-blue-500/20 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Building2 className="w-12 h-12 text-blue-400" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-4">
                QVT BOX 💼
              </CardTitle>
              <p className="text-lg text-gray-300">
                L'univers professionnel pour les entreprises et leurs équipes
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Qui peut accéder ?</h4>
                <div className="grid grid-cols-1 gap-3">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/entreprise/login?role=employee');
                    }}
                  >
                    👤 Salarié
                  </Button>
                  <Button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 text-lg rounded-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/entreprise/login?role=qvt-manager');
                    }}
                  >
                    🎯 Responsable QVT
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* QVTeenBox Family */}
          <Card className="group bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-4"
                onClick={() => navigate('/teens/login')}>
            <CardHeader className="text-center pb-6">
              <div className="w-24 h-24 bg-pink-500/20 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                <Users className="w-12 h-12 text-pink-400" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-4">
                QV TEEN BOX 👨‍👩‍👧‍👦
              </CardTitle>
              <p className="text-lg text-gray-300">
                L'univers familial pour les ados et leurs parents
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Qui peut accéder ?</h4>
                <div className="grid grid-cols-1 gap-3">
                  <Button 
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 text-lg rounded-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/teens/login?role=teen');
                    }}
                  >
                    🧑‍🎓 Adolescent
                  </Button>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg rounded-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/teens/login?role=parent');
                    }}
                  >
                    👨‍👩‍👧‍👦 Parent
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Comparison */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">QVT BOX Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li>📊 Dashboard RH avancé</li>
              <li>📝 Questionnaires QVT intelligents</li>
              <li>📦 Gestion des box bien-être</li>
              <li>🎯 Recommandations IA</li>
              <li>👥 Gestion d'équipes</li>
              <li>💰 Budget et allocation</li>
            </ul>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-pink-400 mb-6">QV TEEN BOX Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li>🏠 Espace famille connecté</li>
              <li>🛡️ Espace intimité sécurisé</li>
              <li>🎮 Métaverse interactif</li>
              <li>🛍️ Boutique personnalisée</li>
              <li>📅 Calendrier familial</li>
              <li>🚨 Alertes bien-être</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
