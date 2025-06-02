
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface MonthlyDataItem {
  scores: number[];
  date: string;
}

interface TeamStats {
  totalMembers: number;
  avgScore: number;
  highRiskCount: number;
  improvementTrend: number;
}

interface TeamScore {
  user_id: string;
  qvt_score: number;
  burnout_risk: string;
  burnout_risk_percentage: number;
  created_at: string;
}

interface EvaluationResult {
  id: string;
  date: string;
  participantCount: number;
  avgScore: number;
  riskCount: number;
  type: string;
}

export const useManagerData = (userId: string | undefined) => {
  const { toast } = useToast();
  const [teams, setTeams] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamScores, setTeamScores] = useState<TeamScore[]>([]);
  const [evolutionData, setEvolutionData] = useState([]);
  const [evaluationResults, setEvaluationResults] = useState<EvaluationResult[]>([]);
  const [teamStats, setTeamStats] = useState<TeamStats>({
    totalMembers: 0,
    avgScore: 0,
    highRiskCount: 0,
    improvementTrend: 0
  });
  const [loading, setLoading] = useState(true);

  const calculateTeamStats = (scores: TeamScore[], members: any[]) => {
    const totalMembers = members.length;
    const avgScore = scores.length > 0 ? 
      Math.round(scores.reduce((sum, score) => sum + score.qvt_score, 0) / scores.length) : 0;
    const highRiskCount = scores.filter(score => score.burnout_risk_percentage > 70).length;
    
    const recentScores = scores.slice(0, Math.floor(scores.length / 2));
    const olderScores = scores.slice(Math.floor(scores.length / 2));
    const recentAvg = recentScores.length > 0 ? 
      recentScores.reduce((sum, score) => sum + score.qvt_score, 0) / recentScores.length : 0;
    const olderAvg = olderScores.length > 0 ? 
      olderScores.reduce((sum, score) => sum + score.qvt_score, 0) / olderScores.length : 0;
    const improvementTrend = recentAvg - olderAvg;

    setTeamStats({
      totalMembers,
      avgScore,
      highRiskCount,
      improvementTrend
    });
  };

  const fetchManagerData = async () => {
    try {
      const { data: managedTeams } = await supabase
        .from('team_managers')
        .select(`
          *,
          teams!inner(*)
        `)
        .eq('manager_id', userId);

      setTeams(managedTeams || []);

      if (managedTeams && managedTeams.length > 0) {
        const teamIds = managedTeams.map(tm => tm.teams.id);
        
        const { data: members } = await supabase
          .from('team_members')
          .select(`
            *,
            profiles!inner(id, full_name, email, preferred_name),
            teams!inner(name)
          `)
          .in('team_id', teamIds);

        setTeamMembers(members || []);

        if (members && members.length > 0) {
          const memberIds = members.map(m => m.profiles.id);
          const { data: scores } = await supabase
            .from('simulator_responses')
            .select('user_id, qvt_score, burnout_risk_percentage, burnout_risk, created_at')
            .in('user_id', memberIds)
            .order('created_at', { ascending: false });

          setTeamScores(scores || []);
          calculateTeamStats(scores || [], members || []);
        }
      }
    } catch (error) {
      console.error('Error fetching manager data:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les données des équipes.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTeamEvaluationData = async () => {
    try {
      const { data: managedTeams } = await supabase
        .from('team_managers')
        .select(`
          *,
          teams!inner(*)
        `)
        .eq('manager_id', userId);

      if (managedTeams && managedTeams.length > 0) {
        const teamIds = managedTeams.map(tm => tm.teams.id);
        
        const { data: teamEvolutionRaw } = await supabase
          .from('team_members')
          .select(`
            profiles!inner(id),
            teams!inner(id)
          `)
          .in('team_id', teamIds);

        if (teamEvolutionRaw) {
          const memberIds = teamEvolutionRaw.map(tm => tm.profiles.id);
          
          const { data: scoresData } = await supabase
            .from('simulator_responses')
            .select('created_at, qvt_score, burnout_risk_percentage')
            .in('user_id', memberIds)
            .order('created_at', { ascending: true });

          const monthlyData: Record<string, MonthlyDataItem> = {};
          scoresData?.forEach(response => {
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

          const teamEvaluationResults = [
            {
              id: '1',
              date: '2024-01-15',
              participantCount: teamMembers.length || 12,
              avgScore: teamStats.avgScore || 75,
              riskCount: teamStats.highRiskCount || 2,
              type: 'Équipe'
            },
            {
              id: '2',
              date: '2024-01-01',
              participantCount: teamMembers.length || 12,
              avgScore: (teamStats.avgScore || 75) - 3,
              riskCount: (teamStats.highRiskCount || 2) + 1,
              type: 'Équipe'
            },
            {
              id: '3',
              date: '2023-12-15',
              participantCount: teamMembers.length || 12,
              avgScore: (teamStats.avgScore || 75) - 5,
              riskCount: (teamStats.highRiskCount || 2) + 2,
              type: 'Équipe'
            }
          ];

          setEvaluationResults(teamEvaluationResults);
        }
      }
    } catch (error) {
      console.error('Error fetching team evaluation data:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchManagerData();
      fetchTeamEvaluationData();
    }
  }, [userId]);

  return {
    teams,
    teamMembers,
    teamScores,
    evolutionData,
    evaluationResults,
    teamStats,
    loading
  };
};
