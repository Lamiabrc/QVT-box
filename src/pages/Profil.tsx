
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Shield, Bell, Settings, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useUserProfile, UpdateProfileData } from "@/hooks/useUserProfile";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Profil = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { profile, isLoading, updateProfile, isUpdating } = useUserProfile();
  const [formData, setFormData] = useState<UpdateProfileData | null>(null);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => (prev ? { ...prev, [id]: value } : null));
  };
  
  const handleSwitchChange = (id: keyof UpdateProfileData, checked: boolean) => {
     setFormData(prev => (prev ? { ...prev, [id]: checked } : null));
  };

  const handleSave = () => {
    if (!profile || !formData) {
      toast({ title: "Erreur", description: "Impossible de sauvegarder le profil.", variant: "destructive" });
      return;
    }
    
    const payload: UpdateProfileData = {};
    Object.keys(formData).forEach(keyStr => {
      const key = keyStr as keyof UpdateProfileData;
      if (formData[key] !== profile[key]) {
        (payload as any)[key] = formData[key];
      }
    });

    if (Object.keys(payload).length > 0) {
      updateProfile(payload);
    } else {
       toast({ title: "Aucune modification", description: "Vous n'avez fait aucune modification." });
    }
  };
  
  const renderLoadingSkeleton = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader><Skeleton className="h-8 w-1/3" /></CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2"><Skeleton className="h-4 w-1/4" /><Skeleton className="h-10 w-full" /></div>
            <div className="space-y-2"><Skeleton className="h-4 w-1/4" /><Skeleton className="h-10 w-full" /></div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><Skeleton className="h-8 w-1/3" /></CardHeader>
        <CardContent className="space-y-6">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
        <header className="border-b bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour</span>
              </Button>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-primary" />
                <h1 className="text-xl font-bold text-primary">Mon Profil</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8">{renderLoadingSkeleton()}</div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
        <header className="border-b bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Retour</span>
              </Button>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-primary" />
                <h1 className="text-xl font-bold text-primary">Mon Profil</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Impossible de charger les données du profil. Veuillez réessayer plus tard.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-bold text-primary">Mon Profil</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Informations Personnelles</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Nom complet</Label>
                  <Input id="full_name" placeholder="Votre nom complet" value={formData.full_name || ''} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email || ''} readOnly disabled className="bg-gray-100" />
                </div>
              </div>
              <div className="space-y-2">
                  <Label htmlFor="account_type">Type de compte</Label>
                  <Input id="account_type" value={formData.account_type || ''} readOnly disabled className="bg-gray-100" />
              </div>
            </CardContent>
          </Card>
          
          {/* Professional Information */}
          {(formData.account_type === 'create_enterprise' || formData.account_type === 'join_with_code' || formData.enterprise_id) && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Informations Professionnelles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fonction">Fonction</Label>
                    <Input id="fonction" value={formData.fonction || ''} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type_poste">Type de poste</Label>
                    <Input id="type_poste" value={formData.type_poste || ''} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enterprise_role">Rôle dans l'entreprise</Label>
                  <Input id="enterprise_role" value={formData.enterprise_role || ''} readOnly disabled className="bg-gray-100" />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Confidentialité & Sécurité</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Données anonymisées</Label>
                  <p className="text-sm text-muted-foreground">
                    Permettre l'utilisation anonyme de mes données pour les statistiques globales
                  </p>
                </div>
                <Switch 
                  checked={!!formData.privacy_anonymized} 
                  onCheckedChange={(checked) => handleSwitchChange('privacy_anonymized', checked)} 
                />
              </div>

              {(formData.account_type === 'create_enterprise' || formData.account_type === 'join_with_code' || formData.enterprise_id) && (
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Partage avec l'équipe RH</Label>
                    <p className="text-sm text-muted-foreground">
                      Autoriser l'équipe RH à voir mes scores QVT (pour les salariés)
                    </p>
                  </div>
                   <Switch 
                    checked={!!formData.hr_access} 
                    onCheckedChange={(checked) => handleSwitchChange('hr_access', checked)} 
                  />
                </div>
              )}

              {(formData.account_type === 'create_family' || formData.account_type === 'teen' || formData.family_id) && (
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Accès parental (Ados uniquement)</Label>
                    <p className="text-sm text-muted-foreground">
                      Permettre aux parents de voir un aperçu général de mon bien-être
                    </p>
                  </div>
                  <Switch 
                    checked={!!formData.teen_access} 
                    onCheckedChange={(checked) => handleSwitchChange('teen_access', checked)} 
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Activer les notifications par email</Label>
                  <p className="text-sm text-muted-foreground">
                    Recevoir des rappels, des nouveautés, et d'autres communications.
                  </p>
                </div>
                <Switch 
                  checked={!!formData.notifications_enabled}
                  onCheckedChange={(checked) => handleSwitchChange('notifications_enabled', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* App Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Préférences d'Application</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Thème</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir le thème" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Clair</SelectItem>
                    <SelectItem value="dark">Sombre</SelectItem>
                    <SelectItem value="auto">Automatique</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Langue</Label>
                <Select defaultValue="fr">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleSave} className="rounded-2xl bg-primary" disabled={isUpdating}>
              {isUpdating ? 'Sauvegarde...' : 'Sauvegarder les modifications'}
            </Button>
            <Button variant="outline" className="rounded-2xl">
              Exporter mes données
            </Button>
            <Button variant="destructive" className="rounded-2xl">
              Supprimer mon compte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
