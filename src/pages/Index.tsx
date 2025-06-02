
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
  Target,
  Coffee,
  Star,
  Gift,
  Zap,
  Smile
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const interactiveBubbles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=120&h=120&fit=crop&crop=face&auto=format&q=80",
      alt: "Patronne - QVT Box",
      size: "w-32 h-32",
      bgGradient: "from-blue-500 to-cyan-500",
      icon: <Sparkles className="w-6 h-6 text-white" />,
      position: "top-8 left-1/2 transform -translate-x-1/2",
      animation: "animate-bounce",
      delay: "0s",
      route: '/entreprise/shop',
      tooltip: "🛍️ Découvrir la boutique entreprise",
      category: "entreprise"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      alt: "Manager RH",
      size: "w-28 h-28",
      bgGradient: "from-indigo-500 to-purple-500",
      icon: <Building2 className="w-5 h-5 text-white" />,
      position: "top-20 left-12",
      animation: "animate-pulse",
      delay: "0.3s",
      route: '/entreprise/dashboard',
      tooltip: "📊 Dashboard RH & Management",
      category: "entreprise"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=90&h=90&fit=crop&crop=face&auto=format&q=80",
      alt: "Équipe bien-être",
      size: "w-24 h-24",
      bgGradient: "from-green-500 to-teal-500",
      icon: <Heart className="w-4 h-4 text-white" />,
      position: "top-16 right-16",
      animation: "animate-bounce",
      delay: "0.6s",
      route: '/entreprise/shop',
      tooltip: "💚 Box bien-être équipe",
      category: "entreprise"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=110&h=110&fit=crop&crop=face&auto=format&q=80",
      alt: "Espace adolescent",
      size: "w-30 h-30",
      bgGradient: "from-pink-500 to-rose-500",
      icon: <Users className="w-5 h-5 text-white" />,
      position: "top-72 left-20",
      animation: "animate-pulse",
      delay: "0.9s",
      route: '/teens/shop',
      tooltip: "🎮 Boutique ados & famille",
      category: "famille"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=95&h=95&fit=crop&crop=center&auto=format&q=80",
      alt: "Famille connectée",
      size: "w-26 h-26",
      bgGradient: "from-orange-500 to-red-500",
      icon: <Package className="w-4 h-4 text-white" />,
      position: "top-56 right-24",
      animation: "animate-bounce",
      delay: "1.2s",
      route: '/teens',
      tooltip: "👨‍👩‍👧‍👦 Espace famille",
      category: "famille"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=85&h=85&fit=crop&crop=face&auto=format&q=80",
      alt: "Détente au travail",
      size: "w-24 h-24",
      bgGradient: "from-yellow-500 to-amber-500",
      icon: <Coffee className="w-4 h-4 text-white" />,
      position: "top-44 left-8",
      animation: "animate-ping",
      delay: "0.4s",
      route: '/entreprise/shop',
      tooltip: "☕ Box détente & pause café",
      category: "entreprise"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=105&h=105&fit=crop&crop=center&auto=format&q=80",
      alt: "Motivation équipe",
      size: "w-28 h-28",
      bgGradient: "from-emerald-500 to-green-500",
      icon: <Star className="w-5 h-5 text-white" />,
      position: "top-12 right-32",
      animation: "animate-bounce",
      delay: "0.7s",
      route: '/entreprise/questionnaire',
      tooltip: "⭐ Évaluation motivation",
      category: "entreprise"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=75&h=75&fit=crop&crop=face&auto=format&q=80",
      alt: "Leadership féminin",
      size: "w-22 h-22",
      bgGradient: "from-cyan-500 to-blue-500",
      icon: <Zap className="w-4 h-4 text-white" />,
      position: "top-32 left-1/3",
      animation: "animate-pulse",
      delay: "1.1s",
      route: '/entreprise/dashboard',
      tooltip: "⚡ Leadership & management",
      category: "entreprise"
    }
  ];

  const handleBubbleClick = (route: string) => {
    console.log('Bulle cliquée, navigation vers:', route);
    navigate(route);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section avec bulles flottantes interactives */}
          <div className="text-center mb-16 relative overflow-hidden min-h-96">
            {/* Bulles flottantes interactives avec plus d'espace */}
            <div className="absolute inset-0 w-full h-full">
              {interactiveBubbles.map((bubble) => (
                <div
                  key={bubble.id}
                  className={`absolute ${bubble.position} ${bubble.animation} cursor-pointer group z-10`}
                  style={{ animationDelay: bubble.delay }}
                  onClick={() => handleBubbleClick(bubble.route)}
                  title={bubble.tooltip}
                >
                  <div className="relative transform transition-all duration-500 group-hover:scale-125 group-hover:z-20">
                    <div className={`${bubble.size} bg-gradient-to-br ${bubble.bgGradient} rounded-full opacity-90 shadow-xl flex items-center justify-center group-hover:opacity-100 group-hover:shadow-2xl transition-all duration-500 border-2 border-white/30 group-hover:border-white/60`}>
                      {bubble.image ? (
                        <img 
                          src={bubble.image}
                          alt={bubble.alt}
                          className={`w-full h-full rounded-full object-cover border-2 border-white`}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                          {bubble.icon}
                        </div>
                      )}
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse group-hover:animate-bounce shadow-lg">
                      {bubble.icon}
                    </div>
                    {/* Tooltip au survol */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-30 shadow-lg">
                      {bubble.tooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                    {/* Effet de pulsation pour indiquer la cliquabilité */}
                    <div className={`absolute inset-0 ${bubble.size} bg-gradient-to-br ${bubble.bgGradient} rounded-full opacity-0 group-hover:opacity-20 animate-ping`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              {/* Image principale de la patronne */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face&auto=format&q=80" 
                    alt="Lamia Brechet - Fondatrice QVT Box" 
                    className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => navigate('/entreprise')}
                    title="Découvrir l'espace entreprise"
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
                  Je suis Lamia Brechet, fondatrice de QVT Box. Je suis ravie de vous accueillir dans notre solution phygitale innovante qui allie 
                  intelligence artificielle et objets bien-être pour transformer votre quotidien 
                  professionnel et familial. <strong>Cliquez sur les bulles flottantes pour découvrir nos produits !</strong>
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

          {/* Message personnalisé de la fondatrice */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=120&h=120&fit=crop&crop=face&auto=format&q=80" 
                    alt="Lamia Brechet - Message de la fondatrice" 
                    className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      💬 Un message personnel de votre fondatrice
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "Après 15 ans d'expérience en entreprise, j'ai créé QVT Box pour répondre 
                      à un besoin essentiel : allier performance et bien-être. Notre mission est 
                      de vous accompagner, vous et vos équipes, vers un équilibre durable entre 
                      vie professionnelle et personnelle. Ensemble, construisons un avenir où 
                      chacun peut s'épanouir pleinement."
                    </p>
                    <p className="text-primary font-semibold mt-4">
                      — Lamia Brechet, Fondatrice & CEO
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
