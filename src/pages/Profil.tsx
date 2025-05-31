
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Shield, Bell, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profil = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Profil mis à jour",
      description: "Vos modifications ont été sauvegardées avec succès.",
    });
  };

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
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Rôle</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee">Salarié</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="hr">RH</SelectItem>
                      <SelectItem value="teen">Adolescent</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Département / Établissement</Label>
                <Input id="department" placeholder="Ex: IT, Marketing, Collège Jean Moulin..." />
              </div>
            </CardContent>
          </Card>

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
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Partage avec l'équipe RH</Label>
                  <p className="text-sm text-muted-foreground">
                    Autoriser l'équipe RH à voir mes scores QVT (pour les salariés)
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Accès parental (Ados uniquement)</Label>
                  <p className="text-sm text-muted-foreground">
                    Permettre aux parents de voir un aperçu général de mon bien-être
                  </p>
                </div>
                <Switch />
              </div>
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
                  <Label>Rappels de questionnaire</Label>
                  <p className="text-sm text-muted-foreground">
                    Recevoir des rappels pour compléter les questionnaires QVT
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Nouvelles recommandations</Label>
                  <p className="text-sm text-muted-foreground">
                    Être notifié quand de nouvelles recommandations sont disponibles
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Box bien-être</Label>
                  <p className="text-sm text-muted-foreground">
                    Notifications liées à l'envoi et au suivi des box
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Fréquence des notifications</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir la fréquence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Temps réel</SelectItem>
                    <SelectItem value="daily">Quotidienne</SelectItem>
                    <SelectItem value="weekly">Hebdomadaire</SelectItem>
                    <SelectItem value="none">Aucune</SelectItem>
                  </SelectContent>
                </Select>
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
            <Button onClick={handleSave} className="rounded-2xl bg-primary">
              Sauvegarder les modifications
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
