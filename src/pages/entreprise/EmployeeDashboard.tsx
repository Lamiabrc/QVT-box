
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { BarChart3, Users, Calendar, AlertCircle, TrendingUp, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EmployeeDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [teamInfo, setTeamInfo] = useState(null);
  const [qvtScores, setQvtScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      // Récupérer le profil utilisateur
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setProfile(profileData);

      // Récupérer les informations de l'équipe
      const { data: teamData } = await supabase
        .from('team_members')
        .select(`
          *,
          teams!inner(
            id,
            name,
            description,
            team_managers!inner(
              profiles!inner(full_name, email)
            )
          )
        `)
        .eq('employee_id', user.id)
        .single();

      setTeamInfo(teamData);

      // Récupérer les scores QVT récents
      const { data: scoresData } = await supabase
        .from('simulator_responses')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      setQvtScores(scoresData || []);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const latestScore = qvtScores[0];
  const averageScore = qvtScores.length > 0 
    ? qvtScores.reduce((sum, score) => sum + score.qvt_score, 0) / qvtScores.length 
    : 0;

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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              👋 Bonjour {profile?.full_name || profile?.email}
            </h1>
            <p className="text-gray-600">Espace Salarié - Tableau de bord QVT</p>
            {teamInfo && (
              <div className="mt-4 flex items-center space-x-4">
                <Badge variant="outline">
                  Équipe: {teamInfo.teams.name}
                </Badge>
                <Badge variant="secondary">
                  Manager: {teamInfo.teams.team_managers[0]?.profiles?.full_name}
                </Badge>
              </div>
            )}
          </div>

          {/* Statistiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Score QVT Actuel</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{latestScore?.qvt_score || 0}/100</div>
                <Progress value={latestScore?.qvt_score || 0} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Moyenne QVT</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{Math.round(averageScore)}/100</div>
                <p className="text-xs text-muted-foreground">
                  Sur {qvtScores.length} évaluations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risque Burnout</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {latestScore?.burnout_risk_percentage || 0}%
                </div>
                <Badge variant={
                  (latestScore?.burnout_risk_percentage || 0) > 70 ? 'destructive' :
                  (latestScore?.burnout_risk_percentage || 0) > 40 ? 'default' : 'secondary'
                }>
                  {latestScore?.burnout_risk || 'Non évalué'}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mon Équipe</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{teamInfo?.teams?.name || 'Aucune'}</div>
                <p className="text-xs text-muted-foreground">
                  {teamInfo ? 'Membre actif' : 'Non assigné'}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Actions rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate('/entreprise/questionnaire')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Nouvelle Évaluation QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Évaluez votre bien-être au travail avec notre questionnaire complet.
                </p>
                <Button className="w-full">Commencer l'évaluation</Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate('/entreprise/simulator')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Simulateur QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Test rapide pour évaluer votre situation actuelle.
                </p>
                <Button variant="outline" className="w-full">Lancer le simulateur</Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate('/recommandations')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Mes Recommandations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Consultez vos recommandations personnalisées.
                </p>
                <Button variant="outline" className="w-full">Voir les recommandations</Button>
              </CardContent>
            </Card>
          </div>

          {/* Historique récent */}
          {qvtScores.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Historique de vos Évaluations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {qvtScores.map((score, index) => (
                    <div key={score.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Score QVT: {score.qvt_score}/100</p>
                        <p className="text-sm text-gray-600">
                          {new Date(score.created_at).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant={
                          score.burnout_risk_percentage > 70 ? 'destructive' :
                          score.burnout_risk_percentage > 40 ? 'default' : 'secondary'
                        }>
                          Burnout: {score.burnout_risk_percentage}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmployeeDashboard;
