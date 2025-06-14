
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EntrepriseHeader from '@/components/entreprise/EntrepriseHeader';
import Footer from '@/components/Footer';
import { Building2, Users, Target, Shield, Star, Sparkles, ArrowRight, TrendingUp, Award, Zap } from 'lucide-react';

const EntrepriseHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <EntrepriseHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenue dans l'espace{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Entreprise
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transformez votre Qualité de Vie au Travail avec des évaluations personnalisées et des solutions concrètes pour vos équipes.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-blue-500">
                <Building2 className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">QVT Entreprise 🏢</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-green-500">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">RGPD sécurisé 🛡️</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-purple-500">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium">IA française 🇫🇷</span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
              <h2 className="text-2xl font-bold mb-4">🎯 Évaluez votre QVT maintenant</h2>
              <p className="text-lg mb-6 opacity-90">
                Découvrez le niveau de bien-être de votre entreprise avec nos simulateurs gratuits et obtenez des recommandations personnalisées.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate('/entreprise/simulator')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                <Target className="w-5 h-5 mr-2" />
                Commencer l'évaluation gratuite
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Types d'évaluations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📊 Types d'évaluations QVT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Évaluation Individuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analysez votre bien-être personnel au travail avec des questions adaptées à votre situation.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/entreprise/simulator')}
                  className="w-full"
                >
                  Commencer l'évaluation
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-green-500">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Évaluation d'Équipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Évaluez la dynamique et le bien-être de votre équipe pour identifier les axes d'amélioration.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/entreprise/simulator')}
                  className="w-full"
                >
                  Évaluer mon équipe
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-purple-500">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Événement de Vie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Évaluez l'impact d'un événement personnel sur votre performance professionnelle.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/entreprise/simulator')}
                  className="w-full"
                >
                  Analyser l'impact
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🚀 Nos services entreprise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Dashboard RH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Suivez les métriques QVT en temps réel
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => navigate('/entreprise/hr-dashboard')}
                >
                  Accéder
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Gestion Équipes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Outils de management et suivi
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => navigate('/entreprise/manager-dashboard')}
                >
                  Gérer
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Box Bien-être</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Commandez vos box personnalisées
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => navigate('/entreprise/shop')}
                >
                  Boutique
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">IA Avancée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Recommandations intelligentes
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => navigate('/entreprise/questionnaire')}
                >
                  Découvrir
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💼 Pourquoi choisir QVT Box Entreprise ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une solution complète pour transformer la qualité de vie au travail dans votre organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Sécurisé</h3>
              <p className="text-sm text-gray-600">Données protégées et hébergées en France</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ROI Prouvé</h3>
              <p className="text-sm text-gray-600">Amélioration mesurable de la performance</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">Solution française de référence</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">IA et méthodes de pointe</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Prêt à transformer votre QVT ?
            </h2>
            <p className="text-gray-600 mb-6">
              Commencez dès maintenant votre évaluation gratuite et découvrez le potentiel de votre entreprise.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/entreprise/simulator')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg"
            >
              <Building2 className="w-5 h-5 mr-2" />
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

export default EntrepriseHome;
