
import React from 'react';
import QVTEvolutionChart from '@/components/dashboard/QVTEvolutionChart';
import EvaluationResultsTable from '@/components/dashboard/EvaluationResultsTable';
import TeamPerformanceChart from '@/components/dashboard/TeamPerformanceChart';

interface DashboardTabProps {
  evolutionData: any[];
  teamPerformanceData: any[];
  evaluationResults: any[];
}

const DashboardTab: React.FC<DashboardTabProps> = ({
  evolutionData,
  teamPerformanceData,
  evaluationResults,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <QVTEvolutionChart
          data={evolutionData}
          title="Évolution QVT de l'Entreprise"
        />
        <TeamPerformanceChart
          data={teamPerformanceData}
          title="Performance par Équipe"
        />
      </div>

      <EvaluationResultsTable
        results={evaluationResults}
        title="Historique des Évaluations"
      />
    </>
  );
};

export default DashboardTab;
