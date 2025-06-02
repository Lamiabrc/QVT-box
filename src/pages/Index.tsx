
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Building2, 
  Users, 
  Shield, 
  Brain, 
  Heart, 
  Package, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section avec bulles flottantes multiples */}
          <div className="text-center mb-16 relative overflow-hidden">
            {/* Bulles flottantes avec différents personnages */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Bulle Patronne principale - centre haut */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-90 shadow-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=80&h=80&fit=crop&crop=face&auto=format&q=80" 
                      alt="Patronne accueillante" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Bulle Manager/RH - gauche */}
              <div className="absolute top-32 left-20 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-80 shadow-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=64&h=64&fit=crop&crop=face&auto=format&q=80" 
                      alt="Manager RH" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Building2 className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Bulle Travailleur - droite */}
              <div className="absolute top-20 right-16 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-75 shadow-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=56&h=56&fit=crop&crop=face&auto=format&q=80" 
                      alt="Équipe de travail" 
                      className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-ping">
                    <Heart className="w-2 h-2 text-white" />
                  </div>
                </div>
              </div>

              {/* Bulle Adolescent - gauche bas */}
              <div className="absolute top-60 left-32 animate-pulse" style={{ animationDelay: '1.5s' }}>
                <div className="relative">
                  <div className="w-18 h-18 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-85 shadow-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=72&h=72&fit=crop&crop=face&auto=format&q=80" 
                      alt="Adolescent" 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Bulle Famille - droite bas */}
              <div className="absolute top-52 right-28 animate-bounce" style={{ animationDelay: '2s' }}>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-80 shadow-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=64&h=64&fit=crop&crop=center&auto=format&q=80" 
                      alt="Espace famille" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                    <Package className="w-2 h-2 text-white" />
                  </div>
                </div>
              </div>

              {/* Bulles décoratives supplémentaires */}
              <div className="absolute bottom-20 left-16 w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute bottom-32 right-20 w-10 h-10 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2.5s' }}></div>
              <div className="absolute top-40 left-1/3 w-8 h-8 bg-gradient-to-br from-green-300 to-teal-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            </div>

            <div className="relative z-10">
              {/* Image principale de la patronne */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face&auto=format&q=80" 
                    alt="Patronne accueillante" 
                    className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white animate-fade-in"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-xl border border-white/50">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Bienvenue dans l'univers de votre{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Qualité de Vie
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Je suis ravie de vous accueillir dans notre solution phygitale innovante qui allie 
                  intelligence artificielle et objets bien-être pour transformer votre quotidien 
                  professionnel et familial.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-blue-500">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Box française 🇫🇷</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-purple-500">
                    <Brain className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">IA avancée 🤖</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border-l-4 border-green-500">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">RGPD sécurisé 🛡️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message personnalisé de la patronne */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=120&fit=crop&crop=face&auto=format&q=80" 
                    alt="Message de la fondatrice" 
                    className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      💬 Un message personnel pour vous
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "Après 15 ans d'expérience en entreprise, j'ai créé QVT Box pour répondre 
                      à un besoin essentiel : allier performance et bien-être. Notre mission est 
                      de vous accompagner, vous et vos équipes, vers un équilibre durable entre 
                      vie professionnelle et personnelle. Ensemble, construisons un avenir où 
                      chacun peut s'épanouir pleinement."
                    </p>
                    <p className="text-primary font-semibold mt-4">
                      — Marie Dubois, Fondatrice & CEO
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solutions Cards avec plus de couleurs */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Entreprise Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    🏢 Espace Entreprise
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Solution complète pour les RH, managers et salariés. 
                    Mesurez et améliorez la QVT grâce à l'IA.
                  </p>

                  <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>📊 Dashboard RH avec analytics</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>📝 Questionnaires QVT intelligents</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>🎯 Recommandations IA personnalisées</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>📦 Box bien-être françaises</span>
                    </li>
                  </ul>

                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl shadow-lg" 
                    onClick={() => navigate('/entreprise')}
                  >
                    Découvrir l'espace Entreprise
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Famille Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-secondary/50 bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    👨‍👩‍👧‍👦 Espace Famille
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Accompagnement des adolescents et de leurs parents 
                    vers un meilleur bien-être familial.
                  </p>

                  <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>🎮 Interface ludique pour ados</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>🛡️ Dashboard parent sécurisé</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>📦 Box familiales adaptées</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>🔒 Respect total de la vie privée</span>
                    </li>
                  </ul>

                  <Button 
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg"
                    onClick={() => navigate('/teens')}
                  >
                    Découvrir l'espace Famille
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Section avec plus de couleurs */}
          <section className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl opacity-30"></div>
            <div className="relative z-10 py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                ✨ Pourquoi choisir QVT Box ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🛡️ Sécurité & Confidentialité
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Données hébergées en France, RGPD compliant, 
                    consentement parental sécurisé.
                  </p>
                </div>

                <div className="text-center bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🤖 IA Française Avancée
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Algorithmes développés en France pour des recommandations 
                    précises et culturellement adaptées.
                  </p>
                </div>

                <div className="text-center bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ❤️ Approche Bienveillante
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Prévention du mal-être avec des solutions concrètes, 
                    éthiques et humaines.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  🚀 Prêt à améliorer votre qualité de vie ?
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl shadow-lg"
                    onClick={() => navigate('/auth')}
                  >
                    <Target className="w-5 h-5 mr-2" />
                    Commencer maintenant
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl"
                    onClick={() => navigate('/entreprise')}
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
