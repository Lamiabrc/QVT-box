
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
      id: 'parent_solo' as FamilyRole,
      title: '🦸 Parent Solo',
      description: 'Je gère le quotidien familial en autonomie',
      color: '#0F766E',
      bubble: { emotion: 'happy' as const, intensity: 7 }
    },
    {
      id: 'parent_en_couple' as FamilyRole,
      title: '👨‍👩‍👧‍👦 Parents en couple',
      description: 'Nous élevons nos enfants ensemble',
      color: '#1E40AF',
      bubble: { emotion: 'happy' as const, intensity: 8 }
    },
    {
      id: 'parent_lgbt' as FamilyRole,
      title: '🌈 Parent(s) LGBT+',
      description: 'Notre famille arc-en-ciel a ses spécificités',
      color: '#7C3AED',
      bubble: { emotion: 'happy' as const, intensity: 8 }
    },
    {
      id: 'enfant_ado' as FamilyRole,
      title: '🧑‍🎓 Enfant / Adolescent',
      description: 'Je souhaite m\'exprimer et être accompagné(e)',
      color: '#DC2626',
      bubble: { emotion: 'excited' as const, intensity: 7 }
    },
    {
      id: 'grand_parent' as FamilyRole,
      title: '👴👵 Grand-parent',
      description: 'J\'accompagne ma famille avec mon expérience',
      color: '#475569',
      bubble: { emotion: 'neutral' as const, intensity: 6 }
    },
    {
      id: 'famille_recomposee' as FamilyRole,
      title: '🏡 Famille Recomposée',
      description: 'Notre famille s\'est reconstituée avec de nouveaux liens',
      color: '#0891B2',
      bubble: { emotion: 'neutral' as const, intensity: 6 }
    },
    {
      id: 'autre_situation' as FamilyRole,
      title: '👥 Autre situation',
      description: 'Ma situation familiale est particulière',
      color: '#78716C',
      bubble: { emotion: 'neutral' as const, intensity: 5 }
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          🏠 Bienvenue dans l'univers famille
        </h2>
        <p className="text-xl text-slate-600">
          Sélectionnez votre rôle pour une expérience personnalisée et des conseils adaptés à votre situation familiale
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
                    ? 'border-teal-600 shadow-lg bg-gradient-to-br from-teal-50 to-blue-50' 
                    : 'border-slate-200 hover:border-teal-300 bg-white'
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
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    {role.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {role.description}
                  </p>
                  
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 px-4 py-2 bg-teal-100 rounded-full"
                    >
                      <span className="text-teal-800 font-medium text-sm">✨ Rôle sélectionné</span>
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
          <p className="text-lg text-slate-700 mb-4">
            Parfait ! Vous pouvez maintenant commencer votre évaluation personnalisée
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default FamilyRoleSelector;
