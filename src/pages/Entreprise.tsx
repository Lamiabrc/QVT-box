
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BarChart3, FileText, Lightbulb, ArrowLeft, Users, TrendingUp, LogIn, UserCheck, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Entreprise = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check auth status
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleProtectedNavigation = (path) => {
    if (!user) {
      navigate('/entreprise/login');
      return;
    }
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                <Users className="w-4 h-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-primary">QVT Entreprise</h1>
            </div>
            {!user && (
              <Button 
                onClick={() => navigate('/entreprise/login')}
                className="flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Se connecter</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            👔 Espace Entreprise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transformez votre environnement de travail grâce à l'intelligence artificielle. 
            Mesurez, analysez et améliorez la Qualité de Vie au Travail de vos équipes.
          </p>
        </div>

        {/* Accès par rôle */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/entreprise/login?role=employee')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <UserCheck className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Espace Salarié</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Accédez à votre tableau de bord personnel, évaluations QVT et recommandations.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Connexion Salarié
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/entreprise/login?role=manager')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">Espace Manager</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Gérez le bien-être de vos équipes, suivez les alertes et optimisez la performance.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Connexion Manager
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/entreprise/login?role=hr')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                <Settings className="w-8 h-8 text-indigo-600" />
              </div>
              <CardTitle className="text-lg">Espace RH</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Administration complète : équipes, collaborateurs, analytics et rapports.
              </p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Connexion RH
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Free Access Banner */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-center">
            🎯 <strong>Simulateur QVT gratuit</strong> - Testez notre évaluation sans inscription. Connectez-vous pour accéder aux fonctionnalités avancées.
          </p>
        </div>

        {/* Main Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/entreprise/simulator')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">Simulateur QVT</CardTitle>
              <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">GRATUIT</div>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Évaluation personnelle, équipe ou événements de vie.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Commencer le simulateur
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleProtectedNavigation('/entreprise/dashboard')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Dashboard</CardTitle>
              {!user && <div className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">CONNEXION REQUISE</div>}
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Tableaux de bord adaptés à votre rôle.
              </p>
              <Button className="w-full" variant="outline">
                Accéder au Dashboard
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleProtectedNavigation('/entreprise/questionnaire')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-lg">Questionnaire Avancé</CardTitle>
              {!user && <div className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">CONNEXION REQUISE</div>}
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Formulaire approfondi avec scoring IA avancé.
              </p>
              <Button className="w-full" variant="outline">
                Commencer l'évaluation
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleProtectedNavigation('/recommandations')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-lg">Recommandations IA</CardTitle>
              {!user && <div className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">CONNEXION REQUISE</div>}
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Solutions personnalisées basées sur vos résultats.
              </p>
              <Button className="w-full" variant="outline">
                Voir les recommandations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Bénéfices pour votre entreprise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Amélioration de la productivité</h3>
              <p className="text-muted-foreground text-sm">Des équipes plus épanouies sont plus performantes et engagées.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Réduction du turnover</h3>
              <p className="text-muted-foreground text-sm">Fidélisez vos talents grâce à un environnement de travail optimal.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Données objectives</h3>
              <p className="text-muted-foreground text-sm">Prenez des décisions éclairées basées sur des analyses IA.</p>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Accès rapide</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('/entreprise/simulator')} className="rounded-2xl bg-green-600 hover:bg-green-700">
              🎯 Simulateur Gratuit
            </Button>
            {user ? (
              <>
                <Button onClick={() => navigate('/profil')} variant="outline" className="rounded-2xl">
                  Mon Profil
                </Button>
                <Button onClick={() => navigate('/entreprise/dashboard')} variant="outline" className="rounded-2xl">
                  Voir les Analytics
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate('/entreprise/login')} variant="outline" className="rounded-2xl">
                Se connecter
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entreprise;
