
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { Heart, Building2, Brain, Users, Target, Sparkles, Shield, ArrowRight, CheckCircle, Globe } from 'lucide-react';

const ConceptQVT = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 py-16"
        >
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="text-center mb-20">
            <div className="relative mb-8">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 mx-auto mb-8 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <img 
                    src="/images/logo-qvt.png" 
                    alt="QVT Box Logo" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2">
                  <BubbleComponent
                    bubble={{
                      id: 'concept_bubble',
                      emotion: 'excited',
                      intensity: 9,
                      color: '#3B82F6',
                      size: 'small',
                      animation: 'pulse',
                      timestamp: new Date(),
                      emotionalState: 9,
                      mood: 'excellent'
                    }}
                  />
                </div>
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Le Concept{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                QVT Box
              </span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Une révolution phygitale pour transformer la qualité de vie au travail et en famille
            </p>
          </motion.section>

          {/* Histoire personnelle */}
          <motion.section variants={itemVariants} className="mb-20">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/50 shadow-xl">
              <CardContent className="p-10">
                <div className="flex items-start space-x-8">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="/images/leadership femme.jpg" 
                      alt="Lamia Brechet - Fondatrice" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2">
                      <BubbleComponent
                        bubble={{
                          id: 'founder_bubble',
                          emotion: 'happy',
                          intensity: 8,
                          color: '#EC4899',
                          size: 'small',
                          animation: 'bounce',
                          timestamp: new Date(),
                          emotionalState: 8,
                          mood: 'good'
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                      <Heart className="w-8 h-8 text-pink-500 mr-3" />
                      Une conviction personnelle forte
                    </h2>
                    <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                      <p>
                        <strong>QVT Box est née d'une conviction personnelle forte</strong>, nourrie par une expérience terrain plurielle et une volonté de transformation sociale centrée sur la santé mentale.
                      </p>
                      <p>
                        <strong>Lamia Brechet</strong>, fondatrice du projet, a évolué dans des univers professionnels variés – grande distribution, intérim, industrie, logistique, télécoms, e-commerce – qui lui ont permis de constater une constante :
                      </p>
                      <blockquote className="border-l-4 border-pink-500 pl-6 italic bg-white/50 p-4 rounded-r-lg">
                        "Le mal-être au travail est souvent banalisé, les actions QVT sont trop virtuelles, trop formatées, et rarement en lien avec les vraies émotions des salariés."
                      </blockquote>
                      <p>
                        Ce constat professionnel s'est croisé avec une blessure intime : <strong>la perte de sa mère, dans un contexte de non-dits</strong>. Ce moment a cristallisé une prise de conscience : les silences familiaux, les tabous émotionnels, les charges mentales invisibles sont aussi destructeurs que les pressions professionnelles.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Double impact */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
              🚀 Un projet à double impact
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src="/images/bulle-collaborateur.png" 
                      alt="QVT Entreprise" 
                      className="w-24 h-24 mx-auto rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute -top-2 -right-8">
                      <BubbleComponent
                        bubble={{
                          id: 'enterprise_bubble',
                          emotion: 'excited',
                          intensity: 7,
                          color: '#3B82F6',
                          size: 'small',
                          animation: 'float',
                          timestamp: new Date(),
                          emotionalState: 7,
                          mood: 'good'
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600 mr-2" />
                    QVT Box Entreprise
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Une offre phygitale alliant box bien-être physique et plateforme IA de suivi émotionnel, conçue pour les salariés, les RH et les CSE.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/entreprise')}
                    className="group-hover:bg-blue-500 group-hover:text-white transition-colors"
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-teal-400 bg-gradient-to-br from-teal-50 to-green-50">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src="/images/qvteens-bubble.png" 
                      alt="QVTeen Box" 
                      className="w-24 h-24 mx-auto rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute -top-2 -right-8">
                      <BubbleComponent
                        bubble={{
                          id: 'teen_bubble',
                          emotion: 'happy',
                          intensity: 8,
                          color: '#0F766E',
                          size: 'small',
                          animation: 'bounce',
                          timestamp: new Date(),
                          emotionalState: 8,
                          mood: 'good'
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-teal-600 mr-2" />
                    QVTeen Box
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Une déclinaison spécifique pour les adolescents, pensée comme une alternative éducative et émotionnelle face à l'usage massif des réseaux sociaux.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/teens')}
                    className="group-hover:bg-teal-500 group-hover:text-white transition-colors"
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* IA Émotionnelle */}
          <motion.section variants={itemVariants} className="mb-20">
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200/50 shadow-xl">
              <CardContent className="p-10">
                <div className="flex items-center space-x-8">
                  <div className="relative">
                    <img 
                      src="/images/bulle-eval.png" 
                      alt="IA Émotionnelle" 
                      className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute -top-4 -right-4">
                      <BubbleComponent
                        bubble={{
                          id: 'ai_bubble',
                          emotion: 'excited',
                          intensity: 9,
                          color: '#6366F1',
                          size: 'medium',
                          animation: 'pulse',
                          timestamp: new Date(),
                          emotionalState: 9,
                          mood: 'excellent'
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                      <Brain className="w-8 h-8 text-indigo-600 mr-3" />
                      Une IA émotionnelle enrichie par la vie réelle
                    </h2>
                    <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                      <p>
                        Au cœur du projet, <strong>une intelligence artificielle éthique</strong> permet de capter les signaux faibles, de détecter les dérèglements émotionnels avant qu'ils ne deviennent critiques.
                      </p>
                      <p>
                        Mais Lamia va plus loin : elle souhaite <strong>nourrir cette IA avec des données croisées</strong>, issues de la sphère personnelle et professionnelle, pour proposer un accompagnement réellement personnalisé.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="flex items-center space-x-2 bg-white/70 p-3 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm">Comprendre les dynamiques émotionnelles</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/70 p-3 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm">Adapter les recommandations</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/70 p-3 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm">IA bienveillante et proactive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Vision philosophique */}
          <motion.section variants={itemVariants} className="mb-20">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200/50 shadow-xl">
              <CardContent className="p-10 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  🎯 Une vision qui réconcilie
                </h2>
                <blockquote className="text-2xl italic text-slate-700 mb-6 leading-relaxed">
                  "La qualité de vie ne s'arrête pas à la badgeuse. Elle commence parfois à la porte de la chambre d'un ado, ou dans la cuisine d'un parent en télétravail."
                </blockquote>
                <p className="text-lg text-slate-600">
                  <strong>C'est un parti-pris fort :</strong> ne pas séparer ce que la vie imbrique.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Valeurs */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
              💎 Des valeurs fortes
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Production Éthique</h3>
                  <p className="text-sm text-slate-600">Partenariats ESAT, circuits courts, production locale et inclusive</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Technologie Respectueuse</h3>
                  <p className="text-sm text-slate-600">IA française, non intrusive, respectueuse de la vie privée</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Vision Intergénérationnelle</h3>
                  <p className="text-sm text-slate-600">Pour tous les âges, toutes les hiérarchies, tous les contextes</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">Scalabilité Forte</h3>
                  <p className="text-sm text-slate-600">Déclinaisons par secteur, âge, pays (Belgique, Canada)</p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Impact final */}
          <motion.section variants={itemVariants} className="text-center">
            <Card className="bg-gradient-to-r from-slate-800 to-blue-900 text-white shadow-2xl">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-6">
                  🌟 Un levier de transformation
                </h2>
                <p className="text-xl mb-8 leading-relaxed opacity-90">
                  QVT Box donne les moyens aux entreprises, aux familles et aux individus de réintroduire du lien, de l'écoute et du soin dans un quotidien fragmenté — tout en créant les conditions d'une intelligence artificielle émotionnelle réellement utile, respectueuse et connectée à la vie.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                    <span className="font-medium">💼 Impact Social</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                    <span className="font-medium">❤️ Impact Émotionnel</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                    <span className="font-medium">📈 Impact Économique</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={() => navigate('/simulators')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Commencer votre évaluation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ConceptQVT;
