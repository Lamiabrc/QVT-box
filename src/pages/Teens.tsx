
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Shield, MessageCircle, Calendar, User, Users, Palette, Sparkles, Star } from "lucide-react";

const Teens = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      icon: "🏠",
      title: "Espace Famille",
      subtitle: "Connecte-toi avec tes parents",
      description: "Partage tes moments colorés, envoie des signaux et renforce vos liens",
      gradient: "from-blue-400 to-cyan-500",
      path: "/teens/family-space"
    },
    {
      icon: "🎨",
      title: "Mon Espace Personnel",
      subtitle: "Ton univers créatif",
      description: "Journal coloré, customisation, achievements et suivi de ton évolution",
      gradient: "from-pink-500 to-purple-500",
      path: "/teens/personal-space"
    },
    {
      icon: "🔒",
      title: "Espace Intimité",
      subtitle: "Safe space 100% confidentiel",
      description: "Conseils colorés, corps, relations, études dans un espace ultra-sécurisé",
      gradient: "from-purple-500 to-indigo-500",
      path: "/teens/intimacy-space"
    },
    {
      icon: "🎮",
      title: "Solutions Fun",
      subtitle: "Jeux et activités colorées",
      description: "Mini-jeux, challenges et activités créatives pour te détendre",
      gradient: "from-green-500 to-emerald-500",
      path: "/teens/fun-solutions"
    },
    {
      icon: "🌈",
      title: "Métaverse Coloré",
      subtitle: "Explore, joue, crée",
      description: "Espaces virtuels colorés pour te connecter et grandir avec d'autres ados",
      gradient: "from-cyan-500 to-blue-500",
      path: "/teens/metaverse"
    },
    {
      icon: "🛍️",
      title: "Boutique Créative",
      subtitle: "Personnalise ton expérience",
      description: "Dépense tes points créativité pour des récompenses colorées",
      gradient: "from-yellow-500 to-orange-500",
      path: "/teens/shop"
    }
  ];

  const quickActions = [
    {
      icon: "💚",
      title: "Check-in Quotidien",
      description: "Comment tu te sens aujourd'hui ?",
      gradient: "from-green-500 to-emerald-500",
      path: "/teens/check-in"
    },
    {
      icon: "🚨",
      title: "Alerte Rapide",
      description: "Signale où tu es à tes parents",
      gradient: "from-red-500 to-pink-500",
      path: "/teens/quick-alert"
    },
    {
      icon: "📅",
      title: "Mon Calendrier",
      description: "Organise tes activités colorées",
      gradient: "from-blue-500 to-indigo-500",
      path: "/teens/calendar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 relative overflow-hidden">
      {/* Floating cubes inspired by Rubik's cube */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-2xl transform rotate-12 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400 rounded-2xl transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-500 rounded-2xl transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-orange-500 rounded-2xl transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-500 rounded-2xl transform -rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-10 h-10 bg-pink-500 rounded-2xl transform rotate-45 animate-spin-slow"></div>
      </div>

      {/* Header with colorful design */}
      <header className="relative z-10 border-b border-white/30 bg-white/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-white hover:bg-white/20 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white tracking-wide">QVTeen</h1>
                <p className="text-sm text-yellow-300 font-bold">Créative Box</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section with creative vibe */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500 mb-4 transform rotate-1">
              CRÉATIVITÉ!
            </h1>
            <div className="absolute -top-2 -right-8 text-4xl animate-spin-slow">🎨</div>
            <div className="absolute -bottom-4 -left-6 text-3xl animate-bounce">🌈</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30 max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              TON ESPACE <span className="text-yellow-300">CRÉATIF</span> & <span className="text-pink-300">COLORÉ</span>
            </h2>
            <p className="text-xl text-white font-semibold mb-6">
              Un espace 100% safe où tu peux exprimer ta créativité, partager avec tes parents, 
              et recevoir du soutien dans un univers coloré et ludique 🎨
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-red-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#SafeSpace</span>
              <span className="bg-yellow-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#Créativité</span>
              <span className="bg-green-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#TeenPower</span>
              <span className="bg-blue-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#Couleurs</span>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-to-br ${feature.gradient} border-4 border-white/50 hover:border-white/80 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer shadow-2xl rounded-3xl`}
              onClick={() => navigate(feature.path)}
            >
              <CardHeader>
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <CardTitle className="text-xl font-black text-white">
                  {feature.title}
                </CardTitle>
                <p className="text-sm text-white/90 font-semibold">{feature.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-white font-semibold mb-4">{feature.description}</p>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-2xl font-bold">
                  Explorer 🚀
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white text-center mb-8 drop-shadow-lg">⚡ Actions Créatives Rapides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className={`group bg-gradient-to-br ${action.gradient} border-4 border-white/50 hover:border-white/80 transition-all duration-300 cursor-pointer shadow-2xl rounded-3xl`}
                onClick={() => navigate(action.path)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{action.icon}</div>
                  <h3 className="text-lg font-black text-white mb-2">{action.title}</h3>
                  <p className="text-white font-semibold text-sm mb-4">{action.description}</p>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-2xl font-bold">
                    Go ! 🎨
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parent Access Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group bg-gradient-to-br from-purple-500 to-indigo-600 border-4 border-white/50 hover:border-white/80 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 shadow-2xl rounded-3xl"
                onClick={() => navigate('/teens/parental-access')}>
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-white/20 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-black">🔗 ACCÈS PARENTS</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-white font-semibold text-lg mb-6">
                Gère la connexion avec tes parents de manière sécurisée et colorée
              </p>
              <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-2xl font-black text-lg py-3">
                GÉRER 🔐
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-blue-500 to-cyan-600 border-4 border-white/50 hover:border-white/80 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 shadow-2xl rounded-3xl"
                onClick={() => navigate('/teens/parental-access-dashboard')}>
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-white/20 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-black">👥 DASHBOARD PARENTS</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-white font-semibold text-lg mb-6">
                Voir ce que tes parents peuvent accéder (transparence totale et colorée)
              </p>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-2xl font-black text-lg py-3">
                VOIR DASHBOARD 👁️
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Safety & Privacy Notice with creative style */}
        <div className="relative">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30 text-center shadow-2xl">
            <div className="absolute -top-4 left-8 bg-red-500 text-white px-6 py-3 rounded-2xl transform -rotate-3 font-black shadow-lg border-2 border-white">
              ULTRA SAFE
            </div>
            <div className="absolute -top-4 right-8 bg-green-500 text-white px-6 py-3 rounded-2xl transform rotate-2 font-black shadow-lg border-2 border-white">
              100% CRÉATIF
            </div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl mx-auto mb-6 flex items-center justify-center animate-pulse shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white mb-6 drop-shadow-lg">🔒 TON ESPACE CRÉATIF ULTRA-SÉCURISÉ</h3>
            <p className="text-white font-semibold max-w-3xl mx-auto text-lg leading-relaxed">
              QVTeen Créative Box respecte ta vie privée à 100% tout en te permettant d'exprimer ta créativité. 
              Tes données restent entre toi et tes parents dans un environnement coloré et safe ! 🛡️🎨
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-green-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#Privacy</span>
              <span className="bg-blue-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#FamilyOnly</span>
              <span className="bg-purple-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#Créativité</span>
              <span className="bg-yellow-500/80 text-white px-6 py-3 rounded-full border-4 border-white/30 font-black">#RGPD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button for quick alert */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button 
          className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full shadow-2xl text-white animate-pulse border-4 border-white/50"
          onClick={() => navigate('/teens/quick-alert')}
        >
          🚨
        </Button>
      </div>
    </div>
  );
};

export default Teens;
