
import { SimulatorResponse, SimulatorResult, Question } from "@/types/simulator";

export const calculateEnterpriseScore = (
  responses: SimulatorResponse[],
  questions: Question[]
): SimulatorResult => {
  let totalScore = 0;
  let totalWeight = 0;

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (question && typeof response.value === 'number') {
      const weight = question.weight || 1;
      totalScore += response.value * weight;
      totalWeight += weight;
    }
  });

  const averageScore = totalWeight > 0 ? totalScore / totalWeight : 0;
  const normalizedScore = Math.round((averageScore / 10) * 100);

  let riskLevel: 'low' | 'medium' | 'high';
  let category: string;
  let recommendations: string[];

  if (normalizedScore >= 70) {
    riskLevel = 'low';
    category = 'Excellente qualité de vie au travail';
    recommendations = [
      'Continuez sur cette excellente voie !',
      'Partagez vos bonnes pratiques avec vos collègues',
      'Maintenez cet équilibre vie professionnelle/privée'
    ];
  } else if (normalizedScore >= 40) {
    riskLevel = 'medium';
    category = 'Qualité de vie au travail à améliorer';
    recommendations = [
      'Identifiez les sources de stress principales',
      'Communiquez davantage avec votre manager',
      'Prenez des pauses régulières dans votre journée'
    ];
  } else {
    riskLevel = 'high';
    category = 'Qualité de vie au travail préoccupante';
    recommendations = [
      'Parlez-en à votre manager ou RH',
      'Envisagez un accompagnement professionnel',
      'Priorisez votre bien-être immédiatement'
    ];
  }

  return {
    score: normalizedScore,
    category,
    recommendations,
    riskLevel
  };
};

export const calculateTeensScore = (
  responses: SimulatorResponse[],
  questions: Question[]
): SimulatorResult => {
  let totalScore = 0;
  const validResponses = responses.filter(r => typeof r.value === 'number');

  validResponses.forEach(response => {
    totalScore += response.value as number;
  });

  const averageScore = validResponses.length > 0 ? totalScore / validResponses.length : 0;
  const normalizedScore = Math.round((averageScore / 10) * 100);

  let riskLevel: 'low' | 'medium' | 'high';
  let category: string;
  let recommendations: string[];

  if (normalizedScore >= 70) {
    riskLevel = 'low';
    category = 'Excellent bien-être général ! 🌟';
    recommendations = [
      'Continue comme ça, tu gères super bien ! 💪',
      'Partage tes astuces bien-être avec tes amis 😊',
      'N\'oublie pas de célébrer tes réussites 🎉'
    ];
  } else if (normalizedScore >= 40) {
    riskLevel = 'medium';
    category = 'Bien-être correct mais peut mieux faire 😊';
    recommendations = [
      'Essaie de dormir un peu plus régulièrement 😴',
      'Parle davantage avec tes proches 💬',
      'Trouve des activités qui te détendent 🎨'
    ];
  } else {
    riskLevel = 'high';
    category = 'Ton bien-être a besoin d\'attention 💙';
    recommendations = [
      'Parle à un adulte de confiance 👥',
      'N\'hésite pas à demander de l\'aide 🤝',
      'Prends soin de toi, c\'est important ! 💖'
    ];
  }

  return {
    score: normalizedScore,
    category,
    recommendations,
    riskLevel
  };
};

export const calculateFamilyScore = (
  responses: SimulatorResponse[]
): SimulatorResult => {
  // Cette fonction sera utilisée pour le simulateur famille
  let totalScore = 0;
  let scaleQuestions = 0;
  
  responses.forEach(response => {
    if (typeof response.value === 'number') {
      totalScore += response.value;
      scaleQuestions++;
    }
  });
  
  const normalizedScore = scaleQuestions > 0 ? Math.round((totalScore / (scaleQuestions * 5)) * 100) : 75;

  let riskLevel: 'low' | 'medium' | 'high';
  let category: string;
  let recommendations: string[];

  if (normalizedScore >= 70) {
    riskLevel = 'low';
    category = 'Excellente harmonie familiale ! ✨';
    recommendations = [
      'Continuez à cultiver cette belle relation ! 💝',
      'Planifiez des moments privilégiés ensemble 🏠',
      'Célébrez vos réussites familiales 🎉'
    ];
  } else if (normalizedScore >= 50) {
    riskLevel = 'medium';
    category = 'Relations familiales à renforcer 💙';
    recommendations = [
      'Organisez plus d\'activités en famille 🎮',
      'Améliorez la communication familiale 💬',
      'Créez des traditions familiales 🏠'
    ];
  } else {
    riskLevel = 'high';
    category = 'Relations familiales à consolider 🤝';
    recommendations = [
      'Cherchez de l\'aide familiale si besoin 👨‍👩‍👧‍👦',
      'Instaurez des règles bienveillantes 💝',
      'Priorisez le dialogue et l\'écoute 💬'
    ];
  }

  return {
    score: normalizedScore,
    category,
    recommendations,
    riskLevel
  };
};
