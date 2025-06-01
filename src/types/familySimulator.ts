
export type FamilyRole = "teen" | "parent" | "family";

export interface FamilyQuestion {
  id: string;
  text: string;
  type: "scale" | "multiple_choice" | "text";
  options?: string[];
  scale?: { min: number; max: number; labels: string[] };
  role?: FamilyRole[];
}

export interface FamilySimulatorResult {
  wellnessScore: number;
  familyRisk: string;
  riskPercentage: number;
  recommendations: string[];
  role: FamilyRole;
  communicationScore: number;
  emotionalScore: number;
  supportScore: number;
}
