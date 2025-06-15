
import { BoxRecommendation } from "@/types/qvtbox";

export const parentsBoxes: BoxRecommendation[] = [
  {
    id: "parent_burnout",
    title: "🔥 Prévention Burn-out Parental",
    description: "Outils pour prévenir et gérer l'épuisement parental",
    category: "prevention",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.95,
    urgency: "urgent",
    contents: [
      "Guide de détection des signaux",
      "Kit de pause express",
      "Cartes auto-compassion",
      "Rituel de déconnexion",
      "Planning de récupération"
    ]
  },
  {
    id: "parent_communication",
    title: "💬 Communication Bienveillante",
    description: "Développer une communication positive avec son enfant",
    category: "communication",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Cartes phrases bienveillantes",
      "Guide de l'écoute active",
      "Kit résolution de conflits",
      "Mémo communication positive",
      "Journal de progrès familial"
    ]
  },
  {
    id: "parent_moments",
    title: "⏰ Moments Partagés",
    description: "Créer des moments de qualité en famille",
    category: "partage",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Cartes activités famille",
      "Planning moments spéciaux",
      "Kit pique-nique indoor",
      "Jeux de connexion famille",
      "Album souvenirs partagés"
    ]
  },
  {
    id: "parent_support",
    title: "🤗 Soutien Moral",
    description: "Ressources pour traverser les moments difficiles",
    category: "soutien",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Cartes encouragement personnel",
      "Réseau de soutien local",
      "Guide gestion du stress",
      "Kit réconfort d'urgence",
      "Méditations guidées parent"
    ]
  },
  {
    id: "parent_child_emotions",
    title: "🌈 Émotions de l'Enfant",
    description: "Comprendre et accompagner les émotions de son enfant",
    category: "emotions",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.95,
    urgency: "high",
    contents: [
      "Décodeur émotions par âge",
      "Cartes situations émotionnelles",
      "Kit calme émotionnel",
      "Guide validation émotionnelle",
      "Thermomètre familial des humeurs"
    ]
  },
  {
    id: "parent_autonomy",
    title: "🎯 Confiance & Autonomie",
    description: "Développer l'autonomie et la confiance de son enfant",
    category: "autonomie",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Échelle d'autonomie par âge",
      "Cartes responsabilités",
      "Kit encouragement autonomie",
      "Guide lâcher-prise parental",
      "Tableau de progression enfant"
    ]
  },
  {
    id: "parent_teen_crisis",
    title: "⚡ Crises / Conflits Ado",
    description: "Gérer les crises et conflits avec son adolescent",
    category: "crise",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "urgent",
    contents: [
      "Guide urgence crise ado",
      "Cartes désescalade conflit",
      "Kit communication de crise",
      "Phrases magiques apaisement",
      "Plan d'action post-conflit"
    ]
  },
  {
    id: "parent_solo",
    title: "👤 Parent Solo",
    description: "Ressources spécifiques pour les parents célibataires",
    category: "monoparental",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.85,
    urgency: "high",
    contents: [
      "Guide parent solo épanoui",
      "Réseau entraide parents solos",
      "Kit organisation optimisée",
      "Cartes auto-encouragement",
      "Planning équilibre solo"
    ]
  },
  {
    id: "parent_blended",
    title: "🏠 Famille Recomposée",
    description: "Naviguer dans la complexité d'une famille recomposée",
    category: "recompose",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Guide famille recomposée",
      "Cartes intégration harmonieuse",
      "Kit rituels nouvelle famille",
      "Planning transitions enfants",
      "Contrat famille recomposée"
    ]
  },
  {
    id: "parent_digital_detox",
    title: "📱 Digital Detox en Famille",
    description: "Créer un équilibre numérique sain en famille",
    category: "digital",
    targetRole: "parent",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Charte famille numérique",
      "Kit activités hors écran",
      "Planning détox digital",
      "Jeux sans technologie",
      "Guide parent numérique responsable"
    ]
  }
];
