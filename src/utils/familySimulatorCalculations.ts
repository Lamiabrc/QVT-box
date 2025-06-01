
import { FamilyRole } from "@/types/familySimulator";

export const calculateFamilyWellnessScore = (
  answers: Record<string, string | number>,
  role: FamilyRole
): number => {
  let totalScore = 0;
  let questionCount = 0;

  // Score de base sur les questions communes
  const communicationScore = typeof answers.communication_quality === 'number' 
    ? answers.communication_quality : 3;
  const supportScore = typeof answers.support_feeling === 'number' 
    ? answers.support_feeling : 3;

  totalScore += communicationScore + supportScore;
  questionCount += 2;

  // Ajustements selon le rôle
  if (role === "teen") {
    const autonomyScore = typeof answers.teen_autonomy === 'number' 
      ? answers.teen_autonomy : 3;
    const understandingScore = typeof answers.teen_understanding === 'number' 
      ? answers.teen_understanding : 3;
    
    totalScore += autonomyScore + understandingScore;
    questionCount += 2;
  }

  if (role === "parent") {
    const stressScore = typeof answers.parenting_stress === 'number' 
      ? (6 - answers.parenting_stress) : 3; // Inverse car le stress est négatif
    
    totalScore += stressScore;
    questionCount += 1;
  }

  return questionCount > 0 ? (totalScore / questionCount) * 20 : 60;
};

export const calculateFamilyRisk = (wellnessScore: number, role: FamilyRole) => {
  let riskPercentage: number;
  let category: string;

  if (wellnessScore >= 80) {
    riskPercentage = Math.max(0, 20 - (wellnessScore - 80));
    category = "Faible";
  } else if (wellnessScore >= 60) {
    riskPercentage = 20 + (80 - wellnessScore) * 0.5;
    category = "Modéré";
  } else if (wellnessScore >= 40) {
    riskPercentage = 30 + (60 - wellnessScore) * 1.5;
    category = "Élevé";
  } else {
    riskPercentage = Math.min(100, 60 + (40 - wellnessScore) * 2);
    category = "Très élevé";
  }

  return {
    percentage: Math.round(riskPercentage),
    category
  };
};

export const getRecommendedFamilyBox = (
  answers: Record<string, string | number>,
  wellnessScore: number,
  role: FamilyRole
): string => {
  if (wellnessScore >= 80) {
    return role === "teen" 
      ? "Box Épanouissement Ado - Activités créatives et défis personnels"
      : "Box Harmonie Familiale - Jeux et activités de renforcement des liens";
  } else if (wellnessScore >= 60) {
    return role === "teen"
      ? "Box Communication Ado - Outils d'expression et de dialogue"
      : "Box Équilibre Familial - Activités de détente et communication";
  } else {
    return role === "teen"
      ? "Box Soutien Ado - Ressources bien-être et accompagnement"
      : "Box Thérapie Familiale - Accompagnement professionnel et outils de médiation";
  }
};
