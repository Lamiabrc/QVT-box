
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FloatingBubbles from '@/components/bubble/FloatingBubbles';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import EnterpriseRegistration from '@/components/enterprise/EnterpriseRegistration';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { registerUser, loading } = useAuthOperations();

  const handleRegistration = async (data: any) => {
    const registrationData = {
      email: data.email,
      password: 'TemporaryPassword123!', // In a real app, this would be collected from the user
      fullName: data.fullName,
      accountType: 'create_enterprise' as const,
      entityName: data.fonction, // Using fonction as entity name for now
    };

    const { user, error, joinCode } = await registerUser(registrationData);

    if (user && !error) {
      if (joinCode) {
        toast({
          title: "Entreprise créée avec succès !",
          description: `Code de partage: ${joinCode}`,
        });
      }
      navigate('/entreprise/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      {/* Header */}
      <header className="relative z-10 border-b border-blue-200/50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/entreprise')}
              className="flex items-center space-x-2 text-blue-600 hover:bg-blue-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Building2 className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-blue-900">Inscription Entreprise</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <EnterpriseRegistration
          onSubmit={handleRegistration}
          isHR={false}
        />
      </div>
    </div>
  );
};

export default Register;
