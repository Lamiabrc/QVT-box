
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Shield, MessageCircle, Calendar, User, Users, Home, Star } from "lucide-react";

const Teens = () => {
  const navigate = useNavigate();
  
  const mainFeatures = [{
    icon: Home,
    title: "Espace Famille",
    subtitle: "Connectez-vous avec vos parents",
    description: "Partagez vos moments, communiquez et renforcez vos liens familiaux",
    gradient: "from-purple-400 to-pink-400",
    path: "/teens/family-space"
  }, {
    icon: User,
    title: "Mon Espace Personnel",
    subtitle: "Votre développement personnel",
    description: "Journal, suivi de votre évolution et outils d'accompagnement personnalisés",
    gradient: "from-blue-400 to-indigo-400",
    path: "/teens/personal-space"
  }, {
    icon: Shield,
    title: "Espace Confidentiel",
    subtitle: "Safe space 100% sécurisé",
    description: "Conseils sur les relations, le corps, les études dans un espace ultra-sécurisé",
    gradient: "from-emerald-400 to-teal-400",
    path: "/teens/intimacy-space"
  }, {
    icon: Heart,
    title: "Solutions Bien-être",
    subtitle: "Activités et exercices",
    description: "Outils et activités pour votre bien-être mental et émotionnel",
    gradient: "from-rose-400 to-pink-400",
    path: "/teens/fun-solutions"
  }, {
    icon: Star,
    title: "Boutique Bien-être",
    subtitle: "Personnalisez votre expérience",
    description: "Découvrez des produits et solutions adaptés à vos besoins",
    gradient: "from-amber-400 to-orange-400",
    path: "/teens/shop"
  }];

  const quickActions = [{
    icon: Heart,
    title: "Check-in Quotidien",
    description: "Comment vous sentez-vous aujourd'hui ?",
    gradient: "from-green-400 to-emerald-500",
    path: "/teens/check-in"
  }, {
    icon: MessageCircle,
    title: "Message Rapide",
    description: "Communiquez avec vos parents",
    gradient: "from-blue-400 to-cyan-500",
    path: "/teens/quick-alert"
  }, {
    icon: Calendar,
    title: "Mon Agenda",
    description: "Organisez vos activités familiales",
    gradient: "from-purple-400 to-indigo-500",
    path: "/teens/calendar"
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Kawaii floating elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-300 rounded-full transform rotate-12 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-300 rounded-full transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300 rounded-full transform rotate-45 animate-bounce"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-emerald-300 rounded-full transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-rose-300 rounded-full transform -rotate-12 animate-bounce"></div>
        {/* Cute stars */}
        <div className="absolute top-32 left-1/3 text-2xl animate-pulse">⭐</div>
        <div className="absolute bottom-40 right-1/3 text-3xl animate-bounce">💫</div>
        <div className="absolute top-72 right-1/4 text-2xl animate-pulse">✨</div>
      </div>

      {/* Kawaii header */}
      <header className="relative z-10 border-b border-pink-200 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center space-x-2 text-purple-700 hover:bg-pink-100 font-semibold rounded-full px-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-purple-800 tracking-wide font-serif">QVT Famille</h1>
                <p className="text-sm text-pink-600 font-medium">Espace Jeunes ✨</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section with kawaii design */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4 font-serif">
              Votre Espace <span className="text-pink-600"></span> 🌸
            </h1>
            <div className="absolute -top-4 -right-8 text-4xl animate-bounce">🏠</div>
            <div className="absolute -bottom-4 -left-6 text-4xl animate-pulse">👨‍👩‍👧‍👦</div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-3xl p-8 border-4 border-white shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6 font-serif">
              Un Espace <span className="text-blue-600">Sécurisé</span> & <span className="text-pink-600">Bienveillant</span> 💖
            </h2>
            <p className="text-xl text-purple-700 font-medium mb-6 leading-relaxed">
              Un environnement familial sécurisé où vous pouvez vous exprimer, communiquer avec vos parents, 
              et recevoir un accompagnement adapté à vos besoins avec une touche de douceur
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-base">
              <span className="bg-pink-200 text-pink-700 px-6 py-3 rounded-full border-2 border-pink-300 font-semibold shadow-lg">#EspaceFamilial 🏠</span>
              <span className="bg-blue-200 text-blue-700 px-6 py-3 rounded-full border-2 border-blue-300 font-semibold shadow-lg">#Accompagnement 🤗</span>
              <span className="bg-emerald-200 text-emerald-700 px-6 py-3 rounded-full border-2 border-emerald-300 font-semibold shadow-lg">#Bienveillance 💚</span>
              <span className="bg-purple-200 text-purple-700 px-6 py-3 rounded-full border-2 border-purple-300 font-semibold shadow-lg">#Sécurisé 🛡️</span>
            </div>
          </div>
        </div>

        {/* Main Features Grid with kawaii style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group bg-gradient-to-br ${feature.gradient} border-4 border-white hover:border-pink-200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer shadow-xl rounded-3xl text-white`} 
                onClick={() => navigate(feature.path)}
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white/40 transition-colors shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white text-center font-serif">
                    {feature.title}
                  </CardTitle>
                  <p className="text-sm text-white/95 font-medium text-center">{feature.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/95 font-medium mb-4 text-center">{feature.description}</p>
                  <Button className="w-full bg-white/25 hover:bg-white/35 text-white border-2 border-white/50 rounded-2xl font-semibold shadow-lg">
                    Découvrir ✨
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions with kawaii style */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-8 font-serif">Actions Rapides 🚀</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Card 
                  key={index} 
                  className={`group bg-gradient-to-br ${action.gradient} border-4 border-white hover:border-pink-200 transition-all duration-300 cursor-pointer shadow-xl rounded-3xl text-white hover:scale-105`} 
                  onClick={() => navigate(action.path)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white/40 transition-colors shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-serif">{action.title}</h3>
                    <p className="text-white/95 font-medium text-sm mb-4">{action.description}</p>
                    <Button className="w-full bg-white/25 hover:bg-white/35 text-white rounded-2xl font-semibold shadow-lg">
                      Accéder 💫
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Parent Access Section with lovely style */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group bg-gradient-to-br from-violet-400 to-purple-500 border-4 border-white hover:border-pink-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 shadow-xl rounded-3xl text-white" onClick={() => navigate('/teens/parental-access')}>
            <CardHeader className="text-center pb-4">
              <div className="w-28 h-28 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-3 transition-transform shadow-xl">
                <Shield className="w-14 h-14 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-bold font-serif">Accès Parents 👨‍👩‍👧‍👦</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-white/95 font-medium text-lg mb-6">
                Gérez la connexion avec vos parents de manière sécurisée et transparente
              </p>
              <Button className="w-full bg-white text-violet-600 hover:bg-pink-50 rounded-2xl font-bold text-lg py-3 shadow-lg">
                Gérer l'accès 🔐
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-emerald-400 to-teal-500 border-4 border-white hover:border-pink-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 shadow-xl rounded-3xl text-white" onClick={() => navigate('/teens/parental-access-dashboard')}>
            <CardHeader className="text-center pb-4">
              <div className="w-28 h-28 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-3 transition-transform shadow-xl">
                <Users className="w-14 h-14 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-bold font-serif">Dashboard Parents 📊</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-white/95 font-medium text-lg mb-6">
                Voir ce que vos parents peuvent accéder en toute transparence
              </p>
              <Button className="w-full bg-white text-emerald-600 hover:bg-pink-50 rounded-2xl font-bold text-lg py-3 shadow-lg">
                Voir Dashboard 👀
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Safety & Privacy Notice with kawaii touch */}
        <div className="relative">
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-3xl p-8 border-4 border-white text-center shadow-2xl">
            <div className="absolute -top-6 left-8 bg-emerald-400 text-white px-8 py-4 rounded-2xl font-bold shadow-xl border-4 border-white transform rotate-3">
              SÉCURISÉ 🛡️
            </div>
            <div className="absolute -top-6 right-8 bg-pink-400 text-white px-8 py-4 rounded-2xl font-bold shadow-xl border-4 border-white transform -rotate-3">
              FAMILIAL 💖
            </div>
            
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl mt-8">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-purple-800 mb-6 font-serif">Votre Espace Famille Ultra-Sécurisé 🌟</h3>
            <p className="text-purple-700 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
              QVT Famille respecte votre vie privée à 100% tout en permettant un accompagnement familial bienveillant. 
              Vos données restent entre vous et vos parents dans un environnement sécurisé et confidentiel avec plein d'amour ! 💕
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-emerald-200 text-emerald-700 px-6 py-3 rounded-full border-2 border-emerald-300 font-semibold shadow-lg">#Confidentialité 🔒</span>
              <span className="bg-blue-200 text-blue-700 px-6 py-3 rounded-full border-2 border-blue-300 font-semibold shadow-lg">#FamilleSeulement 👨‍👩‍👧‍👦</span>
              <span className="bg-pink-200 text-pink-700 px-6 py-3 rounded-full border-2 border-pink-300 font-semibold shadow-lg">#Bienveillance 💖</span>
              <span className="bg-purple-200 text-purple-700 px-6 py-3 rounded-full border-2 border-purple-300 font-semibold shadow-lg">#RGPD ⚖️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button for quick message with kawaii style */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 rounded-full shadow-2xl text-white border-4 border-white/80 animate-bounce" onClick={() => navigate('/teens/quick-alert')}>
          <MessageCircle className="w-8 h-8" />
        </Button>
        <div className="absolute -top-2 -right-2 text-2xl animate-pulse">💌</div>
      </div>
    </div>
  );
};

export default Teens;
