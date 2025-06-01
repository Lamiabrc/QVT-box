
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Heart } from "lucide-react";
import { FamilyRole } from "@/types/familySimulator";

interface FamilyRoleSelectorProps {
  selectedRole: FamilyRole | null;
  onRoleChange: (role: FamilyRole) => void;
}

const FamilyRoleSelector: React.FC<FamilyRoleSelectorProps> = ({
  selectedRole,
  onRoleChange
}) => {
  const roles = [
    {
      id: "teen" as FamilyRole,
      title: "👨‍🎓 Adolescent",
      description: "Je suis un(e) adolescent(e) et je veux évaluer mon bien-être familial",
      icon: User,
      color: "purple"
    },
    {
      id: "parent" as FamilyRole,
      title: "👨‍👩‍👧‍👦 Parent",
      description: "Je suis parent et je veux évaluer la dynamique familiale",
      icon: Heart,
      color: "blue"
    },
    {
      id: "family" as FamilyRole,
      title: "👪 Famille",
      description: "Nous faisons cette évaluation en famille ensemble",
      icon: Users,
      color: "green"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Qui participe à cette évaluation ?
        </h2>
        <p className="text-gray-600">
          Sélectionnez votre situation pour une évaluation personnalisée
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          
          return (
            <Card 
              key={role.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                isSelected 
                  ? `border-2 border-${role.color}-500 shadow-lg` 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onRoleChange(role.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  role.color === 'purple' ? 'bg-purple-100' :
                  role.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    role.color === 'purple' ? 'text-purple-600' :
                    role.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                  }`} />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {role.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FamilyRoleSelector;
