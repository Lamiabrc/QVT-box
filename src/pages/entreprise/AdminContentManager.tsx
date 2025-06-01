
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthGuard from '@/components/AuthGuard';
import ContentEditor from '@/components/admin/ContentEditor';
import ContentCreator from '@/components/admin/ContentCreator';
import UserManager from '@/components/admin/UserManager';
import { useAdminContent } from '@/hooks/useAdminContent';
import { useUserRoles } from '@/hooks/useUserRoles';
import { Settings, FileText, Users, Search, Filter } from 'lucide-react';

const AdminContentManager = () => {
  const { content, loading: contentLoading, updateContent, createContent, deleteContent } = useAdminContent();
  const { users, loading: usersLoading, updateUserRole, checkIsAdmin } = useUserRoles();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPage, setFilterPage] = useState('');
  const [filterType, setFilterType] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      const adminStatus = await checkIsAdmin();
      setIsAdmin(adminStatus);
    };
    verifyAdmin();
  }, [checkIsAdmin]);

  const filteredContent = content.filter(item => {
    const matchesSearch = item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (typeof item.value === 'string' ? item.value.toLowerCase().includes(searchTerm.toLowerCase()) : false);
    const matchesPage = !filterPage || item.page === filterPage;
    const matchesType = !filterType || item.type === filterType;
    
    return matchesSearch && matchesPage && matchesType;
  });

  const uniquePages = [...new Set(content.map(item => item.page).filter(Boolean))];

  if (!isAdmin) {
    return (
      <AuthGuard requireAuth={true}>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-96">
            <CardContent className="pt-6 text-center">
              <p className="text-red-600 font-medium">Accès non autorisé</p>
              <p className="text-gray-600 mt-2">
                Vous devez être administrateur pour accéder à cette page.
              </p>
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Settings className="h-8 w-8" />
                Interface d'administration
              </h1>
              <p className="text-gray-600 mt-2">
                Gérez le contenu et les utilisateurs de votre application
              </p>
            </div>

            <Tabs defaultValue="content" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Gestion du contenu
                </TabsTrigger>
                <TabsTrigger value="users" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Gestion des utilisateurs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content">
                <div className="space-y-6">
                  <ContentCreator onCreate={createContent} />
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Search className="h-5 w-5" />
                        Rechercher et filtrer le contenu
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Input
                            placeholder="Rechercher par clé, description, contenu..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <div>
                          <Select value={filterPage} onValueChange={setFilterPage}>
                            <SelectTrigger>
                              <SelectValue placeholder="Filtrer par page" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="">Toutes les pages</SelectItem>
                              {uniquePages.map(page => (
                                <SelectItem key={page} value={page || ''}>{page}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Select value={filterType} onValueChange={setFilterType}>
                            <SelectTrigger>
                              <SelectValue placeholder="Filtrer par type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="">Tous les types</SelectItem>
                              <SelectItem value="text">Texte</SelectItem>
                              <SelectItem value="image">Image</SelectItem>
                              <SelectItem value="html">HTML</SelectItem>
                              <SelectItem value="json">JSON</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Contenu ({filteredContent.length})
                    </h2>
                    {contentLoading ? (
                      <Card>
                        <CardContent className="p-6 text-center">
                          Chargement du contenu...
                        </CardContent>
                      </Card>
                    ) : filteredContent.length === 0 ? (
                      <Card>
                        <CardContent className="p-6 text-center">
                          Aucun contenu trouvé
                        </CardContent>
                      </Card>
                    ) : (
                      filteredContent.map(item => (
                        <ContentEditor
                          key={item.id}
                          item={item}
                          onUpdate={updateContent}
                          onDelete={deleteContent}
                        />
                      ))
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="users">
                <UserManager
                  users={users}
                  onUpdateRole={updateUserRole}
                  loading={usersLoading}
                />
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
