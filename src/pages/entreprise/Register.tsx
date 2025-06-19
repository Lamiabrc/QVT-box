
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Building2, Users, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FloatingBubbles from '@/components/bubble/FloatingBubbles';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { registerUser, loading } = useAuthOperations();
  
  const [step, setStep] = useState(1);
  const [universe, setUniverse] = useState<'enterprise' | 'family' | null>(null);
  const [hasCode, setHasCode] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    joinCode: '',
    entityName: ''
  });

  const handleUniverseSelection = (selectedUniverse: 'enterprise' | 'family') => {
    setUniverse(selectedUniverse);
    setStep(2);
  };

  const handleCodeSelection = (codeChoice: boolean) => {
    setHasCode(codeChoice);
    setStep(3);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas"
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Le mot de passe doit contenir au moins 6 caractères"
      });
      return;
    }

    let accountType: 'create_enterprise' | 'create_family' | 'join_with_code' | 'individual';
    
    if (hasCode) {
      accountType = 'join_with_code';
    } else if (universe === 'enterprise') {
      accountType = 'create_enterprise';
    } else if (universe === 'family') {
      accountType = 'create_family';
    } else {
      accountType = 'individual';
    }

    const registrationData = {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      accountType,
      entityName: !hasCode ? formData.entityName : undefined,
      joinCode: hasCode ? formData.joinCode : undefined,
    };

    const { user, error, joinCode } = await registerUser(registrationData);

    if (user && !error) {
      if (joinCode) {
        toast({
          title: universe === 'enterprise' ? "Entreprise créée avec succès !" : "Famille créée avec succès !",
          description: `Code de partage: ${joinCode}`,
        });
      } else {
        toast({
          title: "Inscription réussie !",
          description: hasCode ? "Vous avez rejoint avec succès !" : "Votre compte a été créé",
        });
      }
      
      // Redirection selon l'univers
      if (universe === 'enterprise') {
        navigate('/entreprise/login');
      } else {
        navigate('/teens/login');
      }
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
              onClick={() => {
                if (step > 1) {
                  setStep(step - 1);
                } else {
                  navigate('/auth');
                }
              }}
              className="flex items-center space-x-2 text-blue-600 hover:bg-blue-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <User className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-blue-900">Inscription QVT Box</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Étape 1: Choix de l'univers */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🌟 Choisissez votre univers
                </h2>
                <p className="text-lg text-gray-600">
                  Pour quelle utilisation souhaitez-vous vous inscrire ?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-400"
                  onClick={() => handleUniverseSelection('enterprise')}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-900">
                      🏢 Univers Entreprise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      Améliorer la qualité de vie au travail de votre équipe
                    </p>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-400"
                  onClick={() => handleUniverseSelection('family')}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-pink-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-900">
                      👨‍👩‍👧‍👦 Univers Famille
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      Accompagner le bien-être de votre famille et de vos ados
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Étape 2: Demande de code */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {universe === 'enterprise' ? '🏢' : '👨‍👩‍👧‍👦'} Avez-vous un code d'invitation ?
                </h2>
                <p className="text-lg text-gray-600">
                  {universe === 'enterprise' 
                    ? "Les salariés reçoivent un code de leur entreprise ou RH"
                    : "Les enfants peuvent avoir un code de leurs parents"
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-green-400"
                  onClick={() => handleCodeSelection(true)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">
                      Oui, j'ai un code
                    </h3>
                    <p className="text-gray-600">
                      {universe === 'enterprise' 
                        ? "Rejoindre mon entreprise"
                        : "Rejoindre ma famille"
                      }
                    </p>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-400"
                  onClick={() => handleCodeSelection(false)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">🆕</div>
                    <h3 className="text-xl font-bold text-orange-900 mb-2">
                      Non, créer un compte
                    </h3>
                    <p className="text-gray-600">
                      {universe === 'enterprise' 
                        ? "Créer un espace entreprise"
                        : "Créer un espace famille"
                      }
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Étape 3: Formulaire d'inscription */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {hasCode 
                      ? `🔗 Rejoindre ${universe === 'enterprise' ? 'l\'entreprise' : 'la famille'}`
                      : `🆕 Créer ${universe === 'enterprise' ? 'l\'espace entreprise' : 'l\'espace famille'}`
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Nom complet *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Mot de passe *</Label>
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirmer le mot de passe *</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {hasCode ? (
                      <div>
                        <Label htmlFor="joinCode">Code d'invitation *</Label>
                        <Input
                          id="joinCode"
                          value={formData.joinCode}
                          onChange={(e) => handleInputChange('joinCode', e.target.value.toUpperCase())}
                          placeholder="Entrez votre code"
                          required
                        />
                      </div>
                    ) : (
                      <div>
                        <Label htmlFor="entityName">
                          {universe === 'enterprise' ? 'Nom de l\'entreprise' : 'Nom de la famille'} *
                        </Label>
                        <Input
                          id="entityName"
                          value={formData.entityName}
                          onChange={(e) => handleInputChange('entityName', e.target.value)}
                          placeholder={universe === 'enterprise' ? 'Ex: Mon Entreprise' : 'Ex: Famille Martin'}
                          required
                        />
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3"
                      disabled={loading}
                    >
                      {loading ? '⏳ Création...' : hasCode ? '🚀 Rejoindre' : '🎉 Créer mon compte'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
