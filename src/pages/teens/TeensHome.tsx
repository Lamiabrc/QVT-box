
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TeensHeader from '@/components/teens/TeensHeader';
import Footer from '@/components/Footer';
import { Heart, Users, Brain, Shield, Star, Sparkles, ArrowRight, Home, MessageCircle } from 'lucide-react';

const TeensHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <TeensHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Bienvenue dans l'espace{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
                Famille
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Un espace dédié au bien-être familial avec des outils d'évaluation et des recommandations 
              personnalisées pour renforcer les liens et améliorer l'harmonie familiale.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-teal-600">
                <Heart className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-medium">Bien-être familial 🏠</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-blue-600">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Sécurité & confidentialité 🛡️</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-slate-600">
                <Brain className="h-5 w-5 text-slate-600" />
                <span className="text-sm font-medium">Accompagnement professionnel 🇫🇷</span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl p-8 text-white mb-12">
              <h2 className="text-2xl font-bold mb-4">🎯 Évaluez l'harmonie de votre famille</h2>
              <p className="text-lg mb-6 opacity-90">
                Découvrez la dynamique de votre famille avec notre évaluation gratuite et obtenez des conseils personnalisés 
                pour renforcer vos liens familiaux.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate('/famille/simulator')}
                className="bg-white text-teal-700 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Commencer l'évaluation familiale
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            ✨ Nos services pour votre famille
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-teal-600">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">Évaluation Familiale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Analysez l'harmonie et le bien-être de votre famille avec des questionnaires adaptés à tous les âges.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/famille/simulator')}
                  className="w-full border-teal-600 text-teal-700 hover:bg-teal-50"
                >
                  Commencer l'évaluation
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-blue-600">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">Espace Famille</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Un espace sécurisé pour toute la famille avec des activités et des ressources partagées.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/teens/family-space')}
                  className="w-full border-blue-600 text-blue-700 hover:bg-blue-50"
                >
                  Accéder à l'espace
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-slate-600">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">Accompagnement IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Recommandations intelligentes et bienveillantes basées sur les besoins spécifiques de votre famille.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/teens/ai-evaluation')}
                  className="w-full border-slate-600 text-slate-700 hover:bg-slate-50"
                >
                  Découvrir l'accompagnement
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              🌟 Pourquoi choisir QVT Box Famille ?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Une approche professionnelle et bienveillante pour renforcer les liens familiaux et améliorer le bien-être de tous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">100% Sécurisé</h3>
              <p className="text-sm text-slate-600">Données protégées et hébergées en France selon RGPD</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Bienveillant</h3>
              <p className="text-sm text-slate-600">Approche respectueuse et adaptée à chaque membre</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Gratuit</h3>
              <p className="text-sm text-slate-600">Évaluations et conseils sans frais cachés</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Professionnel</h3>
              <p className="text-sm text-slate-600">Basé sur des méthodes reconnues et IA française</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-teal-600">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              🚀 Prêt à renforcer l'harmonie familiale ?
            </h2>
            <p className="text-slate-600 mb-6">
              Commencez dès maintenant votre évaluation gratuite et découvrez comment améliorer le bien-être de votre famille.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/famille/simulator')}
              className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-lg"
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
