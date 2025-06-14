
import { Question } from "@/types/simulator";

export const enterpriseQuestions: Record<string, Question[]> = {
  individual: [
    {
      id: "stress_1",
      type: "scale",
      text: "Comment évaluez-vous votre niveau de stress au travail actuellement ?",
      category: "stress",
      scale: { min: 1, max: 10, labels: ["Très faible", "Très élevé"] },
      weight: 1.2
    },
    {
      id: "workload_1",
      type: "multiple_choice",
      text: "Comment percevez-vous votre charge de travail ?",
      category: "workload",
      options: [
        { text: "Très légère", value: 1, emoji: "😌" },
        { text: "Manageable", value: 3, emoji: "😊" },
        { text: "Intense", value: 7, emoji: "😰" },
        { text: "Écrasante", value: 10, emoji: "😵" }
      ]
    },
    {
      id: "relations_1",
      type: "scale",
      text: "Comment évaluez-vous vos relations avec vos collègues ?",
      category: "relations",
      scale: { min: 1, max: 10, labels: ["Très difficiles", "Excellentes"] }
    },
    {
      id: "reconnaissance_1",
      type: "multiple_choice",
      text: "Vous sentez-vous reconnu(e) pour votre travail ?",
      category: "reconnaissance",
      options: [
        { text: "Jamais", value: 1 },
        { text: "Rarement", value: 3 },
        { text: "Parfois", value: 6 },
        { text: "Souvent", value: 8 },
        { text: "Toujours", value: 10 }
      ]
    },
    {
      id: "equilibre_1",
      type: "scale",
      text: "Comment évaluez-vous votre équilibre vie professionnelle/vie privée ?",
      category: "equilibre",
      scale: { min: 1, max: 10, labels: ["Très déséquilibré", "Parfaitement équilibré"] }
    }
  ],
  team: [
    {
      id: "team_cohesion_1",
      type: "scale",
      text: "Comment évaluez-vous la cohésion de votre équipe ?",
      category: "cohesion",
      scale: { min: 1, max: 10, labels: ["Très faible", "Excellente"] }
    },
    {
      id: "team_communication_1",
      type: "multiple_choice",
      text: "Comment se passe la communication au sein de votre équipe ?",
      category: "communication",
      options: [
        { text: "Très difficile", value: 1, emoji: "😤" },
        { text: "Compliquée", value: 3, emoji: "😕" },
        { text: "Correcte", value: 6, emoji: "😐" },
        { text: "Fluide", value: 8, emoji: "😊" },
        { text: "Excellente", value: 10, emoji: "🚀" }
      ]
    },
    {
      id: "team_support_1",
      type: "scale",
      text: "Vous sentez-vous soutenu(e) par votre équipe ?",
      category: "support",
      scale: { min: 1, max: 10, labels: ["Pas du tout", "Complètement"] }
    },
    {
      id: "team_goals_1",
      type: "multiple_choice",
      text: "Les objectifs de l'équipe sont-ils clairs pour vous ?",
      category: "objectifs",
      options: [
        { text: "Pas du tout clairs", value: 1 },
        { text: "Plutôt flous", value: 3 },
        { text: "Assez clairs", value: 7 },
        { text: "Très clairs", value: 10 }
      ]
    }
  ],
  manager: [
    {
      id: "management_style_1",
      type: "multiple_choice",
      text: "Comment décririez-vous votre style de management ?",
      category: "style",
      options: [
        { text: "Directif", value: 6, emoji: "⚡" },
        { text: "Collaboratif", value: 8, emoji: "🤝" },
        { text: "Délégatif", value: 7, emoji: "🎯" },
        { text: "Adaptatif", value: 9, emoji: "🔄" }
      ]
    },
    {
      id: "team_satisfaction_1",
      type: "scale",
      text: "Comment évaluez-vous la satisfaction de votre équipe ?",
      category: "satisfaction",
      scale: { min: 1, max: 10, labels: ["Très insatisfaite", "Très satisfaite"] }
    },
    {
      id: "decision_making_1",
      type: "multiple_choice",
      text: "Comment prenez-vous vos décisions managériales ?",
      category: "decisions",
      options: [
        { text: "Seul(e)", value: 5 },
        { text: "Après consultation", value: 8 },
        { text: "En concertation", value: 9 },
        { text: "En délégation", value: 7 }
      ]
    }
  ]
};

export const getEnterpriseQuestions = (context: string): Question[] => {
  return enterpriseQuestions[context] || enterpriseQuestions.individual;
};
