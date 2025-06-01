
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Package, Camera, Share2, Heart } from "lucide-react";

const Unboxing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
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
            <h1 className="text-2xl font-bold text-primary">Expérience Unboxing</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Package className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Déballez votre Box QVT</h2>
            <p className="text-muted-foreground">
              Découvrez les surprises bien-être sélectionnées spécialement pour vous
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Votre Box du Mois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Box Bien-être - Mai 2024</h3>
                <p className="text-muted-foreground mb-4">
                  Une sélection de produits pour améliorer votre qualité de vie au travail
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Prendre une photo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contenu de votre box</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Thé relaxant bio", description: "Mélange de camomille et lavande" },
                    { name: "Bougie aromathérapie", description: "Parfum eucalyptus, 40h de combustion" },
                    { name: "Masque hydratant", description: "Soin visage à l'aloe vera" },
                    { name: "Journal mindfulness", description: "Guide de méditation quotidienne" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                      <Heart className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">
                  Noter cette box
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Partagez votre expérience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Aidez-nous à améliorer nos box en partageant votre ressenti
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline">
                  Laisser un avis
                </Button>
                <Button>
                  Partager sur les réseaux
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Unboxing;
