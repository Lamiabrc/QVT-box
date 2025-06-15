
import { BoxRecommendation } from "@/types/qvtbox";

export const enterpriseBoxes: BoxRecommendation[] = [
  {
    id: "enterprise_remote",
    title: "🏠 Télétravail & Isolement",
    description: "Solutions pour un télétravail épanouissant et connecté",
    category: "teletravail",
    targetUniverse: "entreprise",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Kit ergonomie télétravail",
      "Guide rituels journée home office",
      "Cartes connexion équipe à distance",
      "Plantes dépolluantes bureau",
      "Timer technique Pomodoro"
    ]
  },
  {
    id: "enterprise_office",
    title: "🌸 Bureau Doux",
    description: "Créer un environnement de travail apaisant et inspirant",
    category: "environnement",
    targetUniverse: "entreprise",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Kit personnalisation bureau zen",
      "Diffuseur huiles essentielles",
      "Plantes de bureau faciles",
      "Coussin ergonomique",
      "Cartes affirmations pro"
    ]
  },
  {
    id: "enterprise_retirement",
    title: "🎉 Départ à la Retraite",
    description: "Accompagner sereinement la transition vers la retraite",
    category: "transition",
    targetUniverse: "entreprise",
    aiConfidence: 0.95,
    urgency: "high",
    contents: [
      "Guide transition retraite",
      "Carnet projets post-carrière",
      "Kit transmission de savoir",
      "Cérémonial de passage",
      "Réseau seniors actifs"
    ]
  },
  {
    id: "enterprise_mental_load",
    title: "🧠 Pénibilité & Charge Mentale",
    description: "Outils pour gérer la surcharge et la pénibilité au travail",
    category: "charge",
    targetUniverse: "entreprise",
    aiConfidence: 0.95,
    urgency: "urgent",
    contents: [
      "Kit gestion surcharge mentale",
      "Techniques de priorisation",
      "Cartes pause récupération",
      "Guide signalement pénibilité",
      "Planning décompression"
    ]
  },
  {
    id: "enterprise_itinerant",
    title: "🚗 Salarié Itinérant",
    description: "Solutions nomades pour les professionnels en déplacement",
    category: "mobilite",
    targetUniverse: "entreprise",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Kit voyage professionnel zen",
      "App repos optimisé déplacements",
      "Cartes détente voiture/train",
      "Snacks équilibrés voyage",
      "Guide sommeil hôtel"
    ]
  },
  {
    id: "enterprise_team",
    title: "👥 Cohésion d'Équipe",
    description: "Renforcer les liens et la collaboration d'équipe",
    category: "cohesion",
    targetUniverse: "entreprise",
    aiConfidence: 0.9,
    urgency: "medium",
    contents: [
      "Jeux team building express",
      "Cartes connaissance mutuelle",
      "Kit célébration réussites",
      "Activités déjeuner équipe",
      "Rituel reconnaissance collective"
    ]
  },
  {
    id: "enterprise_balance",
    title: "⚖️ Équilibre Vie Pro / Perso",
    description: "Outils pour harmoniser vie professionnelle et personnelle",
    category: "equilibre",
    targetUniverse: "entreprise",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Planning équilibre personnalisé",
      "Kit déconnexion numérique",
      "Cartes transition domicile-travail",
      "Guide boundaries professionnelles",
      "Rituel fin de journée"
    ]
  },
  {
    id: "enterprise_support",
    title: "🤗 Soutien Moral & Coup Dur",
    description: "Accompagnement lors de difficultés personnelles ou professionnelles",
    category: "soutien",
    targetUniverse: "entreprise",
    aiConfidence: 0.95,
    urgency: "urgent",
    contents: [
      "Guide ressources aide salariés",
      "Kit réconfort d'urgence",
      "Cartes encouragement collègues",
      "Contact assistance psychologique",
      "Plan retour progressif"
    ]
  },
  {
    id: "enterprise_promotion",
    title: "📈 Promotion & Transition",
    description: "Accompagner les changements de poste et évolutions",
    category: "evolution",
    targetUniverse: "entreprise",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Guide nouveau poste",
      "Kit confiance leadership",
      "Cartes gestion imposter syndrome",
      "Plan intégration 90 jours",
      "Mentorat transition"
    ]
  },
  {
    id: "enterprise_vip",
    title: "⭐ VIP / Talents Stratégiques",
    description: "Accompagnement premium pour les talents clés",
    category: "talent",
    targetUniverse: "entreprise",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Coaching personnalisé",
      "Kit bien-être premium",
      "Accès formations exclusives",
      "Concierge services",
      "Bilan de compétences avancé"
    ]
  }
];
