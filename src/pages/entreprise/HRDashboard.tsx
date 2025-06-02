
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
import { 
  Users, 
  TrendingUp, 
  Building2, 
  UserPlus, 
  Settings, 
  BarChart3,
  MessageCircle,
  Package,
  Euro,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HRDashboard = () => {
  const { user } = useSecureAuth();
  const { toast } = useToast();
  const [teams, setTeams] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [managers, setManagers] = useState([]);
  const [directRequests, setDirectRequests] = useState([]);
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

          {/* Statistiques générales */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm opacity-90 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Collaborateurs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{companyStats.totalEmployees}</div>
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
                <div className="text-3xl font-bold">{companyStats.totalTeams}</div>
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
                <div className="text-3xl font-bold">{companyStats.totalManagers}</div>
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
                <div className="text-3xl font-bold">{companyStats.unassignedEmployees}</div>
                <p className="text-xs opacity-90">Non assignés</p>
              </CardContent>
            </Card>
          </div>

          {/* Actions rapides RH */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-500 to-pink-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Demandes Directes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  {directRequests.length} demandes en attente de traitement
                </p>
                <Button className="w-full bg-white text-pink-700 hover:bg-pink-50">
                  Voir les demandes
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-6 w-6 mr-3" />
                  Gestion des Box
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                  Suivi des livraisons et personnalisation
                </p>
                <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50">
                  Gérer les box
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-700 text-white cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Euro className="h-6 w-6 mr-3" />
                  Budget QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 opacity-90">
                  {budgetInfo.employeeAllocation}€ par employé
                </p>
                <p className="text-xs opacity-80 mb-4">
                  {budgetInfo.totalBudget - budgetInfo.usedBudget}€ disponibles
                </p>
                <Button className="w-full bg-white text-green-700 hover:bg-green-50">
                  Gérer le budget
                </Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="requests" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="requests">Demandes Directes</TabsTrigger>
              <TabsTrigger value="teams">Gestion Équipes</TabsTrigger>
              <TabsTrigger value="employees">Collaborateurs</TabsTrigger>
              <TabsTrigger value="budget">Budget & Box</TabsTrigger>
            </TabsList>

            <TabsContent value="requests">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Demandes Directes des Collaborateurs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {directRequests.map((request) => (
                      <div key={request.id} className="p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-blue-50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{request.employee}</h4>
                            <p className="text-sm text-gray-600">{request.type}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={
                              request.priority === 'high' ? 'destructive' :
                              request.priority === 'medium' ? 'default' : 'secondary'
                            }>
                              {request.priority === 'high' ? 'Urgent' :
                               request.priority === 'medium' ? 'Important' : 'Normal'}
                            </Badge>
                            <p className="text-xs text-gray-500 mt-1">{request.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{request.message}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Répondre
                          </Button>
                          <Button size="sm" variant="outline">
                            Programmer RDV
                          </Button>
                          <Button size="sm" variant="outline">
                            Transférer
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

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
                          <div key={team.id} className="border rounded-lg p-4 bg-gradient-to-r from-gray-50 to-purple-50">
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
                      <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-indigo-50">
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

            <TabsContent value="budget">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Euro className="h-5 w-5 mr-2" />
                      Gestion du Budget QVT
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Budget Total Annuel</h4>
                      <p className="text-2xl font-bold text-green-600">{budgetInfo.totalBudget}€</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Budget Utilisé</h4>
                      <p className="text-2xl font-bold text-blue-600">{budgetInfo.usedBudget}€</p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800">Disponible par Employé</h4>
                      <p className="text-2xl font-bold text-purple-600">{budgetInfo.employeeAllocation}€</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Package className="h-5 w-5 mr-2" />
                      Suivi des Box QVT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Box en cours de préparation</span>
                          <Badge>12</Badge>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Box expédiées ce mois</span>
                          <Badge variant="secondary">45</Badge>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Box livrées</span>
                          <Badge variant="outline">38</Badge>
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        Gérer les commandes de box
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HRDashboard;
