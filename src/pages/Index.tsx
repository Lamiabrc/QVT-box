
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Building2, Brain, Shield, Users, Heart, Star, Sparkles, Zap, Package, MapPin, Smartphone } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Crystal floating elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full animate-pulse shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full animate-bounce shadow-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full animate-ping shadow-2xl"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full animate-pulse shadow-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full animate-bounce shadow-lg"></div>
      </div>

      {/* Pure crystal particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse shadow-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/40 bg-white/80 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/1398cdff-61cf-4c6c-a073-6f67536dd04b.png" 
                  alt="QVT Box Logo" 
                  className="h-16 w-auto animate-pulse drop-shadow-lg"
                />
                {/* Bubble animation around logo */}
                <div className="absolute -inset-2 border-2 border-cyan-300/50 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  QVT Box
                </h1>
                <p className="text-sm text-gray-600 font-medium">Sortez de votre bulle, on veille sur vous ✨</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full border border-blue-200/50">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-800 font-semibold">100% Française 🇫🇷</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full border border-green-200/50">
                <Shield className="w-4 h-4 text-green-600 animate-pulse" />
                <span className="text-sm text-green-800 font-semibold">RGPD Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Character Animation */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        {/* Character coming out of bubble animation */}
        <div className="text-center mb-8 relative">
          <div className="relative inline-block">
            {/* Main bubble */}
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/60 to-blue-300/60 rounded-full animate-pulse shadow-2xl border-4 border-white/50"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-white/80 to-cyan-100/80 rounded-full animate-bounce shadow-inner"></div>
              
              {/* Character emerging */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-bounce">
                👋
              </div>
              
              {/* Bubble pop effect */}
              <div className="absolute -inset-4 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
              <div className="absolute -inset-8 border border-blue-300/20 rounded-full animate-pulse"></div>
            </div>
            
            {/* Speech bubble */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-cyan-200/50 animate-fade-in">
              <p className="text-sm font-medium text-gray-700">Bienvenue ! 🌟</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-cyan-200/50"></div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              L'IA au service de votre
            </span>
            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-cyan-500 via-blue-600 to-primary bg-clip-text text-transparent drop-shadow-sm">
              Qualité de Vie ✨
            </span>
          </h2>
          
          {/* Phygital concept highlight */}
          <div className="mb-8 p-6 bg-gradient-to-r from-white/70 to-cyan-50/70 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Package className="w-8 h-8 text-primary animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Concept Phygital Innovant
              </h3>
              <Smartphone className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              🇫🇷 <strong>Box 100% française</strong> alliant intelligence artificielle et expérience tangible. 
              Du digital au physique, une approche complète pour votre bien-être !
            </p>
          </div>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            🚀 Prévenez le mal-être et recevez des recommandations personnalisées grâce à notre IA avancée. 
            Deux univers dédiés pour accompagner entreprises et familles dans leur bien-être quotidien.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-cyan-200/50 shadow-lg">
              <Sparkles className="w-5 h-5 text-primary animate-spin" />
              <span className="font-semibold text-gray-700">Questionnaires intelligents</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-blue-200/50 shadow-lg">
              <Zap className="w-5 h-5 text-secondary animate-pulse" />
              <span className="font-semibold text-gray-700">Recommandations IA</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-cyan-200/50 shadow-lg">
              <Star className="w-5 h-5 text-accent animate-bounce" />
              <span className="font-semibold text-gray-700">Analytics avancés</span>
            </div>
          </div>
        </div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Entreprise Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-primary/30 hover:border-primary/60 cursor-pointer transform hover:-translate-y-6 bg-gradient-to-br from-white/80 to-primary/5 backdrop-blur-sm"
                onClick={() => navigate('/auth')}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-primary/20">
                  <Building2 className="w-12 h-12 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  💼 Espace Entreprise
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Dédié aux RH, managers et salariés. Mesurez et améliorez la QVT grâce à l'IA.
                </p>
                <ul className="text-sm text-gray-600 space-y-3 mb-8">
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span>📊 Dashboard RH avec analytics</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span>📝 Questionnaires QVT intelligents</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span>🤖 Recommandations IA personnalisées</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span>📦 Box bien-être françaises</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-2xl py-6 text-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg">
                  🚀 Accéder à l'espace Entreprise
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Famille Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-secondary/30 hover:border-secondary/60 cursor-pointer transform hover:-translate-y-6 bg-gradient-to-br from-white/80 to-secondary/5 backdrop-blur-sm"
                onClick={() => navigate('/auth')}>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-secondary/20">
                  <Users className="w-12 h-12 text-secondary group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
                  👨‍👩‍👧‍👦 Espace Famille
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Accompagnement des adolescents et de leurs parents vers un meilleur bien-être.
                </p>
                <ul className="text-sm text-gray-600 space-y-3 mb-8">
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span>🎮 Interface ludique pour ados</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span>👨‍👩‍👧‍👦 Dashboard parent sécurisé</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span>💝 Box familiales adaptées</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span>🔒 Respect total de la vie privée</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white rounded-2xl py-6 text-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg">
                  🌟 Accéder à l'espace Famille
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-12 animate-fade-in">
            ✨ L'excellence française au service de votre bien-être ✨
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-blue-200/50 rounded-3xl mx-auto flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-gray-700">🛡️ Sécurité & Confidentialité</h4>
              <p className="text-gray-600 leading-relaxed">Données hébergées en France, RGPD compliant, consentement parental sécurisé.</p>
            </div>
            <div className="space-y-4 bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-cyan-200/50 rounded-3xl mx-auto flex items-center justify-center shadow-lg">
                <Brain className="w-10 h-10 text-secondary animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-gray-700">🧠 IA Française Avancée</h4>
              <p className="text-gray-600 leading-relaxed">Algorithmes développés en France pour des recommandations précises et culturellement adaptées.</p>
            </div>
            <div className="space-y-4 bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-pink-200/50 rounded-3xl mx-auto flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-accent animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-gray-700">❤️ Approche Bienveillante</h4>
              <p className="text-gray-600 leading-relaxed">Prévention du mal-être avec des solutions concrètes, éthiques et humaines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/30 bg-white/60 backdrop-blur-lg mt-16 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-gray-600 font-semibold">Conçu et développé en France 🇫🇷</span>
            </div>
            <p className="text-gray-500">&copy; 2024 QVT Box - Intelligence Artificielle française pour la Qualité de Vie ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
