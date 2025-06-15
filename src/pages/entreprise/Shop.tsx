
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BoxShop from "@/components/shop/BoxShop";
import { enterpriseBoxes } from "@/data/enterpriseBoxes";
import { Button } from "@/components/ui/button";

const EntrepriseShop = () => {
  const navigate = useNavigate();

  const handleOrderBox = (boxId: string) => {
    console.log("Ordering box:", boxId);
    navigate('/entreprise/orders');
  };

  const handleViewBoxDetails = (boxId: string) => {
    console.log("Viewing details for box:", boxId);
    // You can navigate to a detailed view page here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/entreprise/dashboard')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au dashboard</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Boutique Entreprise</h1>
          </div>
        </div>
      </header>

      <main>
        <BoxShop
          universe="entreprise"
          recommendations={enterpriseBoxes}
          userRole="Collaborateur"
          onOrderBox={handleOrderBox}
          onViewBoxDetails={handleViewBoxDetails}
        />
      </main>
    </div>
  );
};

export default EntrepriseShop;
