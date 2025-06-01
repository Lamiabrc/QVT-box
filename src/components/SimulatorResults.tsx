
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThumbsUp, ThumbsDown, RefreshCw, TrendingUp, AlertCircle } from "lucide-react";

interface SimulatorResult {
  qvtScore: number;
  burnoutRisk: string;
  burnoutRiskPercentage: number;
  recommendations: string[];
  wellnessAdvice: string[];
  qvtBoxPosition: number;
  happinessScore: number;
  context: string;
}

interface SimulatorResultsProps {
  result: SimulatorResult;
  onFeedback: (type: "like" | "dislike") => void;
}

const SimulatorResults: React.FC<SimulatorResultsProps> = ({
  result,
  onFeedback
}) => {
  const getBurnoutColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'faible': return 'green';
      case 'modéré': return 'yellow';
      case 'élevé': return 'orange';
      case 'critique': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="space-y-6">
      {/* Score principal */}
      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Votre Score QVT</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary mb-2">
              {result.qvtScore.toFixed(1)}/15
            </div>
            <Progress value={result.qvtBoxPosition} className="w-full max-w-md mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-semibold text-secondary">
                {result.happinessScore}%
              </div>
              <p className="text-sm text-gray-600">Score de bonheur</p>
            </div>
            <div className="text-center">
              <Badge 
                variant="outline" 
                className={`text-${getBurnoutColor(result.burnoutRisk)}-600 border-${getBurnoutColor(result.burnoutRisk)}-600`}
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                Risque burnout: {result.burnoutRisk}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommandations */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Recommandations personnalisées</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {result.recommendations.map((rec, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800">{rec}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conseils bien-être */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Conseils bien-être</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {result.wellnessAdvice.map((advice, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{advice}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <Card className="shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => onFeedback("like")}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Utile</span>
            </Button>
            <Button
              onClick={() => onFeedback("dislike")}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ThumbsDown className="w-4 h-4" />
              <span>Pas utile</span>
            </Button>
            <Button
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Nouvelle évaluation</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulatorResults;
