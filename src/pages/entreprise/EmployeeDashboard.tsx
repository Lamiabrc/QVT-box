
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Brain, 
  TrendingUp, 
  Gift, 
  MessageCircle,
  Target,
  Users,
  Heart,
  Star,
  Zap,
  Coffee,
  Lightbulb,
  ArrowRight,
  Play,
  Calendar,
  Award
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EmployeeDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const [personalStats, setPersonalStats] = useState({
    lastQVTScore: 0,
    evolutionTrend: 0,
    riskLevel: 'low',
    boxStatus: 'preparing'
  });
  const [dailyTip, setDailyTip] = useState('');
  const [teamMessages, setTeamMessages] = useState([]);
  const [hrMessages, setHrMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchPersonalData();
      generateDailyTip();
    }
  }, [user]);

  const fetchPersonalData = async () => {
    try {
      // Récupérer les derniers scores QVT de l'utilisateur
      const { data: scores } = await supabase
        .from('simulator_responses')
        .select('qvt_score, burnout_risk, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (scores && scores.length > 0) {
        const lastScore = scores[0].qvt_score;
        const trend = scores.length > 1 ? lastScore - scores[1].qvt_score : 0;
        
        setPersonalStats({
          lastQVTScore: lastScore,
          evolutionTrend: trend,
          riskLevel: scores[0].burnout_risk,
          boxStatus: 'preparing'
        });
      }

      // Simuler des messages d'équipe
      setTeamMessages([
        { id: 1, sender: 'Marie', message: 'Super présentation aujourd\'hui ! 👏', time: '10:30' },
        { id: 2, sender: 'Thomas', message: 'Qui veut prendre un café ? ☕', time: '14:15' }
      ]);

      setHrMessages([
        { id: 1, message: 'Votre demande de formation a été approuvée', urgent: false, time: '09:00' },
        { id: 2, message: 'Rappel: Entretien annuel la semaine prochaine', urgent: true, time: 'Hier' }
      ]);

    } catch (error) {
      console.error('Error fetching personal data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateDailyTip = () => {
    const tips = [
      "🌱 Prenez 5 minutes pour une pause méditation",
      "💪 Faites quelques étirements à votre bureau",
      "🥗 Pensez à vous hydrater régulièrement",
      "😊 Souriez, cela libère des endorphines !",
      "🎯 Définissez 3 objectifs prioritaires pour aujourd'hui",
      "🌟 Célébrez vos petites victoires quotidiennes"
    ];
    setDailyTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  const getRiskColor = (level) => {
    switch(level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskText = (level) => {
    switch(level) {
      case 'low': return 'Excellent';
      case 'medium': return 'À surveiller';
      case 'high': return 'Attention requise';
      default: return 'Non évalué';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              🌟 Mon Espace Bien-être
            </h1>
            <p className="text-lg text-gray-600">Votre compagnon quotidien pour une meilleure qualité de vie au travail</p>
          </div>

          {/* Conseil du jour */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-8 w-8" />
                  <div>
                    <h3 className="font-bold text-lg">💡 Conseil du jour</h3>
                    <p className="text-lg opacity-90">{dailyTip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistiques personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <Brain className="h-4 w-4 mr-2" />
                  Mon Score QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{personalStats.lastQVTScore}/100</div>
                <p className="text-xs opacity-90">Dernière évaluation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Évolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {personalStats.evolutionTrend > 0 ? '+' : ''}{personalStats.evolutionTrend}
                </div>
                <p className="text-xs opacity-90">Points ce mois</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <Heart className="h-4 w-4 mr-2" />
                  Mon État
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">{getRiskText(personalStats.riskLevel)}</div>
                <p className="text-xs opacity-90">Niveau de bien-être</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white transform hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <Gift className="h-4 w-4 mr-2" />
                  Ma Box QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">En préparation</div>
                <p className="text-xs opacity-90">Livraison prévue</p>
              </CardContent>
            </Card>
          </div>

          {/* Actions rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-6 w-6 mr-3" />
                  Nouveau Test QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Évaluez votre bien-être actuel avec notre simulateur
                </p>
                <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50">
                  <Zap className="h-4 w-4 mr-2" />
                  Commencer le test
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-teal-500 to-teal-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 mr-3" />
                  Mes Recommandations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Découvrez vos conseils personnalisés
                </p>
                <Button className="w-full bg-white text-teal-700 hover:bg-teal-50">
                  <Star className="h-4 w-4 mr-2" />
                  Voir mes conseils
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-500 to-orange-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="h-6 w-6 mr-3" />
                  Boutique QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Explorez notre catalogue bien-être
                </p>
                <Button className="w-full bg-white text-orange-700 hover:bg-orange-50">
                  <Award className="h-4 w-4 mr-2" />
                  Découvrir
                </Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="evolution">Mon Évolution</TabsTrigger>
              <TabsTrigger value="team-chat">Chat Équipe</TabsTrigger>
              <TabsTrigger value="hr-support">Support RH</TabsTrigger>
              <TabsTrigger value="recommendations">Conseils</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      Mes Prochaines Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium">Prochain test QVT</p>
                          <p className="text-sm text-gray-600">Dans 2 semaines</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">À venir</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <p className="font-medium">Formation bien-être</p>
                          <p className="text-sm text-gray-600">Mercredi 14h</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Inscrit</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div>
                          <p className="font-medium">Livraison Box QVT</p>
                          <p className="text-sm text-gray-600">Fin du mois</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">Prévu</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-red-600" />
                      Mon Bien-être Actuel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getRiskColor(personalStats.riskLevel)}`}>
                        {getRiskText(personalStats.riskLevel)}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Niveau de stress</span>
                        <div className="flex items-center">
                          <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="h-2 bg-green-500 rounded-full" style={{width: '30%'}}></div>
                          </div>
                          <span className="text-sm">Faible</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Motivation</span>
                        <div className="flex items-center">
                          <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="h-2 bg-blue-500 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-sm">Élevée</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Équilibre vie pro/perso</span>
                        <div className="flex items-center">
                          <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="h-2 bg-purple-500 rounded-full" style={{width: '70%'}}></div>
                          </div>
                          <span className="text-sm">Bon</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="evolution">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>📈 Mon Évolution QVT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <p className="text-gray-500">Graphique d'évolution de vos scores QVT</p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{personalStats.lastQVTScore}</div>
                      <p className="text-sm text-gray-600">Score actuel</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+{Math.abs(personalStats.evolutionTrend)}</div>
                      <p className="text-sm text-gray-600">Progression</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">85</div>
                      <p className="text-sm text-gray-600">Objectif</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team-chat">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    💬 Chat Équipe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                    {teamMessages.map((msg) => (
                      <div key={msg.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-sm text-blue-600">{msg.sender}</p>
                            <p className="text-gray-800">{msg.message}</p>
                          </div>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      placeholder="Tapez votre message..." 
                      className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hr-support">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-purple-600" />
                    🆘 Support RH & QVT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {hrMessages.map((msg) => (
                      <div key={msg.id} className={`p-4 rounded-lg ${msg.urgent ? 'bg-red-50 border-l-4 border-red-500' : 'bg-blue-50 border-l-4 border-blue-500'}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{msg.message}</p>
                            {msg.urgent && <Badge className="mt-2 bg-red-100 text-red-800">Urgent</Badge>}
                          </div>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contacter les RH
                    </Button>
                    <Button variant="outline" className="border-purple-300 text-purple-700">
                      <Heart className="h-4 w-4 mr-2" />
                      Demande de soutien
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-orange-600" />
                      🎯 Recommandations Personnalisées
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                        <h4 className="font-medium text-blue-800">💪 Activité Physique</h4>
                        <p className="text-sm text-blue-600">Intégrez 15 min de marche après le déjeuner</p>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                        <h4 className="font-medium text-green-800">🧘 Gestion du Stress</h4>
                        <p className="text-sm text-green-600">Pratiquez la respiration profonde 5 min/jour</p>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                        <h4 className="font-medium text-purple-800">⚖️ Équilibre Vie Pro/Perso</h4>
                        <p className="text-sm text-purple-600">Définissez des horaires de déconnexion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Coffee className="h-5 w-5 mr-2 text-brown-600" />
                      ☕ Conseils du Jour
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">🌅</div>
                          <div>
                            <h4 className="font-medium">Commencez bien la journée</h4>
                            <p className="text-sm text-gray-600">Prenez 5 minutes pour planifier vos priorités</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">❤️</div>
                          <div>
                            <h4 className="font-medium">Pensée positive</h4>
                            <p className="text-sm text-gray-600">Notez 3 choses positives de votre journée</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Voir plus de conseils
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmployeeDashboard;
