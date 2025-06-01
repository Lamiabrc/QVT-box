
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentCreatorProps {
  onCreateContent: (content: any) => Promise<void>;
}

const ContentCreator: React.FC<ContentCreatorProps> = ({ onCreateContent }) => {
  const [formData, setFormData] = useState({
    key: '',
    type: 'text',
    value: '',
    description: '',
    page: '',
    section: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.key || !formData.value) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "La clé et la valeur sont obligatoires.",
      });
      return;
    }

    try {
      setLoading(true);
      await onCreateContent(formData);
      setFormData({
        key: '',
        type: 'text',
        value: '',
        description: '',
        page: '',
        section: ''
      });
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Créer un nouveau contenu
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Clé *</label>
              <Input
                value={formData.key}
                onChange={(e) => setFormData({...formData, key: e.target.value})}
                placeholder="nom_du_contenu"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Type</label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
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
          </div>
          
          <div>
            <label className="text-sm font-medium">Valeur *</label>
            <Textarea
              value={formData.value}
              onChange={(e) => setFormData({...formData, value: e.target.value})}
              placeholder="Contenu..."
              rows={3}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Page</label>
              <Input
                value={formData.page}
                onChange={(e) => setFormData({...formData, page: e.target.value})}
                placeholder="nom_de_la_page"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Section</label>
              <Input
                value={formData.section}
                onChange={(e) => setFormData({...formData, section: e.target.value})}
                placeholder="nom_de_la_section"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Description</label>
            <Input
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Description du contenu"
            />
          </div>
          
          <Button type="submit" disabled={loading}>
            {loading ? 'Création...' : 'Créer le contenu'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContentCreator;
