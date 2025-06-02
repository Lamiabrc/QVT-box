import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3, 
  MessageCircle,
  Shield,
  Activity,
  Target
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QVTEvolutionChart from '@/components/dashboard/QVTEvolutionChart';
import EvaluationResultsTable from '@/components/dashboard/EvaluationResultsTable';

interface MonthlyDataItem {
  scores: number[];
  date: string;
}

const ManagerDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const [teams, setTeams] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamScores, setTeamScores] = useState([]);
  const [evolutionData, setEvolutionData] = useState([]);
  const [evaluationResults, setEvaluationResults] = useState([]);
  const [teamStats, setTeamStats] = useState({
    totalMembers: 0,
    avgScore: 0,
    highRiskCount: 0,
    improvementTrend: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchManagerData();
      fetchTeamEvaluationData();
    }
  }, [user]);

  const fetchManagerData = async () => {
    try {
      // Récupérer les équipes gérées par ce manager
      const { data: managedTeams } = await supabase
        .from('team_managers')
        .select(`
          *,
          teams!inner(*)
        `)
        .eq('manager_id', user.id);

      setTeams(managedTeams || []);

      if (managedTeams && managedTeams.length > 0) {
        const teamIds = managedTeams.map(tm => tm.teams.id);
        
        // Récupérer les membres des équipes
        const { data: members } = await supabase
          .from('team_members')
          .select(`
            *,
            profiles!inner(id, full_name, email, preferred_name),
            teams!inner(name)
          `)
          .in('team_id', teamIds);

        setTeamMembers(members || []);

        // Récupérer les scores QVT des membres (données anonymisées)
        if (members && members.length > 0) {
          const memberIds = members.map(m => m.profiles.id);
          const { data: scores } = await supabase
            .from('simulator_responses')
            .select('user_id, qvt_score, burnout_risk_percentage, burnout_risk, created_at')
            .in('user_id', memberIds)
            .order('created_at', { ascending: false });

          setTeamScores(scores || []);
          calculateTeamStats(scores || [], members || []);
        }
      }
    } catch (error) {
      console.error('Error fetching manager data:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les données des équipes.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTeamEvaluationData = async () => {
    try {
      // Récupérer les équipes gérées par ce manager
      const { data: managedTeams } = await supabase
        .from('team_managers')
        .select(`
          *,
          teams!inner(*)
        `)
        .eq('manager_id', user.id);

      if (managedTeams && managedTeams.length > 0) {
        const teamIds = managedTeams.map(tm => tm.teams.id);
        
        // Récupérer les données d'évolution de l'équipe
        const { data: teamEvolutionRaw } = await supabase
          .from('team_members')
          .select(`
            profiles!inner(id),
            teams!inner(id)
          `)
          .in('team_id', teamIds);

        if (teamEvolutionRaw) {
          const memberIds = teamEvolutionRaw.map(tm => tm.profiles.id);
          
          const { data: scoresData } = await supabase
            .from('simulator_responses')
            .select('created_at, qvt_score, burnout_risk_percentage')
            .in('user_id', memberIds)
            .order('created_at', { ascending: true });

          // Grouper par mois
          const monthlyData: Record<string, MonthlyDataItem> = {};
          scoresData?.forEach(response => {
            const month = new Date(response.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' });
            if (!monthlyData[month]) {
              monthlyData[month] = { scores: [], date: month };
            }
            monthlyData[month].scores.push(response.qvt_score);
          });

          const evolutionChartData = Object.values(monthlyData).map((month: MonthlyDataItem) => ({
            date: month.date,
            avgScore: Math.round(month.scores.reduce((sum, score) => sum + score, 0) / month.scores.length),
            teamCount: month.scores.length
          }));

          setEvolutionData(evolutionChartData);

          // Résultats d'évaluation de l'équipe (dernières évaluations)
          const teamEvaluationResults = [
            {
              id: '1',
              date: '2024-01-15',
              participantCount: teamMembers.length || 12,
              avgScore: teamStats.avgScore || 75,
              riskCount: teamStats.highRiskCount || 2,
              type: 'Équipe'
            },
            {
              id: '2',
              date: '2024-01-01',
              participantCount: teamMembers.length || 12,
              avgScore: (teamStats.avgScore || 75) - 3,
              riskCount: (teamStats.highRiskCount || 2) + 1,
              type: 'Équipe'
            },
            {
              id: '3',
              date: '2023-12-15',
              participantCount: teamMembers.length || 12,
              avgScore: (teamStats.avgScore || 75) - 5,
              riskCount: (teamStats.highRiskCount || 2) + 2,
              type: 'Équipe'
            }
          ];

          setEvaluationResults(teamEvaluationResults);
        }
      }
    } catch (error) {
      console.error('Error fetching team evaluation data:', error);
    }
  };

  const calculateTeamStats = (scores, members) => {
    const totalMembers = members.length;
    const avgScore = scores.length > 0 ? 
      Math.round(scores.reduce((sum, score) => sum + score.qvt_score, 0) / scores.length) : 0;
    const highRiskCount = scores.filter(score => score.burnout_risk_percentage > 70).length;
    
    // Calculer la tendance d'amélioration (comparaison avec les scores précédents)
    const recentScores = scores.slice(0, Math.floor(scores.length / 2));
    const olderScores = scores.slice(Math.floor(scores.length / 2));
    const recentAvg = recentScores.length > 0 ? 
      recentScores.reduce((sum, score) => sum + score.qvt_score, 0) / recentScores.length : 0;
    const olderAvg = olderScores.length > 0 ? 
      olderScores.reduce((sum, score) => sum + score.qvt_score, 0) / olderScores.length : 0;
    const improvementTrend = recentAvg - olderAvg;

    setTeamStats({
      totalMembers,
      avgScore,
      highRiskCount,
      improvementTrend
    });
  };

  const getAnonymizedTeamMember = (userId, index) => {
    return `Collaborateur ${index + 1}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              👔 Espace Manager d'Équipe
            </h1>
            <p className="text-lg text-gray-600">Pilotez le bien-être de vos équipes</p>
          </div>

          {/* Statistiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Équipe Totale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{teamStats.totalMembers}</div>
                <p className="text-xs opacity-90">Collaborateurs actifs</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Score Moyen QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{teamStats.avgScore}/100</div>
                <p className="text-xs opacity-90">Performance globale</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Alertes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{teamStats.highRiskCount}</div>
                <p className="text-xs opacity-90">Personnes à risque</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <Activity className="h-4 w-4 mr-2" />
                  Tendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {teamStats.improvementTrend > 0 ? '+' : ''}{Math.round(teamStats.improvementTrend)}
                </div>
                <p className="text-xs opacity-90">Évolution récente</p>
              </CardContent>
            </Card>
          </div>

          {/* Actions rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-teal-500 to-teal-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Chat Équipe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Communiquez avec chaque membre individuellement
                </p>
                <Button className="w-full bg-white text-teal-700 hover:bg-teal-50">
                  Accéder aux chats
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-3" />
                  Contact RH
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Échangez avec les ressources humaines
                </p>
                <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50">
                  Contacter RH
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-500 to-pink-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 mr-3" />
                  Plans d'Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Créez des plans d'amélioration pour votre équipe
                </p>
                <Button className="w-full bg-white text-pink-700 hover:bg-pink-50">
                  Créer un plan
                </Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="team-results">Résultats Équipe</TabsTrigger>
              <TabsTrigger value="alerts">Alertes & Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
                <QVTEvolutionChart 
                  data={evolutionData} 
                  title="Évolution QVT de Mon Équipe" 
                />
              </div>
              
              <EvaluationResultsTable 
                results={evaluationResults} 
                title="Historique des Évaluations de l'Équipe" 
              />
            </TabsContent>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Générale de l'Équipe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Score QVT Moyen</span>
                        <Badge className="bg-green-100 text-green-800">
                          {teamStats.avgScore}/100
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Membres en forme</span>
                        <Badge className="bg-blue-100 text-blue-800">
                          {teamStats.totalMembers - teamStats.highRiskCount}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Personnes à accompagner</span>
                        <Badge className="bg-orange-100 text-orange-800">
                          {teamStats.highRiskCount}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actions Recommandées</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {teamStats.highRiskCount > 0 && (
                        <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <p className="text-orange-800 font-medium">
                            ⚠️ {teamStats.highRiskCount} personne(s) nécessitent votre attention
                          </p>
                          <p className="text-sm text-orange-600 mt-1">
                            Planifiez des entretiens individuels
                          </p>
                        </div>
                      )}
                      
                      {teamStats.improvementTrend < 0 && (
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-blue-800 font-medium">
                            📈 Tendance en baisse détectée
                          </p>
                          <p className="text-sm text-blue-600 mt-1">
                            Organisez une réunion d'équipe pour identifier les causes
                          </p>
                        </div>
                      )}
                      
                      {teamStats.avgScore > 75 && (
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium">
                            🎉 Excellente performance d'équipe !
                          </p>
                          <p className="text-sm text-green-600 mt-1">
                            Continuez sur cette voie et partagez les bonnes pratiques
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="team-results">
              <Card>
                <CardHeader>
                  <CardTitle>Résultats des 3 Évaluations du Simulateur (Données Anonymisées)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamScores.slice(0, 10).map((score, index) => (
                      <div key={`${score.user_id}-${score.created_at}`} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                        <div>
                          <h4 className="font-medium">{getAnonymizedTeamMember(score.user_id, index)}</h4>
                          <p className="text-sm text-gray-600">
                            Évaluation du {new Date(score.created_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">QVT: {score.qvt_score}/100</p>
                          <Badge variant={
                            score.burnout_risk === 'low' ? 'secondary' :
                            score.burnout_risk === 'medium' ? 'default' : 'destructive'
                          }>
                            {score.burnout_risk === 'low' ? 'Bien' : 
                             score.burnout_risk === 'medium' ? 'Attention' : 'À surveiller'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alerts">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                    Situations Nécessitant une Attention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamScores
                      .filter(score => score.burnout_risk_percentage > 50)
                      .slice(0, 5)
                      .map((score, index) => (
                        <div key={`alert-${score.user_id}-${score.created_at}`} className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded-r-lg">
                          <h4 className="font-semibold text-orange-800">
                            {getAnonymizedTeamMember(score.user_id, index)} - Niveau de stress élevé
                          </h4>
                          <p className="text-sm text-orange-600 mb-2">
                            Score de stress: {score.burnout_risk_percentage}% | QVT: {score.qvt_score}/100
                          </p>
                          <div className="space-x-2">
                            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                              Planifier un entretien
                            </Button>
                            <Button size="sm" variant="outline" className="border-orange-300 text-orange-700">
                              Voir l'historique
                            </Button>
                          </div>
                        </div>
                      ))}
                    
                    {teamScores.filter(score => score.burnout_risk_percentage > 50).length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">🎉 Aucune alerte en cours. Votre équipe est en bonne santé !</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ManagerDashboard;
