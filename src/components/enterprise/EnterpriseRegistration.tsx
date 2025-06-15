
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EnterpriseSpeciality, EnterpriseStatus } from '@/types/qvtbox';
import BubbleComponent from '@/components/bubble/BubbleComponent';

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

  const specialityOptions = [
    { id: 'salarie_itinerant', label: '🚗 Salarié itinérant', color: '#FF5722' },
    { id: 'teletravail', label: '🏠 Télétravail', color: '#2196F3' },
    { id: 'penibilite', label: '⚠️ Pénibilité', color: '#FF9800' },
    { id: 'retraite_proche', label: '👴 Départ retraite proche', color: '#9C27B0' },
    { id: 'promotion_envisagee', label: '📈 Promotion envisagée', color: '#4CAF50' }
  ];

  const statusOptions = [
    { id: 'vip', label: '⭐ VIP', color: '#FFD700' },
    { id: 'penible', label: '⚠️ Situation pénible', color: '#F44336' },
    { id: 'sensible', label: '🔴 Profil sensible', color: '#FF5722' },
    { id: 'itinerant', label: '🚗 Itinérant', color: '#9E9E9E' },
    { id: 'talent_strategique', label: '💎 Talent stratégique', color: '#E91E63' }
  ];

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
              timestamp: new Date()
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
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName">Nom complet</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email professionnel</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                  onChange={(e) => setFormData(prev => ({ ...prev, fonction: e.target.value }))}
                  placeholder="Ex: Développeur, Manager, RH..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="typePoste">Type de poste</Label>
                <Select value={formData.typePoste} onValueChange={(value) => setFormData(prev => ({ ...prev, typePoste: value }))}>
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

            <div>
              <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                🎯 Spécificités professionnelles
              </Label>
              <div className="grid md:grid-cols-2 gap-4">
                {specialityOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <Checkbox
                      id={option.id}
                      checked={formData.specialities.includes(option.id as EnterpriseSpeciality)}
                      onCheckedChange={(checked) => handleSpecialityChange(option.id as EnterpriseSpeciality, checked as boolean)}
                    />
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: option.color }}
                      />
                      <label htmlFor={option.id} className="text-sm font-medium cursor-pointer">
                        {option.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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

            {isHR && (
              <div className="border-t pt-6">
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                  👥 Statuts RH (réservé aux responsables QVT/RH)
                </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {statusOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <Checkbox
                        id={`status_${option.id}`}
                        checked={(formData.hrStatuses || []).includes(option.id as EnterpriseStatus)}
                        onCheckedChange={(checked) => handleStatusChange(option.id as EnterpriseStatus, checked as boolean)}
                      />
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: option.color }}
                        />
                        <label htmlFor={`status_${option.id}`} className="text-sm font-medium cursor-pointer">
                          {option.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
