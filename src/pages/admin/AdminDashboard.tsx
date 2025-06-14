import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import AuthGuard from '@/components/AuthGuard';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { 
  Shield, Plus, Edit2, Trash2, Save, Users, FileText, Settings, 
  BarChart3, TrendingUp, Eye, DollarSign, Package, MessageSquare 
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface AdminStats {
  totalUsers: number;
  totalEvaluations: number;
  totalRevenue: number;
  activeUsers: number;
}

interface ContentItem {
  id: string;
  key: string;
  value: any;
  type: string;
  page?: string;
  section?: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  role: string;
  account_type: string;
  created_at: string;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const { user, isAdmin, loading: authLoading } = useSecureAuth();
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalEvaluations: 0,
    totalRevenue: 0,
    activeUsers: 0
  });
  const [content, setContent] = useState<ContentItem[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const [newContent, setNewContent] = useState({
    key: '',
    value: '',
    type: 'text',
    page: '',
    section: '',
    description: ''
  });

  // Vérifier si l'utilisateur est lamia.brechet@outlook.fr
  const isAuthorizedAdmin = user?.email === 'lamia.brechet@outlook.fr';

  useEffect(() => {
    if (!authLoading && user && isAuthorizedAdmin) {
      fetchDashboardData();
    }
  }, [authLoading, user, isAuthorizedAdmin]);

  const fetchDashboardData = async () => {
    try {
      // Fetch stats
      const [usersData, evaluationsData, contentData] = await Promise.all([
        supabase.from('profiles').select('*'),
        supabase.from('simulator_responses').select('*'),
        supabase.from('admin_content').select('*').order('created_at', { ascending: false })
      ]);

      setStats({
        totalUsers: usersData.data?.length || 0,
        totalEvaluations: evaluationsData.data?.length || 0,
        totalRevenue: 45780, // Exemple
        activeUsers: Math.floor((usersData.data?.length || 0) * 0.7)
      });

      setUsers(usersData.data || []);
      setContent(contentData.data || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les données.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateContent = async () => {
    try {
      let processedValue = newContent.value;
      
      if (newContent.type === 'json') {
        try {
          processedValue = JSON.parse(newContent.value);
        } catch (e) {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Format JSON invalide.",
          });
          return;
        }
      }

      const { data, error } = await supabase
        .from('admin_content')
        .insert([{
          ...newContent,
          value: processedValue,
          updated_by: user?.id
        }])
        .select()
        .single();

      if (error) throw error;

      setContent(prev => [data, ...prev]);
      setNewContent({
        key: '',
        value: '',
        type: 'text',
        page: '',
        section: '',
        description: ''
      });

      toast({
        title: "Succès",
        description: "Contenu créé avec succès.",
      });
    } catch (error) {
      console.error('Error creating content:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de créer le contenu.",
      });
    }
  };

  if (authLoading || loading) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement du tableau de bord...</p>
          </div>
        </div>
      </AuthGuard>
    );
  }

  if (!isAuthorizedAdmin) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-red-600">Accès Refusé</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Seul l'administrateur principal peut accéder à cette page.
              </p>
              <Button onClick={() => window.history.back()}>
                Retour
              </Button>
            </CardContent>
          </Card>
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard requireAuth={true}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Interface Admin</h1>
                  <p className="text-sm text-gray-500">Tableau de bord de gestion principal</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                Lamia Brechet - Admin Principal
              </Badge>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-5 w-full max-w-2xl">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Contenu</span>
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Utilisateurs</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Paramètres</span>
              </TabsTrigger>
            </TabsList>

            {/* Dashboard Overview */}
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Utilisateurs Total</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalUsers}</div>
                    <p className="text-xs text-muted-foreground">
                      +12% par rapport au mois dernier
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Évaluations</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalEvaluations}</div>
                    <p className="text-xs text-muted-foreground">
                      +8% cette semaine
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Revenus</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalRevenue}€</div>
                    <p className="text-xs text-muted-foreground">
                      +25% ce mois-ci
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Utilisateurs Actifs</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.activeUsers}</div>
                    <p className="text-xs text-muted-foreground">
                      70% du total
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Actions Rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Créer nouveau contenu
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Gérer les utilisateurs
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Voir les commentaires
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Activité Récente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-48">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Nouvelle évaluation complétée</span>
                          <span className="text-xs text-gray-500 ml-auto">Il y a 5 min</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Utilisateur inscrit</span>
                          <span className="text-xs text-gray-500 ml-auto">Il y a 12 min</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm">Contenu mis à jour</span>
                          <span className="text-xs text-gray-500 ml-auto">Il y a 1h</span>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Content Management */}
            <TabsContent value="content" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Plus className="h-5 w-5 mr-2" />
                      Créer du Contenu
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="key">Clé du contenu</Label>
                      <Input
                        id="key"
                        value={newContent.key}
                        onChange={(e) => setNewContent(prev => ({ ...prev, key: e.target.value }))}
                        placeholder="ex: welcome_message"
                      />
                    </div>
                      
                    <div>
                      <Label htmlFor="type">Type</Label>
                      <Select value={newContent.type} onValueChange={(value) => setNewContent(prev => ({ ...prev, type: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Texte</SelectItem>
                          <SelectItem value="html">HTML</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                          <SelectItem value="number">Nombre</SelectItem>
                          <SelectItem value="boolean">Booléen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="page">Page</Label>
                      <Input
                        id="page"
                        value={newContent.page}
                        onChange={(e) => setNewContent(prev => ({ ...prev, page: e.target.value }))}
                        placeholder="ex: teens, entreprise"
                      />
                    </div>

                    <div>
                      <Label htmlFor="section">Section</Label>
                      <Input
                        id="section"
                        value={newContent.section}
                        onChange={(e) => setNewContent(prev => ({ ...prev, section: e.target.value }))}
                        placeholder="ex: header, footer"
                      />
                    </div>

                    <div>
                      <Label htmlFor="value">Valeur</Label>
                      <Textarea
                        id="value"
                        value={newContent.value}
                        onChange={(e) => setNewContent(prev => ({ ...prev, value: e.target.value }))}
                        placeholder="Contenu..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        value={newContent.description}
                        onChange={(e) => setNewContent(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Description du contenu"
                      />
                    </div>

                    <Button onClick={handleCreateContent} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Créer le Contenu
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contenu Existant</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-96">
                      <div className="space-y-4">
                        {content.map((item) => (
                          <div key={item.id} className="border rounded-lg p-4">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-semibold">{item.key}</h4>
                                  <Badge variant="outline">{item.type}</Badge>
                                  {item.page && <Badge variant="secondary" className="ml-2">{item.page}</Badge>}
                                </div>
                                <div className="flex space-x-1">
                                  <Button size="sm" variant="ghost">
                                    <Edit2 className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 truncate">
                                {typeof item.value === 'string' ? item.value : JSON.stringify(item.value)}
                              </p>
                              {item.description && (
                                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Users Management */}
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>Gestion des Utilisateurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-4">
                      {users.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{user.full_name || user.email}</h4>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <div className="flex space-x-2 mt-1">
                              <Badge variant="outline">{user.account_type}</Badge>
                              <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                                {user.role}
                              </Badge>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Statistiques d'Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Simulateurs Entreprise</span>
                        <span className="font-semibold">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Simulateurs Famille</span>
                        <span className="font-semibold">89</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Simulateurs Teens</span>
                        <span className="font-semibold">234</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Taux de complétion</span>
                        <span className="font-semibold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Satisfaction moyenne</span>
                        <span className="font-semibold text-blue-600">4.7/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temps moyen</span>
                        <span className="font-semibold">8 min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres Système</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Informations du Système</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Utilisateur:</strong> {user?.email}</p>
                        <p><strong>Rôle:</strong> Administrateur Principal</p>
                        <p><strong>Contenus gérés:</strong> {content.length}</p>
                        <p><strong>Utilisateurs totaux:</strong> {users.length}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AuthGuard>
  );
};

export default AdminDashboard;
