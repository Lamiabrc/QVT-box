
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Settings, Edit, Plus, Trash2 } from "lucide-react";

const AdminContentManager = () => {
  const navigate = useNavigate();

  const teams = [
    { id: 1, name: "Marketing", employees: 12, budget: 2400, manager: "Sophie Martin" },
    { id: 2, name: "IT", employees: 8, budget: 1600, manager: "Pierre Dubois" },
    { id: 3, name: "Ventes", employees: 15, budget: 3000, manager: "Marie Laurent" },
    { id: 4, name: "RH", employees: 5, budget: 1000, manager: "Jean Moreau" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/entreprise/admin-dashboard')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Gestion des Équipes</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Équipes & Budgets</h2>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Ajouter une équipe</span>
          </Button>
        </div>

        <div className="grid gap-6">
          {teams.map((team) => (
            <Card key={team.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>{team.name}</span>
                    </CardTitle>
                    <p className="text-muted-foreground">Manager: {team.manager}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Employés</p>
                    <p className="text-2xl font-bold">{team.employees}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Budget mensuel</p>
                    <p className="text-2xl font-bold text-secondary">{team.budget}€</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Statut</p>
                    <Badge variant="default">Actif</Badge>
                  </div>
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Gérer les comptes
                  </Button>
                  <Button size="sm">
                    Voir les détails
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContentManager;
