
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Brain, Shield, Users, Heart, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-accent/20">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">QVT Box</h1>
                <p className="text-sm text-muted-foreground">Qualité de Vie par l'IA</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">RGPD Compliant</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            L'IA au service de votre
            <span className="text-primary block">Qualité de Vie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Prévenez le mal-être et recevez des recommandations personnalisées grâce à notre intelligence artificielle avancée. 
            Deux univers dédiés pour accompagner entreprises et familles.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent" />
              <span>Questionnaires intelligents</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent" />
              <span>Recommandations IA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent" />
              <span>Tableaux de bord analytiques</span>
            </div>
          </div>
        </div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Entreprise Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer transform hover:-translate-y-2"
                onClick={() => navigate('/entreprise')}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">👔 Espace Entreprise</h3>
                <p className="text-muted-foreground mb-6">
                  Dédié aux RH, managers et salariés. Mesurez et améliorez la QVT grâce à l'IA.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                  <li>📊 Dashboard RH avec analytics</li>
                  <li>📝 Questionnaires QVT intelligents</li>
                  <li>🤖 Recommandations IA personnalisées</li>
                  <li>📦 Suivi des box bien-être</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg">
                  Accéder à l'espace Entreprise
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Teens Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 cursor-pointer transform hover:-translate-y-2"
                onClick={() => navigate('/teens')}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Brain className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">🧠 Espace Teens & Parents</h3>
                <p className="text-muted-foreground mb-6">
                  Accompagnement des adolescents et de leurs parents vers un meilleur bien-être.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                  <li>🎮 Interface ludique pour ados</li>
                  <li>👨‍👩‍👧‍👦 Dashboard parent</li>
                  <li>💝 Box et activités adaptées</li>
                  <li>🔒 Respect de la vie privée</li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-2xl py-6 text-lg">
                  Accéder à l'espace Teens
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-12">Pourquoi choisir QVT Box ?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Sécurité & Confidentialité</h4>
              <p className="text-muted-foreground">Données cloisonnées, RGPD compliant, consentement parental pour les mineurs.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto flex items-center justify-center">
                <Brain className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold">Intelligence Artificielle</h4>
              <p className="text-muted-foreground">Algorithmes avancés pour des recommandations précises et personnalisées.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="text-lg font-semibold">Approche Humaine</h4>
              <p className="text-muted-foreground">Prévention du mal-être et solutions concrètes adaptées à chaque profil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 QVT Box - Intelligence Artificielle pour la Qualité de Vie</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
