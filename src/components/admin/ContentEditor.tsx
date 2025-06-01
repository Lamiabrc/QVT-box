
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Edit, Save, X, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentItem {
  id: string;
  key: string;
  value: any;
  type: string;
  description?: string;
  page?: string;
  section?: string;
}

interface ContentEditorProps {
  content: ContentItem[];
  onUpdateContent: (id: string, updates: Partial<ContentItem>) => Promise<void>;
  onDeleteContent: (id: string) => Promise<void>;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ content, onUpdateContent, onDeleteContent }) => {
  const [editingItems, setEditingItems] = useState<{[key: string]: boolean}>({});
  const [editData, setEditData] = useState<{[key: string]: ContentItem}>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const startEdit = (item: ContentItem) => {
    setEditingItems(prev => ({ ...prev, [item.id]: true }));
    setEditData(prev => ({ ...prev, [item.id]: item }));
  };

  const cancelEdit = (itemId: string) => {
    setEditingItems(prev => ({ ...prev, [itemId]: false }));
    setEditData(prev => {
      const newData = { ...prev };
      delete newData[itemId];
      return newData;
    });
  };

  const handleSave = async (itemId: string) => {
    try {
      setLoading(true);
      await onUpdateContent(itemId, editData[itemId]);
      setEditingItems(prev => ({ ...prev, [itemId]: false }));
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
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (itemId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      try {
        setLoading(true);
        await onDeleteContent(itemId);
        toast({
          title: "Supprimé",
          description: "Contenu supprimé avec succès.",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de supprimer le contenu.",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contenu existant ({content.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {content.length === 0 ? (
            <p className="text-center text-gray-500">Aucun contenu trouvé</p>
          ) : (
            content.map((item) => (
              <Card key={item.id} className="mb-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.key}</CardTitle>
                  <div className="flex space-x-2">
                    {editingItems[item.id] ? (
                      <>
                        <Button size="sm" onClick={() => handleSave(item.id)} disabled={loading}>
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => cancelEdit(item.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button size="sm" variant="outline" onClick={() => startEdit(item)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)} disabled={loading}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {editingItems[item.id] ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Clé</label>
                        <Input
                          value={editData[item.id]?.key || ''}
                          onChange={(e) => setEditData(prev => ({
                            ...prev,
                            [item.id]: { ...prev[item.id], key: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Type</label>
                        <Select 
                          value={editData[item.id]?.type || ''} 
                          onValueChange={(value) => setEditData(prev => ({
                            ...prev,
                            [item.id]: { ...prev[item.id], type: value }
                          }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text">Texte</SelectItem>
                            <SelectItem value="html">HTML</SelectItem>
                            <SelectItem value="json">JSON</SelectItem>
                            <SelectItem value="image">Image</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Valeur</label>
                        <Textarea
                          value={typeof editData[item.id]?.value === 'string' ? editData[item.id].value : JSON.stringify(editData[item.id]?.value)}
                          onChange={(e) => setEditData(prev => ({
                            ...prev,
                            [item.id]: { ...prev[item.id], value: e.target.value }
                          }))}
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Description</label>
                        <Input
                          value={editData[item.id]?.description || ''}
                          onChange={(e) => setEditData(prev => ({
                            ...prev,
                            [item.id]: { ...prev[item.id], description: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <div className="bg-gray-100 p-2 rounded text-sm">
                        <strong>Type:</strong> {item.type}<br />
                        <strong>Page:</strong> {item.page}<br />
                        <strong>Valeur:</strong> {typeof item.value === 'string' ? item.value : JSON.stringify(item.value)}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentEditor;
