
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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthGuard from '@/components/AuthGuard';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { Shield, Plus, Edit2, Trash2, Save, Users, FileText, Settings } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

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

const AdminPanel = () => {
  const { toast } = useToast();
  const { user, isAdmin, loading: authLoading } = useSecureAuth();
  const [content, setContent] = useState<ContentItem[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('content');
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
      fetchContent();
      fetchUsers();
    }
  }, [authLoading, user, isAuthorizedAdmin]);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_content')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger le contenu.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, full_name, role, account_type, created_at')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les utilisateurs.",
      });
    }
  };

  const handleCreateContent = async () => {
    try {
      let processedValue = newContent.value;
      
      // Parse JSON if type is json
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

  const handleUpdateContent = async (id: string, updates: Partial<ContentItem>) => {
    try {
      let processedValue = updates.value;
      
      if (updates.type === 'json' && typeof updates.value === 'string') {
        try {
          processedValue = JSON.parse(updates.value);
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
        .update({
          ...updates,
          value: processedValue,
          updated_by: user?.id
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setContent(prev => prev.map(item => item.id === id ? data : item));
      setEditingContent(null);

      toast({
        title: "Succès",
        description: "Contenu mis à jour avec succès.",
      });
    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de mettre à jour le contenu.",
      });
    }
  };

  const handleDeleteContent = async (id: string) => {
    try {
      const { error } = await supabase
        .from('admin_content')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setContent(prev => prev.filter(item => item.id !== id));

      toast({
        title: "Succès",
        description: "Contenu supprimé avec succès.",
      });
    } catch (error) {
      console.error('Error deleting content:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de supprimer le contenu.",
      });
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;

      setUsers(prev => prev.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      ));

      toast({
        title: "Succès",
        description: "Rôle utilisateur mis à jour avec succès.",
      });
    } catch (error) {
      console.error('Error updating user role:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de mettre à jour le rôle.",
      });
    }
  };

  if (authLoading || loading) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement du panneau d'administration...</p>
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
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-gray-50 py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Panneau d'Administration Principal</h1>
                <p className="text-gray-600">Gestion complète du contenu et des utilisateurs</p>
                <Badge variant="secondary" className="mt-2">Lamia Brechet - Admin Principal</Badge>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="content" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Contenu</span>
                </TabsTrigger>
                <TabsTrigger value="users" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Utilisateurs</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Paramètres</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Créer du contenu */}
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

                  {/* Liste du contenu */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Contenu Existant</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {content.map((item) => (
                          <div key={item.id} className="border rounded-lg p-4">
                            {editingContent?.id === item.id ? (
                              <div className="space-y-3">
                                <Input
                                  value={editingContent.key}
                                  onChange={(e) => setEditingContent(prev => prev ? { ...prev, key: e.target.value } : null)}
                                  placeholder="Clé"
                                />
                                <Textarea
                                  value={typeof editingContent.value === 'string' ? editingContent.value : JSON.stringify(editingContent.value, null, 2)}
                                  onChange={(e) => setEditingContent(prev => prev ? { ...prev, value: e.target.value } : null)}
                                  rows={3}
                                />
                                <div className="flex space-x-2">
                                  <Button size="sm" onClick={() => handleUpdateContent(item.id, editingContent)}>
                                    <Save className="h-4 w-4 mr-1" />
                                    Sauver
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => setEditingContent(null)}>
                                    Annuler
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="font-semibold">{item.key}</h4>
                                    <Badge variant="outline">{item.type}</Badge>
                                    {item.page && <Badge variant="secondary" className="ml-2">{item.page}</Badge>}
                                  </div>
                                  <div className="flex space-x-1">
                                    <Button size="sm" variant="ghost" onClick={() => setEditingContent(item)}>
                                      <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="ghost" onClick={() => handleDeleteContent(item.id)}>
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
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>Gestion des Utilisateurs</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                          <div className="flex items-center space-x-2">
                            <Select
                              value={user.role}
                              onValueChange={(newRole) => handleUpdateUserRole(user.id, newRole)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="user">Utilisateur</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="moderator">Modérateur</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

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
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Actions Rapides</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" onClick={fetchContent}>
                            Actualiser le Contenu
                          </Button>
                          <Button variant="outline" onClick={fetchUsers}>
                            Actualiser les Utilisateurs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default AdminPanel;
