import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import EntrepriseHeader from '@/components/entreprise/EntrepriseHeader';

const Register = () => {
  const navigate = useNavigate();
  const { registerUser, loading } = useAuthOperations();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    accountType: 'abonne_salarie' as const,
    entreprise: '',
    enterpriseRole: 'employee',
    acceptTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Mot de passe requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nom complet requis';
    }

    if (formData.accountType === 'abonne_salarie' && !formData.entreprise.trim()) {
      newErrors.entreprise = 'Nom de l\'entreprise requis pour les salariés';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const { user, error } = await registerUser({
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      accountType: formData.accountType,
      entreprise: formData.entreprise || undefined,
      enterpriseRole: formData.enterpriseRole
    });

    if (user && !error) {
      // Redirect to login page with success message
      navigate('/entreprise/login', { 
        state: { 
          message: 'Compte créé avec succès. Veuillez vérifier votre email et vous connecter.' 
        }
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <EntrepriseHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="backdrop-blur-sm bg-white/95 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Créer un compte entreprise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Adresse email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="fullName">Nom complet</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={errors.fullName ? 'border-red-500' : ''}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="accountType">Type de compte</Label>
                  <Select 
                    value={formData.accountType} 
                    onValueChange={(value) => handleInputChange('accountType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="abonne_salarie">Salarié d'entreprise</SelectItem>
                      <SelectItem value="administrateur_entreprise">Administrateur entreprise</SelectItem>
                      <SelectItem value="particulier_travailleur">Travailleur indépendant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.accountType === 'abonne_salarie' && (
                  <>
                    <div>
                      <Label htmlFor="entreprise">Nom de l'entreprise</Label>
                      <Input
                        id="entreprise"
                        type="text"
                        value={formData.entreprise}
                        onChange={(e) => handleInputChange('entreprise', e.target.value)}
                        className={errors.entreprise ? 'border-red-500' : ''}
                        required
                      />
                      {errors.entreprise && (
                        <p className="text-sm text-red-500 mt-1">{errors.entreprise}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="enterpriseRole">Rôle dans l'entreprise</Label>
                      <Select 
                        value={formData.enterpriseRole} 
                        onValueChange={(value) => handleInputChange('enterpriseRole', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employee">Employé</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="hr">Ressources Humaines</SelectItem>
                          <SelectItem value="admin">Administrateur</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <Separator />

                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={errors.password ? 'border-red-500' : ''}
                    required
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={errors.confirmPassword ? 'border-red-500' : ''}
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="acceptTerms" className="text-sm">
                    J'accepte les conditions d'utilisation et la politique de confidentialité
                  </Label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-sm text-red-500">{errors.acceptTerms}</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                >
                  {loading ? 'Création en cours...' : 'Créer le compte'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Déjà un compte ?{' '}
                  <Link to="/entreprise/login" className="text-blue-600 hover:underline">
                    Se connecter
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
