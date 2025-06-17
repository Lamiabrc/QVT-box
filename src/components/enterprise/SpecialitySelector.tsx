
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { EnterpriseSpeciality } from '@/types/qvtbox';

interface SpecialitySelectorProps {
  selectedSpecialities: EnterpriseSpeciality[];
  onSpecialityChange: (speciality: EnterpriseSpeciality, checked: boolean) => void;
}

const SpecialitySelector: React.FC<SpecialitySelectorProps> = ({
  selectedSpecialities,
  onSpecialityChange
}) => {
  const specialityOptions = [
    { id: 'itinerant' as EnterpriseSpeciality, label: '🚗 Salarié itinérant', color: '#FF5722' },
    { id: 'teletravail' as EnterpriseSpeciality, label: '🏠 Télétravail', color: '#2196F3' },
    { id: 'pénibilité' as EnterpriseSpeciality, label: '⚠️ Pénibilité', color: '#FF9800' },
    { id: 'retraite_proche' as EnterpriseSpeciality, label: '👴 Départ retraite proche', color: '#9C27B0' },
    { id: 'promotion_envisagee' as EnterpriseSpeciality, label: '📈 Promotion envisagée', color: '#4CAF50' }
  ];

  return (
    <div>
      <Label className="text-lg font-semibold text-gray-900 mb-4 block">
        🎯 Spécificités professionnelles
      </Label>
      <div className="grid md:grid-cols-2 gap-4">
        {specialityOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
            <Checkbox
              id={option.id}
              checked={selectedSpecialities.includes(option.id)}
              onCheckedChange={(checked) => onSpecialityChange(option.id, checked as boolean)}
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
  );
};

export default SpecialitySelector;
