
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { EnterpriseStatus } from '@/types/qvtbox';

interface StatusSelectorProps {
  selectedStatuses: EnterpriseStatus[];
  onStatusChange: (status: EnterpriseStatus, checked: boolean) => void;
  isHR: boolean;
}

const StatusSelector: React.FC<StatusSelectorProps> = ({
  selectedStatuses,
  onStatusChange,
  isHR
}) => {
  const statusOptions = [
    { id: 'vip' as EnterpriseStatus, label: '⭐ VIP', color: '#FFD700' },
    { id: 'pénible' as EnterpriseStatus, label: '⚠️ Situation pénible', color: '#F44336' },
    { id: 'sensible' as EnterpriseStatus, label: '🔴 Profil sensible', color: '#FF5722' },
    { id: 'itinerant' as EnterpriseStatus, label: '🚗 Itinérant', color: '#9E9E9E' },
    { id: 'talent_strategique' as EnterpriseStatus, label: '💎 Talent stratégique', color: '#E91E63' }
  ];

  if (!isHR) return null;

  return (
    <div className="border-t pt-6">
      <Label className="text-lg font-semibold text-gray-900 mb-4 block">
        👥 Statuts RH (réservé aux responsables QVT/RH)
      </Label>
      <div className="grid md:grid-cols-2 gap-4">
        {statusOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
            <Checkbox
              id={`status_${option.id}`}
              checked={selectedStatuses.includes(option.id)}
              onCheckedChange={(checked) => onStatusChange(option.id, checked as boolean)}
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
  );
};

export default StatusSelector;
