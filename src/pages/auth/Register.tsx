import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthOperations, RegisterData } from '@/hooks/useAuthOperations';
import { ArrowLeft, Building, Users, User, GitFork, ClipboardCopy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FloatingBubbles from '@/components/bubble/FloatingBubbles';

type Step = 'initial' | 'choose_type' | 'form' | 'show_code';
type AccountType = RegisterData['accountType'];

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { registerUser, loading } = useAuthOperations();
  const { toast } = useToast();

  const [step, setStep] = useState<Step>('initial');
  const [accountType, setAccountType] = useState<AccountType | null>(null);
  const [joinCode, setJoinCode] = useState('');
  const [finalJoinCode, setFinalJoinCode] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    entityName: '', // Family or Enterprise name
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSetAccountType = (type: AccountType) => {
    setAccountType(type);
    setStep('form');
  };
  
  const handleJoinWithCode = () => {
    if (joinCode.trim().length < 4) {
        toast({ title: "Erreur", description: "Veuillez entrer un code valide.", variant: "destructive" });
        return;
    }
    setAccountType('join_with_code');
    setStep('form');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({ title: "Erreur", description: "Les mots de passe ne correspondent pas.", variant: "destructive" });
      return;
    }
    if (!accountType) return;

    const registrationData: RegisterData = {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      accountType: accountType,
      ...( (accountType === 'create_family' || accountType === 'create_enterprise') && { entityName: formData.entityName }),
      ...( accountType === 'join_with_code' && { joinCode: joinCode }),
    };

    const { user, error, joinCode: newJoinCode } = await registerUser(registrationData);

    if (user && !error) {
      if (newJoinCode) {
        setFinalJoinCode(newJoinCode);
        setStep('show_code');
      } else {
        navigate('/auth/login', { state: { message: 'Compte créé ! Veuillez vérifier votre email pour vous connecter.' } });
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'initial':
        return (
          <div className="space-y-6">
            <h3 className="text-center text-xl font-semibold text-gray-700">Bienvenue !</h3>
            <p className="text-center text-gray-500">Avez-vous un code pour rejoindre une famille ou une entreprise ?</p>
            <div className="flex items-center space-x-2">
                <Input id="joinCode" placeholder="Entrez votre code..." value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
                <Button onClick={handleJoinWithCode} disabled={loading}>Rejoindre</Button>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white/95 px-2 text-gray-500">Ou</span>
                </div>
            </div>
            <Button variant="outline" className="w-full" onClick={() => setStep('choose_type')}>Créer un nouveau compte</Button>
          </div>
        );
      case 'choose_type':
        return (
          <div className="space-y-4">
            <h3 className="text-center text-xl font-semibold text-gray-700">Quel type de compte souhaitez-vous créer ?</h3>
            <Button className="w-full justify-start space-x-2" onClick={() => handleSetAccountType('create_family')}><Users /><span>Créer un Espace Famille</span></Button>
            <Button className="w-full justify-start space-x-2" onClick={() => handleSetAccountType('create_enterprise')}><Building /><span>Créer un Espace Entreprise</span></Button>
            <Button className="w-full justify-start space-x-2" onClick={() => handleSetAccountType('individual')}><User /><span>Créer un compte Individuel</span></Button>
            <Button className="w-full justify-start space-x-2" onClick={() => handleSetAccountType('teen')}><GitFork /><span>Créer un compte Jeune</span></Button>
            <Button variant="link" onClick={() => setStep('initial')}><ArrowLeft className="w-4 h-4 mr-2"/>Retour</Button>
          </div>
        );
      case 'form':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-center text-xl font-semibold text-gray-700">Finalisez votre inscription</h3>
            { (accountType === 'create_family' || accountType === 'create_enterprise') && (
                 <div>
                    <Label htmlFor="entityName">{accountType === 'create_family' ? 'Nom de la famille' : "Nom de l'entreprise"}</Label>
                    <Input id="entityName" value={formData.entityName} onChange={handleInputChange} required />
                </div>
            )}
            <div>
              <Label htmlFor="fullName">Nom complet</Label>
              <Input id="fullName" value={formData.fullName} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="email">Adresse email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" value={formData.password} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Création...' : 'Créer le compte'}</Button>
            <Button variant="link" onClick={() => setStep(joinCode ? 'initial' : 'choose_type')}><ArrowLeft className="w-4 h-4 mr-2"/>Retour</Button>
          </form>
        );
      case 'show_code':
          return (
            <div className="space-y-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Votre espace a été créé !</h3>
              <p className="text-gray-600">Partagez ce code avec les membres pour qu'ils puissent vous rejoindre :</p>
              <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center space-x-4">
                <span className="text-2xl font-bold tracking-widest text-indigo-600">{finalJoinCode}</span>
                <Button size="icon" variant="ghost" onClick={() => { navigator.clipboard.writeText(finalJoinCode!); toast({title: "Copié !"}) }}>
                    <ClipboardCopy className="w-5 h-5"/>
                </Button>
              </div>
              <p className="text-sm text-gray-500">Un email de confirmation a été envoyé à votre adresse.</p>
              <Button onClick={() => navigate('/entreprise/login')}>Aller à la page de connexion</Button>
            </div>
          )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingBubbles />
      <Card className="w-full max-w-md bg-white/95 shadow-xl relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Inscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderStep()}
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
