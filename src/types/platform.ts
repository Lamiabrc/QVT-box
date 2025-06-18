
export type PlatformSegment = 'enterprise' | 'family_teen';

export interface PlatformConfig {
  segment: PlatformSegment;
  enabled: boolean;
  name: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  features: {
    questionnaires: boolean;
    dashboard: boolean;
    shop: boolean;
    simulator: boolean;
    aiRecommendations: boolean;
    alerts: boolean;
  };
  routes: {
    home: string;
    dashboard: string;
    shop: string;
    questionnaire: string;
    login: string;
  };
}

export interface FeatureFlags {
  enterprise: boolean;
  family_teen: boolean;
  maintenance: boolean;
}
