
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Building2, 
  Users, 
  Shield, 
  Brain, 
  Heart, 
  Package, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              L'IA au service de votre{' '}
              <span className="text-primary">Qualité de Vie</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Solution phygitale innovante qui allie intelligence artificielle et objets bien-être 
              pour améliorer votre qualité de vie au travail et en famille.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Package className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Box française</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">IA avancée</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">RGPD sécurisé</span>
              </div>
            </div>
          </div>

          {/* Solutions Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Entreprise Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Espace Entreprise
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Solution complète pour les RH, managers et salariés. 
                    Mesurez et améliorez la QVT grâce à l'IA.
                  </p>

                  <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Dashboard RH avec analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Questionnaires QVT intelligents</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Recommandations IA personnalisées</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Box bien-être françaises</span>
                    </li>
                  </ul>

                  <Button 
                    className="w-full" 
                    onClick={() => navigate('/entreprise')}
                  >
                    Découvrir l'espace Entreprise
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Famille Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-secondary/50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Espace Famille
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Accompagnement des adolescents et de leurs parents 
                    vers un meilleur bien-être familial.
                  </p>

                  <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Interface ludique pour ados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Dashboard parent sécurisé</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Box familiales adaptées</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Respect total de la vie privée</span>
                    </li>
                  </ul>

                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => navigate('/teens')}
                  >
                    Découvrir l'espace Famille
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Pourquoi choisir QVT Box ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sécurité & Confidentialité
                </h3>
                <p className="text-gray-600">
                  Données hébergées en France, RGPD compliant, 
                  consentement parental sécurisé.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  IA Française Avancée
                </h3>
                <p className="text-gray-600">
                  Algorithmes développés en France pour des recommandations 
                  précises et culturellement adaptées.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Approche Bienveillante
                </h3>
                <p className="text-gray-600">
                  Prévention du mal-être avec des solutions concrètes, 
                  éthiques et humaines.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
