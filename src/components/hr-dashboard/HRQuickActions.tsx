
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Package, Euro } from 'lucide-react';

interface HRQuickActionsProps {
  directRequestsCount: number;
  budgetInfo: {
    totalBudget: number;
    usedBudget: number;
    employeeAllocation: number;
  };
}

const HRQuickActions: React.FC<HRQuickActionsProps> = ({ directRequestsCount, budgetInfo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-500 to-pink-700 text-white cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-6 w-6 mr-3" />
            Demandes Directes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 opacity-90">
            {directRequestsCount} demandes en attente de traitement
          </p>
          <Button className="w-full bg-white text-pink-700 hover:bg-pink-50">
            Voir les demandes
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-6 w-6 mr-3" />
            Gestion des Box
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 opacity-90">
            Suivi des livraisons et personnalisation
          </p>
          <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50">
            Gérer les box
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-700 text-white cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Euro className="h-6 w-6 mr-3" />
            Budget QVT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 opacity-90">
            {budgetInfo.employeeAllocation}€ par employé
          </p>
          <p className="text-xs opacity-80 mb-4">
            {budgetInfo.totalBudget - budgetInfo.usedBudget}€ disponibles
          </p>
          <Button className="w-full bg-white text-green-700 hover:bg-green-50">
            Gérer le budget
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRQuickActions;
