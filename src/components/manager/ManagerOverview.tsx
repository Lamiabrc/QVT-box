
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamStats {
  totalMembers: number;
  avgScore: number;
  highRiskCount: number;
  improvementTrend: number;
}

interface ManagerOverviewProps {
  teamStats: TeamStats;
}

const ManagerOverview = ({ teamStats }: ManagerOverviewProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Performance Générale de l'Équipe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Score QVT Moyen</span>
              <Badge className="bg-green-100 text-green-800">
                {teamStats.avgScore}/100
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Membres en forme</span>
              <Badge className="bg-blue-100 text-blue-800">
                {teamStats.totalMembers - teamStats.highRiskCount}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Personnes à accompagner</span>
              <Badge className="bg-orange-100 text-orange-800">
                {teamStats.highRiskCount}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Actions Recommandées</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {teamStats.highRiskCount > 0 && (
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-orange-800 font-medium">
                  ⚠️ {teamStats.highRiskCount} personne(s) nécessitent votre attention
                </p>
                <p className="text-sm text-orange-600 mt-1">
                  Planifiez des entretiens individuels
                </p>
              </div>
            )}
            
            {teamStats.improvementTrend < 0 && (
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium">
                  📈 Tendance en baisse détectée
                </p>
                <p className="text-sm text-blue-600 mt-1">
                  Organisez une réunion d'équipe pour identifier les causes
                </p>
              </div>
            )}
            
            {teamStats.avgScore > 75 && (
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 font-medium">
                  🎉 Excellente performance d'équipe !
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Continuez sur cette voie et partagez les bonnes pratiques
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerOverview;
