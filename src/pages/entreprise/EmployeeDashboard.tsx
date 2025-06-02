
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  TrendingUp, 
  FileText, 
  MessageCircle, 
  Gift,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EmployeeDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [teamInfo, setTeamInfo] = useState(null);
  const [qvtScores, setQvtScores] = useState([]);
  const [dailyTip, setDailyTip] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchDailyTip();
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

  const fetchDailyTip = () => {
    const tips = [
      "💪 Prenez 5 minutes pour respirer profondément aujourd'hui",
      "🌱 Hydratez-vous régulièrement pour maintenir votre énergie",
      "🚶‍♂️ Une petite marche peut faire des merveilles pour votre moral",
      "😊 Souriez ! Cela libère des endorphines naturelles",
      "🎯 Fixez-vous un petit objectif réalisable aujourd'hui"
    ];
    setDailyTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  const latestScore = qvtScores[0];
  const averageScore = qvtScores.length > 0 
    ? qvtScores.reduce((sum, score) => sum + score.qvt_score, 0) / qvtScores.length 
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* En-tête personnalisé */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              🌟 Bonjour {profile?.full_name || profile?.preferred_name || 'Cher collaborateur'} !
            </h1>
            <p className="text-lg text-gray-600 mb-4">Votre espace bien-être personnalisé</p>
            
            {/* Conseil du jour */}
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                  <p className="text-yellow-800 font-medium">{dailyTip}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tableau de bord personnel */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90">Mon Score QVT</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{latestScore?.qvt_score || 0}/100</div>
                <Progress value={latestScore?.qvt_score || 0} className="mt-2 bg-green-300" />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90">Ma Progression</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{Math.round(averageScore)}/100</div>
                <p className="text-xs opacity-90">Moyenne sur {qvtScores.length} tests</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-400 to-purple-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90">Niveau Stress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {latestScore?.burnout_risk_percentage || 0}%
                </div>
                <Badge className="mt-1 bg-purple-300 text-purple-800">
                  {latestScore?.burnout_risk === 'low' ? 'Faible' : 
                   latestScore?.burnout_risk === 'medium' ? 'Modéré' : 
                   latestScore?.burnout_risk === 'high' ? 'Élevé' : 'Non évalué'}
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90">Mon Équipe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{teamInfo?.teams?.name || 'Aucune'}</div>
                <p className="text-xs opacity-90">
                  {teamInfo ? 'Membre actif' : 'Non assigné'}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Actions principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Nouveau test QVT */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white cursor-pointer"
                  onClick={() => navigate('/entreprise/questionnaire')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-3" />
                  Évaluation QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Évaluez votre bien-être avec notre questionnaire personnalisé
                </p>
                <Button className="w-full bg-white text-blue-700 hover:bg-blue-50">
                  Commencer le test
                </Button>
              </CardContent>
            </Card>

            {/* Simulateur rapide */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-700 text-white cursor-pointer"
                  onClick={() => navigate('/entreprise/simulator')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-6 w-6 mr-3" />
                  Test Rapide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Évaluation express de votre situation actuelle
                </p>
                <Button className="w-full bg-white text-green-700 hover:bg-green-50">
                  Lancer le test
                </Button>
              </CardContent>
            </Card>

            {/* Ma Box QVT */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white cursor-pointer"
                  onClick={() => navigate('/entreprise/shop')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="h-6 w-6 mr-3" />
                  Ma Box QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Découvrez votre box mensuelle personnalisée
                </p>
                <Button className="w-full bg-white text-purple-700 hover:bg-purple-50">
                  Voir ma box
                </Button>
              </CardContent>
            </Card>

            {/* Recommandations */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-500 to-orange-700 text-white cursor-pointer"
                  onClick={() => navigate('/recommandations')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 mr-3" />
                  Mes Recommandations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Conseils personnalisés pour votre bien-être
                </p>
                <Button className="w-full bg-white text-orange-700 hover:bg-orange-50">
                  Voir mes conseils
                </Button>
              </CardContent>
            </Card>

            {/* Chat avec l'équipe */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-teal-500 to-teal-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Échange Équipe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Communiquez avec votre équipe et manager
                </p>
                <Button className="w-full bg-white text-teal-700 hover:bg-teal-50">
                  Accéder au chat
                </Button>
              </CardContent>
            </Card>

            {/* Support RH */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-500 to-pink-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  Support RH
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Contact direct avec les ressources humaines
                </p>
                <Button className="w-full bg-white text-pink-700 hover:bg-pink-50">
                  Contacter RH
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Historique récent avec design amélioré */}
          {qvtScores.length > 0 && (
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Mon Évolution QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {qvtScores.slice(0, 3).map((score, index) => (
                    <div key={score.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-100">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Score QVT: {score.qvt_score}/100</p>
                          <p className="text-sm text-gray-600">
                            {new Date(score.created_at).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={
                          score.burnout_risk === 'low' ? 'secondary' :
                          score.burnout_risk === 'medium' ? 'default' : 'destructive'
                        } className="mb-2">
                          {score.burnout_risk === 'low' ? '😊 Bien' : 
                           score.burnout_risk === 'medium' ? '😐 Attention' : '😟 À surveiller'}
                        </Badge>
                        <p className="text-sm text-gray-600">Stress: {score.burnout_risk_percentage}%</p>
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
