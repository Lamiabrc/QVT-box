
export type UniverseType = 'famille' | 'entreprise' | 'coach';

export type FamilyRole = 'parent' | 'enfant_ado' | 'grand_parent' | 'tuteur' | 'institution' | 'autre_referent';

export type EnterpriseRole = 'collaborateur' | 'manager' | 'rh' | 'admin' | 'senior';

export type UserRole = FamilyRole | EnterpriseRole;

// Add missing enterprise types
export type EnterpriseSpeciality = 'teletravail' | 'pénibilité' | 'itinerant' | 'manager' | 'senior';

export type EnterpriseStatus = 'vip' | 'sensible' | 'pénible' | 'itinerant' | 'retraite_proche' | 'promotion';

// Add missing bubble and evaluation types
export interface BubbleData {
  id: string;
  userId: string;
  timestamp: Date;
  emotionalState: number;
  comment?: string;
  context?: string;
  mood: 'excellent' | 'good' | 'neutral' | 'bad' | 'critical';
}

export interface EmotionalEvaluation {
  id: string;
  userId: string;
  score: number;
  comment: string;
  timestamp: Date;
  categories: {
    stress: number;
    mood: number;
    energy: number;
    relationships: number;
  };
}

export interface MLDataPoint {
  timestamp: Date;
  features: number[];
  label: string;
  confidence: number;
}

export interface BoxRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  targetRole: UserRole;
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
