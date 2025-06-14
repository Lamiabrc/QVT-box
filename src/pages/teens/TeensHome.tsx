
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TeensHeader from '@/components/teens/TeensHeader';
import Footer from '@/components/Footer';
import { Heart, Users, Brain, Shield, Star, Sparkles, ArrowRight } from 'lucide-react';

const TeensHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <TeensHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenue dans l'espace{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Famille
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Un espace dédié au bien-être familial avec des outils d'évaluation et des recommandations personnalisées pour améliorer la dynamique familiale.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-pink-500">
                <Heart className="h-5 w-5 text-pink-500" />
                <span className="text-sm font-medium">Bien-être familial 💕</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-purple-500">
                <Shield className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium">RGPD sécurisé 🛡️</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-blue-500">
                <Brain className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">IA française 🇫🇷</span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white mb-12">
              <h2 className="text-2xl font-bold mb-4">🎯 Évaluez votre bien-être familial</h2>
              <p className="text-lg mb-6 opacity-90">
                Découvrez la dynamique de votre famille avec notre simulateur gratuit et obtenez des recommandations personnalisées.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate('/famille/simulator')}
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Commencer l'évaluation gratuite
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ✨ Nos services famille
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-pink-500">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Évaluation Familiale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analysez la dynamique et le bien-être de votre famille avec des questions adaptées.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/famille/simulator')}
                  className="w-full"
                >
                  Commencer l'évaluation
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-purple-500">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Espace Famille</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un espace dédié pour toute la famille avec des activités et des ressources.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/teens/family-space')}
                  className="w-full"
                >
                  Accéder à l'espace
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">IA Personnalisée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Recommandations intelligentes basées sur les besoins de votre famille.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/teens/ai-evaluation')}
                  className="w-full"
                >
                  Découvrir l'IA
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🌟 Pourquoi choisir QVT Box Famille ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche innovante pour renforcer les liens familiaux et améliorer le bien-être de tous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Sécurisé</h3>
              <p className="text-sm text-gray-600">Données protégées et hébergées en France</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bienveillant</h3>
              <p className="text-sm text-gray-600">Approche respectueuse de chaque membre</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gratuit</h3>
              <p className="text-sm text-gray-600">Évaluations et conseils sans frais</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovant</h3>
              <p className="text-sm text-gray-600">IA française et méthodes modernes</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-pink-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Prêt à améliorer votre vie de famille ?
            </h2>
            <p className="text-gray-600 mb-6">
              Commencez dès maintenant votre évaluation gratuite et découvrez comment renforcer les liens familiaux.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/famille/simulator')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeensHome;
