
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Users, TrendingUp, AlertTriangle, BarChart3, UserPlus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ManagerDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const [teams, setTeams] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamScores, setTeamScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchManagerData();
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
            profiles!inner(id, full_name, email),
            teams!inner(name)
          `)
          .in('team_id', teamIds);

        setTeamMembers(members || []);

        // Récupérer les scores QVT des membres
        if (members && members.length > 0) {
          const memberIds = members.map(m => m.profiles.id);
          const { data: scores } = await supabase
            .from('simulator_responses')
            .select('*')
            .in('user_id', memberIds)
            .order('created_at', { ascending: false });

          setTeamScores(scores || []);
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

  const getTeamAverageScore = (teamId) => {
    const teamMemberIds = teamMembers
      .filter(member => member.team_id === teamId)
      .map(member => member.profiles.id);
    
    const teamScoresData = teamScores.filter(score => 
      teamMemberIds.includes(score.user_id)
    );

    if (teamScoresData.length === 0) return 0;
    
    return Math.round(
      teamScoresData.reduce((sum, score) => sum + score.qvt_score, 0) / teamScoresData.length
    );
  };

  const getHighRiskMembers = (teamId) => {
    const teamMemberIds = teamMembers
      .filter(member => member.team_id === teamId)
      .map(member => member.profiles.id);
    
    return teamScores.filter(score => 
      teamMemberIds.includes(score.user_id) && 
      score.burnout_risk_percentage > 70
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              👔 Espace Manager d'Équipe
            </h1>
            <p className="text-gray-600">Gérez le bien-être de vos équipes</p>
          </div>

          {/* Vue d'ensemble */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Équipes Gérées</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{teams.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Collaborateurs</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{teamMembers.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Score Moyen Équipes</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {teams.length > 0 
                    ? Math.round(teams.reduce((sum, team) => sum + getTeamAverageScore(team.teams.id), 0) / teams.length)
                    : 0
                  }/100
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Alertes Burnout</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {teams.reduce((sum, team) => sum + getHighRiskMembers(team.teams.id).length, 0)}
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="teams" className="space-y-6">
            <TabsList>
              <TabsTrigger value="teams">Mes Équipes</TabsTrigger>
              <TabsTrigger value="members">Collaborateurs</TabsTrigger>
              <TabsTrigger value="alerts">Alertes</TabsTrigger>
            </TabsList>

            <TabsContent value="teams">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((teamManager) => {
                  const team = teamManager.teams;
                  const teamMembersCount = teamMembers.filter(member => member.team_id === team.id).length;
                  const avgScore = getTeamAverageScore(team.id);
                  const highRiskCount = getHighRiskMembers(team.id).length;

                  return (
                    <Card key={team.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{team.name}</span>
                          <Badge variant="outline">{teamMembersCount} membres</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Score moyen QVT</span>
                            <span className="font-semibold">{avgScore}/100</span>
                          </div>
                          
                          {highRiskCount > 0 && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Risque élevé</span>
                              <Badge variant="destructive">{highRiskCount} personne(s)</Badge>
                            </div>
                          )}
                          
                          <Button className="w-full" variant="outline">
                            Voir les détails
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="members">
              <Card>
                <CardHeader>
                  <CardTitle>Liste des Collaborateurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMembers.map((member) => {
                      const latestScore = teamScores
                        .filter(score => score.user_id === member.profiles.id)
                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];

                      return (
                        <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{member.profiles.full_name}</h4>
                            <p className="text-sm text-gray-600">{member.teams.name}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            {latestScore && (
                              <div className="text-right">
                                <p className="font-medium">QVT: {latestScore.qvt_score}/100</p>
                                <Badge variant={
                                  latestScore.burnout_risk_percentage > 70 ? 'destructive' :
                                  latestScore.burnout_risk_percentage > 40 ? 'default' : 'secondary'
                                }>
                                  Burnout: {latestScore.burnout_risk_percentage}%
                                </Badge>
                              </div>
                            )}
                            <Button size="sm" variant="outline">
                              Contacter
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alerts">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                    Alertes Burnout - Action Requise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teams.map((teamManager) => {
                      const highRiskMembers = getHighRiskMembers(teamManager.teams.id);
                      
                      if (highRiskMembers.length === 0) return null;

                      return (
                        <div key={teamManager.teams.id} className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-red-700">Équipe: {teamManager.teams.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {highRiskMembers.length} membre(s) à risque élevé de burnout
                          </p>
                          <div className="space-y-2">
                            {highRiskMembers.map((score) => {
                              const member = teamMembers.find(m => m.profiles.id === score.user_id);
                              return (
                                <div key={score.id} className="bg-red-50 p-3 rounded-lg">
                                  <p className="font-medium">{member?.profiles?.full_name}</p>
                                  <p className="text-sm text-red-600">
                                    Risque burnout: {score.burnout_risk_percentage}%
                                  </p>
                                  <Button size="sm" className="mt-2" variant="destructive">
                                    Prendre contact
                                  </Button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                    
                    {teams.every(team => getHighRiskMembers(team.teams.id).length === 0) && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Aucune alerte en cours. Toutes vos équipes sont en bonne santé ! 🎉</p>
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
