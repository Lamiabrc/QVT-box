
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Package, Send, Users, Calendar } from "lucide-react";

const Orders = () => {
  const navigate = useNavigate();

  const orders = [
    { id: 1, team: "Marketing", box: "Bien-être", status: "delivered", date: "2024-05-15", employees: 12 },
    { id: 2, team: "IT", box: "Anti-stress", status: "shipped", date: "2024-05-20", employees: 8 },
    { id: 3, team: "Ventes", box: "Motivation", status: "pending", date: "2024-05-25", employees: 15 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'default';
      case 'shipped': return 'secondary';
      case 'pending': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Livrée';
      case 'shipped': return 'Expédiée';
      case 'pending': return 'En préparation';
      default: return status;
    }
  };

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
            <h1 className="text-2xl font-bold text-primary">Commandes & Envois</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Historique des commandes</h2>
          <Button className="flex items-center space-x-2" onClick={() => navigate('/entreprise/shop')}>
            <Send className="w-4 h-4" />
            <span>Nouvelle commande</span>
          </Button>
        </div>

        <div className="grid gap-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="w-5 h-5" />
                    <span>Box {order.box} - Équipe {order.team}</span>
                  </CardTitle>
                  <Badge variant={getStatusColor(order.status)}>
                    {getStatusText(order.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{order.employees} employés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{new Date(order.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Voir les détails
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
