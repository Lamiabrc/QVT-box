
import { BoxRecommendation } from "@/types/qvtbox";

export const familyBoxes: BoxRecommendation[] = [
  {
    id: "family_communication_plus",
    title: "💬 Communication+",
    description: "Outils et jeux pour améliorer le dialogue et l'écoute en famille.",
    category: "communication",
    targetRole: "parent_en_couple",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "medium",
    contents: [
      "Jeu de cartes 'Dis-moi tout'",
      "Guide de la communication non-violente pour les familles",
      "Sablier de temps de parole",
      "Carnet de 'gratitude' familial"
    ]
  },
  {
    id: "family_solo_parent_power",
    title: "🦸 Parent Solo Power",
    description: "Une box pour soutenir et recharger les batteries des parents solos.",
    category: "soutien",
    targetRole: "parent_solo",
    targetUniverse: "famille",
    aiConfidence: 0.95,
    urgency: "high",
    contents: [
      "Bon pour 2h de baby-sitting",
      "Masques relaxants et soins",
      "Livre 'Parent solo, et alors ?'",
      "Kit de recettes rapides et saines"
    ]
  },
  {
    id: "family_teen_connect",
    title: "🧑‍🎓 Ado-Connect",
    description: "Créer du lien et comprendre le monde de son adolescent.",
    category: "relation",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Jeu de société 'Dans ma tête d'ado'",
      "Dictionnaire Ado-Français / Français-Ado",
      "Places de cinéma pour deux",
      "Guide des passions numériques"
    ]
  },
  {
    id: "family_quality_time",
    title: "💖 Temps de Qualité",
    description: "Des activités créatives et amusantes à faire tous ensemble.",
    category: "activités",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "low",
    contents: [
      "Kit de pâtisserie en famille",
      "Puzzle collaboratif géant",
      "Bons pour des 'journées à thème'",
      "Appareil photo jetable pour souvenirs"
    ]
  },
  {
    id: "family_lgbt_inclusive",
    title: "🌈 Famille Inclusive",
    description: "Célébrer la diversité et l'amour dans les familles LGBT+.",
    category: "inclusivité",
    targetRole: "parent_lgbt",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "medium",
    contents: [
      "Livres jeunesse sur la diversité familiale",
      "Jeu des 7 familles revisitées",
      "Kit pour créer son propre blason familial",
      "Guide pour parler de diversité aux enfants"
    ]
  },
  {
    id: "family_recomposee_harmony",
    title: "🧩 Harmonie Recomposée",
    description: "Créer de nouveaux liens et trouver sa place dans une famille recomposée.",
    category: "harmonie",
    targetRole: "famille_recomposee",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Arbre généalogique à construire ensemble",
      "Jeu de cartes pour briser la glace",
      "Atelier créatif pour définir les règles de la maison",
      "Carnet de projet commun"
    ]
  }
];
