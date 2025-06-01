
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Brain, Shield, Users, Heart, Star, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-accent rounded-full animate-bounce"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/1398cdff-61cf-4c6c-a073-6f67536dd04b.png" 
                alt="QVT Box Logo" 
                className="h-16 w-auto animate-pulse"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">QVT Box</h1>
                <p className="text-sm text-gray-300">Sortez de votre bulle, on veille sur vous</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-sm text-gray-300">RGPD Compliant</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white mb-8 animate-pulse">
            L'IA au service de votre
            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-accent via-white to-secondary bg-clip-text text-transparent">
              Qualité de Vie ✨
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            🚀 Prévenez le mal-être et recevez des recommandations personnalisées grâce à notre intelligence artificielle avancée. 
            Deux univers dédiés pour accompagner entreprises et familles dans leur bien-être quotidien.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-accent animate-spin" />
              <span>Questionnaires intelligents</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-sm">
              <Zap className="w-5 h-5 text-secondary animate-pulse" />
              <span>Recommandations IA</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-sm">
              <Star className="w-5 h-5 text-accent animate-bounce" />
              <span>Tableaux de bord analytiques</span>
            </div>
          </div>
        </div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Entreprise Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-primary/30 hover:border-primary/60 cursor-pointer transform hover:-translate-y-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm"
                onClick={() => navigate('/auth')}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Building2 className="w-12 h-12 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">💼 Espace Entreprise</h3>
                <p className="text-gray-200 mb-6 text-lg">
                  Dédié aux RH, managers et salariés. Mesurez et améliorez la QVT grâce à l'IA.
                </p>
                <ul className="text-sm text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>📊 Dashboard RH avec analytics</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>📝 Questionnaires QVT intelligents</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>🤖 Recommandations IA personnalisées</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>📦 Suivi des box bien-être</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-2xl py-6 text-lg font-semibold transform transition-all duration-300 hover:scale-105">
                  🚀 Accéder à l'espace Entreprise
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Teens Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-secondary/30 hover:border-secondary/60 cursor-pointer transform hover:-translate-y-6 bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-sm"
                onClick={() => navigate('/auth')}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary/20 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:bg-secondary/30 transition-all duration-300 group-hover:scale-110">
                  <Users className="w-12 h-12 text-secondary group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">👨‍👩‍👧‍👦 Espace Famille</h3>
                <p className="text-gray-200 mb-6 text-lg">
                  Accompagnement des adolescents et de leurs parents vers un meilleur bien-être.
                </p>
                <ul className="text-sm text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>🎮 Interface ludique pour ados</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>👨‍👩‍👧‍👦 Dashboard parent</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>💝 Box et activités adaptées</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>🔒 Respect de la vie privée</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white rounded-2xl py-6 text-lg font-semibold transform transition-all duration-300 hover:scale-105">
                  🌟 Accéder à l'espace Famille
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white mb-12 animate-fade-in">
            ✨ Pourquoi choisir QVT Box ? ✨
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl mx-auto flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-white">🛡️ Sécurité & Confidentialité</h4>
              <p className="text-gray-200">Données cloisonnées, RGPD compliant, consentement parental pour les mineurs.</p>
            </div>
            <div className="space-y-4 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-secondary/20 rounded-3xl mx-auto flex items-center justify-center">
                <Brain className="w-10 h-10 text-secondary animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-white">🧠 Intelligence Artificielle</h4>
              <p className="text-gray-200">Algorithmes avancés pour des recommandations précises et personnalisées.</p>
            </div>
            <div className="space-y-4 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-accent/20 rounded-3xl mx-auto flex items-center justify-center">
                <Heart className="w-10 h-10 text-accent animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-white">❤️ Approche Humaine</h4>
              <p className="text-gray-200">Prévention du mal-être et solutions concrètes adaptées à chaque profil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 bg-black/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-300">
            <p>&copy; 2024 QVT Box - Intelligence Artificielle pour la Qualité de Vie ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
