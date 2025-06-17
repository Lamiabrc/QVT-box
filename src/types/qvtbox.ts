
export type UniverseType = 'famille' | 'entreprise' | 'coach';

export type FamilyRole = 'parent' | 'enfant_ado' | 'grand_parent' | 'tuteur' | 'institution' | 'autre_referent';

export type EnterpriseRole = 'collaborateur' | 'manager' | 'rh' | 'admin' | 'senior';

export type UserRole = FamilyRole | EnterpriseRole;

// Types spécialisés pour la famille
export type FamilySpecialRole = 'parent_solo' | 'parent_en_couple' | 'parent_lgbt' | 'famille_recomposee' | 'autre_situation';

// Types d'entreprise étendus
export type EnterpriseSpeciality = 'teletravail' | 'pénibilité' | 'itinerant' | 'manager' | 'senior' | 'retraite_proche' | 'promotion_envisagee' | 'salarie_itinerant';

export type EnterpriseStatus = 'vip' | 'sensible' | 'pénible' | 'itinerant' | 'retraite_proche' | 'promotion' | 'talent_strategique';

// Types pour les émotions et bulles
export type EmotionType = 'happy' | 'excited' | 'neutral' | 'confused' | 'stressed' | 'sad' | 'angry';
export type BubbleSize = 'small' | 'medium' | 'large';
export type BubbleAnimation = 'float' | 'pulse' | 'bounce' | 'static';
export type MoodType = 'excellent' | 'good' | 'neutral' | 'bad' | 'critical';

export interface BubbleData {
  id: string;
  userId?: string;
  timestamp: Date;
  emotionalState: number;
  comment?: string;
  context?: string;
  mood: MoodType;
  // Propriétés visuelles pour les bulles
  emotion: EmotionType;
  intensity: number;
  color: string;
  size: BubbleSize;
  animation: BubbleAnimation;
  imageUrl?: string;
}

export interface EmotionalEvaluation {
  id: string;
  userId: string;
  score?: number;
  comment: string;
  timestamp: Date;
  categories?: {
    stress: number;
    mood: number;
    energy: number;
    relationships: number;
  };
  // Nouvelles propriétés
  bubbleData: BubbleData;
  scores: Record<string, number>;
  recommendations: string[];
  aiAnalysis?: string;
}

export interface MLDataPoint {
  timestamp: Date;
  features: {
    emotionalScore: number;
    textSentiment: number;
    riskFactors: string[];
    timeOfDay: number;
    dayOfWeek: number;
  };
  label: string;
  confidence: number;
  userId: string;
  evaluation: EmotionalEvaluation;
  userContext: any;
}

export interface BoxRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  targetRole?: UserRole | FamilySpecialRole;
  targetUniverse: UniverseType;
  aiConfidence: number;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  contents: string[];
  price?: number;
  duration?: string;
  tags?: string[];
  targetSpecialities?: EnterpriseSpeciality[];
  targetStatus?: EnterpriseStatus[];
}

export interface UserProfile {
  id?: string;
  role: UserRole;
  universe: UniverseType;
  riskFactors?: string[];
  preferences?: string[];
  specialStatus?: string[];
  evaluationHistory?: EmotionalEvaluation[];
  currentMood?: BubbleData;
  bubbleHistory?: BubbleData[];
}
