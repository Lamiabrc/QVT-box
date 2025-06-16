
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Brain, Users, MessageCircle, Package, Sparkles, ChevronRight, ShoppingBag, CalendarDays, Home } from "lucide-react";
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
      gradient: "from-teal-600 to-blue-700",
      route: "/teens/ai-evaluation"
    },
    {
      icon: Shield,
      title: "Accès Parental Sécurisé",
      description: "Espace protégé pour l'accompagnement parental bienveillant",
      gradient: "from-blue-600 to-slate-700",
      route: "/teens/parental-access"
    },
    {
      icon: Heart,
      title: "Solutions Bien-être",
      description: "Activités et exercices personnalisés pour toute la famille",
      gradient: "from-slate-600 to-teal-700",
      route: "/teens/personal-space"
    },
    {
      icon: MessageCircle,
      title: "Espace d'Expression",
      description: "Partagez vos émotions dans un environnement bienveillant",
      gradient: "from-amber-600 to-orange-700",
      route: "/teens/personal-space"
    },
    {
      icon: Sparkles,
      title: "Accompagnement Familial",
      description: "Environnements virtuels apaisants pour toute la famille",
      gradient: "from-purple-600 to-indigo-700",
      route: "/teens/metaverse"
    },
    {
      icon: ShoppingBag,
      title: "Solutions Bien-être",
      description: "Produits 100% Made in France pour votre famille",
      gradient: "from-emerald-600 to-teal-700",
      route: "/teens/shop"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100">
        <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl animate-spin"></div>
      </div>
    );
  }

  if (!user || !userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-100 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 bg-teal-600 rounded-2xl animate-bounce transform rotate-12"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-600 rounded-2xl animate-pulse transform -rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-slate-600 rounded-2xl animate-spin-slow transform rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-4 animate-fade-in drop-shadow-lg">
              QVT<span className="text-teal-700">Famille</span><span className="text-blue-700">Box</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto animate-fade-in">
              Votre bien-être familial, notre priorité. Une application sécurisée et bienveillante 
              pour prendre soin de toute votre famille.
            </p>
            
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <Badge className="bg-teal-600/90 text-white text-sm px-4 py-2 font-medium">#bienetrefamilial</Badge>
              <Badge className="bg-blue-600/90 text-white text-sm px-4 py-2 font-medium">#accompagnement</Badge>
              <Badge className="bg-slate-600/90 text-white text-sm px-4 py-2 font-medium">#securise</Badge>
              <Badge className="bg-emerald-600/90 text-white text-sm px-4 py-2 font-medium">#bienveillant</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-teal-600 to-blue-700 backdrop-blur-sm border-4 border-white/30 text-white shadow-2xl rounded-3xl"
              onClick={() => navigate('/teens/register?role=teen')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Je suis un Adolescent</CardTitle>
                <CardDescription className="text-white/90 font-medium text-lg">
                  Accédez à votre espace personnel sécurisé et bienveillant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-teal-700 hover:bg-slate-100 font-bold text-lg py-3 rounded-2xl">
                  Commencer mon accompagnement
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-slate-600 to-blue-600 backdrop-blur-sm border-4 border-white/30 text-white shadow-2xl rounded-3xl"
              onClick={() => navigate('/famille/register')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Je suis un Parent</CardTitle>
                <CardDescription className="text-white/90 font-medium text-lg">
                  Accompagnez votre enfant dans son bien-être de manière sécurisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-slate-700 hover:bg-slate-100 font-bold text-lg py-3 rounded-2xl">
                  Espace parental sécurisé
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-100 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 bg-teal-600 rounded-2xl transform rotate-12 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-600 rounded-2xl transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-slate-600 rounded-2xl transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-emerald-600 rounded-2xl transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-600 rounded-2xl transform -rotate-12 animate-pulse"></div>
      </div>

      <Navigation 
        userType={userType} 
        onBack={() => navigate('/teens')}
      />
      
      {userType === "teen" ? (
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Welcome Hero Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Bienvenue dans votre Espace Famille 👨‍👩‍👧‍👦
              </h1>
              <div className="absolute -top-2 -right-8 text-3xl animate-spin-slow">🏠</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-4 border-slate-200 shadow-2xl">
              <p className="text-slate-700 font-medium text-lg">
                Connectez-vous avec votre famille dans un environnement sécurisé et bienveillant
              </p>
            </div>
          </div>

          {/* Quick Alerts */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-4 border-white/30 shadow-2xl rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">Message de votre famille</h3>
                    <p className="text-lg font-medium">Votre bien-être nous tient à cœur ! Continuez votre excellent travail 💪</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br ${feature.gradient} border-4 border-white/50 rounded-3xl`}
                onClick={() => navigate(feature.route)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-white/90 font-medium">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
            
            {/* Additional cards */}
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-cyan-600 to-blue-700 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/fun-solutions')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Solutions Bien-être</CardTitle>
                <CardDescription className="text-white/90 font-medium">Activités bienveillantes pour renforcer votre équilibre</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-emerald-600 to-teal-700 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/family-space')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Espace Famille Partagé</CardTitle>
                <CardDescription className="text-white/90 font-medium">Connectez-vous avec vos proches en toute sécurité</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-amber-600 to-orange-700 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/calendar')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <CalendarDays className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Agenda Familial</CardTitle>
                <CardDescription className="text-white/90 font-medium">Planifiez vos moments familiaux importants</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-600 to-purple-700 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/parental-access-dashboard')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Dashboard Parental</CardTitle>
                <CardDescription className="text-white/90 font-medium">Interface sécurisée pour l'accompagnement parental</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Metaverse Card */}
            <Card className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 border-4 border-white/50 shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2 text-white font-bold text-2xl">
                  <Sparkles className="h-8 w-8 text-white" />
                  🌟 Accompagnement Familial Virtuel ✨
                </CardTitle>
                <CardDescription className="text-center text-white/90 font-medium text-lg">
                  Explorez des environnements virtuels apaisants conçus pour le bien-être familial
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="bg-white text-purple-700 hover:bg-slate-100 font-bold text-lg py-3 px-8 rounded-2xl"
                  onClick={() => navigate('/teens/metaverse')}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Explorer l'accompagnement virtuel
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-4 border-slate-200 shadow-2xl rounded-3xl p-4">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tableau de Bord Parental</h2>
            <p className="text-gray-600">Suivez le bien-être de votre enfant et accompagnez-le dans son développement.</p>
          </div>

          <div className="mb-8">
            <Card className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Votre Check-in Quotidien</h3>
                    <p className="opacity-90">Envoyez un message de soutien à votre ado</p>
                  </div>
                  <Button 
                    className="bg-white text-purple-600 hover:bg-gray-100 font-bold"
                    onClick={() => navigate('/teens/check-in')}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Faire mon check-in
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  État Général
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">Bon</div>
                <p className="text-sm opacity-90">Dernière évaluation: Il y a 2 jours</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-400 to-pink-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Activités
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">12</div>
                <p className="text-sm opacity-90">Exercices complétés cette semaine</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">3</div>
                <p className="text-sm opacity-90">Messages non lus</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Notifications & Alertes</CardTitle>
                <CardDescription>Restez informé des changements importants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Niveau d'anxiété légèrement élevé</p>
                    <p className="text-sm text-gray-600">Détecté il y a 1 heure</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Exercice de relaxation terminé</p>
                    <p className="text-sm text-gray-600">Il y a 3 heures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions Recommandées</CardTitle>
                <CardDescription>Suggestions pour accompagner votre enfant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Envoyer un message d'encouragement
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Package className="mr-2 h-4 w-4" />
                  Commander une box anti-stress
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Proposer une activité ensemble
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
