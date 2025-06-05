
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Building2, Users } from "lucide-react";
import { useAuthOperations } from "@/hooks/useAuthOperations";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const universe = searchParams.get('universe') || 'entreprise';
  const { registerUser, loading } = useAuthOperations();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    enterpriseRole: universe === 'entreprise' ? 'employee' : undefined,
    age: universe === 'famille' ? undefined : undefined
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const registerData = {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      accountType: universe === 'famille' ? 'particulier_travailleur' as const : 'abonne_salarie' as const,
      enterpriseRole: formData.enterpriseRole,
      age: formData.age
    };
    
    const result = await registerUser(registerData);
    
    if (result.user && !result.error) {
      navigate(`/auth/login?universe=${universe}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate(`/${universe}`)}
            className="flex items-center space-x-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'univers {universe === 'famille' ? 'Famille' : 'Entreprise'}</span>
          </Button>
          <div className="flex justify-center mb-4">
            {universe === 'famille' ? (
              <Users className="w-12 h-12 text-pink-600" />
            ) : (
              <Building2 className="w-12 h-12 text-blue-600" />
            )}
          </div>
          <CardTitle className="text-2xl">
            Inscription {universe === 'famille' ? 'Famille' : 'Entreprise'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Nom complet</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {universe === 'entreprise' && (
              <div>
                <Label>Rôle dans l'entreprise</Label>
                <Select value={formData.enterpriseRole} onValueChange={(value) => setFormData(prev => ({ ...prev, enterpriseRole: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Employé</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="hr">RH</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {universe === 'famille' && (
              <div>
                <Label htmlFor="age">Âge</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
                  min="13"
                  max="100"
                />
              </div>
            )}
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Création...' : 'Créer un compte'}
            </Button>
            <div className="text-center">
              <Button
                variant="link"
                onClick={() => navigate(`/auth/login?universe=${universe}`)}
              >
                Déjà un compte ? Se connecter
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
