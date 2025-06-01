
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthGuard from "@/components/AuthGuard";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Users, TrendingUp, AlertTriangle, Star, Shield } from "lucide-react";

interface DashboardStats {
  totalUsers: number;
  totalEvaluations: number;
  averageQVTScore: number;
  highRiskUsers: number;
  satisfactionRate: number;
}

interface QVTDistribution {
  range: string;
  count: number;
  percentage: number;
}

interface BurnoutRiskData {
  risk: string;
  count: number;
  color: string;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const { user, isAdmin, loading: authLoading, requireAdmin } = useSecureAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalEvaluations: 0,
    averageQVTScore: 0,
    highRiskUsers: 0,
    satisfactionRate: 0
  });
  const [qvtDistribution, setQVTDistribution] = useState<QVTDistribution[]>([]);
  const [burnoutData, setBurnoutData] = useState<BurnoutRiskData[]>([]);
  const [recentEvaluations, setRecentEvaluations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && user) {
      if (isAdmin) {
        fetchDashboardData();
      } else {
        toast({
          variant: "destructive",
          title: "Accès refusé",
          description: "Vous devez avoir les privilèges administrateur pour accéder à cette page.",
        });
      }
    }
  }, [authLoading, user, isAdmin]);

  const fetchDashboardData = async () => {
    try {
      if (!requireAdmin()) {
        return;
      }

      setLoading(true);

      // Fetch simulator responses with proper RLS
      const { data: responses, error: responsesError } = await supabase
        .from('simulator_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (responsesError) throw responsesError;

      // Fetch user feedback with proper RLS
      const { data: feedback, error: feedbackError } = await supabase
        .from('user_feedback')
        .select('*');

      if (feedbackError) throw feedbackError;

      // Calculate stats
      const totalEvaluations = responses?.length || 0;
      const totalUsers = new Set(responses?.map(r => r.user_id)).size || 0;
      const averageQVTScore = responses?.length ? 
        responses.reduce((sum, r) => sum + r.qvt_score, 0) / responses.length : 0;
      const highRiskUsers = responses?.filter(r => r.burnout_risk === 'Élevé').length || 0;
      const positiveFeeback = feedback?.filter(f => f.feedback_type === 'like').length || 0;
      const satisfactionRate = feedback?.length ? (positiveFeeback / feedback.length) * 100 : 0;

      setStats({
        totalUsers,
        totalEvaluations,
        averageQVTScore: Math.round(averageQVTScore * 10) / 10,
        highRiskUsers,
        satisfactionRate: Math.round(satisfactionRate)
      });

      // Calculate QVT score distribution
      const distribution = [
        { range: "1-5 (Critique)", count: 0, percentage: 0 },
        { range: "6-10 (Modéré)", count: 0, percentage: 0 },
        { range: "11-15 (Bon)", count: 0, percentage: 0 }
      ];

      responses?.forEach(r => {
        if (r.qvt_score <= 5) distribution[0].count++;
        else if (r.qvt_score <= 10) distribution[1].count++;
        else distribution[2].count++;
      });

      distribution.forEach(d => {
        d.percentage = totalEvaluations ? Math.round((d.count / totalEvaluations) * 100) : 0;
      });

      setQVTDistribution(distribution);

      // Calculate burnout risk distribution
      const burnoutRisks = ['Faible', 'Modéré', 'Élevé'];
      const burnoutColors = ['#10b981', '#f59e0b', '#ef4444'];
      const burnoutDistribution = burnoutRisks.map((risk, index) => ({
        risk,
        count: responses?.filter(r => r.burnout_risk === risk).length || 0,
        color: burnoutColors[index]
      }));

      setBurnoutData(burnoutDistribution);

      // Set recent evaluations
      setRecentEvaluations(responses?.slice(0, 10) || []);

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

  const exportData = async () => {
    try {
      if (!requireAdmin()) {
        return;
      }

      const { data: responses } = await supabase
        .from('simulator_responses')
        .select('*')
        .csv();

      if (responses) {
        const blob = new Blob([responses], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `qvt-evaluations-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
      }

      toast({
        title: "Export réussi",
        description: "Les données ont été exportées en CSV.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur d'export",
        description: "Impossible d'exporter les données.",
      });
    }
  };

  if (authLoading || loading) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement du tableau de bord...</p>
          </div>
        </div>
      </AuthGuard>
    );
  }

  if (!isAdmin) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-red-600">Accès Refusé</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Vous devez avoir les privilèges administrateur pour accéder à cette page.
              </p>
              <Button onClick={() => window.history.back()}>
                Retour
              </Button>
            </CardContent>
          </Card>
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-gray-50 py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Admin</h1>
                <p className="text-gray-600">Analysez les données QVT de votre organisation</p>
                <div className="flex items-center mt-2 text-green-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm">Accès sécurisé administrateur</span>
                </div>
              </div>
              <Button onClick={exportData} className="bg-green-600 hover:bg-green-700">
                Exporter les données
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.totalUsers}</p>
                      <p className="text-sm text-gray-600">Utilisateurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.totalEvaluations}</p>
                      <p className="text-sm text-gray-600">Évaluations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <Star className="h-8 w-8 text-amber-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.averageQVTScore}/15</p>
                      <p className="text-sm text-gray-600">Score QVT moyen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.highRiskUsers}</p>
                      <p className="text-sm text-gray-600">Risque élevé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">%</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.satisfactionRate}%</p>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="analytics" className="space-y-6">
              <TabsList>
                <TabsTrigger value="analytics">Analyses</TabsTrigger>
                <TabsTrigger value="evaluations">Évaluations récentes</TabsTrigger>
              </TabsList>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Distribution des scores QVT</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={qvtDistribution}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="range" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="count" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Risque de burnout</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={burnoutData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            dataKey="count"
                            label={({ risk, count }) => `${risk}: ${count}`}
                          >
                            {burnoutData.map((entry, index) => (
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

              <TabsContent value="evaluations">
                <Card>
                  <CardHeader>
                    <CardTitle>Évaluations récentes</CardTitle>
                    <CardDescription>
                      Les 10 dernières évaluations effectuées
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentEvaluations.map((evaluation, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Score QVT: {evaluation.qvt_score}/15</p>
                            <p className="text-sm text-gray-600">
                              Contexte: {evaluation.context} | 
                              Bonheur: {evaluation.happiness_score}/100
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(evaluation.created_at).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          <Badge 
                            variant={
                              evaluation.burnout_risk === 'Élevé' ? 'destructive' : 
                              evaluation.burnout_risk === 'Modéré' ? 'secondary' : 'default'
                            }
                          >
                            {evaluation.burnout_risk}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default AdminDashboard;
