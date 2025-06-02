
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Users, TrendingUp, Building2, UserPlus, Settings, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HRDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const [teams, setTeams] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [managers, setManagers] = useState([]);
  const [companyStats, setCompanyStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [newTeam, setNewTeam] = useState({ name: '', description: '', managerId: '' });

  useEffect(() => {
    if (user) {
      fetchHRData();
    }
  }, [user]);

  const fetchHRData = async () => {
    try {
      // Récupérer le profil utilisateur pour obtenir l'entreprise
      const { data: profile } = await supabase
        .from('profiles')
        .select('entreprise')
        .eq('id', user.id)
        .single();

      if (!profile?.entreprise) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Aucune entreprise associée à votre compte.",
        });
        return;
      }

      // Récupérer toutes les équipes de l'entreprise
      const { data: teamsData } = await supabase
        .from('teams')
        .select(`
          *,
          team_managers(
            profiles!inner(id, full_name, email)
          ),
          team_members(
            profiles!inner(id, full_name, email)
          )
        `)
        .eq('company_id', profile.entreprise);

      setTeams(teamsData || []);

      // Récupérer tous les employés de l'entreprise
      const { data: employeesData } = await supabase
        .from('profiles')
        .select('*')
        .eq('entreprise', profile.entreprise);

      setAllEmployees(employeesData || []);

      // Filtrer les managers
      const managersData = employeesData?.filter(emp => emp.enterprise_role === 'manager') || [];
      setManagers(managersData);

      // Calculer les statistiques
      const stats = {
        totalEmployees: employeesData?.length || 0,
        totalTeams: teamsData?.length || 0,
        totalManagers: managersData.length,
        unassignedEmployees: employeesData?.filter(emp => 
          !teamsData?.some(team => 
            team.team_members.some(member => member.profiles.id === emp.id)
          )
        ).length || 0
      };

      setCompanyStats(stats);
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

  const createTeam = async () => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('entreprise')
        .eq('id', user.id)
        .single();

      const { data: team, error } = await supabase
        .from('teams')
        .insert([{
          name: newTeam.name,
          description: newTeam.description,
          company_id: profile.entreprise
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🏢 Espace RH
            </h1>
            <p className="text-gray-600">Gestion complète des équipes et collaborateurs</p>
          </div>

          {/* Statistiques générales */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Collaborateurs</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{companyStats.totalEmployees}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Équipes Actives</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{companyStats.totalTeams}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Managers</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{companyStats.totalManagers}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Non Assignés</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{companyStats.unassignedEmployees}</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="teams" className="space-y-6">
            <TabsList>
              <TabsTrigger value="teams">Gestion des Équipes</TabsTrigger>
              <TabsTrigger value="employees">Gestion des Collaborateurs</TabsTrigger>
              <TabsTrigger value="analytics">Analytics QVT</TabsTrigger>
            </TabsList>

            <TabsContent value="teams">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Créer une nouvelle équipe */}
                <Card>
                  <CardHeader>
                    <CardTitle>Créer une Équipe</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="teamName">Nom de l'équipe</Label>
                      <Input
                        id="teamName"
                        value={newTeam.name}
                        onChange={(e) => setNewTeam(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Ex: Équipe Marketing"
                      />
                    </div>

                    <div>
                      <Label htmlFor="teamDescription">Description</Label>
                      <Textarea
                        id="teamDescription"
                        value={newTeam.description}
                        onChange={(e) => setNewTeam(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Description de l'équipe..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="teamManager">Manager (optionnel)</Label>
                      <Select value={newTeam.managerId} onValueChange={(value) => setNewTeam(prev => ({ ...prev, managerId: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir un manager" />
                        </SelectTrigger>
                        <SelectContent>
                          {managers.map((manager) => (
                            <SelectItem key={manager.id} value={manager.id}>
                              {manager.full_name || manager.email}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={createTeam} className="w-full" disabled={!newTeam.name}>
                      Créer l'équipe
                    </Button>
                  </CardContent>
                </Card>

                {/* Liste des équipes existantes */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Équipes Existantes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {teams.map((team) => (
                          <div key={team.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-semibold">{team.name}</h4>
                                <p className="text-sm text-gray-600">{team.description}</p>
                              </div>
                              <Badge variant="outline">
                                {team.team_members?.length || 0} membres
                              </Badge>
                            </div>
                            
                            {team.team_managers?.length > 0 && (
                              <div className="mb-2">
                                <span className="text-sm font-medium">Manager: </span>
                                <span className="text-sm text-gray-600">
                                  {team.team_managers[0].profiles.full_name}
                                </span>
                              </div>
                            )}

                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Modifier
                              </Button>
                              <Button size="sm" variant="outline">
                                Gérer les membres
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="employees">
              <Card>
                <CardHeader>
                  <CardTitle>Gestion des Collaborateurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {allEmployees.map((employee) => (
                      <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">{employee.full_name || employee.email}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{employee.enterprise_role}</Badge>
                            {teams.find(team => 
                              team.team_members?.some(member => member.profiles.id === employee.id)
                            ) ? (
                              <Badge variant="secondary">
                                Équipe: {teams.find(team => 
                                  team.team_members?.some(member => member.profiles.id === employee.id)
                                )?.name}
                              </Badge>
                            ) : (
                              <Badge variant="destructive">Non assigné</Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Select 
                            value={employee.enterprise_role} 
                            onValueChange={(newRole) => updateEmployeeRole(employee.id, newRole)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="employee">Salarié</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="hr">RH</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          {teams.length > 0 && (
                            <Select onValueChange={(teamId) => assignEmployeeToTeam(employee.id, teamId)}>
                              <SelectTrigger className="w-40">
                                <SelectValue placeholder="Assigner à..." />
                              </SelectTrigger>
                              <SelectContent>
                                {teams.map((team) => (
                                  <SelectItem key={team.id} value={team.id}>
                                    {team.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Analytics QVT de l'Entreprise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                      Fonctionnalité d'analytics en cours de développement
                    </p>
                    <p className="text-sm text-gray-400">
                      Bientôt disponible : tableaux de bord, rapports détaillés, tendances QVT
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HRDashboard;
