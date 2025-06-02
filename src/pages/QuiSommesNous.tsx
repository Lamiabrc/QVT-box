
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Target, Heart, Award } from 'lucide-react';

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Qui sommes-nous ?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez l'équipe passionnée derrière QVT Box et notre vision 
                pour révolutionner le bien-être au travail et en famille.
              </p>
            </div>

            {/* Fondatrice */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face&auto=format&q=80" 
                    alt="Lamia Brechet - Fondatrice QVT Box" 
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Lamia Brechet</h2>
                    <p className="text-primary font-semibold mb-4">Fondatrice & CEO</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Forte de 15 années d'expérience en entreprise, Lamia a créé QVT Box avec une vision claire : 
                      allier performance et bien-être grâce à l'innovation technologique. Passionnée par les 
                      ressources humaines et l'intelligence artificielle, elle développe des solutions concrètes 
                      pour améliorer la qualité de vie au travail et en famille.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Leadership</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Innovation</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Bien-être</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Mission</h3>
                    <p className="text-gray-600">
                      Révolutionner le bien-être au travail et en famille grâce à l'intelligence artificielle 
                      et des solutions concrètes adaptées aux besoins de chacun.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Vision</h3>
                    <p className="text-gray-600">
                      Créer un monde où chacun peut s'épanouir pleinement, tant dans sa vie professionnelle 
                      que personnelle, grâce à des outils innovants et bienveillants.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Équipe */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Notre Équipe</h2>
                  <p className="text-gray-600">
                    Une équipe pluridisciplinaire unie par la passion du bien-être et de l'innovation
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">👩‍💻</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Développement IA</h4>
                    <p className="text-sm text-gray-600">Experts en intelligence artificielle et machine learning</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">👨‍⚕️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Bien-être & Santé</h4>
                    <p className="text-sm text-gray-600">Psychologues et experts en qualité de vie</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Design & UX</h4>
                    <p className="text-sm text-gray-600">Créateurs d'expériences utilisateur exceptionnelles</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à nous rejoindre dans cette aventure ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl shadow-lg"
                  onClick={() => window.location.href = '/entreprise'}
                >
                  Découvrir nos solutions
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuiSommesNous;
