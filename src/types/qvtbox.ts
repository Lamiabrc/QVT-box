
export type UniverseType = 'famille' | 'entreprise' | 'coach';

export type FamilyRole = 'parent' | 'enfant_ado' | 'grand_parent' | 'tuteur' | 'institution' | 'autre_referent';

export type EnterpriseRole = 'collaborateur' | 'manager' | 'rh' | 'admin' | 'senior';

export type UserRole = FamilyRole | EnterpriseRole;

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
}

export interface UserProfile {
  role: UserRole;
  universe: UniverseType;
  riskFactors?: string[];
  preferences?: string[];
  specialStatus?: string[];
  evaluationHistory?: any[];
}
