
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Calendar } from "lucide-react";

export type SimulationContext = "individual" | "team" | "life_event";

interface ContextSelectorProps {
  selectedContext: SimulationContext | null;
  onContextChange: (context: SimulationContext) => void;
}

const ContextSelector: React.FC<ContextSelectorProps> = ({
  selectedContext,
  onContextChange
}) => {
  const contexts = [
    {
      id: "individual" as SimulationContext,
      title: "Évaluation Personnelle",
      description: "Évaluez votre propre qualité de vie au travail",
      icon: User,
      color: "blue"
    },
    {
      id: "team" as SimulationContext,
      title: "Évaluation d'Équipe",
      description: "Analysez le bien-être de votre équipe",
      icon: Users,
      color: "green"
    },
    {
      id: "life_event" as SimulationContext,
      title: "Événement de Vie",
      description: "Adaptation suite à un changement professionnel",
      icon: Calendar,
      color: "purple"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Choisissez le type d'évaluation
        </h2>
        <p className="text-gray-600">
          Sélectionnez le contexte qui correspond le mieux à votre situation
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {contexts.map((context) => {
          const Icon = context.icon;
          const isSelected = selectedContext === context.id;
          
          return (
            <Card 
              key={context.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                isSelected 
                  ? `border-2 border-${context.color}-500 shadow-lg` 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onContextChange(context.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  context.color === 'blue' ? 'bg-blue-100' :
                  context.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    context.color === 'blue' ? 'text-blue-600' :
                    context.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  }`} />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {context.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  {context.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ContextSelector;
