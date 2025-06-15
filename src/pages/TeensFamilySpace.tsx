import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Brain, Gamepad2, MessageCircle, Package, Sparkles, ChevronRight, Users, ShoppingBag, CalendarDays, Palette } from "lucide-react";
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
    // You can navigate to a detailed view page here
  };

  const features = [
    {
      icon: Brain,
      title: "Évaluation IA Créative",
      description: "Tests interactifs et colorés pour évaluer ton bien-être mental",
      gradient: "from-purple-400 to-pink-500",
      route: "/teens/ai-evaluation"
    },
    {
      icon: Shield,
      title: "Accès Parental Sécurisé",
      description: "Espace coloré et sécurisé pour que tes parents t'accompagnent",
      gradient: "from-blue-400 to-cyan-500",
      route: "/teens/parental-access"
    },
    {
      icon: Gamepad2,
      title: "Solutions Fun Créatives",
      description: "Activités ludiques et exercices de relaxation personnalisés et colorés",
      gradient: "from-green-400 to-emerald-500",
      route: "/teens/personal-space"
    },
    {
      icon: MessageCircle,
      title: "Espace d'Expression Coloré",
      description: "Partage tes émotions dans un environnement bienveillant et créatif",
      gradient: "from-orange-400 to-red-500",
      route: "/teens/personal-space"
    },
    {
      icon: Sparkles,
      title: "Métaverse Créatif",
      description: "Explore des environnements virtuels colorés et apaisants avec ta famille",
      gradient: "from-pink-400 to-purple-500",
      route: "/teens/metaverse"
    },
    {
      icon: ShoppingBag,
      title: "Boutique Créative",
      description: "Produits colorés 100% Made in France pour ton bien-être",
      gradient: "from-emerald-400 to-teal-500",
      route: "/teens/shop"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400">
        <div className="w-12 h-12 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-2xl animate-spin"></div>
      </div>
    );
  }

  if (!user || !userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 relative overflow-hidden">
        {/* Floating cubes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 rounded-2xl animate-bounce transform rotate-12"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-2xl animate-pulse transform -rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500 rounded-2xl animate-spin-slow transform rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-black text-white mb-4 animate-fade-in drop-shadow-lg">
              QVTeens<span className="text-yellow-300">Créative</span><span className="text-pink-300">Box</span>
            </h1>
            <p className="text-xl text-white font-semibold max-w-2xl mx-auto animate-fade-in">
              Ta santé mentale, notre priorité. Une app fun, interactive et colorée pour prendre soin de toi avec l'aide de tes parents.
            </p>
            
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <Badge className="bg-red-500/80 text-white text-sm px-4 py-2 font-bold">#teenmentalhealth</Badge>
              <Badge className="bg-yellow-500/80 text-white text-sm px-4 py-2 font-bold">#créativité</Badge>
              <Badge className="bg-green-500/80 text-white text-sm px-4 py-2 font-bold">#interactive</Badge>
              <Badge className="bg-blue-500/80 text-white text-sm px-4 py-2 font-bold">#coloré</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-pink-500 to-purple-500 backdrop-blur-sm border-4 border-white/30 text-white shadow-2xl rounded-3xl"
              onClick={() => navigate('/teens/register?role=teen')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                  <Gamepad2 className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-3xl font-black">Je suis un Ado</CardTitle>
                <CardDescription className="text-white/90 font-semibold text-lg">
                  Accède à ton espace personnel créatif et sécurisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-black text-lg py-3 rounded-2xl">
                  Commencer mon aventure créative
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-blue-500 to-cyan-500 backdrop-blur-sm border-4 border-white/30 text-white shadow-2xl rounded-3xl"
              onClick={() => navigate('/famille/register')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-3xl font-black">Je suis un Parent</CardTitle>
                <CardDescription className="text-white/90 font-semibold text-lg">
                  Accompagne ton enfant dans son bien-être créatif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-black text-lg py-3 rounded-2xl">
                  Espace parental créatif
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 relative overflow-hidden">
      {/* Floating cubes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-2xl transform rotate-12 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400 rounded-2xl transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-500 rounded-2xl transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-60 left-1/2 w-14 h-14 bg-orange-500 rounded-2xl transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-500 rounded-2xl transform -rotate-12 animate-pulse"></div>
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
              <h1 className="text-4xl font-black bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Bienvenue dans ton Espace Famille Créatif ! 👨‍👩‍👧‍👦🎨
              </h1>
              <div className="absolute -top-2 -right-8 text-3xl animate-spin-slow">🎲</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border-4 border-white/30 shadow-2xl">
              <p className="text-white font-semibold text-lg">
                Connecte-toi avec ta famille dans un environnement sécurisé et coloré
              </p>
            </div>
          </div>

          {/* Quick Alerts */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-4 border-white/30 shadow-2xl rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Heart className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl">Message créatif de Papa</h3>
                    <p className="text-lg font-semibold">Tu fais du super boulot créatif ! Continue comme ça 💪🎨</p>
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
                  <CardTitle className="text-xl font-black text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-white/90 font-semibold">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
            
            {/* Additional colorful cards */}
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/fun-solutions')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-white">Solutions Fun Créatives</CardTitle>
                <CardDescription className="text-white/90 font-semibold">Activités ludiques colorées pour booster ton bien-être</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-emerald-400 to-teal-500 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/family-space')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-white">Espace Famille Coloré</CardTitle>
                <CardDescription className="text-white/90 font-semibold">Connecte-toi avec tes parents et tes frères/sœurs dans la couleur</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/calendar')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <CalendarDays className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-white">Agenda Famille Créatif</CardTitle>
                <CardDescription className="text-white/90 font-semibold">Anniversaires, fêtes et activités créatives en famille</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-400 to-indigo-500 border-4 border-white/50 rounded-3xl"
              onClick={() => navigate('/teens/parental-access-dashboard')}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-white">Dashboard Parental Créatif</CardTitle>
                <CardDescription className="text-white/90 font-semibold">Espace sécurisé et coloré pour l'accompagnement parental</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Metaverse Card */}
            <Card className="bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 border-4 border-white/50 shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2 text-white font-black text-2xl">
                  <Sparkles className="h-8 w-8 text-white" />
                  🌈 Métaverse Famille Créatif ✨
                </CardTitle>
                <CardDescription className="text-center text-white/90 font-semibold text-lg">
                  Explore des mondes virtuels colorés et apaisants avec ta famille
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="bg-white text-purple-600 hover:bg-gray-100 font-black text-lg py-3 px-8 rounded-2xl"
                  onClick={() => navigate('/teens/metaverse')}
                >
                  🚀 Explorer le Métaverse Créatif
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-4 border-white/30 shadow-2xl rounded-3xl p-4">
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
