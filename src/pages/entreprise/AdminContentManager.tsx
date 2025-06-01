
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthGuard from '@/components/AuthGuard';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { useAdminContent } from '@/hooks/useAdminContent';
import { useUserRoles } from '@/hooks/useUserRoles';
import ContentEditor from '@/components/admin/ContentEditor';
import ContentCreator from '@/components/admin/ContentCreator';
import UserManager from '@/components/admin/UserManager';
import { Shield, Settings, Users, FileText } from 'lucide-react';

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
  updated_by?: string;
}

const AdminContentManager = () => {
  const { toast } = useToast();
  const { user, isAdmin, loading: authLoading, requireAdmin } = useSecureAuth();
  const { 
    content, 
    loading: contentLoading, 
    createContent, 
    updateContent, 
    deleteContent,
    fetchContent 
  } = useAdminContent();
  const { users, loading: usersLoading, updateUserRole } = useUserRoles();
  const [activeTab, setActiveTab] = useState('content');

  useEffect(() => {
    if (!authLoading && user) {
      if (isAdmin) {
        fetchContent();
      } else {
        toast({
          variant: "destructive",
          title: "Accès refusé",
          description: "Vous devez avoir les privilèges administrateur pour accéder à cette page.",
        });
      }
    }
  }, [authLoading, user, isAdmin]);

  const handleCreateContent = async (newContent: Omit<ContentItem, "id" | "created_at" | "updated_at">) => {
    try {
      if (!requireAdmin()) return;
      await createContent(newContent);
      toast({
        title: "Succès",
        description: "Contenu créé avec succès.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de créer le contenu.",
      });
    }
  };

  const handleUpdateContent = async (id: string, updates: Partial<ContentItem>) => {
    try {
      if (!requireAdmin()) return;
      await updateContent(id, updates);
      toast({
        title: "Succès",
        description: "Contenu mis à jour avec succès.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de mettre à jour le contenu.",
      });
    }
  };

  const handleDeleteContent = async (id: string) => {
    try {
      if (!requireAdmin()) return;
      await deleteContent(id);
      toast({
        title: "Succès",
        description: "Contenu supprimé avec succès.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de supprimer le contenu.",
      });
    }
  };

  const handleUpdateUserRole = async (userId: string, role: string) => {
    try {
      if (!requireAdmin()) return;
      await updateUserRole(userId, role);
    } catch (error) {
      // Error is already handled in useUserRoles hook
    }
  };

  if (authLoading || contentLoading) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement de l'administration...</p>
          </div>
        </div>
      </AuthGuard>
    );
  }

  if (!isAdmin) {
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
                Vous devez avoir les privilèges administrateur pour accéder à cette page.
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
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Gestion de Contenu Admin</h1>
                <p className="text-gray-600">Gérez le contenu et les utilisateurs de la plateforme</p>
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
                  <ContentCreator onCreateContent={handleCreateContent} />
                  <ContentEditor 
                    content={content}
                    onUpdateContent={handleUpdateContent}
                    onDeleteContent={handleDeleteContent}
                  />
                </div>
              </TabsContent>

              <TabsContent value="users">
                <UserManager 
                  users={users}
                  loading={usersLoading}
                  onUpdateUserRole={handleUpdateUserRole}
                />
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Paramètres Système</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Les paramètres système seront disponibles prochainement.
                    </p>
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

export default AdminContentManager;
