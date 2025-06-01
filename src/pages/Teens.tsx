import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, Gift, Heart, Shield, MessageCircle, Calendar, Star, User, Users } from "lucide-react";

const Teens = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🏠",
      title: "Espace Famille",
      subtitle: "Connecte-toi avec tes parents",
      description: "Partage tes moments, envoie des signaux et renforce vos liens",
      color: "from-blue-500 to-cyan-500",
      path: "/teens/family-space"
    },
    {
      icon: "🌸",
      title: "Mon Espace Personnel",
      subtitle: "Ton univers privé",
      description: "Journal, customisation et suivi de ton évolution perso",
      color: "from-pink-500 to-purple-500",
      path: "/teens/personal-space"
    },
    {
      icon: "🔒",
      title: "Espace Intimité",
      subtitle: "Safe space 100% confidentiel",
      description: "Conseils ados, corps, relations, études dans un espace sécurisé",
      color: "from-purple-500 to-indigo-500",
      path: "/teens/intimacy-space"
    },
    {
      icon: "🌌",
      title: "Métaverse",
      subtitle: "Explore, joue, apprends",
      description: "Espaces virtuels pour te connecter et grandir avec d'autres ados",
      color: "from-cyan-500 to-blue-500",
      path: "/teens/metaverse"
    },
    {
      icon: "🛍️",
      title: "Boutique",
      subtitle: "Personnalise ton expérience",
      description: "Dépense tes points bien-être pour des récompenses cool",
      color: "from-yellow-500 to-orange-500",
      path: "/teens/shop"
    },
    {
      icon: "📅",
      title: "Mon Calendrier",
      subtitle: "Organise tes activités",
      description: "Check-ins, ateliers, événements et rappels bien-être",
      color: "from-green-500 to-emerald-500",
      path: "/teens/calendar"
    }
  ];

  const quickActions = [
    {
      icon: "💚",
      title: "Check-in Quotidien",
      description: "Comment tu te sens aujourd'hui ?",
      color: "from-green-500 to-emerald-500",
      path: "/teens/check-in"
    },
    {
      icon: "🚨",
      title: "Alerte Rapide",
      description: "Signale où tu es à tes parents",
      color: "from-red-500 to-pink-500",
      path: "/teens/quick-alert"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Connexion Parents",
      description: "Gérer l'accès de tes parents",
      color: "from-blue-500 to-indigo-500",
      path: "/teens/parental-access"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-orange-500 rounded-full animate-pulse"></div>
      </div>

      {/* Header with street art style */}
      <header className="relative z-10 border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/50">
                  <Heart className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white tracking-wide">QVTeen</h1>
                <p className="text-sm text-cyan-300 font-semibold">Box</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section with street art vibe */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 mb-4 transform rotate-1">
              YO!
            </h1>
            <div className="absolute -top-2 -right-8 text-4xl animate-spin-slow">⚡</div>
            <div className="absolute -bottom-4 -left-6 text-3xl animate-bounce">🔥</div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              TON ESPACE <span className="text-pink-400">BIEN-ÊTRE</span> & <span className="text-cyan-400">EXPRESSION</span>
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              Un espace 100% safe où tu peux être toi-même, partager avec tes parents, 
              et recevoir du soutien quand tu en as besoin 💪
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full border border-pink-400/30">#SafeSpace</span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-400/30">#MentalHealth</span>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-400/30">#TeenPower</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-to-br ${feature.color}/10 border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
              onClick={() => navigate(feature.path)}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold text-white">
                  {feature.title}
                </CardTitle>
                <p className="text-sm text-gray-300">{feature.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0 rounded-2xl">
                  Explorer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">⚡ Actions Rapides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className={`group bg-gradient-to-br ${action.color}/10 border-2 border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer`}
                onClick={() => navigate(action.path)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{action.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{action.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-2xl">
                    Go !
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="group bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
                onClick={() => navigate('/teens/personal-space')}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-purple-500/30">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl text-white font-bold">🦄 MON ESPACE</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-300 text-sm mb-4">
                Ton profil, tes achievements, ta personnalité et tes customisations !
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-2xl font-bold">
                EXPLORER 🎨
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-yellow-500/10 to-orange-600/10 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/20"
                onClick={() => navigate('/recommandations')}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-yellow-500/30">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl text-white font-bold">🎁 BOX & REWARDS</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-300 text-sm mb-4">
                Ta box mensuelle personnalisée + récompenses virtuelles à débloquer !
              </p>
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-2xl font-bold">
                DÉCOUVRIR 🔓
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/20"
                onClick={() => navigate('/historique')}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-green-500/30">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl text-white font-bold">📊 MON ÉVOLUTION</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-300 text-sm mb-4">
                Suis tes progrès, tes check-ins et ton parcours bien-être.
              </p>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl font-bold">
                VOIR MES STATS 📈
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
                onClick={() => navigate('/teens/parental-access')}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl text-white font-bold">🔗 ACCÈS PARENTS</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-300 text-sm mb-4">
                Connecte tes parents de manière sécurisée et transparente.
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl font-bold">
                CONNECTER 🔐
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Safety & Privacy Notice with graffiti style */}
        <div className="relative">
          <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 text-center">
            <div className="absolute -top-4 left-8 bg-red-500 text-white px-4 py-2 rounded-2xl transform -rotate-3 font-bold shadow-lg">
              ULTRA SAFE
            </div>
            <div className="absolute -top-4 right-8 bg-green-500 text-white px-4 py-2 rounded-2xl transform rotate-2 font-bold shadow-lg">
              100% PRIVÉ
            </div>
            
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-black text-white mb-6">🔒 TON ESPACE ULTRA-SÉCURISÉ</h3>
            <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
              QVTeen Box respecte ta vie privée à 100%. Tes données restent entre toi et tes parents. 
              Pas de réseaux sociaux, pas d'inconnus, juste un espace family safe pour ton bien-être ! 🛡️
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-green-500/20 text-green-300 px-6 py-3 rounded-full border border-green-400/30 font-bold">#Privacy</span>
              <span className="bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full border border-blue-400/30 font-bold">#FamilyOnly</span>
              <span className="bg-purple-500/20 text-purple-300 px-6 py-3 rounded-full border border-purple-400/30 font-bold">#RGPD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button for quick alert */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button 
          className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full shadow-lg shadow-red-500/50 text-white animate-pulse"
          onClick={() => navigate('/teens/quick-alert')}
        >
          🚨
        </Button>
      </div>
    </div>
  );
};

export default Teens;
