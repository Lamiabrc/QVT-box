
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Settings, Package, DollarSign, BarChart3, AlertTriangle } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const teamStats = [
    { name: "Marketing", employees: 12, budget: 2400, usage: 78 },
    { name: "IT", employees: 8, budget: 1600, usage: 92 },
    { name: "Ventes", employees: 15, budget: 3000, usage: 65 },
    { name: "RH", employees: 5, budget: 1000, usage: 45 }
  ];

  const recentAlerts = [
    { team: "IT", type: "stress", level: "high", count: 3 },
    { team: "Marketing", type: "fatigue", level: "medium", count: 5 },
    { team: "Ventes", type: "motivation", level: "low", count: 2 }
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
              <span>Retour</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Dashboard Responsable QVT</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employés</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">40</div>
              <p className="text-xs text-muted-foreground">+2 ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Budget Total</CardTitle>
              <DollarSign className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">8 000€</div>
              <p className="text-xs text-muted-foreground">Mensuel</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisation</CardTitle>
              <BarChart3 className="h-4 w-4 text-accent-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent-foreground">72%</div>
              <p className="text-xs text-muted-foreground">Du budget</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertes Actives</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">10</div>
              <p className="text-xs text-muted-foreground">À traiter</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Management */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des Équipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamStats.map((team) => (
                  <div key={team.name} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">{team.name}</h4>
                      <p className="text-sm text-muted-foreground">{team.employees} employés</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{team.budget}€/mois</p>
                      <Badge variant={team.usage > 80 ? "destructive" : team.usage > 60 ? "default" : "secondary"}>
                        {team.usage}% utilisé
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" onClick={() => navigate('/entreprise/admin-content')}>
                <Settings className="w-4 h-4 mr-2" />
                Gérer les équipes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alertes Récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">Équipe {alert.team}</h4>
                      <p className="text-sm text-muted-foreground capitalize">{alert.type}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={alert.level === "high" ? "destructive" : alert.level === "medium" ? "default" : "secondary"}>
                        {alert.count} personnes
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Voir toutes les alertes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/entreprise/orders')}>
            <CardHeader className="text-center">
              <Package className="w-12 h-12 mx-auto text-primary mb-2" />
              <CardTitle>Envoyer une Box</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Sélectionner et envoyer des box bien-être à vos équipes
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/entreprise/simulator')}>
            <CardHeader className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto text-secondary mb-2" />
              <CardTitle>Simulateur QVT</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Évaluer l'impact des actions QVT sur vos équipes
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/entreprise/shop')}>
            <CardHeader className="text-center">
              <Settings className="w-12 h-12 mx-auto text-accent-foreground mb-2" />
              <CardTitle>Boutique Entreprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Personnaliser les box et produits pour vos équipes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
