
import { BoxRecommendation } from "@/types/qvtbox";

export const teensBoxes: BoxRecommendation[] = [
  {
    id: "teen_decompression",
    title: "🎯 Décompression Scolaire",
    description: "Techniques pour évacuer le stress des études et retrouver l'équilibre",
    category: "scolaire",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "medium",
    contents: [
      "Kit de relaxation express",
      "Cartes de respiration guidée",
      "Playlist anti-stress",
      "Carnet de gratitude",
      "Balle anti-stress personnalisée"
    ]
  },
  {
    id: "teen_emotions",
    title: "🌈 Humeur & Gestion des Émotions",
    description: "Outils pour comprendre et apprivoiser ses émotions",
    category: "emotionnel",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.95,
    urgency: "high",
    contents: [
      "Roue des émotions interactive",
      "Journal émotionnel illustré",
      "Cartes situations-émotions",
      "Bracelet mood tracker",
      "Guide 'Mes émotions et moi'"
    ]
  },
  {
    id: "teen_creativity",
    title: "🎨 Expression & Créativité",
    description: "Libérer sa créativité pour s'exprimer et se découvrir",
    category: "creativite",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "low",
    contents: [
      "Carnet de création libre",
      "Set d'art-thérapie",
      "Défis créatifs quotidiens",
      "Playlist inspiration",
      "Kit DIY personnalisation"
    ]
  },
  {
    id: "teen_sleep",
    title: "😴 Sommeil & Récupération",
    description: "Améliorer la qualité du sommeil et la récupération",
    category: "sommeil",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Masque de sommeil connecté",
      "Tisane relaxante ado",
      "Guide du sommeil réparateur",
      "Lampe d'ambiance apaisante",
      "Carnet de rêves"
    ]
  },
  {
    id: "teen_self_esteem",
    title: "💪 Corps & Estime de Soi",
    description: "Développer une image positive de soi et confiance en soi",
    category: "estime",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Miroir affirmations positives",
      "Cartes de forces personnelles",
      "Kit sport bien-être",
      "Guide nutrition équilibrée",
      "Carnet de réussites"
    ]
  },
  {
    id: "teen_friendships",
    title: "👥 Relations & Amitiés",
    description: "Cultiver des relations saines et authentiques",
    category: "social",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Guide des amitiés saines",
      "Cartes conversation starter",
      "Kit activités entre amis",
      "Bracelet de l'amitié DIY",
      "Test de compatibilité amicale"
    ]
  },
  {
    id: "teen_bullying",
    title: "🛡️ Harcèlement / Isolement",
    description: "Outils de prévention et de soutien face au harcèlement",
    category: "protection",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.95,
    urgency: "urgent",
    contents: [
      "Guide anti-harcèlement",
      "Cartes de ressources d'aide",
      "Kit confiance en situation",
      "Numéros d'urgence personnalisés",
      "Plan d'action personnel"
    ]
  },
  {
    id: "teen_transitions",
    title: "🔄 Changements / Transitions",
    description: "Accompagner les grands changements de la vie d'ado",
    category: "transition",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Guide des grandes transitions",
      "Cartes de gestion du changement",
      "Rituel de passage personnel",
      "Journal de transformation",
      "Kit nouveaux débuts"
    ]
  },
  {
    id: "teen_parent_relation",
    title: "💝 Parent-Ado (Relationnel)",
    description: "Améliorer la communication et la relation parent-ado",
    category: "familial",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Cartes dialogue parent-ado",
      "Contrat de confiance mutuelle",
      "Activités de complicité",
      "Guide 'Comprendre mes parents'",
      "Kit moments partagés"
    ]
  },
  {
    id: "teen_passions",
    title: "🚀 Passion & Projets Personnels",
    description: "Cultiver ses passions et développer ses projets",
    category: "developpement",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "low",
    contents: [
      "Carnet de projet passion",
      "Kit découverte talents",
      "Guide 'Réaliser ses rêves'",
      "Planner de projet créatif",
      "Carte mentale des possibles"
    ]
  }
];

export const getRecommendedBoxes = (userMood: string, scores: Record<string, number>): BoxRecommendation[] => {
  // Logique de recommandation IA simplifiée
  const recommendations: BoxRecommendation[] = [];
  
  if (scores.anxiete && scores.anxiete < 5) {
    recommendations.push(teensBoxes.find(box => box.id === "teen_emotions")!);
  }
  
  if (scores.sommeil && scores.sommeil < 5) {
    recommendations.push(teensBoxes.find(box => box.id === "teen_sleep")!);
  }
  
  if (scores.estime && scores.estime < 5) {
    recommendations.push(teensBoxes.find(box => box.id === "teen_self_esteem")!);
  }
  
  if (scores.relations && scores.relations < 5) {
    recommendations.push(teensBoxes.find(box => box.id === "teen_friendships")!);
  }
  
  return recommendations.slice(0, 3); // Maximum 3 recommandations
};
