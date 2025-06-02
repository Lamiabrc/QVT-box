
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QVTEvolutionChart from '@/components/dashboard/QVTEvolutionChart';
import EvaluationResultsTable from '@/components/dashboard/EvaluationResultsTable';
import ManagerStatsCards from '@/components/manager/ManagerStatsCards';
import ManagerQuickActions from '@/components/manager/ManagerQuickActions';
import ManagerOverview from '@/components/manager/ManagerOverview';
import ManagerTeamResults from '@/components/manager/ManagerTeamResults';
import ManagerAlerts from '@/components/manager/ManagerAlerts';
import { useManagerData } from '@/hooks/useManagerData';

const ManagerDashboard = () => {
  const { user } = useSecureAuth();
  const { 
    teamScores, 
    evolutionData, 
    evaluationResults, 
    teamStats, 
    loading 
  } = useManagerData(user?.id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              👔 Espace Manager d'Équipe
            </h1>
            <p className="text-lg text-gray-600">Pilotez le bien-être de vos équipes</p>
          </div>

          <ManagerStatsCards teamStats={teamStats} />
          <ManagerQuickActions />

          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="team-results">Résultats Équipe</TabsTrigger>
              <TabsTrigger value="alerts">Alertes & Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
                <QVTEvolutionChart 
                  data={evolutionData} 
                  title="Évolution QVT de Mon Équipe" 
                />
              </div>
              
              <EvaluationResultsTable 
                results={evaluationResults} 
                title="Historique des Évaluations de l'Équipe" 
              />
            </TabsContent>

            <TabsContent value="overview">
              <ManagerOverview teamStats={teamStats} />
            </TabsContent>

            <TabsContent value="team-results">
              <ManagerTeamResults teamScores={teamScores} />
            </TabsContent>

            <TabsContent value="alerts">
              <ManagerAlerts teamScores={teamScores} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ManagerDashboard;
