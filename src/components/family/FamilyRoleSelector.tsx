
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FamilyRole } from '@/types/qvtbox';

interface FamilyRoleSelectorProps {
  selectedRole: FamilyRole | null;
  onRoleSelect: (role: FamilyRole) => void;
  onNext: () => void;
}

const FamilyRoleSelector: React.FC<FamilyRoleSelectorProps> = ({
  selectedRole,
  onRoleSelect,
  onNext
}) => {
  const roles = [
    {
      id: 'parent_solo' as FamilyRole,
      label: 'Parent Solo',
      emoji: '🦸',
      description: 'Je gère le quotidien en solo.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'parent_en_couple' as FamilyRole,
      label: 'Parents en couple',
      emoji: '👩‍❤️‍👨',
      description: 'Nous sommes deux pour élever nos enfants.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'parent_lgbt' as FamilyRole,
      label: 'Parent(s) LGBT+',
      emoji: '🌈',
      description: 'Je fais partie d\'une famille arc-en-ciel.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'enfant_ado' as FamilyRole,
      label: 'Enfant/Ado',
      emoji: '🧑‍🎓',
      description: 'J\'exprime mes émotions.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'grand_parent' as FamilyRole,
      label: 'Grand-parent',
      emoji: '👴👵',
      description: 'J\'accompagne ma famille.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      id: 'famille_recomposee' as FamilyRole,
      label: 'Famille Recomposée',
      emoji: '🧩',
      description: 'Nous créons de nouveaux liens.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      id: 'autre_situation' as FamilyRole,
      label: 'Autre situation',
      emoji: '👤',
      description: 'Ma situation est unique.',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="shadow-xl border-0 bg-gradient-to-br from-pink-50 to-purple-50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            👨‍👩‍👧‍👦 Univers Famille
          </CardTitle>
          <p className="text-gray-600">
            Choisis ton rôle dans la famille pour personnaliser ton expérience
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role) => (
              <motion.div
                key={role.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedRole === role.id
                    ? 'ring-4 ring-pink-300 ring-opacity-60'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => onRoleSelect(role.id)}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center mx-auto mb-4 text-3xl`}>
                      {role.emoji}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{role.label}</h3>
                    <p className="text-sm text-gray-600">{role.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {selectedRole && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center pt-6"
            >
              <Button
                onClick={onNext}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-3"
              >
                Continuer avec ce rôle
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyRoleSelector;
