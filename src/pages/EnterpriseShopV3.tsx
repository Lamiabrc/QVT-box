
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import UniversalBoxShop from "@/components/shop/UniversalBoxShop";
import { useAIRecommendations } from "@/hooks/useAIRecommendations";

const EnterpriseShopV3 = () => {
  const navigate = useNavigate();

  // Simulation du profil collaborateur
  const userProfile = {
    role: 'collaborateur',
    universe: 'entreprise' as const,
    riskFactors: ['stress_travail', 'isolement'],
    preferences: ['efficacite', 'bien_etre'],
    specialStatus: ['teletravail', 'manager']
  };

  const { recommendations, isLoading } = useAIRecommendations(userProfile);

  const handleOrderBox = (boxId: string) => {
    alert(`Box QVT "${boxId}" commandée ! 🏢\n\nVotre manager et RH seront notifiés.`);
  };

  const handleViewBoxDetails = (boxId: string) => {
    console.log(`Détails box entreprise: ${boxId}`);
  };

  return (
    <div className="min-h-screen">
      <Navigation userType="enterprise" onBack={() => navigate('/')} />
      
      <UniversalBoxShop
        universe="entreprise"
        userRole="collaborateur"
        userProfile={userProfile}
        aiRecommendations={recommendations}
        onOrderBox={handleOrderBox}
        onViewBoxDetails={handleViewBoxDetails}
      />
    </div>
  );
};

export default EnterpriseShopV3;
