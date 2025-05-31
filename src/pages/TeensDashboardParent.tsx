
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Shield, TrendingUp, Calendar, AlertTriangle, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const TeensDashboardParent = () => {
  const navigate = useNavigate();

  // Mock data for teen's well-being evolution
  const wellbeingEvolution = [
    { month: 'Jan', score: 7.2 },
    { month: 'Fév', score: 7.8 },
    { month: 'Mar', score: 6.9 },
    { month: 'Avr', score: 8.1 },
    { month: 'Mai', score: 8.5 },
    { month: 'Jun', score: 9.0 }
  ];

  const moodDistribution = [
    { name: 'Très bien', value: 40, color: '#22c55e' },
    { name: 'Bien', value: 35, color: '#78A085' },
    { name: 'Moyen', value: 20, color: '#eab308' },
    { name: 'Difficile', value: 5, color: '#ef4444' }
  ];

  const recentActivities = [
    {
      date: "2024-05-25",
      activity: "Questionnaire bien-être complété",
      score: "9.0/15",
      mood: "😊",
      status: "positive"
    },
    {
      date: "2024-05-20",
      activity: "Box créativité reçue",
      feedback: "A adoré les activités artistiques",
      mood: "🎨",
      status: "positive"
    },
    {
      date: "2024-05-15",
      activity: "Période de stress détectée",
      note: "Examens approchants",
      mood: "😰",
      status: "attention"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-secondary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/teens')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'espace Teens</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-secondary" />
              <h1 className="text-xl font-bold text-secondary">Dashboard Parent</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction & Privacy Notice */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            👨‍👩‍👧‍👦 Suivi du Bien-être de votre Enfant
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Cette vue d'ensemble respecte l'intimité de votre adolescent tout en vous donnant 
            les informations essentielles pour l'accompagner au mieux.
          </p>
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-2xl px-4 py-2">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary">Données anonymisées et consentement respecté</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bien-être Global</CardTitle>
              <Heart className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">9.0/15</div>
              <p className="text-xs text-muted-foreground">
                📈 +1.5 ce mois-ci
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Humeur Générale</CardTitle>
              <span className="text-2xl">😊</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Positive</div>
              <p className="text-xs text-muted-foreground">
                75% de bonnes journées
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dernière Évaluation</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Il y a 3j</div>
              <p className="text-xs text-muted-foreground">
                Questionnaire complété
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertes</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">0</div>
              <p className="text-xs text-muted-foreground">
                Aucune préoccupation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Well-being Evolution */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution du Bien-être (6 derniers mois)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={wellbeingEvolution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[5, 12]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#78A085" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Mood Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Répartition des Humeurs (ce mois)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={moodDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {moodDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Activités Récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{activity.mood}</div>
                    <div>
                      <p className="font-medium">{activity.activity}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(activity.date).toLocaleDateString('fr-FR')}
                      </p>
                      {activity.score && (
                        <p className="text-sm text-secondary font-medium">Score: {activity.score}</p>
                      )}
                      {activity.feedback && (
                        <p className="text-sm text-muted-foreground italic">"{activity.feedback}"</p>
                      )}
                      {activity.note && (
                        <p className="text-sm text-orange-600">Note: {activity.note}</p>
                      )}
                    </div>
                  </div>
                  <Badge className={
                    activity.status === 'positive' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }>
                    {activity.status === 'positive' ? 'Positif' : 'Attention'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations for Parents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Conseils pour Vous</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-secondary">Points Positifs à Encourager ✅</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">•</span>
                    <span>Votre ado s'exprime bien sur ses émotions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">•</span>
                    <span>Participation active aux questionnaires</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">•</span>
                    <span>Amélioration constante du bien-être</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600">Points d'Attention 👀</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600">•</span>
                    <span>Stress lié aux examens à surveiller</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600">•</span>
                    <span>Maintenir la communication ouverte</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600">•</span>
                    <span>Encourager les activités relaxantes</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold mb-6">Actions Disponibles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('/recommandations')} className="rounded-2xl bg-secondary">
              Voir les recommandations familiales
            </Button>
            <Button onClick={() => navigate('/historique')} variant="outline" className="rounded-2xl">
              Consulter l'historique
            </Button>
            <Button onClick={() => navigate('/profil')} variant="outline" className="rounded-2xl">
              Gérer les paramètres
            </Button>
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="pt-6 text-center">
                <Shield className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Respect de la Vie Privée</h4>
                <p className="text-sm text-muted-foreground">
                  Ce dashboard ne montre que les informations essentielles. Les détails des réponses 
                  et commentaires personnels de votre adolescent restent confidentiels, conformément 
                  à nos engagements de respect de la vie privée des mineurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensDashboardParent;
