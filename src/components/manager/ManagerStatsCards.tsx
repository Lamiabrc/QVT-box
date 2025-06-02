
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, AlertTriangle, Activity } from 'lucide-react';

interface TeamStats {
  totalMembers: number;
  avgScore: number;
  highRiskCount: number;
  improvementTrend: number;
}

interface ManagerStatsCardsProps {
  teamStats: TeamStats;
}

const ManagerStatsCards = ({ teamStats }: ManagerStatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Équipe Totale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{teamStats.totalMembers}</div>
          <p className="text-xs opacity-90">Collaborateurs actifs</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <TrendingUp className="h-4 w-4 mr-2" />
            Score Moyen QVT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{teamStats.avgScore}/100</div>
          <p className="text-xs opacity-90">Performance globale</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Alertes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-white">{teamStats.highRiskCount}</div>
          <p className="text-xs opacity-90">Personnes à risque</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <Activity className="h-4 w-4 mr-2" />
            Tendance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {teamStats.improvementTrend > 0 ? '+' : ''}{Math.round(teamStats.improvementTrend)}
          </div>
          <p className="text-xs opacity-90">Évolution récente</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerStatsCards;
