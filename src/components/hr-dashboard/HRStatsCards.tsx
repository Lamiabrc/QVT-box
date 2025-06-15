
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building2, UserPlus, AlertCircle } from 'lucide-react';

interface HRStatsCardsProps {
  stats: {
    totalEmployees: number;
    totalTeams: number;
    totalManagers: number;
    unassignedEmployees: number;
  };
}

const HRStatsCards: React.FC<HRStatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Collaborateurs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{stats.totalEmployees}</div>
          <p className="text-xs opacity-90">Total entreprise</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <Building2 className="h-4 w-4 mr-2" />
            Équipes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{stats.totalTeams}</div>
          <p className="text-xs opacity-90">Équipes actives</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <UserPlus className="h-4 w-4 mr-2" />
            Managers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{stats.totalManagers}</div>
          <p className="text-xs opacity-90">Responsables d'équipe</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm opacity-90 flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            À Assigner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{stats.unassignedEmployees}</div>
          <p className="text-xs opacity-90">Non assignés</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRStatsCards;
