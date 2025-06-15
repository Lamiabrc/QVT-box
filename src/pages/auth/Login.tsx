
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Building2, Users } from "lucide-react";
import { useAuthOperations } from "@/hooks/useAuthOperations";
import FloatingBubbles from "@/components/bubble/FloatingBubbles";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const universe = searchParams.get('universe') || 'entreprise';
  const { signInUser, loading } = useAuthOperations();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signInUser(formData.email, formData.password);
    
    if (result.user && !result.error) {
      if (universe === 'famille') {
        navigate('/teens/dashboard');
      } else {
        navigate('/entreprise/dashboard');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingBubbles />
      <Card className="w-full max-w-md relative z-10">
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
            Connexion {universe === 'famille' ? 'Famille' : 'Entreprise'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
            <div className="text-center space-y-2">
              <Button
                variant="link"
                onClick={() => navigate(`/auth/register?universe=${universe}`)}
              >
                Créer un compte
              </Button>
              <br />
              <Button
                variant="link"
                onClick={() => navigate(`/auth/forgot-password?universe=${universe}`)}
              >
                Mot de passe oublié ?
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
