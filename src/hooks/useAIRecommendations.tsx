
import { useState, useEffect } from 'react';
import { BoxRecommendation, UniverseType, UserProfile } from '@/types/qvtbox';

interface AIRecommendationEngine {
  profile: UserProfile;
  recommendations: BoxRecommendation[];
  confidence: number;
  lastUpdate: Date;
}

export const useAIRecommendations = (userProfile: UserProfile) => {
  const [engine, setEngine] = useState<AIRecommendationEngine | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const generateRecommendations = async (profile: UserProfile): Promise<BoxRecommendation[]> => {
    // Simulation de l'IA de recommandations
    const mockRecommendations: BoxRecommendation[] = [];

    if (profile.universe === 'famille' && profile.role === 'enfant_ado') {
      // Recommandations pour ados basées sur le profil
      if (profile.riskFactors?.includes('stress_scolaire')) {
        mockRecommendations.push({
          id: "teen_school_stress",
          title: "📚 Décompression Scolaire",
          description: "Recommandé car tu montres des signes de stress scolaire",
          category: "scolaire",
          targetRole: "enfant_ado",
          targetUniverse: "famille",
          aiConfidence: 0.95,
          urgency: "high",
          contents: ["Balle anti-stress", "Guide respiration", "Planning zen", "Cartes motivation"]
        });
      }

      if (profile.riskFactors?.includes('emotions_difficiles')) {
        mockRecommendations.push({
          id: "teen_emotions",
          title: "🌈 Humeur & Gestion des Émotions",
          description: "Parfait pour t'aider à mieux comprendre tes émotions",
          category: "emotions",
          targetRole: "enfant_ado",
          targetUniverse: "famille",
          aiConfidence: 0.9,
          urgency: "high",
          contents: ["Roue des émotions", "Carnet émotionnel", "Techniques régulation"]
        });
      }

      if (profile.preferences?.includes('creativite')) {
        mockRecommendations.push({
          id: "teen_creativity",
          title: "🎨 Expression & Créativité",
          description: "Tu adores créer ? Cette box est faite pour toi !",
          category: "creativite",
          targetRole: "enfant_ado",
          targetUniverse: "famille",
          aiConfidence: 0.85,
          urgency: "medium",
          contents: ["Kit artistique", "Défis créatifs", "Plateforme numérique"]
        });
      }
    }

    if (profile.universe === 'famille' && profile.role === 'parent') {
      if (profile.riskFactors?.includes('burnout_parental')) {
        mockRecommendations.push({
          id: "parent_burnout",
          title: "🔥 Prévention Burn-out Parental",
          description: "Détection de signaux de fatigue parentale",
          category: "prevention",
          targetRole: "parent",
          targetUniverse: "famille",
          aiConfidence: 0.92,
          urgency: "high",
          contents: ["Guide prévention", "Techniques relaxation", "Réseau soutien"]
        });
      }
    }

    if (profile.universe === 'entreprise') {
      if (profile.specialStatus?.includes('teletravail')) {
        mockRecommendations.push({
          id: "enterprise_remote",
          title: "🏠 Télétravail & Isolement",
          description: "Solutions personnalisées pour votre profil télétravailleur",
          category: "teletravail",
          targetRole: "collaborateur",
          targetUniverse: "entreprise",
          aiConfidence: 0.88,
          urgency: "high",
          contents: ["Kit ergonomie", "Outils collaboration", "Anti-isolement"]
        });
      }

      if (profile.specialStatus?.includes('retraite_proche')) {
        mockRecommendations.push({
          id: "enterprise_retirement",
          title: "🌅 Départ à la Retraite",
          description: "Accompagnement personnalisé pour votre transition",
          category: "transition",
          targetRole: "senior",
          targetUniverse: "entreprise",
          aiConfidence: 0.95,
          urgency: "high",
          contents: ["Guide transition", "Projets post-carrière", "Réseau seniors"]
        });
      }
    }

    return mockRecommendations;
  };

  useEffect(() => {
    const loadRecommendations = async () => {
      setIsLoading(true);
      try {
        const recommendations = await generateRecommendations(userProfile);
        
        setEngine({
          profile: userProfile,
          recommendations,
          confidence: recommendations.length > 0 ? 0.9 : 0.5,
          lastUpdate: new Date()
        });
      } catch (error) {
        console.error('Erreur lors du chargement des recommandations IA:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userProfile) {
      loadRecommendations();
    }
  }, [userProfile]);

  const updateProfile = (newProfile: Partial<UserProfile>) => {
    if (engine) {
      const updatedProfile = { ...engine.profile, ...newProfile };
      setEngine(prev => prev ? { ...prev, profile: updatedProfile } : null);
    }
  };

  const refreshRecommendations = async () => {
    if (engine) {
      const newRecommendations = await generateRecommendations(engine.profile);
      setEngine(prev => prev ? {
        ...prev,
        recommendations: newRecommendations,
        lastUpdate: new Date()
      } : null);
    }
  };

  return {
    recommendations: engine?.recommendations || [],
    confidence: engine?.confidence || 0,
    isLoading,
    updateProfile,
    refreshRecommendations,
    lastUpdate: engine?.lastUpdate
  };
};
