
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
  Gift2,
  Zap,
  Smile
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const interactiveBubbles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      alt: "Patronne accueillante",
      size: "w-24 h-24",
      bgGradient: "from-blue-400 to-cyan-400",
      icon: <Sparkles className="w-4 h-4 text-white" />,
      position: "top-10 left-1/2 transform -translate-x-1/2",
      animation: "animate-bounce",
      delay: "0s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Découvrir nos box premium"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=64&h=64&fit=crop&crop=face&auto=format&q=80",
      alt: "Manager RH",
      size: "w-20 h-20",
      bgGradient: "from-indigo-400 to-purple-400",
      icon: <Building2 className="w-3 h-3 text-white" />,
      position: "top-32 left-20",
      animation: "animate-pulse",
      delay: "0.5s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Solutions RH & Management"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=56&h=56&fit=crop&crop=face&auto=format&q=80",
      alt: "Équipe de travail",
      size: "w-18 h-18",
      bgGradient: "from-green-400 to-teal-400",
      icon: <Heart className="w-3 h-3 text-white" />,
      position: "top-20 right-16",
      animation: "animate-bounce",
      delay: "1s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Box bien-être équipe"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=72&h=72&fit=crop&crop=face&auto=format&q=80",
      alt: "Adolescent",
      size: "w-22 h-22",
      bgGradient: "from-pink-400 to-rose-400",
      icon: <Users className="w-3 h-3 text-white" />,
      position: "top-60 left-32",
      animation: "animate-pulse",
      delay: "1.5s",
      onClick: () => navigate('/teens/shop'),
      tooltip: "Espace ados & famille"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=64&h=64&fit=crop&crop=center&auto=format&q=80",
      alt: "Espace famille",
      size: "w-20 h-20",
      bgGradient: "from-orange-400 to-red-400",
      icon: <Package className="w-3 h-3 text-white" />,
      position: "top-52 right-28",
      animation: "animate-bounce",
      delay: "2s",
      onClick: () => navigate('/teens/shop'),
      tooltip: "Box famille personnalisée"
    },
    // Nouvelles bulles plus nombreuses
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=60&h=60&fit=crop&crop=face&auto=format&q=80",
      alt: "Bien-être",
      size: "w-16 h-16",
      bgGradient: "from-yellow-400 to-amber-400",
      icon: <Coffee className="w-2.5 h-2.5 text-white" />,
      position: "top-44 left-12",
      animation: "animate-ping",
      delay: "0.8s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Box détente & relaxation"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=68&h=68&fit=crop&crop=center&auto=format&q=80",
      alt: "Motivation",
      size: "w-19 h-19",
      bgGradient: "from-emerald-400 to-green-400",
      icon: <Star className="w-3 h-3 text-white" />,
      position: "top-16 right-32",
      animation: "animate-bounce",
      delay: "0.3s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Box motivation & énergie"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=56&h=56&fit=crop&crop=center&auto=format&q=80",
      alt: "Innovation",
      size: "w-17 h-17",
      bgGradient: "from-purple-400 to-violet-400",
      icon: <Gift2 className="w-2.5 h-2.5 text-white" />,
      position: "top-72 right-20",
      animation: "animate-pulse",
      delay: "1.2s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Box créativité & innovation"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=52&h=52&fit=crop&crop=face&auto=format&q=80",
      alt: "Leadership",
      size: "w-15 h-15",
      bgGradient: "from-cyan-400 to-blue-400",
      icon: <Zap className="w-2 h-2 text-white" />,
      position: "top-36 left-1/3",
      animation: "animate-bounce",
      delay: "0.7s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Box leadership"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=58&h=58&fit=crop&crop=face&auto=format&q=80",
      alt: "Communication",
      size: "w-16 h-16",
      bgGradient: "from-rose-400 to-pink-400",
      icon: <Smile className="w-2.5 h-2.5 text-white" />,
      position: "top-68 left-1/4",
      animation: "animate-ping",
      delay: "1.8s",
      onClick: () => navigate('/teens/shop'),
      tooltip: "Communication familiale"
    },
    // Bulles décoratives plus petites mais interactives
    {
      id: 11,
      image: null,
      alt: "Bonus",
      size: "w-12 h-12",
      bgGradient: "from-cyan-300 to-blue-300",
      icon: <Heart className="w-2 h-2 text-white" />,
      position: "bottom-20 left-16",
      animation: "animate-ping",
      delay: "0.3s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Surprise box"
    },
    {
      id: 12,
      image: null,
      alt: "Special",
      size: "w-14 h-14",
      bgGradient: "from-purple-300 to-pink-300",
      icon: <Sparkles className="w-2.5 h-2.5 text-white" />,
      position: "bottom-32 right-20",
      animation: "animate-bounce",
      delay: "2.5s",
      onClick: () => navigate('/teens/shop'),
      tooltip: "Édition limitée"
    },
    {
      id: 13,
      image: null,
      alt: "Premium",
      size: "w-10 h-10",
      bgGradient: "from-green-300 to-teal-300",
      icon: <Star className="w-2 h-2 text-white" />,
      position: "top-40 right-1/4",
      animation: "animate-pulse",
      delay: "1.2s",
      onClick: () => navigate('/entreprise/shop'),
      tooltip: "Collection premium"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section avec bulles flottantes interactives */}
          <div className="text-center mb-16 relative overflow-hidden">
            {/* Bulles flottantes interactives */}
            <div className="absolute inset-0 pointer-events-none">
              {interactiveBubbles.map((bubble) => (
                <div
                  key={bubble.id}
                  className={`absolute ${bubble.position} ${bubble.animation} cursor-pointer pointer-events-auto group`}
                  style={{ animationDelay: bubble.delay }}
                  onClick={bubble.onClick}
                  title={bubble.tooltip}
                >
                  <div className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:z-10">
                    <div className={`${bubble.size} bg-gradient-to-br ${bubble.bgGradient} rounded-full opacity-90 shadow-lg flex items-center justify-center group-hover:opacity-100 group-hover:shadow-2xl transition-all duration-300`}>
                      {bubble.image ? (
                        <img 
                          src={bubble.image}
                          alt={bubble.alt}
                          className={`${bubble.size.replace('w-', 'w-').replace('h-', 'h-').replace(/\d+/, (match) => String(parseInt(match) - 4))} rounded-full object-cover border-2 border-white`}
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                          {bubble.icon}
                        </div>
                      )}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse group-hover:animate-bounce">
                      {bubble.icon}
                    </div>
                    {/* Tooltip au survol */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {bubble.tooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                    </div>
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
                    alt="Patronne accueillante" 
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
                  Je suis ravie de vous accueillir dans notre solution phygitale innovante qui allie 
                  intelligence artificielle et objets bien-être pour transformer votre quotidien 
                  professionnel et familial. Cliquez sur les bulles pour découvrir nos produits !
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
