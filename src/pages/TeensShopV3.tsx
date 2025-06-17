
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import UniversalBoxShop from "@/components/shop/UniversalBoxShop";
import { useAIRecommendations } from "@/hooks/useAIRecommendations";
import { UserProfile } from "@/types/qvtbox";

const TeensShopV3 = () => {
  const navigate = useNavigate();

  // Simulation du profil utilisateur (à connecter avec Supabase)
  const userProfile: UserProfile = {
    role: 'enfant_ado' as const,
    universe: 'famille' as const,
    riskFactors: ['stress_scolaire', 'emotions_difficiles'],
    preferences: ['creativite', 'sport'],
    specialStatus: []
  };

  const { recommendations, isLoading } = useAIRecommendations(userProfile);

  const handleOrderBox = (boxId: string) => {
    alert(`Box "${boxId}" ajoutée au panier ! 🛒✨\n\nCette box sera livrée avec ta prochaine box mensuelle ou en livraison express selon ton forfait !`);
  };

  const handleViewBoxDetails = (boxId: string) => {
    console.log(`Affichage des détails de la box: ${boxId}`);
    // Navigation vers une page de détails
  };

  return (
    <div className="min-h-screen">
      <Navigation userType="teen" onBack={() => navigate('/')} />
      
      <UniversalBoxShop
        universe="famille"
        userRole="enfant_ado"
        userProfile={userProfile}
        aiRecommendations={recommendations}
        onOrderBox={handleOrderBox}
        onViewBoxDetails={handleViewBoxDetails}
      />
    </div>
  );
};

export default TeensShopV3;
