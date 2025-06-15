
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { Building2, Users, Heart, ArrowRight, CheckCircle, Sparkles, Package, Brain, Shield } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [animatedBubbles, setAnimatedBubbles] = useState<any[]>([]);

  // Générer des bulles flottantes animées
  useEffect(() => {
    const bubbles = Array.from({ length: 12 }, (_, i) => ({
      id: `floating_${i}`,
      emotion: ['happy', 'excited', 'neutral'][Math.floor(Math.random() * 3)],
      intensity: Math.floor(Math.random() * 5) + 5,
      color: ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3', '#9C27B0'][Math.floor(Math.random() * 5)],
      size: ['small', 'medium'][Math.floor(Math.random() * 2)],
      animation: ['float', 'pulse'][Math.floor(Math.random() * 2)],
      timestamp: new Date(),
      position: {
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      },
      delay: Math.random() * 3
    }));
    setAnimatedBubbles(bubbles);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Bulles flottantes en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {animatedBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute opacity-20"
              style={{
                top: bubble.position.top,
                left: bubble.position.left,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.3, 
                scale: 1,
                y: [-20, 20, -20],
                transition: { 
                  duration: 4,
                  repeat: Infinity,
                  delay: bubble.delay,
                  ease: "easeInOut"
                }
              }}
            >
              <BubbleComponent bubble={bubble} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  alt="Lamia Brechet - Fondatrice QVT Box" 
                  className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white" 
                  src="/lovable-uploads/1487ccee-42cd-40a6-8a14-c02384e891be.jpg" 
                />
              </motion.div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl border border-white/50">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                🫧 Sortir de sa{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  bulle
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              >
                QVT Box V2 : L'application phygitale révolutionnaire qui combine <strong>évaluations émotionnelles interactives</strong>, 
                <strong> IA française</strong> et <strong>box bien-être personnalisées</strong>. 
                Chacun peut s'enfermer dans sa bulle, s'y protéger ou apprendre à en sortir.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-blue-500">
                  <Package className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">20 Box personnalisées 🎁</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-purple-500">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">IA française avancée 🤖</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-green-500">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">RGPD by design 🛡️</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Message de la fondatrice */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200/50 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <img 
                      alt="Lamia Brechet" 
                      className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-lg flex-shrink-0" 
                      src="/lovable-uploads/a4ecdc7a-c850-42e1-b650-f1c34a951345.png" 
                    />
                    <div className="absolute -top-2 -right-2">
                      <BubbleComponent
                        bubble={{
                          id: 'founder_bubble',
                          emotion: 'happy',
                          intensity: 9,
                          color: '#4CAF50',
                          size: 'small',
                          animation: 'pulse',
                          timestamp: new Date()
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      💬 Vision de la fondatrice
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "Car chacun peut s'y enfermer, s'y protéger ou apprendre à en sortir. 
                      QVT Box V2 transforme l'accompagnement émotionnel avec des bulles interactives, 
                      une IA bienveillante et des solutions concrètes. L'interface se veut douce, 
                      interactive et circulaire — une bulle d'air au cœur du quotidien."
                    </p>
                    <p className="text-blue-600 font-semibold mt-4">
                      — Lamia Brechet, Fondatrice & CEO
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sélecteur d'univers repensé */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🌐 Choisis ton univers QVT Box
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque univers est pensé pour répondre à tes besoins spécifiques avec des bulles personnalisées
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Univers Famille */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="group cursor-pointer transition-all duration-500 border-2 hover:border-pink-400 bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-2xl h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center flex-1">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Heart className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <BubbleComponent
                            bubble={{
                              id: 'family_bubble',
                              emotion: 'happy',
                              intensity: 8,
                              color: '#E91E63',
                              size: 'small',
                              animation: 'bounce',
                              timestamp: new Date()
                            }}
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        👪 Univers Famille
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Santé mentale des jeunes avec évaluations émotionnelles ludiques, 
                        FamilySpace partagé et 20 box bien-être personnalisées.
                      </p>

                      <div className="space-y-3 mb-8 text-left">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">🫧 Bulles émotionnelles animées</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">👨‍👩‍👧‍👦 7 rôles familiaux</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">🎁 20 Box ados + parents</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">🚨 Alertes précoces IA</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all" 
                      onClick={() => navigate('/famille')}
                    >
                      Entrer dans l'univers Famille
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Univers Entreprise */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="group cursor-pointer transition-all duration-500 border-2 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center flex-1">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Building2 className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <BubbleComponent
                            bubble={{
                              id: 'enterprise_bubble',
                              emotion: 'excited',
                              intensity: 7,
                              color: '#2196F3',
                              size: 'small',
                              animation: 'pulse',
                              timestamp: new Date()
                            }}
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        🏢 Univers Entreprise
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        QVT nouvelle génération avec questionnaires enrichis, 
                        dashboard RH intelligent et 10 box collaborateurs personnalisées.
                      </p>

                      <div className="space-y-3 mb-8 text-left">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">📊 Dashboard RH & Manager</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">🎯 Statuts VIP & spécialités</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">🎁 10 Box QVT ciblées</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">🤖 ML & clustering émotionnel</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all" 
                      onClick={() => navigate('/entreprise')}
                    >
                      Entrer dans l'univers Entreprise
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Univers Coach à venir */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <BubbleComponent
                      bubble={{
                        id: 'coach_bubble',
                        emotion: 'excited',
                        intensity: 6,
                        color: '#FF9800',
                        size: 'medium',
                        animation: 'float',
                        timestamp: new Date()
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Univers Coach QVT</h3>
                      <p className="text-gray-600">À venir prochainement - Outils pour les professionnels de l'accompagnement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🚀 Prêt à transformer ton bien-être ?
            </h3>
            <p className="text-gray-600 mb-8">
              Rejoins des milliers d'utilisateurs qui ont déjà commencé leur voyage vers un meilleur équilibre
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl shadow-lg" 
                onClick={() => navigate('/simulators')}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Découvrir les simulateurs
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
