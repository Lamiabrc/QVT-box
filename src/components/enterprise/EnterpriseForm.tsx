
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EnterpriseFormData {
  email: string;
  fullName: string;
  fonction: string;
  typePoste: string;
}

interface EnterpriseFormProps {
  formData: EnterpriseFormData;
  onChange: (field: keyof EnterpriseFormData, value: string) => void;
}

const EnterpriseForm: React.FC<EnterpriseFormProps> = ({ formData, onChange }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Nom complet</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email professionnel</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fonction">Fonction</Label>
          <Input
            id="fonction"
            value={formData.fonction}
            onChange={(e) => onChange('fonction', e.target.value)}
            placeholder="Ex: Développeur, Manager, RH..."
            required
          />
        </div>
        <div>
          <Label htmlFor="typePoste">Type de poste</Label>
          <Select value={formData.typePoste} onValueChange={(value) => onChange('typePoste', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez votre type de poste" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cadre">Cadre</SelectItem>
              <SelectItem value="employe">Employé</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="direction">Direction</SelectItem>
              <SelectItem value="interim">Intérimaire</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default EnterpriseForm;
