
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Heart, Gift, ArrowLeft, Users, Shield } from "lucide-react";

const Teens = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-secondary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center">
                <Heart className="w-4 h-4 text-secondary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-secondary">QVTeen Box</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            🧠 Espace Teens & Parents
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Un espace bienveillant pour accompagner les adolescents et leurs parents vers un meilleur bien-être. 
            Interface ludique et respect total de la vie privée.
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 cursor-pointer transform hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Gamepad2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">🎮 Je suis un Ado</h3>
                <p className="text-muted-foreground mb-6">
                  Interface ludique et ton décontracté pour t'accompagner en toute confidentialité.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left">
                  <li>✨ Questionnaires interactifs et fun</li>
                  <li>🎯 Recommandations adaptées à ton âge</li>
                  <li>🔒 Tes données restent privées</li>
                  <li>💡 Conseils pour mieux te sentir</li>
                </ul>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-2xl py-6 text-lg"
                  onClick={() => navigate('/teens/questionnaire')}
                >
                  C'est parti ! 🚀
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer transform hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">👨‍👩‍👧‍👦 Je suis Parent</h3>
                <p className="text-muted-foreground mb-6">
                  Dashboard dédié pour suivre le bien-être global de votre enfant en respectant son intimité.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-8 text-left">
                  <li>📊 Vue d'ensemble anonymisée</li>
                  <li>🎯 Recommandations familiales</li>
                  <li>💬 Conseils pour accompagner</li>
                  <li>🔐 Respect de la vie privée</li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg"
                  onClick={() => navigate('/teens/dashboard-parent')}
                >
                  Accéder au Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/recommandations')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Gift className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-lg">Box & Activités</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Recommandations d'activités et box adaptées : apaisement, expression, lien familial.
              </p>
              <Button className="w-full" variant="outline">
                Découvrir les box
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/historique')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-lg">Suivi & Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Historique des recommandations et retours d'expérience.
              </p>
              <Button className="w-full" variant="outline">
                Voir l'historique
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate('/profil')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Mon Profil</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <p className="text-muted-foreground text-sm mb-4">
                Gestion des paramètres et préférences de confidentialité.
              </p>
              <Button className="w-full" variant="outline">
                Gérer mon profil
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Safety Notice */}
        <div className="bg-card rounded-2xl p-8 text-center border-2 border-secondary/20">
          <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Sécurité et Confidentialité</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            QVTeen Box respecte strictement la vie privée des adolescents. Les données sont cloisonnées, 
            le consentement parental est requis, et nous appliquons les plus hauts standards de sécurité RGPD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teens;
