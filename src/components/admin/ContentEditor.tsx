
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
  item: ContentItem;
  onUpdate: (id: string, updates: Partial<ContentItem>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ item, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(item);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      setLoading(true);
      await onUpdate(item.id, editData);
      setEditing(false);
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

  const handleDelete = async () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      try {
        setLoading(true);
        await onDelete(item.id);
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
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{item.key}</CardTitle>
        <div className="flex space-x-2">
          {editing ? (
            <>
              <Button size="sm" onClick={handleSave} disabled={loading}>
                <Save className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
                <X className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="outline" onClick={() => setEditing(true)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="destructive" onClick={handleDelete} disabled={loading}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Clé</label>
              <Input
                value={editData.key}
                onChange={(e) => setEditData({...editData, key: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Type</label>
              <Select value={editData.type} onValueChange={(value) => setEditData({...editData, type: value})}>
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
                value={typeof editData.value === 'string' ? editData.value : JSON.stringify(editData.value)}
                onChange={(e) => setEditData({...editData, value: e.target.value})}
                rows={3}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Input
                value={editData.description || ''}
                onChange={(e) => setEditData({...editData, description: e.target.value})}
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
  );
};

export default ContentEditor;
