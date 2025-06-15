
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Euro, Package } from 'lucide-react';

interface BudgetInfo {
  totalBudget: number;
  usedBudget: number;
  employeeAllocation: number;
}

interface BudgetTabProps {
  budgetInfo: BudgetInfo;
}

const BudgetTab: React.FC<BudgetTabProps> = ({ budgetInfo }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Euro className="h-5 w-5 mr-2" />
            Gestion du Budget QVT
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800">Budget Total Annuel</h4>
            <p className="text-2xl font-bold text-green-600">{budgetInfo.totalBudget}€</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800">Budget Utilisé</h4>
            <p className="text-2xl font-bold text-blue-600">{budgetInfo.usedBudget}€</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800">Disponible par Employé</h4>
            <p className="text-2xl font-bold text-purple-600">{budgetInfo.employeeAllocation}€</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Suivi des Box QVT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Box en cours de préparation</span>
                <Badge>12</Badge>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Box expédiées ce mois</span>
                <Badge variant="secondary">45</Badge>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Box livrées</span>
                <Badge variant="outline">38</Badge>
              </div>
            </div>
            
            <Button className="w-full">
              Gérer les commandes de box
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetTab;
