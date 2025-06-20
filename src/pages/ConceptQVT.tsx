
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
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConceptQVT = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Heart,
      title: "Bien-être au travail",
      description: "Améliorer la qualité de vie professionnelle",
      stats: "87% d'amélioration du bien-être",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Cohésion d'équipe",
      description: "Renforcer les liens entre collaborateurs",
      stats: "92% de satisfaction équipe",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Performance durable",
      description: "Optimiser la productivité long terme",
      stats: "+34% de productivité",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Prévention des risques",
      description: "Détecter et prévenir le burn-out",
      stats: "95% de prévention efficace",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const methodology = [
    {
      step: 1,
      title: "Évaluation initiale",
      description: "Diagnostic complet de la situation actuelle",
      icon: BarChart3
    },
    {
      step: 2,
      title: "Plan personnalisé",
      description: "Solutions adaptées à vos besoins spécifiques",
      icon: Target
    },
    {
      step: 3,
      title: "Mise en œuvre",
      description: "Accompagnement et formation des équipes",
      icon: Users
    },
    {
      step: 4,
      title: "Suivi continu",
      description: "Monitoring et ajustements réguliers",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Le Concept QVT Box
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Une approche révolutionnaire pour transformer la qualité de vie au travail 
              grâce à l'intelligence artificielle et des solutions personnalisées.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => navigate('/entreprise/questionnaire')}
              >
                <Play className="w-5 h-5 mr-2" />
                Découvrir en action
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Demander une démo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir QVT Box ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className={`h-full cursor-pointer transition-all duration-300 ${
                  hoveredCard === index ? 'shadow-xl border-primary' : 'shadow-md'
                }`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg">
                      <p className="font-semibold text-green-700">{feature.stats}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Methodology */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre Méthodologie en 4 Étapes
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                  
                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="benefits" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="benefits">Bénéfices</TabsTrigger>
              <TabsTrigger value="technology">Technologie IA</TabsTrigger>
              <TabsTrigger value="results">Résultats</TabsTrigger>
            </TabsList>
            
            <TabsContent value="benefits" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Heart, title: "Bien-être renforcé", desc: "Amélioration mesurable du bonheur au travail" },
                  { icon: TrendingUp, title: "Productivité accrue", desc: "Performance durable et équilibrée" },
                  { icon: Shield, title: "Prévention efficace", desc: "Détection précoce des risques psychosociaux" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="text-center p-6 bg-white rounded-lg shadow-md"
                  >
                    <benefit.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="technology" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Intelligence Artificielle Avancée</h3>
                  <ul className="space-y-3">
                    {[
                      "Analyse prédictive des risques",
                      "Recommandations personnalisées",
                      "Suivi en temps réel",
                      "Apprentissage continu"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg">
                  <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-center text-gray-700">
                    Notre IA analyse plus de 50 indicateurs pour vous proposer 
                    des solutions sur mesure et anticiper les besoins de vos équipes.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="results" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { label: "Satisfaction employés", value: 94 },
                    { label: "Réduction absentéisme", value: 76 },
                    { label: "Amélioration productivité", value: 34 },
                    { label: "Prévention burn-out", value: 95 }
                  ].map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{stat.label}</span>
                        <span className="font-bold text-blue-600">{stat.value}%</span>
                      </div>
                      <Progress value={stat.value} className="h-3" />
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <Award className="w-12 h-12 text-green-600 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Résultats Prouvés</h4>
                  <p className="text-gray-600 mb-4">
                    Plus de 500 entreprises nous font confiance et constatent 
                    des améliorations significatives dès les premières semaines.
                  </p>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-semibold">4.9/5</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez les entreprises qui ont choisi l'excellence en QVT
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => navigate('/entreprise/register')}
              >
                Commencer maintenant
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => navigate('/contact')}
              >
                Planifier une démo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConceptQVT;
