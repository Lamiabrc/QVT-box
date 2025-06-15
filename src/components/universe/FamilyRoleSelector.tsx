
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FamilyRole } from '@/types/qvtbox';
import BubbleComponent from '@/components/bubble/BubbleComponent';

interface FamilyRoleSelectorProps {
  selectedRole: FamilyRole | null;
  onRoleSelect: (role: FamilyRole) => void;
}

const FamilyRoleSelector: React.FC<FamilyRoleSelectorProps> = ({
  selectedRole,
  onRoleSelect
}) => {
  const roles = [
    {
      id: 'parent' as FamilyRole,
      title: '👨‍👩‍👧‍👦 Parent',
      description: 'Je suis parent et je veux prendre soin du bien-être familial',
      color: '#4CAF50',
      bubble: { emotion: 'happy' as const, intensity: 8 }
    },
    {
      id: 'enfant_ado' as FamilyRole,
      title: '🧑‍🎓 Enfant / Ado',
      description: 'Je suis un(e) enfant/ado et je veux exprimer mes émotions',
      color: '#E91E63',
      bubble: { emotion: 'excited' as const, intensity: 7 }
    },
    {
      id: 'grand_parent' as FamilyRole,
      title: '👴👵 Grand-parent',
      description: 'Je suis grand-parent et je veux accompagner ma famille',
      color: '#9C27B0',
      bubble: { emotion: 'neutral' as const, intensity: 6 }
    },
    {
      id: 'tuteur' as FamilyRole,
      title: '🎓 Tuteur / Tutrice',
      description: 'Je suis tuteur/tutrice légal(e)',
      color: '#FF9800',
      bubble: { emotion: 'neutral' as const, intensity: 6 }
    },
    {
      id: 'parrain_marraine' as FamilyRole,
      title: '🤝 Parrain / Marraine',
      description: 'Je suis parrain, marraine ou proche de la famille',
      color: '#2196F3',
      bubble: { emotion: 'happy' as const, intensity: 7 }
    },
    {
      id: 'institution' as FamilyRole,
      title: '🏫 Institution éducative',
      description: 'Je représente une institution éducative ou sociale',
      color: '#607D8B',
      bubble: { emotion: 'neutral' as const, intensity: 5 }
    },
    {
      id: 'adulte_referent' as FamilyRole,
      title: '👥 Adulte référent',
      description: 'Je suis un autre adulte référent de confiance',
      color: '#795548',
      bubble: { emotion: 'neutral' as const, intensity: 6 }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          🫧 Bienvenue dans l'univers famille
        </h2>
        <p className="text-xl text-gray-600">
          Choisis ton rôle pour une expérience personnalisée dans ta bulle familiale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => {
          const isSelected = selectedRole === role.id;
          
          return (
            <motion.div
              key={role.id}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  isSelected 
                    ? 'border-pink-500 shadow-lg bg-gradient-to-br from-pink-50 to-purple-50' 
                    : 'border-gray-200 hover:border-pink-300 bg-white'
                }`}
                onClick={() => onRoleSelect(role.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <BubbleComponent
                      bubble={{
                        id: role.id,
                        emotion: role.bubble.emotion,
                        intensity: role.bubble.intensity,
                        color: role.color,
                        size: 'medium',
                        animation: isSelected ? 'bounce' : 'float',
                        timestamp: new Date()
                      }}
                      interactive
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {role.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {role.description}
                  </p>
                  
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 px-4 py-2 bg-pink-100 rounded-full"
                    >
                      <span className="text-pink-700 font-medium text-sm">✨ Rôle sélectionné</span>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {selectedRole && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            Parfait ! Tu peux maintenant commencer ton évaluation émotionnelle
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default FamilyRoleSelector;
