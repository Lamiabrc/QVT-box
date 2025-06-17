
export type FamilyRole = 
  | 'parent_solo' 
  | 'parent_en_couple' 
  | 'parent_lgbt' 
  | 'enfant_ado' 
  | 'grand_parent' 
  | 'famille_recomposee' 
  | 'autre_situation'
  | 'parent'
  | 'teen'
  | 'autre_referent';

export interface FamilyMember {
  id: string;
  role: FamilyRole;
  name: string;
  isApproved: boolean;
  joinedAt: Date;
}

export interface FamilyData {
  id: string;
  name: string;
  code: string;
  members: FamilyMember[];
  createdAt: Date;
}

export interface FamilyEvaluation {
  id: string;
  familyId: string;
  memberId: string;
  mood: string;
  intensity: number;
  comment?: string;
  timestamp: Date;
}
