
import { FamilyQuestion, FamilyRole } from "@/types/familySimulator";

export const familyQuestions: FamilyQuestion[] = [
  {
    id: "communication_quality",
    text: "Comment évaluez-vous la qualité de communication dans votre famille ?",
    type: "scale",
    scale: { min: 1, max: 5, labels: ["Très mauvaise", "Excellente"] }
  },
  {
    id: "family_time",
    text: "À quelle fréquence votre famille passe-t-elle du temps ensemble ?",
    type: "multiple_choice",
    options: [
      "Tous les jours",
      "Plusieurs fois par semaine",
      "Une fois par semaine",
      "Rarement",
      "Jamais"
    ]
  },
  {
    id: "support_feeling",
    text: "Vous sentez-vous soutenu(e) par votre famille ?",
    type: "scale",
    scale: { min: 1, max: 5, labels: ["Pas du tout", "Totalement"] }
  },
  {
    id: "conflict_resolution",
    text: "Comment les conflits sont-ils généralement résolus dans votre famille ?",
    type: "multiple_choice",
    options: [
      "Discussion ouverte et respectueuse",
      "Avec l'aide d'un médiateur familial",
      "Évitement des sujets difficiles",
      "Arguments fréquents",
      "Silence et tensions"
    ]
  }
];

const teenSpecificQuestions: FamilyQuestion[] = [
  {
    id: "teen_autonomy",
    text: "Vous sentez-vous suffisamment autonome dans vos décisions ?",
    type: "scale",
    scale: { min: 1, max: 5, labels: ["Pas du tout", "Totalement"] },
    role: ["teen"]
  },
  {
    id: "teen_understanding",
    text: "Vos parents comprennent-ils vos préoccupations ?",
    type: "scale",
    scale: { min: 1, max: 5, labels: ["Jamais", "Toujours"] },
    role: ["teen"]
  }
];

const parentSpecificQuestions: FamilyQuestion[] = [
  {
    id: "parenting_stress",
    text: "Quel est votre niveau de stress parental ?",
    type: "scale",
    scale: { min: 1, max: 5, labels: ["Très faible", "Très élevé"] },
    role: ["parent"]
  },
  {
    id: "child_behavior",
    text: "Comment percevez-vous le comportement de votre adolescent ?",
    type: "multiple_choice",
    options: [
      "Très positif",
      "Plutôt positif",
      "Neutre",
      "Préoccupant",
      "Très préoccupant"
    ],
    role: ["parent"]
  }
];

export const getQuestionsForRole = (role: FamilyRole): FamilyQuestion[] => {
  switch (role) {
    case "teen":
      return teenSpecificQuestions;
    case "parent":
      return parentSpecificQuestions;
    case "family":
      return [...teenSpecificQuestions, ...parentSpecificQuestions];
    default:
      return [];
  }
};
