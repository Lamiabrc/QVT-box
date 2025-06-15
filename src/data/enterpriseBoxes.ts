
import { BoxRecommendation } from "@/types/qvtbox";

export const enterpriseBoxes: BoxRecommendation[] = [
  {
    id: "enterprise_telework_isolation",
    title: "🏠 Télétravail & Isolement",
    description: "Combattre l'isolement et créer du lien à distance",
    category: "télétravail",
    targetSpecialities: ["teletravail"],
    targetUniverse: "entreprise",
    aiConfidence: 0.95,
    urgency: "high",
    contents: [
      "Kit de connexion virtuelle avec café/thé premium",
      "Guide télétravail efficace et bienveillant", 
      "Plante verte dépolluante pour bureau",
      "Coussin de soutien ergonomique",
      "Agenda de pauses bien-être",
      "Cartes activités anti-isolement",
      "Subscription 3 mois espace coworking virtuel",
      "Lampe de luminothérapie pour bureau"
    ]
  },
  {
    id: "enterprise_soft_office",
    title: "🌱 Bureau Doux",
    description: "Créer un environnement de travail apaisant et productif",
    category: "environnement",
    targetUniverse: "entreprise",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Diffuseur d'huiles essentielles de bureau",
      "Collection de plantes dépolluantes",
      "Coussin de méditation pour pauses",
      "Mug isotherme avec infusions bien-être",
      "Poster inspiration et motivation",
      "Kit de rangement zen et minimaliste",
      "Éclairage LED réglable anti-fatigue",
      "Tapis de sol anti-fatigue ergonomique"
    ]
  },
  {
    id: "enterprise_retirement",
    title: "🌅 Préparation Retraite",
    description: "Accompagner sereinement la transition vers la retraite",
    category: "transition",
    targetSpecialities: ["retraite_proche"],
    targetUniverse: "entreprise",
    aiConfidence: 0.95,
    urgency: "high",
    contents: [
      "Guide complet préparation retraite",
      "Carnet de transmission de savoir",
      "Agenda de projet personnel post-retraite",
      "Kit découverte nouvelles passions",
      "Livre 'Réussir sa retraite'",
      "Bon formation développement personnel",
      "Coffret dégustation vins et terroirs",
      "Séance coaching transition de vie"
    ]
  },
  {
    id: "enterprise_workload",
    title: "⚖️ Pénibilité & Charge Mentale",
    description: "Outils de récupération et de gestion du stress intense",
    category: "récupération",
    targetSpecialities: ["penibilite"],
    targetStatus: ["penible"],
    targetUniverse: "entreprise",
    aiConfidence: 0.9,
    urgency: "urgent",
    contents: [
      "Kit de récupération musculaire",
      "Balle anti-stress thérapeutique",
      "Guide gestion charge mentale",
      "Bon massage thérapeutique",
      "Tisanes apaisantes bio",
      "Carnet de suivi bien-être",
      "App méditation guidée premium",
      "Séance sophrologie en entreprise"
    ]
  },
  {
    id: "enterprise_itinerant",
    title: "🚗 Salarié Itinérant",
    description: "Bien-être et organisation pour les déplacements professionnels",
    category: "mobilité",
    targetSpecialities: ["salarie_itinerant"],
    targetStatus: ["itinerant"],
    targetUniverse: "entreprise",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Trousse de voyage bien-être",
      "Coussin de voyage ergonomique",
      "Batterie portable longue durée",
      "Kit repas sains nomades",
      "Guide des bonnes adresses bien-être",
      "App géolocalisation espaces détente",
      "Thermos premium pour boissons chaudes",
      "Carnet de voyage professionnel"
    ]
  },
  {
    id: "enterprise_team_cohesion",
    title: "🤝 Cohésion d'Équipe",
    description: "Renforcer les liens et l'esprit d'équipe",
    category: "collectif",
    targetUniverse: "entreprise",
    aiConfidence: 0.8,
    urgency: "medium",
    contents: [
      "Jeux de team building créatifs",
      "Kit pause-café conviviale",
      "Cartes conversation positive",
      "Guide animation d'équipe",
      "Activité collective surprise",
      "Bon atelier créatif en équipe",
      "Plantes à adopter collectivement",
      "Tableau de réussites communes"
    ]
  },
  {
    id: "enterprise_work_life_balance",
    title: "⚖️ Équilibre Vie Pro/Perso",
    description: "Outils pour mieux séparer et équilibrer les temps de vie",
    category: "équilibre",
    targetUniverse: "entreprise",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Agenda time-blocking personnel",
      "Rituel de déconnexion digitale",
      "Kit activités famille express",
      "Guide organisation personnelle",
      "Cartes priorités et valeurs",
      "App gestion temps intelligent",
      "Bon sortie culture/loisirs",
      "Journal de gratitude quotidien"
    ]
  },
  {
    id: "enterprise_moral_support",
    title: "💙 Soutien Moral & Coup Dur",
    description: "Accompagnement bienveillant dans les moments difficiles",
    category: "soutien",
    targetStatus: ["sensible"],
    targetUniverse: "entreprise",
    aiConfidence: 0.95,
    urgency: "urgent",
    contents: [
      "Ligne d'écoute psychologique 24h/24",
      "Kit réconfort et douceur",
      "Livre développement personnel",
      "Bon séance thérapie",
      "Tisanes apaisantes et chocolats",
      "Carnet d'expression libre",
      "Guide gestion des émotions",
      "Accès plateforme soutien en ligne"
    ]
  },
  {
    id: "enterprise_promotion_transition",
    title: "📈 Promotion & Transition",
    description: "Accompagner les changements de poste et montées en compétences",
    category: "évolution",
    targetSpecialities: ["promotion_envisagee"],
    targetUniverse: "entreprise",
    aiConfidence: 0.85,
    urgency: "medium",
    contents: [
      "Guide du nouveau manager",
      "Formation en ligne leadership",
      "Carnet de développement personnel",
      "Coaching professionnel 3 séances",
      "Livre communication efficace",
      "Kit organisation bureau dirigeant",
      "Accès réseau professionnel premium",
      "Bilan de compétences express"
    ]
  },
  {
    id: "enterprise_vip_strategic",
    title: "⭐ VIP / Talents Stratégiques",
    description: "Accompagnement premium pour les profils à haute valeur",
    category: "excellence",
    targetStatus: ["vip", "talent_strategique"],
    targetUniverse: "entreprise",
    aiConfidence: 0.9,
    urgency: "high",
    contents: [
      "Coaching exécutif personnalisé",
      "Spa day premium relaxation",
      "Abonnement magazines business haut de gamme",
      "Kit bureau luxe et ergonomique",
      "Formation leadership international",
      "Accès club dirigeants exclusif",
      "Bilan santé complet premium",
      "Conciergerie d'entreprise 6 mois"
    ]
  }
];
