
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle } from 'lucide-react';

interface DirectRequest {
  id: number;
  employee: string;
  type: string;
  priority: 'high' | 'medium' | 'low';
  date: string;
  message: string;
}

interface DirectRequestsTabProps {
  directRequests: DirectRequest[];
}

const DirectRequestsTab: React.FC<DirectRequestsTabProps> = ({ directRequests }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-2" />
          Demandes Directes des Collaborateurs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {directRequests.map((request) => (
            <div key={request.id} className="p-4 border rounded-lg bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{request.employee}</h4>
                  <p className="text-sm text-gray-600">{request.type}</p>
                </div>
                <div className="text-right">
                  <Badge variant={
                    request.priority === 'high' ? 'destructive' :
                    request.priority === 'medium' ? 'default' : 'secondary'
                  }>
                    {request.priority === 'high' ? 'Urgent' :
                     request.priority === 'medium' ? 'Important' : 'Normal'}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">{request.date}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">{request.message}</p>
              <div className="flex space-x-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Répondre
                </Button>
                <Button size="sm" variant="outline">
                  Programmer RDV
                </Button>
                <Button size="sm" variant="outline">
                  Transférer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DirectRequestsTab;
