import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HRStatsCards from '@/components/hr-dashboard/HRStatsCards';
import HRQuickActions from '@/components/hr-dashboard/HRQuickActions';
import DashboardTab from '@/components/hr-dashboard/DashboardTab';
import DirectRequestsTab from '@/components/hr-dashboard/DirectRequestsTab';
import TeamsTab from '@/components/hr-dashboard/TeamsTab';
import EmployeesTab from '@/components/hr-dashboard/EmployeesTab';
import BudgetTab from '@/components/hr-dashboard/BudgetTab';

interface MonthlyDataItem {
  scores: number[];
  date: string;
}

export interface TeamMemberOrManager {
  profiles: {
    id: string;
    full_name: string;
    email: string;
  };
  [key: string]: any; // Allow other properties from team_members/team_managers
}

export interface Team {
  id: string;
  name: string;
  description: string;
  company_id: string;
  team_managers: TeamMemberOrManager[];
  team_members: TeamMemberOrManager[];
}

export interface Employee {
  id: string;
  full_name: string;
  email: string;
  enterprise_role: 'employee' | 'manager' | 'hr' | 'admin';
  enterprise_id: string;
}

interface DirectRequest {
  id: number;
  employee: string;
  type: string;
  priority: 'high' | 'medium' | 'low';
  date: string;
  message: string;
}

const HRDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const [teams, setTeams] = useState<Team[]>([]);
  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  const [managers, setManagers] = useState<Employee[]>([]);
  const [directRequests, setDirectRequests] = useState<DirectRequest[]>([]);
  const [evaluationResults, setEvaluationResults] = useState([]);
  const [evolutionData, setEvolutionData] = useState([]);
  const [teamPerformanceData, setTeamPerformanceData] = useState([]);
  const [companyStats, setCompanyStats] = useState({
    totalEmployees: 0,
    totalTeams: 0,
    totalManagers: 0,
    unassignedEmployees: 0
  });
  const [budgetInfo, setBudgetInfo] = useState({
    totalBudget: 5000,
    usedBudget: 1200,
    employeeAllocation: 0
  });
  const [loading, setLoading] = useState(true);
  const [newTeam, setNewTeam] = useState({ name: '', description: '', managerId: '' });

  useEffect(() => {
    if (user) {
      fetchHRData();
      fetchDirectRequests();
      fetchEvaluationData();
    }
  }, [user]);

  const fetchHRData = async () => {
    try {
      // Récupérer le profil utilisateur pour obtenir l'entreprise
      const { data: profile } = await supabase
        .from('profiles')
        .select('enterprise_id')
        .eq('id', user.id)
        .single();

      if (!profile?.enterprise_id) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Aucune entreprise associée à votre compte.",
        });
        return;
      }

      // Récupérer toutes les équipes de l'entreprise
      const { data: teamsData, error: teamsError } = await supabase
        .from('teams')
        .select(`
          *,
          team_managers(
            *,
            profiles!inner(id, full_name, email)
          ),
          team_members(
            *,
            profiles!inner(id, full_name, email)
          )
        `)
        .eq('company_id', profile.enterprise_id);
      
      if (teamsError) throw teamsError;

      setTeams(teamsData || []);

      // Récupérer tous les employés de l'entreprise
      const { data: employeesData } = await supabase
        .from('profiles')
        .select('*')
        .eq('enterprise_id', profile.enterprise_id);

      setAllEmployees(employeesData || []);

      // Filtrer les managers
      const managersData = employeesData?.filter(emp => emp.enterprise_role === 'manager') || [];
      setManagers(managersData);

      // Calculer les statistiques
      const totalEmployees = employeesData?.length || 0;
      const totalTeams = teamsData?.length || 0;
      const totalManagers = managersData.length;
      const unassignedEmployees = employeesData?.filter(emp => 
        !teamsData?.some(team => 
          team.team_members.some(member => member.profiles.id === emp.id)
        )
      ).length || 0;

      setCompanyStats({
        totalEmployees,
        totalTeams,
        totalManagers,
        unassignedEmployees
      });

      // Calculer l'allocation budgétaire par employé
      const employeeAllocation = totalEmployees > 0 ? 
        Math.floor((budgetInfo.totalBudget - budgetInfo.usedBudget) / totalEmployees) : 0;
      
      setBudgetInfo(prev => ({
        ...prev,
        employeeAllocation
      }));

    } catch (error) {
      console.error('Error fetching HR data:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les données RH.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDirectRequests = async () => {
    // Simuler des demandes directes (à remplacer par de vraies données)
    setDirectRequests([
      {
        id: 1,
        employee: 'Marie Dupont',
        type: 'Support psychologique',
        priority: 'high',
        date: '2024-01-15',
        message: 'Demande de soutien pour gestion du stress'
      },
      {
        id: 2,
        employee: 'Jean Martin',
        type: 'Aménagement horaires',
        priority: 'medium',
        date: '2024-01-14',
        message: 'Demande d\'horaires flexibles pour équilibre vie pro/perso'
      }
    ]);
  };

  const createTeam = async () => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('enterprise_id')
        .eq('id', user.id)
        .single();

      if (!profile?.enterprise_id) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Profil utilisateur non trouvé ou aucune entreprise associée.",
        });
        return;
      }
      
      const { data: team, error } = await supabase
        .from('teams')
        .insert([{
          name: newTeam.name,
          description: newTeam.description,
          company_id: profile.enterprise_id
        }])
        .select()
        .single();

      if (error) throw error;

      // Assigner le manager si spécifié
      if (newTeam.managerId) {
        await supabase
          .from('team_managers')
          .insert([{
            team_id: team.id,
            manager_id: newTeam.managerId
          }]);
      }

      toast({
        title: "Succès",
        description: "Équipe créée avec succès.",
      });

      setNewTeam({ name: '', description: '', managerId: '' });
      fetchHRData();
    } catch (error) {
      console.error('Error creating team:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de créer l'équipe.",
      });
    }
  };

  const assignEmployeeToTeam = async (employeeId, teamId) => {
    try {
      await supabase
        .from('team_members')
        .insert([{
          team_id: teamId,
          employee_id: employeeId
        }]);

      toast({
        title: "Succès",
        description: "Employé assigné à l'équipe.",
      });

      fetchHRData();
    } catch (error) {
      console.error('Error assigning employee:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible d'assigner l'employé.",
      });
    }
  };

  const updateEmployeeRole = async (employeeId, newRole) => {
    try {
      await supabase
        .from('profiles')
        .update({ enterprise_role: newRole })
        .eq('id', employeeId);

      toast({
        title: "Succès",
        description: "Rôle mis à jour avec succès.",
      });

      fetchHRData();
    } catch (error) {
      console.error('Error updating role:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de mettre à jour le rôle.",
      });
    }
  };

  const fetchEvaluationData = async () => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('enterprise_id')
        .eq('id', user.id)
        .single();

      if (!profile?.enterprise_id) return;

      // Récupérer les données d'évolution
      const { data: evolutionRaw } = await supabase
        .from('simulator_responses')
        .select(`
          created_at,
          qvt_score,
          burnout_risk_percentage,
          profiles!inner(enterprise_id)
        `)
        .eq('profiles.enterprise_id', profile.enterprise_id)
        .order('created_at', { ascending: true });

      // Grouper par mois pour l'évolution
      const monthlyData: Record<string, MonthlyDataItem> = {};
      evolutionRaw?.forEach(response => {
        const month = new Date(response.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' });
        if (!monthlyData[month]) {
          monthlyData[month] = { scores: [], date: month };
        }
        monthlyData[month].scores.push(response.qvt_score);
      });

      const evolutionChartData = Object.values(monthlyData).map((month: MonthlyDataItem) => ({
        date: month.date,
        avgScore: Math.round(month.scores.reduce((sum, score) => sum + score, 0) / month.scores.length),
        teamCount: month.scores.length
      }));

      setEvolutionData(evolutionChartData);

      // Données des résultats d'évaluation
      const mockEvaluationResults = [
        {
          id: '1',
          date: '2024-01-15',
          participantCount: 45,
          avgScore: 72,
          riskCount: 8,
          type: 'Mensuelle'
        },
        {
          id: '2',
          date: '2024-01-01',
          participantCount: 43,
          avgScore: 68,
          riskCount: 12,
          type: 'Mensuelle'
        },
        {
          id: '3',
          date: '2023-12-15',
          participantCount: 41,
          avgScore: 65,
          riskCount: 15,
          type: 'Mensuelle'
        }
      ];

      setEvaluationResults(mockEvaluationResults);

      // Performance par équipe
      const teamPerformance = [
        { teamName: 'Marketing', avgScore: 78, memberCount: 12, riskCount: 2 },
        { teamName: 'Développement', avgScore: 65, memberCount: 15, riskCount: 5 },
        { teamName: 'Commercial', avgScore: 82, memberCount: 8, riskCount: 1 },
        { teamName: 'Support', avgScore: 70, memberCount: 10, riskCount: 3 }
      ];

      setTeamPerformanceData(teamPerformance);

    } catch (error) {
      console.error('Error fetching evaluation data:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              🏢 Espace Ressources Humaines
            </h1>
            <p className="text-lg text-gray-600">Gestion complète du bien-être en entreprise</p>
          </div>

          <HRStatsCards stats={companyStats} />

          <HRQuickActions directRequestsCount={directRequests.length} budgetInfo={budgetInfo} />

          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
              <TabsTrigger value="requests">Demandes Directes</TabsTrigger>
              <TabsTrigger value="teams">Gestion Équipes</TabsTrigger>
              <TabsTrigger value="employees">Collaborateurs</TabsTrigger>
              <TabsTrigger value="budget">Budget & Box</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <DashboardTab 
                evolutionData={evolutionData} 
                teamPerformanceData={teamPerformanceData} 
                evaluationResults={evaluationResults} 
              />
            </TabsContent>

            <TabsContent value="requests">
              <DirectRequestsTab directRequests={directRequests} />
            </TabsContent>

            <TabsContent value="teams">
              <TeamsTab 
                teams={teams}
                managers={managers}
                newTeam={newTeam}
                setNewTeam={setNewTeam}
                createTeam={createTeam}
              />
            </TabsContent>

            <TabsContent value="employees">
              <EmployeesTab 
                allEmployees={allEmployees}
                teams={teams}
                updateEmployeeRole={updateEmployeeRole}
                assignEmployeeToTeam={assignEmployeeToTeam}
              />
            </TabsContent>

            <TabsContent value="budget">
              <BudgetTab budgetInfo={budgetInfo} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HRDashboard;
