import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Brain, Users, MessageCircle, Package, Sparkles, ChevronRight, ShoppingBag, CalendarDays, Home, Gamepad } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import Navigation from "@/components/Navigation";
import BoxShop from "@/components/shop/BoxShop";
import { familyBoxes } from "@/data/familyBoxes";

const TeensFamilySpace = () => {
  const navigate = useNavigate();
  const { user, session, loading } = useSecureAuth();
  const [userType, setUserType] = useState<"teen" | "parent" | null>(null);

  useEffect(() => {
    if (user) {
      setUserType("teen");
    }
  }, [user]);

  const handleOrderBox = (boxId: string) => {
    console.log("Ordering box:", boxId);
    navigate('/teens/shop');
  };

  const handleViewBoxDetails = (boxId: string) => {
    console.log("Viewing details for box:", boxId);
  };

  const features = [
    {
      icon: Brain,
      title: "Évaluation Intelligente",
      description: "Tests interactifs pour évaluer votre bien-être familial",
      gradient: "from-rose-400 to-pink-500",
      route: "/teens/ai-evaluation"
    },
    {
      icon: Shield,
      title: "Accès Parental Sécurisé",
      description: "Espace protégé pour l'accompagnement parental bienveillant",
      gradient: "from-purple-400 to-violet-500",
      route: "/teens/parental-access"
    },
    {
      icon: Heart,
      title: "Solutions Bien-être",
      description: "Activités et exercices personnalisés pour toute la famille",
      gradient: "from-emerald-400 to-teal-500",
      route: "/teens/personal-space"
    },
    {
      icon: MessageCircle,
      title: "Espace d'Expression",
      description: "Partagez vos émotions dans un environnement bienveillant",
      gradient: "from-blue-400 to-indigo-500",
      route: "/teens/personal-space"
    },
    {
      icon: Sparkles,
      title: "Accompagnement Familial",
      description: "Environnements virtuels apaisants pour toute la famille",
      gradient: "from-amber-400 to-orange-500",
      route: "/teens/metaverse"
    },
    {
      icon: ShoppingBag,
      title: "Solutions Bien-être",
      description: "Produits 100% Made in France pour votre famille",
      gradient: "from-indigo-400 to-purple-500",
      route: "/teens/shop"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || !userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 relative overflow-hidden">
        {/* Lovely floating elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 bg-rose-300 rounded-full animate-float transform rotate-12"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full animate-pulse transform -rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300 rounded-full animate-bounce transform rotate-45"></div>
          {/* Cute hearts and stars */}
          <div className="absolute top-32 left-1/3 text-3xl animate-pulse">💖</div>
          <div className="absolute bottom-40 right-1/3 text-4xl animate-bounce">🌟</div>
          <div className="absolute top-72 right-1/4 text-3xl animate-pulse">✨</div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-800 mb-4 animate-fade-in drop-shadow-lg font-serif">
              QVT<span className="text-rose-600">Famille</span><span className="text-pink-600">Box</span> 💝
            </h1>
            <p className="text-xl text-purple-700 font-medium max-w-2xl mx-auto animate-fade-in leading-relaxed">
              Votre bien-être familial, notre priorité. Une application élégante et bienveillante 
              pour prendre soin de toute votre famille avec amour 💕
            </p>
            
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <Badge className="bg-rose-200 text-rose-700 text-sm px-4 py-2 font-medium border-2 border-rose-300">#bien-être familial 🏠</Badge>
              <Badge className="bg-purple-200 text-purple-700 text-sm px-4 py-2 font-medium border-2 border-purple-300">#accompagnement 🤗</Badge>
              <Badge className="bg-pink-200 text-pink-700 text-sm px-4 py-2 font-medium border-2 border-pink-300">#sécurisé 🛡️</Badge>
              <Badge className="bg-indigo-200 text-indigo-700 text-sm px-4 py-2 font-medium border-2 border-indigo-300">#bienveillant 💖</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-rose-400 to-pink-500 backdrop-blur-sm border-4 border-white text-white shadow-2xl rounded-3xl"
              onClick={() => navigate('/teens/register?role=teen')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-28 h-28 bg-white/30 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Users className="h-14 w-14 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold font-serif">Je suis un Adolescent 👨‍🎓</CardTitle>
                <CardDescription className="text-white/95 font-medium text-lg">
                  Accédez à votre espace personnel sécurisé et bienveillant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-rose-600 hover:bg-pink-50 font-bold text-lg py-3 rounded-2xl shadow-lg">
                  Commencer mon accompagnement ✨
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-purple-400 to-violet-500 backdrop-blur-sm border-4 border-white text-white shadow-2xl rounded-3xl"
              onClick={() => navigate('/famille/register')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-28 h-28 bg-white/30 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Shield className="h-14 w-14 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold font-serif">Je suis un Parent 👨‍👩‍👧‍👦</CardTitle>
                <CardDescription className="text-white/95 font-medium text-lg">
                  Accompagnez votre enfant dans son bien-être de manière sécurisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-bold text-lg py-3 rounded-2xl shadow-lg">
                  Espace parental sécurisé 🔐
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Lovely floating elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-16 h-16 bg-rose-300 rounded-full transform rotate-12 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-300 rounded-full transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-300 rounded-full transform rotate-45 animate-bounce"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-indigo-300 rounded-full transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-emerald-300 rounded-full transform -rotate-12 animate-bounce"></div>
        {/* Lovely emojis */}
        <div className="absolute top-32 left-1/3 text-3xl animate-pulse">💕</div>
        <div className="absolute bottom-40 right-1/3 text-4xl animate-bounce">🌸</div>
        <div className="absolute top-72 right-1/4 text-3xl animate-pulse">🦋</div>
      </div>

      <Navigation 
        userType={userType} 
        onBack={() => navigate('/teens')}
      />
      
      {userType === "teen" ? (
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Welcome Hero Section with lovely design */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <h1 className="text-4xl font-bold text-purple-800 mb-4 font-serif">
                Bienvenue dans votre Espace Famille 💖
              </h1>
              <div className="absolute -top-2 -right-8 text-4xl animate-spin-slow">🏠</div>
            </div>
            <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-3xl p-6 border-4 border-white shadow-2xl">
              <p className="text-purple-700 font-medium text-lg">
                Connectez-vous avec votre famille dans un environnement sécurisé et bienveillant ✨
              </p>
            </div>
          </div>

          {/* Quick Alerts with lovely style */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-rose-400 to-pink-500 text-white border-4 border-white shadow-2xl rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl font-serif">Message de votre famille 💌</h3>
                    <p className="text-lg font-medium">Votre bien-être nous tient à cœur ! Continuez votre excellent travail 💪✨</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br ${feature.gradient} border-4 border-white rounded-3xl`}
                onClick={() => navigate(feature.route)}
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-4 shadow-xl">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-serif">{feature.title}</CardTitle>
                  <CardDescription className="text-white/95 font-medium">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
            
            {/* Additional cards with lovely style */}
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-emerald-400 to-teal-500 border-4 border-white rounded-3xl"
              onClick={() => navigate('/teens/fun-solutions')}
            >
              <CardHeader>
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-serif">Solutions Bien-être 🌟</CardTitle>
                <CardDescription className="text-white/95 font-medium">Activités bienveillantes pour renforcer votre équilibre</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-violet-400 to-purple-500 border-4 border-white rounded-3xl"
              onClick={() => navigate('/teens/family-space')}
            >
              <CardHeader>
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-serif">Espace Famille Partagé 👨‍👩‍👧‍👦</CardTitle>
                <CardDescription className="text-white/95 font-medium">Connectez-vous avec vos proches en toute sécurité</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-blue-400 to-indigo-500 border-4 border-white rounded-3xl"
              onClick={() => navigate('/teens/calendar')}
            >
              <CardHeader>
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <CalendarDays className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-serif">Agenda Familial 📅</CardTitle>
                <CardDescription className="text-white/95 font-medium">Planifiez vos moments familiaux importants</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-pink-400 to-rose-500 border-4 border-white rounded-3xl"
              onClick={() => navigate('/teens/parental-access-dashboard')}
            >
              <CardHeader>
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-serif">Dashboard Parental 📊</CardTitle>
                <CardDescription className="text-white/95 font-medium">Interface sécurisée pour l'accompagnement parental</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Metaverse Card with lovely style */}
            <Card className="bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 border-4 border-white shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2 text-white font-bold text-2xl font-serif">
                  <Sparkles className="h-8 w-8 text-white" />
                  🌟 Accompagnement Familial Virtuel 🦋
                </CardTitle>
                <CardDescription className="text-center text-white/95 font-medium text-lg">
                  Explorez des environnements virtuels apaisants conçus pour le bien-être familial
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg py-3 px-8 rounded-2xl shadow-lg"
                  onClick={() => navigate('/teens/metaverse')}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Explorer l'accompagnement virtuel ✨
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 border-4 border-white shadow-2xl rounded-3xl p-4">
                <BoxShop
                  universe="famille"
                  recommendations={familyBoxes}
                  userRole="Membre de la famille"
                  onOrderBox={handleOrderBox}
                  onViewBoxDetails={handleViewBoxDetails}
                />
            </Card>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-purple-800 mb-4 font-serif">Tableau de Bord Parental 👨‍👩‍👧‍👦</h2>
            <p className="text-purple-600">Suivez le bien-être de votre enfant et accompagnez-le dans son développement avec amour 💖</p>
          </div>

          <div className="mb-8">
            <Card className="bg-gradient-to-r from-rose-400 to-pink-500 text-white border-4 border-white shadow-xl rounded-3xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-serif">Votre Check-in Quotidien 💌</h3>
                    <p className="opacity-90">Envoyez un message de soutien à votre ado</p>
                  </div>
                  <Button 
                    className="bg-white text-rose-600 hover:bg-pink-50 font-bold rounded-2xl shadow-lg"
                    onClick={() => navigate('/teens/check-in')}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Faire mon check-in 💕
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-4 border-white shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <Heart className="h-5 w-5" />
                  État Général 💚
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">Bon ✨</div>
                <p className="text-sm opacity-90">Dernière évaluation: Il y a 2 jours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-400 to-violet-500 text-white border-4 border-white shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <Brain className="h-5 w-5" />
                  Activités 🧠
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">12 🌟</div>
                <p className="text-sm opacity-90">Exercices complétés cette semaine</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-4 border-white shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <MessageCircle className="h-5 w-5" />
                  Communication 💬
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">3 💌</div>
                <p className="text-sm opacity-90">Messages non lus</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-4 border-purple-200 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="font-serif text-purple-800">Notifications & Alertes 🔔</CardTitle>
                <CardDescription>Restez informé des changements importants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-yellow-100 rounded-2xl border-2 border-yellow-200">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-yellow-800">Niveau d'anxiété légèrement élevé 😌</p>
                    <p className="text-sm text-yellow-600">Détecté il y a 1 heure</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-100 rounded-2xl border-2 border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-green-800">Exercice de relaxation terminé ✨</p>
                    <p className="text-sm text-green-600">Il y a 3 heures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-pink-200 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="font-serif text-purple-800">Actions Recommandées 💡</CardTitle>
                <CardDescription>Suggestions pour accompagner votre enfant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-2 border-pink-200 hover:bg-pink-50 rounded-2xl">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Envoyer un message d'encouragement 💌
                </Button>
                <Button variant="outline" className="w-full justify-start border-2 border-purple-200 hover:bg-purple-50 rounded-2xl">
                  <Package className="mr-2 h-4 w-4" />
                  Commander une box anti-stress 📦
                </Button>
                <Button variant="outline" className="w-full justify-start border-2 border-indigo-200 hover:bg-indigo-50 rounded-2xl">
                  <Gamepad className="mr-2 h-4 w-4" />
                  Proposer une activité ensemble 🎮
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeensFamilySpace;
