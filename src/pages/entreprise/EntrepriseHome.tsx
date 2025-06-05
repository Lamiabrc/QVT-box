
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, TrendingUp, Users, Shield, ArrowLeft, LogIn, UserPlus, Play } from "lucide-react";

const EntrepriseHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
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
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-600">QVT Entreprise</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            🏢 Bienvenue dans l'univers Entreprise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transformez votre environnement de travail grâce à l'intelligence artificielle. 
            Mesurez, analysez et améliorez la Qualité de Vie au Travail de vos équipes.
          </p>
        </div>

        {/* Options principales */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Simulateur gratuit */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/simulator/entreprise')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Play className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Simulateur QVT</CardTitle>
              <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">GRATUIT</div>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-600 text-sm mb-4">
                Estimez votre qualité de vie au travail en quelques minutes. Aucune inscription requise.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Tester maintenant
              </Button>
            </CardContent>
          </Card>

          {/* Connexion/Inscription */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Accès complet</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 space-y-3">
              <p className="text-gray-600 text-sm mb-4">
                Accédez à toutes les fonctionnalités : dashboards, recommandations IA, suivi équipe.
              </p>
              <Button 
                onClick={() => navigate('/auth/login?universe=entreprise')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Se connecter
              </Button>
              <Button 
                onClick={() => navigate('/auth/register?universe=entreprise')}
                variant="outline"
                className="w-full"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Créer un compte
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Types de profils */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Choisissez votre profil</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Employé</h3>
              <p className="text-sm text-gray-600">Évaluez votre bien-être, recevez des recommandations personnalisées</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Manager</h3>
              <p className="text-sm text-gray-600">Gérez le bien-être de vos équipes, suivez les alertes</p>
            </Card>
            <Card className="text-center p-6">
              <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">RH</h3>
              <p className="text-sm text-gray-600">Administration complète, analytics et rapports détaillés</p>
            </Card>
          </div>
        </div>

        {/* Avantages */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Pourquoi choisir QVT Box Entreprise ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Amélioration mesurable</h3>
              <p className="text-sm text-gray-600">Suivez l'évolution du bien-être avec des métriques précises</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Réduction du turnover</h3>
              <p className="text-sm text-gray-600">Fidélisez vos talents grâce à un environnement optimal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">IA française sécurisée</h3>
              <p className="text-sm text-gray-600">Données hébergées en France, RGPD compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseHome;
