
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Calendar } from "lucide-react";

export type SimulatorType = "personal" | "team" | "life_event";

interface SimulatorTypeSelectorProps {
  selectedType: SimulatorType | null;
  onTypeSelect: (type: SimulatorType) => void;
}

const SimulatorTypeSelector: React.FC<SimulatorTypeSelectorProps> = ({
  selectedType,
  onTypeSelect
}) => {
  const simulatorTypes = [
    {
      id: "personal" as SimulatorType,
      title: "Évaluation Personnelle",
      description: "Analysez votre bien-être au travail personnel",
      icon: User,
      color: "blue"
    },
    {
      id: "team" as SimulatorType,
      title: "Évaluation d'Équipe",
      description: "Évaluez la dynamique et le bien-être de votre équipe",
      icon: Users,
      color: "green"
    },
    {
      id: "life_event" as SimulatorType,
      title: "Événement de Vie",
      description: "Accompagnement lors d'événements personnels marquants",
      icon: Calendar,
      color: "purple"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Choisissez votre type d'évaluation
        </h2>
        <p className="text-muted-foreground text-lg">
          Sélectionnez le simulateur qui correspond le mieux à votre situation
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {simulatorTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <Card 
              key={type.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                isSelected 
                  ? `border-2 border-primary shadow-lg bg-primary/5` 
                  : 'border border-border hover:border-primary/50'
              }`}
              onClick={() => onTypeSelect(type.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  type.color === 'blue' ? 'bg-blue-100' :
                  type.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  <Icon className={`w-10 h-10 ${
                    type.color === 'blue' ? 'text-blue-600' :
                    type.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  }`} />
                </div>
                <CardTitle className="text-xl font-bold">
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SimulatorTypeSelector;
