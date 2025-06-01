
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, CheckCircle, AlertTriangle } from "lucide-react";
import { SimulatorType } from "./SimulatorTypeSelector";

interface SimulatorResultsProps {
  simulatorType: SimulatorType;
  score: number;
  answers: Record<string, string>;
  onRestart: () => void;
  onSave?: () => void;
  userConnected: boolean;
}

const SimulatorResults: React.FC<SimulatorResultsProps> = ({
  simulatorType,
  score,
  answers,
  onRestart,
  onSave,
  userConnected
}) => {
  const getScoreInterpretation = (score: number) => {
    if (score >= 80) return { 
      level: "Excellent", 
      color: "text-green-600", 
      description: "Très bon niveau de bien-être",
      icon: CheckCircle
    };
    if (score >= 60) return { 
      level: "Bon", 
      color: "text-blue-600", 
      description: "Niveau de bien-être satisfaisant",
      icon: TrendingUp
    };
    if (score >= 40) return { 
      level: "Moyen", 
      color: "text-yellow-600", 
      description: "Quelques points d'amélioration",
      icon: Target
    };
    return { 
      level: "À améliorer", 
      color: "text-red-600", 
      description: "Attention requise",
      icon: AlertTriangle
    };
  };

  const interpretation = getScoreInterpretation(score);
  const Icon = interpretation.icon;

  const getRecommendations = (type: SimulatorType, score: number) => {
    const baseRecommendations = [
      "Prenez des pauses régulières pendant votre journée de travail",
      "Pratiquez des techniques de relaxation ou de méditation",
      "Communiquez ouvertement avec votre équipe"
    ];

    switch (type) {
      case "personal":
        if (score < 60) {
          return [
            "Considérez un entretien avec votre manager pour discuter de votre charge de travail",
            "Explorez des activités de décompression après le travail",
            "Établissez des limites claires entre vie professionnelle et personnelle",
            ...baseRecommendations
          ];
        }
        return [
          "Continuez à maintenir vos bonnes habitudes",
          "Partagez vos stratégies bien-être avec vos collègues",
          ...baseRecommendations.slice(0, 2)
        ];
      
      case "team":
        if (score < 60) {
          return [
            "Organisez des réunions d'équipe régulières pour améliorer la communication",
            "Proposez des activités de team building",
            "Mettez en place un système de feedback constructif",
            ...baseRecommendations
          ];
        }
        return [
          "Maintenez la dynamique positive de votre équipe",
          "Devenez un ambassadeur du bien-être pour les autres équipes",
          ...baseRecommendations.slice(0, 2)
        ];
      
      case "life_event":
        return [
          "Communiquez avec votre manager sur vos besoins d'adaptation",
          "Utilisez les ressources d'aide aux employés si disponibles",
          "Considérez un accompagnement professionnel si nécessaire",
          "Soyez patient avec vous-même pendant cette période d'adaptation",
          ...baseRecommendations
        ];
      
      default:
        return baseRecommendations;
    }
  };

  const getTypeTitle = (type: SimulatorType) => {
    switch (type) {
      case "personal": return "Évaluation Personnelle";
      case "team": return "Évaluation d'Équipe";
      case "life_event": return "Événement de Vie";
      default: return "Résultats";
    }
  };

  const recommendations = getRecommendations(simulatorType, score);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-t-4 border-t-primary">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Icon className={`w-8 h-8 ${interpretation.color}`} />
          </div>
          <CardTitle className="text-2xl">Résultats - {getTypeTitle(simulatorType)}</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <h3 className="text-4xl font-bold text-primary mb-2">{score}/100</h3>
            <p className={`text-xl font-semibold ${interpretation.color}`}>{interpretation.level}</p>
            <p className="text-muted-foreground">{interpretation.description}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Recommandations personnalisées</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {!userConnected && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6 text-center">
            <p className="text-blue-800 mb-4">
              💡 <strong>Connectez-vous</strong> pour sauvegarder vos résultats et accéder à un suivi personnalisé !
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-4 justify-center">
        <Button onClick={onRestart} variant="outline" className="flex-1 max-w-xs">
          Refaire le test
        </Button>
        {userConnected && onSave && (
          <Button onClick={onSave} className="flex-1 max-w-xs">
            Sauvegarder les résultats
          </Button>
        )}
      </div>
    </div>
  );
};

export default SimulatorResults;
