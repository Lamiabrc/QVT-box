
import { PlatformConfig, FeatureFlags, PlatformSegment } from '@/types/platform';

// Feature flags - à configurer via variables d'environnement ou base de données
export const FEATURE_FLAGS: FeatureFlags = {
  enterprise: true,
  family_teen: true,
  maintenance: false
};

// Configuration des segments
export const PLATFORM_CONFIGS: Record<PlatformSegment, PlatformConfig> = {
  enterprise: {
    segment: 'enterprise',
    enabled: FEATURE_FLAGS.enterprise,
    name: 'QVT Box',
    description: 'Solution de bien-être au travail pour les entreprises',
    theme: {
      primary: 'from-blue-900 via-indigo-900 to-purple-900',
      secondary: 'from-blue-600 to-indigo-600',
      gradient: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    },
    features: {
      questionnaires: true,
      dashboard: true,
      shop: true,
      simulator: true,
      aiRecommendations: true,
      alerts: true
    },
    routes: {
      home: '/entreprise',
      dashboard: '/entreprise/dashboard',
      shop: '/entreprise/shop-v3',
      questionnaire: '/entreprise/questionnaire',
      login: '/entreprise/login'
    }
  },
  family_teen: {
    segment: 'family_teen',
    enabled: FEATURE_FLAGS.family_teen,
    name: 'QVTeen Box',
    description: 'Solution de bien-être pour les familles et adolescents',
    theme: {
      primary: 'from-pink-900 via-purple-900 to-indigo-900',
      secondary: 'from-pink-600 to-purple-600',
      gradient: 'bg-gradient-to-br from-pink-50 via-white to-purple-50'
    },
    features: {
      questionnaires: true,
      dashboard: true,
      shop: true,
      simulator: true,
      aiRecommendations: true,
      alerts: true
    },
    routes: {
      home: '/famille',
      dashboard: '/famille/dashboard',
      shop: '/famille/shop-v3',
      questionnaire: '/teens/questionnaire',
      login: '/auth/login?universe=famille'
    }
  }
};

// Fonction utilitaire pour obtenir la configuration selon le segment
export const getPlatformConfig = (segment: PlatformSegment): PlatformConfig => {
  return PLATFORM_CONFIGS[segment];
};

// Fonction pour vérifier si un segment est activé
export const isSegmentEnabled = (segment: PlatformSegment): boolean => {
  return PLATFORM_CONFIGS[segment].enabled;
};

// Fonction pour obtenir le segment depuis l'URL
export const getSegmentFromPath = (pathname: string): PlatformSegment => {
  if (pathname.startsWith('/entreprise') || pathname.startsWith('/enterprise')) {
    return 'enterprise';
  }
  if (pathname.startsWith('/famille') || pathname.startsWith('/teens') || pathname.startsWith('/family')) {
    return 'family_teen';
  }
  return 'enterprise'; // default
};
