
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Shield, 
  Target, 
  Lightbulb,
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Award,
  Brain,
  Ear,
  MessageCircle,
  Sparkles,
  Eye,
  Zap,
  UserCheck,
  Thermometer,
  Gift
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConceptQVT = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const coreValues = [
    {
      icon: Ear,
      title: "Écoute Bienveillante",
      description: "Une IA qui vous comprend vraiment, sans jugement",
      detail: "Notre intelligence artificielle analyse vos émotions avec empathie pour vous accompagner au quotidien",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Communication Authentique",
      description: "Des échanges vrais pour des solutions adaptées",
      detail: "Chaque interaction compte pour mieux comprendre vos besoins uniques",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Attention Particulière",
      description: "Chaque personne mérite une approche sur-mesure",
      detail: "Pas de solutions génériques : votre bien-être est unique, nos réponses aussi",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const personalizedSolutions = [
    {
      icon: Thermometer,
      title: "Prise de Température Émotionnelle",
      description: "Évaluation en temps réel de votre état",
      details: [
        "Analyse des signaux émotionnels",
        "Détection précoce des difficultés",
        "Suivi personnalisé de votre évolution"
      ]
    },
    {
      icon: UserCheck,
      title: "Conseils Personnalisés",
      description: "Des recommandations adaptées à VOUS",
      details: [
        "Solutions pratiques à faire soi-même",
        "Exercices adaptés à votre personnalité",
        "Outils accessibles 24h/24"
      ]
    },
    {
      icon: Users,
      title: "Prestations Professionnelles",
      description: "Connexion avec des experts qualifiés",
      details: [
        "Réseau de professionnels certifiés",
        "Matching selon vos besoins spécifiques",
        "Accompagnement humain quand nécessaire"
      ]
    },
    {
      icon: Gift,
      title: "Box Surprise Personnalisée",
      description: "Des objets pensés spécialement pour vous",
      details: [
        "Sélection basée sur votre profil émotionnel",
        "Objets apaisants et stimulants",
        "Surprise adaptée à vos goûts"
      ]
    }
  ];

  const aiFeatures = [
    {
      title: "IA Bienveillante",
      description: "Comprend vos émotions sans vous juger",
      percentage: 96
    },
    {
      title: "Performante",
      description: "Analyse précise de vos besoins",
      percentage: 94
    },
    {
      title: "Interconnectée",
      description: "Relie tous vos espaces de vie",
      percentage: 92
    },
    {
      title: "Accessible",
      description: "Disponible partout, tout le temps",
      percentage: 98
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section Revisé */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              QVT Box
            </h1>
            <p className="text-2xl text-gray-700 mb-4 font-medium">
              🫧 Écoute • Communication • Attention
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Une solution personnalisée qui vous écoute, vous comprend et vous accompagne. 
              Pas seulement par structure, mais <span className="font-bold text-blue-600">par personne</span>.
              Parce que votre bien-être est unique.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
                onClick={() => navigate('/entreprise/questionnaire')}
              >
                <Brain className="w-5 h-5 mr-2" />
                Découvrir mon profil unique
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => navigate('/contact')}
              >
                <Heart className="w-5 h-5 mr-2" />
                Parlons de vous
              </Button>
            </div>

            {/* Valeurs Fondamentales */}
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-3 font-medium">{value.description}</p>
                      <p className="text-sm text-gray-500">{value.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Personnalisées */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            🎯 Une Solution Vraiment Personnalisée
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            QVT Box prend votre température émotionnelle et vous propose exactement ce dont VOUS avez besoin
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {personalizedSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Bienveillante et Performante */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              🤖 Une IA Bienveillante et Performante
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Notre intelligence artificielle comprend vos états émotionnels et sait ce qui peut vous soutenir ou vous apaiser
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <span className="font-bold text-blue-600">{feature.percentage}%</span>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                    <Progress value={feature.percentage} className="h-3" />
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl">
                <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-center mb-4">Intelligence Émotionnelle</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>Détection instantanée des émotions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Réponses empathiques personnalisées</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span>Apprentissage continu de vos préférences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Protection et bienveillance garanties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outils Percutants et Interconnectés */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            🔗 Outils Percutants, Accessibles, Interconnectés
          </h2>
          
          <Tabs defaultValue="tools" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tools">Outils Innovants</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibilité</TabsTrigger>
              <TabsTrigger value="connection">Interconnexion</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tools" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Thermometer, title: "Thermomètre Émotionnel", desc: "Mesure en temps réel de votre bien-être" },
                  { icon: Brain, title: "Assistant IA Personnel", desc: "Conseils adaptés à votre situation unique" },
                  { icon: Gift, title: "Box Surprise Intelligente", desc: "Objets sélectionnés pour VOUS spécifiquement" }
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="text-center p-6 bg-white rounded-lg shadow-md"
                  >
                    <tool.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                    <h3 className="font-semibold mb-2">{tool.title}</h3>
                    <p className="text-gray-600 text-sm">{tool.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="accessibility" className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-8">
                  QVT Box est conçue pour être accessible à tous, partout, tout le temps
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-4">📱 Multi-Plateforme</h3>
                    <ul className="text-left space-y-2 text-gray-600">
                      <li>• Application mobile intuitive</li>
                      <li>• Interface web responsive</li>
                      <li>• Synchronisation automatique</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-xl mb-4">🌍 Disponibilité</h3>
                    <ul className="text-left space-y-2 text-gray-600">
                      <li>• 24h/24, 7j/7</li>
                      <li>• Support multilingue</li>
                      <li>• Accessibilité handicap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="connection" className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-8">
                  Tous vos espaces de vie sont connectés pour une approche holistique
                </p>
                <div className="flex justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                    <h3 className="font-bold text-xl mb-6">🔗 Écosystème Connecté</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>Maison ↔ Travail</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Famille ↔ Individuel</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span>Émotions ↔ Actions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>Personnel ↔ Professionnel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action Renforcé */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              🫧 Prêt pour une expérience personnalisée ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              QVT Box vous écoute, vous comprend et vous accompagne comme personne d'autre ne le fait
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={() => navigate('/famille')}
              >
                <Heart className="w-5 h-5 mr-2" />
                Commencer mon voyage personnel
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
                onClick={() => navigate('/contact')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Parlons de vos besoins
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConceptQVT;
