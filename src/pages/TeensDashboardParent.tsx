
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
      activity: "Check-in quotidien complété",
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
      activity: "Signal envoyé",
      note: "En soirée chez Emma",
      mood: "🎉",
      status: "info"
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
              <Heart className="w-5 h-5 text-pink-500" />
              <h1 className="text-xl font-bold text-secondary">Suivi Bien-être - Alex</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction & Privacy Notice */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            💝 Bien-être de votre Ado
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Cette vue d'ensemble respecte l'intimité de votre adolescent tout en vous donnant 
            les informations essentielles pour l'accompagner avec bienveillance.
          </p>
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-2xl px-4 py-2">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary">Données partagées avec consentement mutuel</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bien-être Global</CardTitle>
              <Heart className="h-4 w-4 text-pink-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-600">9.0/15</div>
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
              <div className="text-2xl font-bold text-green-600">Épanouie</div>
              <p className="text-xs text-muted-foreground">
                75% de bonnes journées
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dernier Check-in</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Hier</div>
              <p className="text-xs text-muted-foreground">
                Régularité excellente
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Communication</CardTitle>
              <AlertTriangle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Fluide</div>
              <p className="text-xs text-muted-foreground">
                3 signaux cette semaine
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
                  <Line type="monotone" dataKey="score" stroke="#ec4899" strokeWidth={3} />
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
                        <p className="text-sm text-pink-600 font-medium">Score: {activity.score}</p>
                      )}
                      {activity.feedback && (
                        <p className="text-sm text-muted-foreground italic">"{activity.feedback}"</p>
                      )}
                      {activity.note && (
                        <p className="text-sm text-blue-600">Note: {activity.note}</p>
                      )}
                    </div>
                  </div>
                  <Badge className={
                    activity.status === 'positive' 
                      ? 'bg-green-100 text-green-800' 
                      : activity.status === 'info'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-orange-100 text-orange-800'
                  }>
                    {activity.status === 'positive' ? 'Positif' : activity.status === 'info' ? 'Info' : 'Attention'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations for Parents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Conseils Personnalisés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600">Points Positifs à Encourager ✅</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">•</span>
                    <span>Alex communique très bien ses émotions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">•</span>
                    <span>Excellent engagement avec les check-ins quotidiens</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">•</span>
                    <span>Progrès constant dans la gestion du stress</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-600">Suggestions d'Accompagnement 💡</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Continuez les moments en famille créatifs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Encouragez les activités artistiques</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Maintenez la communication ouverte et positive</span>
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
            <Button onClick={() => navigate('/teens/family-space')} className="rounded-2xl bg-pink-500 hover:bg-pink-600">
              Espace famille
            </Button>
            <Button onClick={() => navigate('/recommandations')} variant="outline" className="rounded-2xl">
              Voir les recommandations
            </Button>
            <Button onClick={() => navigate('/historique')} variant="outline" className="rounded-2xl">
              Consulter l'historique
            </Button>
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6 text-center">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Accompagnement Bienveillant</h4>
                <p className="text-sm text-muted-foreground">
                  Ce dashboard partage uniquement les informations qu'Alex a choisi de partager. 
                  L'objectif est de favoriser la communication et le soutien mutuel dans le respect 
                  de son intimité et de son autonomie.
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
