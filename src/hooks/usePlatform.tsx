
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { PlatformSegment, PlatformConfig } from '@/types/platform';
import { getPlatformConfig, getSegmentFromPath, isSegmentEnabled } from '@/config/platform';

interface PlatformContextType {
  segment: PlatformSegment;
  config: PlatformConfig;
  setSegment: (segment: PlatformSegment) => void;
  isEnabled: boolean;
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export const PlatformProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [segment, setSegmentState] = useState<PlatformSegment>(() => 
    getSegmentFromPath(location.pathname)
  );

  // Mise à jour automatique du segment selon l'URL
  useEffect(() => {
    const newSegment = getSegmentFromPath(location.pathname);
    if (newSegment !== segment) {
      setSegmentState(newSegment);
    }
  }, [location.pathname, segment]);

  const config = getPlatformConfig(segment);
  const isEnabled = isSegmentEnabled(segment);

  const setSegment = (newSegment: PlatformSegment) => {
    if (isSegmentEnabled(newSegment)) {
      setSegmentState(newSegment);
      // Optionnel : sauvegarder en localStorage
      localStorage.setItem('qvt_platform_segment', newSegment);
    }
  };

  return (
    <PlatformContext.Provider value={{ segment, config, setSegment, isEnabled }}>
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => {
  const context = useContext(PlatformContext);
  if (context === undefined) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
};
