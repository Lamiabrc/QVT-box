
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import UniversalBoxShop from "@/components/shop/UniversalBoxShop";
import { useAIRecommendations } from "@/hooks/useAIRecommendations";

const FamilyShopV3 = () => {
  const navigate = useNavigate();

  // Simulation du profil parent
  const userProfile = {
    role: 'parent',
    universe: 'famille' as const,
    riskFactors: ['burnout_parental', 'communication_difficile'],
    preferences: ['bienveillance', 'activites_partage'],
    specialStatus: ['famille_recomposee']
  };

  const { recommendations, isLoading } = useAIRecommendations(userProfile);

  const handleOrderBox = (boxId: string) => {
    alert(`Box "${boxId}" commandée ! 📦\n\nVous recevrez un email de confirmation sous peu.`);
  };

  const handleViewBoxDetails = (boxId: string) => {
    console.log(`Détails box famille: ${boxId}`);
  };

  return (
    <div className="min-h-screen">
      <Navigation userType="family" onBack={() => navigate('/')} />
      
      <UniversalBoxShop
        universe="famille"
        userRole="parent"
        userProfile={userProfile}
        aiRecommendations={recommendations}
        onOrderBox={handleOrderBox}
        onViewBoxDetails={handleViewBoxDetails}
      />
    </div>
  );
};

export default FamilyShopV3;
