
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Shield, Bell, BarChart3, MessageCircle, Settings, Users, Heart, AlertTriangle, ArrowLeft } from "lucide-react";
import TeensHeader from "@/components/teens/TeensHeader";

const TeensParentalAccessDashboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      message: "Léa a envoyé une alerte 'En soirée'",
      time: "Il y a 15 min",
      urgent: false
    },
    {
      id: 2,
      type: "mood",
      message: "Mood de Jules: Plutôt stressé 😰",
      time: "Il y a 1h",
      urgent: true
    },
    {
      id: 3,
      type: "checkin",
      message: "Check-in quotidien de Léa terminé",
      time: "Il y a 2h",
      urgent: false
    }
  ]);

  const weeklyStats = {
    "Léa": { mood: 7.5, activities: 12, alerts: 2 },
    "Jules": { mood: 6.2, activities: 8, alerts: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <TeensHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/teens')}
            className="text-blue-600 hover:bg-blue-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au dashboard
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ACCÈS PARENTAL SÉCURISÉ 🛡️
          </h1>
          <p className="text-xl text-gray-600">
            Accompagnez vos enfants avec bienveillance et sécurité
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard" className="font-bold">📊 TABLEAU DE BORD</TabsTrigger>
            <TabsTrigger value="notifications" className="font-bold">🔔 ALERTES</TabsTrigger>
            <TabsTrigger value="family" className="font-bold">👨‍👩‍👧‍👦 FAMILLE</TabsTrigger>
            <TabsTrigger value="settings" className="font-bold">⚙️ PARAMÈTRES</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(weeklyStats).map(([child, stats]) => (
                <Card key={child} className="border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-blue-800 flex items-center gap-2">
                      <Heart className="h-8 w-8 text-red-500" />
                      Bien-être de {child}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      Résumé de la semaine
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center bg-white p-4 rounded-xl border-2 border-green-300">
                        <div className="text-3xl font-black text-green-600">{stats.mood}/10</div>
                        <p className="text-sm font-medium text-green-700">Mood moyen</p>
                      </div>
                      <div className="text-center bg-white p-4 rounded-xl border-2 border-blue-300">
                        <div className="text-3xl font-black text-blue-600">{stats.activities}</div>
                        <p className="text-sm font-medium text-blue-700">Activités</p>
                      </div>
                      <div className="text-center bg-white p-4 rounded-xl border-2 border-orange-300">
                        <div className="text-3xl font-black text-orange-600">{stats.alerts}</div>
                        <p className="text-sm font-medium text-orange-700">Alertes</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-blue-500 hover:bg-blue-600 font-bold"
                        onClick={() => navigate('/teens/check-in')}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Envoyer un message
                      </Button>
                      <Button variant="outline" className="flex-1 font-bold">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Voir détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="border-4 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-red-800 flex items-center gap-2">
                  <Bell className="h-8 w-8" />
                  NOTIFICATIONS & ALERTES
                </CardTitle>
                <CardDescription className="text-red-700 font-medium">
                  Restez informé en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notif) => (
                  <div 
                    key={notif.id}
                    className={`p-4 rounded-xl border-2 ${
                      notif.urgent ? 'bg-red-100 border-red-300' : 'bg-white border-gray-300'
                    } flex items-center justify-between`}
                  >
                    <div className="flex items-center gap-3">
                      {notif.urgent && <AlertTriangle className="h-5 w-5 text-red-500" />}
                      <div>
                        <p className="font-medium text-gray-800">{notif.message}</p>
                        <p className="text-sm text-gray-600">{notif.time}</p>
                      </div>
                    </div>
                    <Badge className={`${notif.urgent ? 'bg-red-400' : 'bg-blue-400'} text-white font-bold`}>
                      {notif.urgent ? 'URGENT' : 'INFO'}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family">
            <Card className="border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-purple-800 flex items-center gap-2">
                  <Users className="h-8 w-8" />
                  GESTION FAMILLE
                </CardTitle>
                <CardDescription className="text-purple-700 font-medium">
                  Gérez les accès et permissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-100 p-4 rounded-xl border-4 border-green-300">
                  <h4 className="font-black text-green-800 mb-2">🔒 SÉCURITÉ FAMILLE</h4>
                  <p className="text-sm text-green-700 mb-3">
                    Seuls les membres que vous approuvez peuvent accéder à l'espace famille.
                  </p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white font-bold">
                    <Shield className="mr-2 h-4 w-4" />
                    Gérer les autorisations
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border-2 border-gray-300">
                    <h5 className="font-bold text-gray-800 mb-2">Enfants connectés</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span>Léa (17 ans) - En ligne</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span>Jules (14 ans) - Hors ligne</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border-2 border-gray-300">
                    <h5 className="font-bold text-gray-800 mb-2">Actions rapides</h5>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full text-left justify-start">
                        Ajouter un membre famille
                      </Button>
                      <Button variant="outline" className="w-full text-left justify-start">
                        Configurer les alertes
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="border-4 border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gray-800 flex items-center gap-2">
                  <Settings className="h-8 w-8" />
                  PARAMÈTRES PARENTAUX
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800">Notifications</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <span>Alertes urgentes (SMS + Email)</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <span>Check-ins quotidiens</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span>Rapports hebdomadaires</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800">Abonnement</h4>
                    <div className="bg-blue-100 p-4 rounded-xl border-2 border-blue-300">
                      <p className="font-bold text-blue-800">Formule Complète</p>
                      <p className="text-sm text-blue-700">19.99€/mois</p>
                      <Button 
                        variant="outline" 
                        className="mt-2"
                        onClick={() => navigate('/pricing')}
                      >
                        Gérer l'abonnement
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeensParentalAccessDashboard;
