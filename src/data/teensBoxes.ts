
import { BoxRecommendation } from "@/types/qvtbox";

export const teensBoxes: BoxRecommendation[] = [
  {
    id: "teen_school_stress",
    title: "📚 Décompression Scolaire",
    description: "Outils anti-stress pour mieux gérer la pression scolaire et les examens",
    category: "scolaire",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.95,
    urgency: "high",
    contents: [
      "Balle anti-stress personnalisable",
      "Guide de techniques de respiration pour ados",
      "Planning de révisions zen avec stickers",
      "Cartes motivation avant examens",
      "Playlist relaxation étude",
      "Tisane détente spécial ado",
      "Marque-pages citations inspirantes",
      "Journal de réussites scolaires"
    ]
  },
  {
    id: "teen_emotions",
    title: "🌈 Humeur & Gestion des Émotions",
    description: "Kit complet pour comprendre et apprivoiser ses émotions d'adolescent",
    category: "emotions",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Roue des émotions interactive",
      "Carnet de bord émotionnel",
      "Cartes situations + réactions",
      "Bracelet mood ring",
      "Guide parent : comprendre les émotions ado",
      "Application mood tracker",
      "Techniques de régulation émotionnelle",
      "Vidéos témoignages d'ados"
    ]
  },
  {
    id: "teen_creativity",
    title: "🎨 Expression & Créativité",
    description: "Libère ta créativité et exprime-toi à travers l'art et l'écriture",
    category: "creativite",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Carnet de dessin et d'écriture",
      "Set de feutres et crayons de couleur",
      "Stickers et autocollants créatifs",
      "Guide d'activités artistiques",
      "Défis créatifs hebdomadaires",
      "Accès plateforme création numérique",
      "Tutoriels DIY pour ados",
      "Kit scrapbooking personnel"
    ]
  },
  {
    id: "teen_sleep",
    title: "😴 Sommeil & Récupération",
    description: "Améliore la qualité de ton sommeil pour être en forme",
    category: "sommeil",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Masque de sommeil personnalisé",
      "Spray d'oreiller relaxant",
      "Guide du sommeil pour ados",
      "Veilleuse avec sons de la nature",
      "Planning sommeil + tracker",
      "Tisane bonne nuit",
      "Techniques de relaxation pré-sommeil",
      "Livre audio conte moderne"
    ]
  },
  {
    id: "teen_body_confidence",
    title: "💪 Corps & Estime de Soi",
    description: "Développe une relation positive avec ton corps et renforce ta confiance",
    category: "estime",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Miroir avec affirmations positives",
      "Guide nutrition équilibrée ado",
      "Cartes exercices bien-être corporel",
      "Journal gratitude corps",
      "Vidéos yoga pour ados",
      "Produits de soin naturels",
      "Guide diversité corporelle",
      "Activités sport plaisir"
    ]
  },
  {
    id: "teen_friendships",
    title: "👫 Relations & Amitiés",
    description: "Construis des amitiés saines et gère les conflits relationnels",
    category: "social",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Cartes communication amicale",
      "Guide résolution conflits ados",
      "Activités de groupe à faire entre amis",
      "Journal des moments d'amitié",
      "Techniques d'écoute active",
      "Gestion des réseaux sociaux",
      "Bracelets de l'amitié DIY",
      "Vidéos témoignages amitié"
    ]
  },
  {
    id: "teen_bullying",
    title: "🛡️ Harcèlement / Isolement",
    description: "Ressources et soutien face au harcèlement et à l'isolement",
    category: "protection",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.95,
    urgency: "urgent",
    contents: [
      "Guide d'urgence anti-harcèlement",
      "Cartes contacts ressources",
      "Techniques de confiance en soi",
      "Journal de libération émotionnelle",
      "Hotline jeunes 24h/24",
      "Vidéos de témoignages et conseils",
      "Kit de soutien psychologique",
      "Protocole d'alerte famille"
    ]
  },
  {
    id: "teen_transitions",
    title: "🔄 Changements / Transitions",
    description: "Accompagnement lors des grandes transitions de la vie d'ado",
    category: "transition",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Guide des transitions adolescentes",
      "Carnet de projets d'avenir",
      "Cartes gestion du changement",
      "Journal de passage à l'âge adulte",
      "Techniques d'adaptation",
      "Vidéos orientation scolaire/pro",
      "Kit découverte de soi",
      "Planning objectifs personnels"
    ]
  },
  {
    id: "teen_parent_relationship",
    title: "👨‍👩‍👧‍👦 Parent-Ado (relationnel)",
    description: "Améliore la communication et les relations avec tes parents",
    category: "famille",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Cartes conversation parent-ado",
      "Guide communication familiale",
      "Activités de rapprochement",
      "Contrat de confiance mutuelle",
      "Techniques d'expression des besoins",
      "Journal des moments complices",
      "Vidéos conseils relations familiales",
      "Planning temps qualité famille"
    ]
  },
  {
    id: "teen_passions",
    title: "🎯 Passion & Projets Personnels",
    description: "Explore tes passions et développe tes projets personnels",
    category: "developpement",
    targetRole: "enfant_ado",
    targetUniverse: "famille",
    aiConfidence: 0.8,
    urgency: "low",
    contents: [
      "Carnet explorateur de passions",
      "Guide création de projets",
      "Planning organisation personnel",
      "Cartes motivation et persévérance",
      "Vidéos parcours inspirants",
      "Kit entrepreneur en herbe",
      "Techniques de créativité",
      "Journal de réalisations"
    ]
  }
];
