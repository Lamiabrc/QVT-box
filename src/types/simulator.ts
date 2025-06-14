
export interface BaseQuestion {
  id: string;
  text: string;
  category?: string;
  weight?: number;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple_choice";
  options: Array<{
    text: string;
    value: number;
    emoji?: string;
  }>;
}

export interface ScaleQuestion extends BaseQuestion {
  type: "scale";
  scale: {
    min: number;
    max: number;
    labels: string[];
  };
}

export interface TextQuestion extends BaseQuestion {
  type: "text";
  placeholder?: string;
  maxLength?: number;
}

export type Question = MultipleChoiceQuestion | ScaleQuestion | TextQuestion;

export interface SimulatorResponse {
  questionId: string;
  value: number | string;
  comment?: string;
}

export interface SimulatorResult {
  score: number;
  category: string;
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

export type SimulatorType = 'entreprise' | 'teens' | 'family';
export type EnterpriseContext = 'individual' | 'team' | 'manager';
