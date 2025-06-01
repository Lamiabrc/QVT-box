
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, MessageSquare, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";
import { FamilySimulatorResult } from "@/types/familySimulator";

interface FamilySimulatorResultsProps {
  result: FamilySimulatorResult;
  onFeedback: (type: "like" | "dislike") => void;
  onReset: () => void;
}

const FamilySimulatorResults: React.FC<FamilySimulatorResultsProps> = ({
  result,
  onFeedback,
  onReset
}) => {
  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "faible": return "text-green-600";
      case "modéré": return "text-yellow-600";
      case "élevé": return "text-orange-600";
      case "très élevé": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getRiskBgColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "faible": return "bg-green-100 border-green-200";
      case "modéré": return "bg-yellow-100 border-yellow-200";
      case "élevé": return "bg-orange-100 border-orange-200";
      case "très élevé": return "bg-red-100 border-red-200";
      default: return "bg-gray-100 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Score principal */}
      <Card className="shadow-lg border-t-4 border-t-pink-500">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            🏠 Résultats de votre évaluation familiale
          </CardTitle>
          <p className="text-gray-600">
            Analyse basée sur votre profil : {result.role === "teen" ? "👨‍🎓 Adolescent" : 
            result.role === "parent" ? "👨‍👩‍👧‍👦 Parent" : "👪 Famille"}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">
              {Math.round(result.wellnessScore)}/100
            </div>
            <p className="text-lg text-gray-700 mb-4">Score de Bien-être Familial</p>
            <Progress value={result.wellnessScore} className="h-3" />
          </div>

          <div className={`p-4 rounded-lg border-2 ${getRiskBgColor(result.familyRisk)}`}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Heart className={`w-5 h-5 ${getRiskColor(result.familyRisk)}`} />
              <span className={`font-semibold ${getRiskColor(result.familyRisk)}`}>
                Niveau de préoccupation : {result.familyRisk}
              </span>
            </div>
            <p className="text-center text-sm text-gray-600">
              Probabilité de difficultés familiales : {result.riskPercentage}%
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Scores détaillés */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Communication</p>
                <p className="text-2xl font-bold text-blue-600">{result.communicationScore}/100</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Émotionnel</p>
                <p className="text-2xl font-bold text-green-600">{result.emotionalScore}/100</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <p className="font-semibold text-gray-900">Soutien</p>
                <p className="text-2xl font-bold text-purple-600">{result.supportScore}/100</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommandations */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🎁</span>
            <span>Recommandations personnalisées</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {result.recommendations.map((recommendation, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                <p className="text-gray-800">{recommendation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => onFeedback("like")}
            className="flex items-center space-x-2"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Utile</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => onFeedback("dislike")}
            className="flex items-center space-x-2"
          >
            <ThumbsDown className="w-4 h-4" />
            <span>Pas utile</span>
          </Button>
        </div>
        <Button
          onClick={onReset}
          variant="secondary"
          className="flex items-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Refaire le test</span>
        </Button>
      </div>
    </div>
  );
};

export default FamilySimulatorResults;
