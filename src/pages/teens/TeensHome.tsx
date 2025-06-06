
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Heart, Shield, ArrowLeft, LogIn, UserPlus, GamepadIcon } from "lucide-react";

const TeensHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
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
              <Users className="w-8 h-8 text-pink-600" />
              <h1 className="text-2xl font-bold text-pink-600">QVT Famille</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            👨‍👩‍👧‍👦 Bienvenue dans l'univers Famille
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Accompagnement des adolescents et de leurs parents vers un meilleur bien-être familial. 
            Une approche bienveillante et sécurisée pour toute la famille.
          </p>
        </div>

        {/* Options principales */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Simulateur gratuit */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/simulator/famille')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Simulateur Famille</CardTitle>
              <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">GRATUIT</div>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-600 text-sm mb-4">
                Évaluez le bien-être familial en quelques minutes. Aucune inscription requise.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Tester maintenant
              </Button>
            </CardContent>
          </Card>

          {/* Connexion/Inscription */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <CardTitle className="text-xl">Accès complet</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 space-y-3">
              <p className="text-gray-600 text-sm mb-4">
                Accédez à l'espace personnalisé, suivi parental, activités ludiques et recommandations.
              </p>
              <Button 
                onClick={() => navigate('/auth/login?universe=famille')}
                className="w-full bg-pink-600 hover:bg-pink-700"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Se connecter
              </Button>
              <Button 
                onClick={() => navigate('/auth/register?universe=famille')}
                variant="outline"
                className="w-full"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Créer un compte famille
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Types de profils */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Qui peut utiliser l'espace famille ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <GamepadIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Adolescents (13-18 ans)</h3>
              <p className="text-sm text-gray-600">Interface ludique, activités personnalisées, espace d'expression sécurisé</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Parents</h3>
              <p className="text-sm text-gray-600">Dashboard parental, suivi bienveillant, respect de l'intimité</p>
            </Card>
          </div>
        </div>

        {/* Avantages */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Pourquoi choisir QVT Box Famille ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Approche bienveillante</h3>
              <p className="text-sm text-gray-600">Accompagnement respectueux du développement adolescent</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Lien familial renforcé</h3>
              <p className="text-sm text-gray-600">Outils pour améliorer la communication parent-ado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Sécurité maximale</h3>
              <p className="text-sm text-gray-600">Consentement parental, données protégées, RGPD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensHome;
