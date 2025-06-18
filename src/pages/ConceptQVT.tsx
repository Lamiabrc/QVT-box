
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Star, Heart, Zap, Users, Target, Sparkles, Gift, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ConceptQVT = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showBoxAnimation, setShowBoxAnimation] = useState(false);

  const steps = [
    {
      id: 'intro',
      title: 'Bienvenue dans l\'univers QVT Box',
      subtitle: 'Découvrez la révolution du bien-être',
      content: 'Une approche innovante qui transforme la qualité de vie au travail et en famille',
      image: '/images/qvt .jpg',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'concept',
      title: 'Le Concept QVT Box',
      subtitle: 'Des solutions personnalisées dans une box magique',
      content: 'Chaque box contient des outils, ressources et activités spécialement sélectionnés selon vos besoins évalués par notre IA',
      image: '/images/box.jpg',
      icon: <Gift className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai',
      title: 'Intelligence Artificielle',
      subtitle: 'Une IA qui vous comprend',
      content: 'Notre système d\'IA analyse vos réponses, évalue votre situation et recommande des solutions personnalisées',
      image: '/images/bulle-eval.png',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'boxes',
      title: 'Nos Différentes Box',
      subtitle: 'Adaptées à chaque situation',
      content: 'Box Équilibre, Box Télétravail, Box Pénibilité, Box Retraite... Chaque box répond à des besoins spécifiques',
      image: '/images/box equilibre.png',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'family',
      title: 'Univers Famille & Teens',
      subtitle: 'Le bien-être pour toute la famille',
      content: 'Des solutions spécialement conçues pour les familles et les adolescents avec des outils de communication et de bien-être',
      image: '/images/qvteen box.jpg',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'impact',
      title: 'Impact Réel',
      subtitle: 'Des résultats mesurables',
      content: 'Amélioration de 85% du bien-être, réduction de 70% du stress, augmentation de 60% de la productivité',
      image: '/images/team qvt.jpg',
      icon: <Users className="w-8 h-8" />,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const boxTypes = [
    { name: 'Box Équilibre', image: '/images/box equilibre.png', description: 'Pour retrouver l\'harmonie' },
    { name: 'Box Télétravail', image: '/images/box_teletravail.jpg', description: 'Optimiser le travail à distance' },
    { name: 'Box Pénibilité', image: '/images/box_penibilite.jpg', description: 'Gérer les conditions difficiles' },
    { name: 'Box Retraite', image: '/images/box_retraite.jpg', description: 'Préparer cette nouvelle étape' },
    { name: 'Box Team', image: '/images/box team.png', description: 'Renforcer la cohésion d\'équipe' },
    { name: 'Box Bureau', image: '/images/box bureau.png', description: 'Améliorer l\'espace de travail' }
  ];

  useEffect(() => {
    if (currentStep === 3) {
      setShowBoxAnimation(true);
    }
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-12"
          >
            {/* Content Side */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentStepData.color} text-white`}>
                  {currentStepData.icon}
                </div>
                
                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                  {currentStepData.title}
                </h1>
                
                <h2 className="text-2xl font-semibold text-gray-700">
                  {currentStepData.subtitle}
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {currentStepData.content}
                </p>

                {/* Special Box Display for Step 3 */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
                  >
                    {boxTypes.map((box, index) => (
                      <motion.div
                        key={box.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                      >
                        <img 
                          src={box.image} 
                          alt={box.name}
                          className="w-full h-20 object-cover rounded-lg mb-2"
                        />
                        <h4 className="font-bold text-sm text-gray-800">{box.name}</h4>
                        <p className="text-xs text-gray-600">{box.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Impact Stats for Step 5 */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-3 gap-6 mt-8"
                  >
                    {[
                      { value: '85%', label: 'Bien-être amélioré', icon: '😊' },
                      { value: '70%', label: 'Stress réduit', icon: '😌' },
                      { value: '60%', label: 'Productivité augmentée', icon: '📈' }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.2 }}
                        className="text-center p-4 bg-white rounded-xl shadow-lg"
                      >
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={currentStepData.image} 
                  alt={currentStepData.title}
                  className="w-full h-96 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentStepData.color} opacity-20`}></div>
                
                {/* Floating animation elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
            size="lg"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Précédent</span>
          </Button>

          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentStep === steps.length - 1 ? (
            <Button
              onClick={() => navigate('/entreprise/simulator')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white flex items-center space-x-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Commencer l'évaluation</span>
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white flex items-center space-x-2"
            >
              <span>Suivant</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Interactive Elements */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <img 
                src="/images/box.jpg" 
                alt="QVT Box Magic"
                className="w-32 h-32 mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            <p className="mt-4 text-lg text-gray-600 font-semibold">
              ✨ La magie opère dans chaque box ✨
            </p>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ConceptQVT;
