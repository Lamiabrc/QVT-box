
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, User, Mail, Lock, AlertCircle, Loader2, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { signupSchema, type SignupFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SecureSignupFormProps {
  onSuccess?: () => void;
}

const SecureSignupForm: React.FC<SecureSignupFormProps> = ({ onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [needsManualLogin, setNeedsManualLogin] = useState(false);
  const { signUp } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const acceptTerms = watch('acceptTerms');

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setGeneralError(null);
    setSuccessMessage(null);
    setNeedsManualLogin(false);
    
    try {
      console.log('Form submission started with data:', {
        email: data.email,
        role: data.role,
        fullName: data.fullName
      });

      const result = await signUp(data.email, data.password, {
        full_name: data.fullName,
        role: data.role
      });
      
      console.log('SignUp response:', result);
      
      if (result.error) {
        console.error('Signup error:', result.error);
        
        // Handle specific error cases
        if (result.error.message.includes('already registered') || result.error.message.includes('déjà utilisée')) {
          setError('email', { message: 'Cet email est déjà utilisé' });
        } else if (result.error.message.includes('Invalid email')) {
          setError('email', { message: 'Format d\'email invalide' });
        } else if (result.error.message.includes('Password')) {
          setError('password', { message: 'Le mot de passe doit contenir au moins 6 caractères' });
        } else {
          setGeneralError(result.error.message || 'Erreur lors de la création du compte. Veuillez réessayer.');
        }
        return;
      }

      // Check if immediate login was successful
      if (result.immediateLogin && result.data?.session) {
        console.log('Immediate login successful');
        
        setSuccessMessage('Parfait ! Votre compte a été créé et vous êtes maintenant connecté.');
        
        toast({
          title: "Connexion réussie !",
          description: "Votre compte a été créé et vous êtes maintenant connecté.",
        });

        // Call onSuccess callback after a short delay
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 1500);
        }
      } else if (result.needsManualLogin) {
        // Account created but needs manual login
        setNeedsManualLogin(true);
        setSuccessMessage('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
        
        toast({
          title: "Compte créé !",
          description: "Connectez-vous avec vos identifiants pour accéder à QVT Box.",
        });
      } else {
        // Fallback success message
        setSuccessMessage('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
        
        toast({
          title: "Compte créé !",
          description: "Connectez-vous avec vos identifiants pour accéder à QVT Box.",
        });
      }
      
    } catch (error) {
      console.error('Unexpected signup error:', error);
      setGeneralError('Une erreur inattendue s\'est produite. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {generalError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{generalError}</AlertDescription>
        </Alert>
      )}

      {successMessage && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">{successMessage}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="fullName">Nom complet</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="fullName"
            {...register('fullName')}
            className="pl-10"
            placeholder="Votre nom complet"
            autoComplete="name"
            disabled={isLoading}
          />
        </div>
        {errors.fullName && (
          <p className="text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="email"
            type="email"
            {...register('email')}
            className="pl-10"
            placeholder="votre@email.com"
            autoComplete="email"
            disabled={isLoading}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Type de compte</Label>
        <Select onValueChange={(value) => setValue('role', value as any)} disabled={isLoading}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre profil" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">Utilisateur</SelectItem>
            <SelectItem value="parent">Parent</SelectItem>
            <SelectItem value="teen">Adolescent</SelectItem>
            <SelectItem value="employee">Employé</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="hr">RH</SelectItem>
          </SelectContent>
        </Select>
        {errors.role && (
          <p className="text-sm text-red-600">{errors.role.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Mot de passe</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register('password')}
            className="pl-10 pr-10"
            placeholder="••••••••"
            autoComplete="new-password"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            disabled={isLoading}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            {...register('confirmPassword')}
            className="pl-10 pr-10"
            placeholder="••••••••"
            autoComplete="new-password"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            disabled={isLoading}
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="acceptTerms"
          checked={acceptTerms}
          onCheckedChange={(checked) => setValue('acceptTerms', checked as boolean)}
          disabled={isLoading}
        />
        <Label htmlFor="acceptTerms" className="text-sm">
          J'accepte les{' '}
          <a href="/cgu" className="text-teal-600 hover:underline">
            conditions d'utilisation
          </a>{' '}
          et la{' '}
          <a href="/privacy-policy" className="text-teal-600 hover:underline">
            politique de confidentialité
          </a>
        </Label>
      </div>
      {errors.acceptTerms && (
        <p className="text-sm text-red-600">{errors.acceptTerms.message}</p>
      )}

      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Création du compte...
          </>
        ) : (
          "Créer mon compte"
        )}
      </Button>

      {needsManualLogin && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Dernière étape :</strong> Votre compte a été créé avec succès ! 
            Cliquez sur "Connexion" dans la navigation pour vous connecter avec vos identifiants.
          </p>
        </div>
      )}

      {successMessage && !needsManualLogin && successMessage.includes('connecté') && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">
            <strong>Excellent !</strong> Vous pouvez maintenant utiliser QVT Box. 
            Vous allez être redirigé automatiquement.
          </p>
        </div>
      )}
    </form>
  );
};

export default SecureSignupForm;
