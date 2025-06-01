
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import AuthGuard from "@/components/AuthGuard";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Users, TrendingUp, AlertTriangle, Calendar, Target, ArrowLeft, BarChart3, PieChart as PieChartIcon } from "lucide-react";

interface UserStats {
  totalEvaluations: number;
  averageQVTScore: number;
  lastEvaluationDate: string;
  burnoutRisk: string;
}

interface TeamOverview {
  department: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
}

const EntrepriseDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userStats, setUserStats] = useState<UserStats>({
    totalEvaluations: 0,
    averageQVTScore: 0,
    lastEvaluationDate: '',
    burnoutRisk: 'Faible'
  });
  const [teamData, setTeamData] = useState<TeamOverview[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data pour la démonstration
  const qvtEvolution = [
    { month: 'Jan', score: 8.2 },
    { month: 'Fév', score: 8.5 },
    { month: 'Mar', score: 7.8 },
    { month: 'Avr', score: 8.1 },
    { month: 'Mai', score: 8.7 },
    { month: 'Jun', score: 9.1 }
  ];

  const wellbeingDistribution = [
    { name: 'Excellent', value: 35, color: '#10b981' },
    { name: 'Bon', value: 40, color: '#3b82f6' },
    { name: 'Moyen', value: 20, color: '#f59e0b' },
    { name: 'Faible', value: 5, color: '#ef4444' }
  ];

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Récupérer les données utilisateur
      const { data: userResponses } = await supabase
        .from('simulator_responses')
        .select('*')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
        .order('created_at', { ascending: false });

      if (userResponses && userResponses.length > 0) {
        const totalEvaluations = userResponses.length;
        const averageQVTScore = userResponses.reduce((sum, r) => sum + r.qvt_score, 0) / userResponses.length;
        const lastEvaluation = userResponses[0];
        
        setUserStats({
          totalEvaluations,
          averageQVTScore: Math.round(averageQVTScore * 10) / 10,
          lastEvaluationDate: new Date(lastEvaluation.created_at).toLocaleDateString('fr-FR'),
          burnoutRisk: lastEvaluation.burnout_risk
        });
      }

      // Mock team data
      setTeamData([
        { department: 'RH', score: 9.2, trend: 'up' },
        { department: 'IT', score: 8.8, trend: 'stable' },
        { department: 'Marketing', score: 8.5, trend: 'up' },
        { department: 'Ventes', score: 7.9, trend: 'down' },
        { department: 'Finance', score: 8.3, trend: 'up' }
      ]);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les données du tableau de bord.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement du tableau de bord...</p>
          </div>
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
        {/* Header */}
        <header className="border-b bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/entreprise')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour à l'espace Entreprise</span>
              </Button>
              <h1 className="text-xl font-bold text-primary">Mon Dashboard QVT</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Personal Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mes Évaluations</CardTitle>
                <BarChart3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{userStats.totalEvaluations}</div>
                <p className="text-xs text-muted-foreground">
                  Dernière: {userStats.lastEvaluationDate || 'Aucune'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Score QVT Moyen</CardTitle>
                <TrendingUp className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">{userStats.averageQVTScore}/15</div>
                <p className="text-xs text-muted-foreground">
                  Sur vos évaluations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risque Burnout</CardTitle>
                <AlertTriangle className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-500">{userStats.burnoutRisk}</div>
                <p className="text-xs text-muted-foreground">
                  Dernière évaluation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Actions</CardTitle>
                <Target className="h-4 w-4 text-accent-foreground" />
              </CardHeader>
              <CardContent>
                <Button 
                  size="sm" 
                  onClick={() => navigate('/entreprise/questionnaire')}
                  className="w-full"
                >
                  Nouvelle évaluation
                </Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="team">Équipe</TabsTrigger>
              <TabsTrigger value="trends">Tendances</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal QVT Evolution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Mon Évolution QVT</CardTitle>
                    <CardDescription>Score QVT sur les 6 derniers mois</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={qvtEvolution}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[6, 10]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="score" stroke="#005B5F" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Wellbeing Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Répartition Bien-être Équipe</CardTitle>
                    <CardDescription>Distribution actuelle dans votre organisation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={wellbeingDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {wellbeingDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="team" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scores par Département</CardTitle>
                  <CardDescription>Vue d'ensemble des départements de votre organisation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamData.map((dept, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="font-medium">{dept.department}</div>
                          <Badge variant="outline">
                            Score: {dept.score}/10
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp 
                            className={`w-4 h-4 ${
                              dept.trend === 'up' ? 'text-green-600' : 
                              dept.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                            }`} 
                          />
                          <span className="text-sm text-gray-600 capitalize">{dept.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <div className="grid grid-cols-1 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Tendances Organisationnelles</CardTitle>
                    <CardDescription>Évolution générale de la QVT dans votre entreprise</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={teamData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="department" />
                        <YAxis domain={[6, 10]} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#78A085" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('/entreprise/questionnaire')} className="rounded-2xl">
              <Calendar className="w-4 h-4 mr-2" />
              Nouvelle évaluation QVT
            </Button>
            <Button onClick={() => navigate('/entreprise/simulator')} variant="outline" className="rounded-2xl">
              Simulateur QVT
            </Button>
            <Button onClick={() => navigate('/recommandations')} variant="outline" className="rounded-2xl">
              Mes recommandations
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default EntrepriseDashboard;
