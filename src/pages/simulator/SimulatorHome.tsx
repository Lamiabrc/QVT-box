
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { TrendingUp, Heart, ArrowLeft, Users, Building2 } from "lucide-react";

const SimulatorHome = () => {
  const navigate = useNavigate();
  const { universe } = useParams<{ universe: string }>();
  
  const isFamily = universe === 'famille';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(`/${universe}`)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'univers {isFamily ? 'Famille' : 'Entreprise'}</span>
            </Button>
            <div className="flex items-center space-x-3">
              {isFamily ? (
                <Heart className="w-8 h-8 text-green-600" />
              ) : (
                <TrendingUp className="w-8 h-8 text-green-600" />
              )}
              <h1 className="text-2xl font-bold text-green-600">
                Simulateur {isFamily ? 'Famille' : 'QVT'}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {isFamily ? '🏠 Simulateur Bien-être Famille' : '📊 Simulateur Qualité de Vie au Travail'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {isFamily 
              ? 'Évaluez le bien-être familial et recevez des conseils personnalisés pour améliorer l\'harmonie familiale.'
              : 'Évaluez votre qualité de vie au travail et découvrez des solutions personnalisées pour améliorer votre bien-être professionnel.'
            }
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
            <span className="text-green-700 font-medium">✨ Gratuit et sans inscription</span>
          </div>
        </div>

        {/* Types d'évaluation */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Évaluation personnelle */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate(`/entreprise/simulator?type=personal`)}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                {isFamily ? (
                  <Heart className="w-8 h-8 text-blue-600" />
                ) : (
                  <Users className="w-8 h-8 text-blue-600" />
                )}
              </div>
              <CardTitle className="text-xl">
                {isFamily ? 'Évaluation Personnelle' : 'Évaluation Individuelle'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-600 text-sm mb-4">
                {isFamily 
                  ? 'Évaluez votre bien-être personnel et familial'
                  : 'Évaluez votre satisfaction et bien-être au travail'
                }
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Commencer l'évaluation
              </Button>
            </CardContent>
          </Card>

          {/* Évaluation équipe/famille */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate(isFamily ? `/teens/family-simulator?type=family` : `/entreprise/simulator?type=team`)}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                {isFamily ? (
                  <Users className="w-8 h-8 text-purple-600" />
                ) : (
                  <Building2 className="w-8 h-8 text-purple-600" />
                )}
              </div>
              <CardTitle className="text-xl">
                {isFamily ? 'Évaluation Familiale' : 'Évaluation Équipe'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-gray-600 text-sm mb-4">
                {isFamily 
                  ? 'Évaluez la dynamique et l\'harmonie familiale'
                  : 'Évaluez le climat et la cohésion de votre équipe'
                }
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Commencer l'évaluation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Avantages du simulateur */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Ce que vous allez découvrir</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Score détaillé</h3>
              <p className="text-sm text-gray-600">
                {isFamily 
                  ? 'Un score de bien-être familial avec analyse détaillée'
                  : 'Un score QVT précis avec analyse par dimension'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Recommandations</h3>
              <p className="text-sm text-gray-600">
                {isFamily 
                  ? 'Conseils personnalisés pour améliorer l\'harmonie familiale'
                  : 'Solutions concrètes pour améliorer votre bien-être au travail'
                }
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Plan d'action</h3>
              <p className="text-sm text-gray-600">
                {isFamily 
                  ? 'Étapes concrètes pour renforcer les liens familiaux'
                  : 'Actions prioritaires pour votre épanouissement professionnel'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to action pour aller plus loin */}
        <div className="mt-12 text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">Envie d'aller plus loin ?</h3>
          <p className="text-gray-600 mb-6">
            Créez votre compte pour accéder à des fonctionnalités avancées et un suivi personnalisé.
          </p>
          <Button 
            onClick={() => navigate(`/auth/register?universe=${universe}`)}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            Créer mon compte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimulatorHome;
