
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, Users, Calendar, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const EntrepriseDashboard = () => {
  const navigate = useNavigate();

  // Mock data for demonstrations
  const qvtEvolution = [
    { month: 'Jan', score: 8.2 },
    { month: 'Fév', score: 8.5 },
    { month: 'Mar', score: 7.8 },
    { month: 'Avr', score: 8.1 },
    { month: 'Mai', score: 8.7 },
    { month: 'Jun', score: 9.1 }
  ];

  const departmentScores = [
    { department: 'RH', score: 9.2 },
    { department: 'IT', score: 8.8 },
    { department: 'Marketing', score: 8.5 },
    { department: 'Ventes', score: 7.9 },
    { department: 'Finance', score: 8.3 }
  ];

  const alertsData = [
    { name: 'Stress élevé', value: 23, color: '#ef4444' },
    { name: 'Fatigue', value: 18, color: '#f97316' },
    { name: 'Démotivation', value: 12, color: '#eab308' },
    { name: 'Conflits', value: 7, color: '#005B5F' }
  ];

  return (
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
            <h1 className="text-xl font-bold text-primary">Dashboard RH - Analytics QVT</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Score QVT Moyen</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">8.6/15</div>
              <p className="text-xs text-muted-foreground">
                +0.4 vs mois dernier
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Participation</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">87%</div>
              <p className="text-xs text-muted-foreground">
                156/180 collaborateurs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertes Actives</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">12</div>
              <p className="text-xs text-muted-foreground">
                Nécessitent attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Box Envoyées</CardTitle>
              <Target className="h-4 w-4 text-accent-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent-foreground">34</div>
              <p className="text-xs text-muted-foreground">
                Ce mois-ci
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* QVT Evolution */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution du Score QVT</CardTitle>
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

          {/* Department Scores */}
          <Card>
            <CardHeader>
              <CardTitle>Scores QVT par Département</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentScores}>
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

        {/* Alerts and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Alerts Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Répartition des Alertes</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={alertsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {alertsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions Récentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-sm">Box Anti-Stress envoyée</p>
                  <p className="text-xs text-muted-foreground">Département IT - 8 collaborateurs</p>
                </div>
                <Badge variant="outline">Aujourd'hui</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-sm">Alerte fatigue détectée</p>
                  <p className="text-xs text-muted-foreground">Équipe Marketing - Action requise</p>
                </div>
                <Badge variant="secondary">Hier</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-sm">Questionnaire complété</p>
                  <p className="text-xs text-muted-foreground">87% de participation atteinte</p>
                </div>
                <Badge variant="outline">Il y a 2 jours</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button onClick={() => navigate('/entreprise/questionnaire')} className="rounded-2xl">
            <Calendar className="w-4 h-4 mr-2" />
            Lancer un nouveau questionnaire
          </Button>
          <Button onClick={() => navigate('/recommandations')} variant="outline" className="rounded-2xl">
            Voir les recommandations IA
          </Button>
          <Button onClick={() => navigate('/historique')} variant="outline" className="rounded-2xl">
            Consulter l'historique
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseDashboard;
