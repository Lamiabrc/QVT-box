
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface NavigationProps {
  userType: 'teen' | 'parent' | 'enterprise';
  onBack: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ userType, onBack }) => {
  const getGradient = () => {
    switch (userType) {
      case 'teen':
        return 'bg-gradient-to-r from-pink-500 to-purple-500';
      case 'parent':
        return 'bg-gradient-to-r from-blue-500 to-purple-500';
      case 'enterprise':
        return 'bg-gradient-to-r from-blue-600 to-indigo-600';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <nav className={`${getGradient()} text-white p-4 shadow-lg`}>
      <div className="container mx-auto flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        
        <div className="text-lg font-bold">
          {userType === 'teen' && '✨ Espace Ados'}
          {userType === 'parent' && '👨‍👩‍👧‍👦 Espace Parent'}
          {userType === 'enterprise' && '🏢 Espace Entreprise'}
        </div>
        
        <div></div>
      </div>
    </nav>
  );
};

export default Navigation;
