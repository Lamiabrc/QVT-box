
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Brain, Gamepad2, MessageCircle, Package, Sparkles, User, ChevronRight, Users, ShoppingBag, LogOut, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DashboardCard from "@/components/DashboardCard";
import MetaverseCard from "@/components/MetaverseCard";
import BoxCatalog from "@/components/BoxCatalog";
import TeenCharacters from "@/components/TeenCharacters";
import QuickAlerts from "@/components/QuickAlerts";
import WelcomeHero from "@/components/WelcomeHero";

const TeensFamilySpace = () => {
  const navigate = useNavigate();
  const { user, profile, loading, signOut } = useAuth();
  const [userType, setUserType] = useState<"teen" | "parent" | null>(null);

  useEffect(() => {
    if (profile) {
      setUserType(profile.user_type);
    }
  }, [profile]);

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
        user={profile}
      />
      
      {userType === "teen" ? (
        <div className="container mx-auto px-4 py-8">
          <WelcomeHero />

          <div className="mb-12">
            <QuickAlerts />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <DashboardCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                colorClass={feature.color}
                route={feature.route}
              />
            ))}
            
            <DashboardCard 
              icon={Users}
              title="Espace Famille"
              description="Connecte-toi avec tes parents et tes frères/sœurs"
              colorClass="bg-emerald-100 text-emerald-600"
              route="/teens/family-space"
            />

            <DashboardCard 
              icon={CalendarDays}
              title="Agenda Famille"
              description="Anniversaires, fêtes et activités en famille"
              colorClass="bg-yellow-100 text-yellow-600"
              route="/teens/calendar"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <MetaverseCard />
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
