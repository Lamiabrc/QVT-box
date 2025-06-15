
export type UniverseType = 'famille' | 'entreprise' | 'coach';

export type FamilyRole = 'parent' | 'enfant_ado' | 'grand_parent' | 'tuteur' | 'parrain_marraine' | 'institution' | 'adulte_referent';

export type EnterpriseSpeciality = 'salarie_itinerant' | 'teletravail' | 'penibilite' | 'retraite_proche' | 'promotion_envisagee';

export type EnterpriseStatus = 'vip' | 'penible' | 'sensible' | 'itinerant' | 'talent_strategique';

export interface BubbleData {
  id: string;
  emotion: 'happy' | 'neutral' | 'sad' | 'stressed' | 'excited' | 'angry' | 'confused';
  intensity: number; // 1-10
  color: string;
  size: 'small' | 'medium' | 'large';
  animation: 'float' | 'pulse' | 'bounce' | 'still';
  timestamp: Date;
}

export interface UserProfile {
  id: string;
  email: string;
  universe: UniverseType;
  role?: FamilyRole;
  specialities?: EnterpriseSpeciality[];
  status?: EnterpriseStatus[];
  bubbleHistory: BubbleData[];
  currentMood: BubbleData;
}

export interface BoxRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  targetRole?: FamilyRole;
  targetUniverse: UniverseType;
  aiConfidence: number;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  contents: string[];
}

export interface EmotionalEvaluation {
  id: string;
  userId: string;
  bubbleData: BubbleData;
  scores: Record<string, number>;
  comments: string;
  aiAnalysis?: string;
  recommendations: BoxRecommendation[];
  timestamp: Date;
}
