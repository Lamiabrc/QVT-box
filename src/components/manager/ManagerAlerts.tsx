
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface TeamScore {
  user_id: string;
  qvt_score: number;
  burnout_risk: string;
  burnout_risk_percentage: number;
  created_at: string;
}

interface ManagerAlertsProps {
  teamScores: TeamScore[];
}

const ManagerAlerts = ({ teamScores }: ManagerAlertsProps) => {
  const getAnonymizedTeamMember = (userId: string, index: number) => {
    return `Collaborateur ${index + 1}`;
  };

  const alertScores = teamScores.filter(score => score.burnout_risk_percentage > 50);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
          Situations Nécessitant une Attention
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alertScores.slice(0, 5).map((score, index) => (
            <div key={`alert-${score.user_id}-${score.created_at}`} className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded-r-lg">
              <h4 className="font-semibold text-orange-800">
                {getAnonymizedTeamMember(score.user_id, index)} - Niveau de stress élevé
              </h4>
              <p className="text-sm text-orange-600 mb-2">
                Score de stress: {score.burnout_risk_percentage}% | QVT: {score.qvt_score}/100
              </p>
              <div className="space-x-2">
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                  Planifier un entretien
                </Button>
                <Button size="sm" variant="outline" className="border-orange-300 text-orange-700">
                  Voir l'historique
                </Button>
              </div>
            </div>
          ))}
          
          {alertScores.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">🎉 Aucune alerte en cours. Votre équipe est en bonne santé !</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerAlerts;
