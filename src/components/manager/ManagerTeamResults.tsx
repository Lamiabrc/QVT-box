
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamScore {
  user_id: string;
  qvt_score: number;
  burnout_risk: string;
  burnout_risk_percentage: number;
  created_at: string;
}

interface ManagerTeamResultsProps {
  teamScores: TeamScore[];
}

const ManagerTeamResults = ({ teamScores }: ManagerTeamResultsProps) => {
  const getAnonymizedTeamMember = (userId: string, index: number) => {
    return `Collaborateur ${index + 1}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Résultats des 3 Évaluations du Simulateur (Données Anonymisées)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamScores.slice(0, 10).map((score, index) => (
            <div key={`${score.user_id}-${score.created_at}`} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
              <div>
                <h4 className="font-medium">{getAnonymizedTeamMember(score.user_id, index)}</h4>
                <p className="text-sm text-gray-600">
                  Évaluation du {new Date(score.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">QVT: {score.qvt_score}/100</p>
                <Badge variant={
                  score.burnout_risk === 'low' ? 'secondary' :
                  score.burnout_risk === 'medium' ? 'default' : 'destructive'
                }>
                  {score.burnout_risk === 'low' ? 'Bien' : 
                   score.burnout_risk === 'medium' ? 'Attention' : 'À surveiller'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerTeamResults;
