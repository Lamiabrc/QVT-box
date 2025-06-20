
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Target, Heart, Award, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Qui sommes-nous ?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez l'équipe passionnée derrière QVT Box et notre vision 
                pour révolutionner le bien-être au travail et en famille.
              </p>
            </motion.div>

            {/* Fondatrice avec effet waou */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="mb-12 overflow-hidden shadow-xl">
                <div className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-1">
                  <CardContent className="bg-white p-8 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                      <motion.img 
                        src="/images/fondatrice" 
                        alt="Lamia Brechet - Fondatrice QVT Box" 
                        className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white"
                        whileHover={{ scale: 1.05 }}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face&auto=format&q=80";
                        }}
                      />
                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Lamia Brechet</h2>
                        <p className="text-primary font-semibold mb-4 text-lg">Fondatrice & CEO - QVT Box</p>
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Forte de 15 années d'expérience en entreprise, Lamia a créé QVT Box avec une mission claire : 
                          allier performance humaine et bien-être grâce à l'intelligence artificielle bienveillante. 
                          Passionnée par les ressources humaines et l'innovation technologique, elle développe des 
                          solutions concrètes et personnalisées pour améliorer la qualité de vie au travail et en famille.
                        </p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600">lamia.brechet@qvtbox.com</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-green-500" />
                            <span className="text-gray-600">+33 6 XX XX XX XX</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-red-500" />
                            <span className="text-gray-600">France</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Leadership</span>
                          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Innovation IA</span>
                          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Bien-être</span>
                          <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Écoute Bienveillante</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Mission & Vision avec animations */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Révolutionner le bien-être individuel et collectif grâce à l'intelligence artificielle 
                        bienveillante et des solutions concrètes adaptées aux besoins uniques de chaque personne.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Créer un monde où chacun peut s'épanouir pleinement, tant dans sa vie professionnelle 
                        que personnelle, grâce à une attention bienveillante et des outils innovants personnalisés.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Nos Valeurs */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs Fondamentales</h2>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Bienveillance</h4>
                      <p className="text-sm text-gray-600">Écoute empathique et attention personnalisée</p>
                    </div>

                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                      <p className="text-sm text-gray-600">IA performante au service de l'humain</p>
                    </div>

                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Personnalisation</h4>
                      <p className="text-sm text-gray-600">Solutions adaptées à chaque individu</p>
                    </div>

                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Efficacité</h4>
                      <p className="text-sm text-gray-600">Résultats concrets et mesurables</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA avec effet waou */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-1 rounded-2xl shadow-2xl">
                <div className="bg-white p-8 rounded-xl">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Prêt à nous rejoindre dans cette aventure ?
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Découvrez comment QVT Box peut transformer votre qualité de vie
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl shadow-lg text-lg"
                        onClick={() => window.location.href = '/entreprise'}
                      >
                        Découvrir nos solutions
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline"
                        size="lg"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl text-lg"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Nous contacter
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuiSommesNous;
