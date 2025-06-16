
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Shield, MessageCircle, Calendar, User, Users, Home, Sparkles, Star } from "lucide-react";

const Teens = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      icon: Home,
      title: "Espace Famille",
      subtitle: "Connectez-vous avec vos parents",
      description: "Partagez vos moments, communiquez et renforcez vos liens familiaux",
      gradient: "from-slate-600 to-slate-800",
      path: "/teens/family-space"
    },
    {
      icon: User,
      title: "Mon Espace Personnel",
      subtitle: "Votre développement personnel",
      description: "Journal, suivi de votre évolution et outils d'accompagnement personnalisés",
      gradient: "from-blue-600 to-blue-800",
      path: "/teens/personal-space"
    },
    {
      icon: Shield,
      title: "Espace Confidentiel",
      subtitle: "Safe space 100% sécurisé",
      description: "Conseils sur les relations, le corps, les études dans un espace ultra-sécurisé",
      gradient: "from-gray-600 to-gray-800",
      path: "/teens/intimacy-space"
    },
    {
      icon: Heart,
      title: "Solutions Bien-être",
      subtitle: "Activités et exercices",
      description: "Outils et activités pour votre bien-être mental et émotionnel",
      gradient: "from-teal-600 to-teal-800",
      path: "/teens/fun-solutions"
    },
    {
      icon: Sparkles,
      title: "Accompagnement Virtuel",
      subtitle: "Explorez, apprenez, grandissez",
      description: "Espaces virtuels pour vous connecter et grandir avec d'autres jeunes",
      gradient: "from-indigo-600 to-indigo-800",
      path: "/teens/metaverse"
    },
    {
      icon: Star,
      title: "Boutique Bien-être",
      subtitle: "Personnalisez votre expérience",
      description: "Découvrez des produits et solutions adaptés à vos besoins",
      gradient: "from-amber-600 to-amber-800",
      path: "/teens/shop"
    }
  ];

  const quickActions = [
    {
      icon: Heart,
      title: "Check-in Quotidien",
      description: "Comment vous sentez-vous aujourd'hui ?",
      gradient: "from-green-600 to-green-700",
      path: "/teens/check-in"
    },
    {
      icon: MessageCircle,
      title: "Message Rapide",
      description: "Communiquez avec vos parents",
      gradient: "from-blue-600 to-blue-700",
      path: "/teens/quick-alert"
    },
    {
      icon: Calendar,
      title: "Mon Agenda",
      description: "Organisez vos activités familiales",
      gradient: "from-purple-600 to-purple-700",
      path: "/teens/calendar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-16 h-16 bg-slate-600 rounded-xl transform rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gray-600 rounded-xl transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-600 rounded-xl transform rotate-45 animate-pulse"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-teal-600 rounded-xl transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-indigo-600 rounded-xl transform -rotate-12 animate-pulse"></div>
      </div>

      {/* Professional header */}
      <header className="relative z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-slate-700 hover:bg-slate-100 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 tracking-wide font-serif">QVT Famille</h1>
                <p className="text-sm text-slate-600 font-medium">Espace Jeunes</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section with mature design */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 font-serif">
              Votre Espace <span className="text-teal-700">Famille</span>
            </h1>
            <div className="absolute -top-2 -right-8 text-3xl">🏠</div>
            <div className="absolute -bottom-4 -left-6 text-3xl">👨‍👩‍👧‍👦</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-serif">
              Un Espace <span className="text-blue-700">Sécurisé</span> & <span className="text-teal-700">Bienveillant</span>
            </h2>
            <p className="text-xl text-slate-700 font-medium mb-6 leading-relaxed">
              Un environnement familial sécurisé où vous pouvez vous exprimer, communiquer avec vos parents, 
              et recevoir un accompagnement adapté à vos besoins
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-base">
              <span className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full border border-slate-300 font-semibold">#EspaceFamilial</span>
              <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full border border-blue-300 font-semibold">#Accompagnement</span>
              <span className="bg-teal-100 text-teal-700 px-6 py-3 rounded-full border border-teal-300 font-semibold">#Bienveillance</span>
              <span className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full border border-gray-300 font-semibold">#Sécurisé</span>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group bg-gradient-to-br ${feature.gradient} border border-white/50 hover:border-white/80 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer shadow-lg rounded-2xl text-white`}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white text-center font-serif">
                    {feature.title}
                  </CardTitle>
                  <p className="text-sm text-white/90 font-medium text-center">{feature.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 font-medium mb-4 text-center">{feature.description}</p>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/50 rounded-xl font-semibold">
                    Découvrir
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8 font-serif">Actions Rapides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Card 
                  key={index} 
                  className={`group bg-gradient-to-br ${action.gradient} border border-white/50 hover:border-white/80 transition-all duration-300 cursor-pointer shadow-lg rounded-2xl text-white`}
                  onClick={() => navigate(action.path)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-serif">{action.title}</h3>
                    <p className="text-white/90 font-medium text-sm mb-4">{action.description}</p>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-xl font-semibold">
                      Accéder
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Parent Access Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group bg-gradient-to-br from-indigo-600 to-purple-700 border border-white/50 hover:border-white/80 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 shadow-lg rounded-2xl text-white"
                onClick={() => navigate('/teens/parental-access')}>
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-3 transition-transform shadow-lg">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-bold font-serif">Accès Parents</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-white/90 font-medium text-lg mb-6">
                Gérez la connexion avec vos parents de manière sécurisée et transparente
              </p>
              <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100 rounded-xl font-bold text-lg py-3">
                Gérer l'accès
              </Button>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-slate-600 to-gray-700 border border-white/50 hover:border-white/80 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 shadow-lg rounded-2xl text-white"
                onClick={() => navigate('/teens/parental-access-dashboard')}>
            <CardHeader className="text-center pb-4">
              <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-3 transition-transform shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl text-white font-bold font-serif">Dashboard Parents</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-white/90 font-medium text-lg mb-6">
                Voir ce que vos parents peuvent accéder en toute transparence
              </p>
              <Button className="w-full bg-white text-slate-600 hover:bg-gray-100 rounded-xl font-bold text-lg py-3">
                Voir Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Safety & Privacy Notice */}
        <div className="relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center shadow-lg">
            <div className="absolute -top-4 left-8 bg-teal-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg border-2 border-white">
              SÉCURISÉ
            </div>
            <div className="absolute -top-4 right-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg border-2 border-white">
              FAMILIAL
            </div>
            
            <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-blue-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6 font-serif">Votre Espace Famille Ultra-Sécurisé</h3>
            <p className="text-slate-700 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
              QVT Famille respecte votre vie privée à 100% tout en permettant un accompagnement familial bienveillant. 
              Vos données restent entre vous et vos parents dans un environnement sécurisé et confidentiel.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-teal-100 text-teal-700 px-6 py-3 rounded-full border border-teal-300 font-semibold">#Confidentialité</span>
              <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full border border-blue-300 font-semibold">#FamilleSeulement</span>
              <span className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full border border-slate-300 font-semibold">#Bienveillance</span>
              <span className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full border border-gray-300 font-semibold">#RGPD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button for quick message */}
      <div className="fixed bottom-8 right-8 z-20">
        <Button 
          className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-full shadow-2xl text-white border-4 border-white/50"
          onClick={() => navigate('/teens/quick-alert')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Teens;
