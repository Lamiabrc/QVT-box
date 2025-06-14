
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Heart, Briefcase } from "lucide-react";

export type SimulatorType = "personal" | "team" | "life_event" | "family";

interface SimulatorTypeSelectorProps {
  selectedType: SimulatorType | null;
  onTypeSelect: (type: SimulatorType) => void;
  universe?: "entreprise" | "famille";
}

const SimulatorTypeSelector: React.FC<SimulatorTypeSelectorProps> = ({
  selectedType,
  onTypeSelect,
  universe = "entreprise"
}) => {
  const getTypesForUniverse = () => {
    if (universe === "famille") {
      return [
        {
          type: "family" as SimulatorType,
          title: "Évaluation Familiale",
          description: "Évaluez la dynamique et le bien-être de votre famille",
          icon: Heart,
          color: "bg-pink-100 hover:bg-pink-200 border-pink-300"
        }
      ];
    }

    return [
      {
        type: "personal" as SimulatorType,
        title: "Évaluation Individuelle",
        description: "Évaluez votre bien-être personnel au travail",
        icon: User,
        color: "bg-blue-100 hover:bg-blue-200 border-blue-300"
      },
      {
        type: "team" as SimulatorType,
        title: "Évaluation d'Équipe",
        description: "Analysez la dynamique et le bien-être de votre équipe",
        icon: Users,
        color: "bg-green-100 hover:bg-green-200 border-green-300"
      },
      {
        type: "life_event" as SimulatorType,
        title: "Événement de Vie",
        description: "Évaluez l'impact d'un événement personnel sur votre travail",
        icon: Briefcase,
        color: "bg-yellow-100 hover:bg-yellow-200 border-yellow-300"
      }
    ];
  };

  const types = getTypesForUniverse();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {universe === "famille" ? "Simulateur Famille" : "Simulateur QVT Entreprise"}
        </h2>
        <p className="text-muted-foreground">
          {universe === "famille" 
            ? "Choisissez le type d'évaluation familiale que vous souhaitez réaliser"
            : "Choisissez le type d'évaluation QVT que vous souhaitez réaliser"
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {types.map((typeOption) => {
          const Icon = typeOption.icon;
          return (
            <Card
              key={typeOption.type}
              className={`cursor-pointer transition-all duration-200 ${typeOption.color} ${
                selectedType === typeOption.type ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => onTypeSelect(typeOption.type)}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{typeOption.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {typeOption.description}
                </p>
                <Button
                  variant={selectedType === typeOption.type ? "default" : "outline"}
                  className="w-full"
                >
                  {selectedType === typeOption.type ? "Sélectionné" : "Sélectionner"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SimulatorTypeSelector;
