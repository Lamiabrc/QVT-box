
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Package, Heart, Brain, Zap, Gift } from "lucide-react";

const EntrepriseShop = () => {
  const navigate = useNavigate();

  const boxes = [
    {
      id: 1,
      name: "Box Bien-être",
      description: "Produits de relaxation et détente",
      price: "25€",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      items: ["Thé relaxant", "Bougie aromathérapie", "Masque hydratant", "Journal mindfulness"]
    },
    {
      id: 2,
      name: "Box Anti-stress",
      description: "Outils pour gérer le stress au travail",
      price: "30€",
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      items: ["Balle anti-stress", "Huiles essentielles", "Guide méditation", "Tisane apaisante"]
    },
    {
      id: 3,
      name: "Box Motivation",
      description: "Boost d'énergie et motivation",
      price: "28€",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      items: ["Carnet objectifs", "Snacks énergétiques", "Plante verte", "Stylo premium"]
    },
    {
      id: 4,
      name: "Box Personnalisée",
      description: "Créez votre box sur mesure",
      price: "Sur devis",
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      items: ["Choix libre", "Thème personnalisé", "Message personnalisé", "Packaging sur mesure"]
    }
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
            <h1 className="text-2xl font-bold text-primary">Boutique Entreprise</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choisissez vos Box QVT</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sélectionnez les box bien-être adaptées à vos équipes et personnalisez l'expérience QVT de vos collaborateurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {boxes.map((box) => (
            <Card key={box.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-muted rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  {box.icon}
                </div>
                <CardTitle className="text-xl">{box.name}</CardTitle>
                <p className="text-muted-foreground">{box.description}</p>
                <Badge variant="secondary" className="text-lg font-bold mt-2">
                  {box.price}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold">Contenu de la box :</h4>
                  <ul className="space-y-1">
                    {box.items.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Package className="w-4 h-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" onClick={() => navigate('/entreprise/orders')}>
                  Commander cette box
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntrepriseShop;
