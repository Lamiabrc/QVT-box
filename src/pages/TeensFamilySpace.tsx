import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Brain, Gamepad2, MessageCircle, Package, Sparkles, ChevronRight, Users, ShoppingBag, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import Navigation from "@/components/Navigation";
import BoxCatalog from "@/components/BoxCatalog";

const TeensFamilySpace = () => {
  const navigate = useNavigate();
  const { user, session, loading } = useSecureAuth();
  const [userType, setUserType] = useState<"teen" | "parent" | null>(null);

  useEffect(() => {
    // For now, default to teen type when user exists
    if (user) {
      setUserType("teen");
    }
  }, [user]);

  const features = [
    {
      icon: Brain,
      title: "Évaluation IA",
      description: "Tests interactifs et ludiques pour évaluer ton bien-être mental",
      color: "bg-purple-100 text-purple-600",
      route: "/teens/ai-evaluation"
    },
    {
      icon: Shield,
      title: "Accès Parental",
      description: "Espace sécurisé pour que tes parents puissent t'accompagner",
      color: "bg-blue-100 text-blue-600",
      route: "/teens/parental-access"
    },
    {
      icon: Gamepad2,
      title: "Solutions Fun",
      description: "Activités ludiques et exercices de relaxation personnalisés",
      color: "bg-green-100 text-green-600",
      route: "/teens/personal-space"
    },
    {
      icon: MessageCircle,
      title: "Espace d'Expression",
      description: "Partage tes émotions dans un environnement bienveillant",
      color: "bg-orange-100 text-orange-600",
      route: "/teens/personal-space"
    },
    {
      icon: Sparkles,
      title: "Métaverse",
      description: "Explore des environnements virtuels apaisants avec ta famille",
      color: "bg-pink-100 text-pink-600",
      route: "/teens/metaverse"
    },
    {
      icon: ShoppingBag,
      title: "Boutique",
      description: "Produits 100% Made in France pour ton bien-être",
      color: "bg-emerald-100 text-emerald-600",
      route: "/teens/shop"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!user || !userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
              QVTeens<span className="text-yellow-300">Box</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
              Ta santé mentale, notre priorité. Une app fun et interactive pour prendre soin de toi avec l'aide de tes parents.
            </p>
            
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <Badge className="bg-white/20 text-white text-sm px-3 py-1">#teenmentalhealth</Badge>
              <Badge className="bg-white/20 text-white text-sm px-3 py-1">#safespace</Badge>
              <Badge className="bg-white/20 text-white text-sm px-3 py-1">#interactive</Badge>
              <Badge className="bg-white/20 text-white text-sm px-3 py-1">#ai</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-white/10 backdrop-blur-sm border-white/20 text-white"
              onClick={() => navigate('/auth')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <Gamepad2 className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Je suis un Ado</CardTitle>
                <CardDescription className="text-white/80">
                  Accède à ton espace personnel fun et sécurisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-yellow-400 text-purple-600 hover:bg-yellow-300 font-semibold">
                  Commencer mon aventure
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="p-8 hover:scale-105 transition-transform cursor-pointer bg-white/10 backdrop-blur-sm border-white/20 text-white"
              onClick={() => navigate('/auth')}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Je suis un Parent</CardTitle>
                <CardDescription className="text-white/80">
                  Accompagne ton enfant dans son bien-être mental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-400 text-white hover:bg-blue-300 font-semibold">
                  Espace parental
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation 
        userType={userType} 
        onBack={() => navigate('/teens')}
      />
      
      {userType === "teen" ? (
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Bienvenue dans ton Espace Famille ! 👨‍👩‍👧‍👦
            </h1>
            <p className="text-gray-600">
              Connecte-toi avec ta famille dans un environnement sécurisé
            </p>
          </div>

          {/* Quick Alerts */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6" />
                  <div>
                    <h3 className="font-bold">Message de Papa</h3>
                    <p className="text-sm">Tu fais du super boulot ! Continue comme ça 💪</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(feature.route)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
            
            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate('/teens/fun-solutions')}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center mb-3">
                  <Gamepad2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Solutions Fun</CardTitle>
                <CardDescription>Activités ludiques pour booster ton bien-être</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate('/teens/family-space')}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Espace Famille</CardTitle>
                <CardDescription>Connecte-toi avec tes parents et tes frères/sœurs</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate('/teens/calendar')}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center mb-3">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Agenda Famille</CardTitle>
                <CardDescription>Anniversaires, fêtes et activités en famille</CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate('/teens/parental-access-dashboard')}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Dashboard Parental</CardTitle>
                <CardDescription>Espace sécurisé pour l'accompagnement parental</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Metaverse Card */}
            <Card className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-2 border-purple-300">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                  🌌 Métaverse Famille ✨
                </CardTitle>
                <CardDescription className="text-center text-gray-700">
                  Explore des mondes virtuels apaisants avec ta famille
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
                  onClick={() => navigate('/teens/metaverse')}
                >
                  🚀 Explorer le Métaverse
                </Button>
              </CardContent>
            </Card>
            
            <BoxCatalog />
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
