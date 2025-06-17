
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { EnterpriseSpeciality, EnterpriseStatus } from '@/types/qvtbox';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import EnterpriseForm from './EnterpriseForm';
import SpecialitySelector from './SpecialitySelector';
import StatusSelector from './StatusSelector';

interface EnterpriseRegistrationData {
  email: string;
  fullName: string;
  fonction: string;
  typePoste: string;
  specialities: EnterpriseSpeciality[];
  retraiteAnnee?: number;
  promotionEnvisagee: boolean;
  hrStatuses?: EnterpriseStatus[];
}

interface EnterpriseRegistrationProps {
  onSubmit: (data: EnterpriseRegistrationData) => void;
  isHR?: boolean;
}

const EnterpriseRegistration: React.FC<EnterpriseRegistrationProps> = ({
  onSubmit,
  isHR = false
}) => {
  const [formData, setFormData] = useState<EnterpriseRegistrationData>({
    email: '',
    fullName: '',
    fonction: '',
    typePoste: '',
    specialities: [],
    promotionEnvisagee: false
  });

  const handleFormFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSpecialityChange = (speciality: EnterpriseSpeciality, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      specialities: checked 
        ? [...prev.specialities, speciality]
        : prev.specialities.filter(s => s !== speciality)
    }));
  };

  const handleStatusChange = (status: EnterpriseStatus, checked: boolean) => {
    if (!isHR) return;
    
    setFormData(prev => ({
      ...prev,
      hrStatuses: checked 
        ? [...(prev.hrStatuses || []), status]
        : (prev.hrStatuses || []).filter(s => s !== status)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center mb-6"
        >
          <BubbleComponent
            bubble={{
              id: 'enterprise_welcome',
              emotion: 'excited',
              intensity: 8,
              color: '#2196F3',
              size: 'large',
              animation: 'pulse',
              timestamp: new Date(),
              emotionalState: 8,
              mood: 'good'
            }}
            interactive
          />
        </motion.div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          🏢 Inscription Univers Entreprise
        </h2>
        <p className="text-xl text-gray-600">
          Créons ton profil personnalisé pour des recommandations sur mesure
        </p>
      </div>

      <Card className="shadow-lg border-2 border-blue-200/50">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Informations professionnelles</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <EnterpriseForm
              formData={{
                email: formData.email,
                fullName: formData.fullName,
                fonction: formData.fonction,
                typePoste: formData.typePoste
              }}
              onChange={handleFormFieldChange}
            />

            <SpecialitySelector
              selectedSpecialities={formData.specialities}
              onSpecialityChange={handleSpecialityChange}
            />

            {formData.specialities.includes('retraite_proche') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="border-l-4 border-purple-500 pl-4"
              >
                <Label htmlFor="retraiteAnnee">Année de départ à la retraite</Label>
                <Input
                  id="retraiteAnnee"
                  type="number"
                  min={new Date().getFullYear()}
                  max={new Date().getFullYear() + 10}
                  value={formData.retraiteAnnee || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, retraiteAnnee: parseInt(e.target.value) }))}
                  placeholder="Ex: 2026"
                />
              </motion.div>
            )}

            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <Checkbox
                id="promotionEnvisagee"
                checked={formData.promotionEnvisagee}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, promotionEnvisagee: checked as boolean }))}
              />
              <label htmlFor="promotionEnvisagee" className="text-sm font-medium cursor-pointer">
                📈 Une promotion est envisagée prochainement
              </label>
            </div>

            <StatusSelector
              selectedStatuses={formData.hrStatuses || []}
              onStatusChange={handleStatusChange}
              isHR={isHR}
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3"
            >
              🚀 Créer mon profil QVT
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnterpriseRegistration;
