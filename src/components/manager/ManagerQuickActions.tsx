
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Shield, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManagerQuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-teal-500 to-teal-700 text-white cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-6 w-6 mr-3" />
            Chat Équipe
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 opacity-90">
            Communiquez avec chaque membre individuellement
          </p>
          <Button className="w-full bg-white text-teal-700 hover:bg-teal-50">
            Accéder aux chats
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-6 w-6 mr-3" />
            Contact RH
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 opacity-90">
            Échangez avec les ressources humaines
          </p>
          <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50">
            Contacter RH
          </Button>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-500 to-pink-700 text-white cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-6 w-6 mr-3" />
            Plans d'Action
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 opacity-90">
            Créez des plans d'amélioration pour votre équipe
          </p>
          <Button className="w-full bg-white text-pink-700 hover:bg-pink-50">
            Créer un plan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerQuickActions;
