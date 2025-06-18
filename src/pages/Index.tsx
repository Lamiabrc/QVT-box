
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformSelector from "@/components/platform/PlatformSelector";
import FloatingBubbles from "@/components/bubble/FloatingBubbles";
import { PlatformProvider } from "@/hooks/usePlatform";
import { motion } from "framer-motion";
import { Star, Sparkles, Zap, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Images for floating bubbles
  const bubbleImages = [
    '/images/team qvt.jpg',
    '/images/qvt spirit.jpg',
    '/images/famille-connectee.png',
    '/images/equipe-bien-etre.png',
    '/images/capable.jpg',
    '/images/leadership femme.jpg',
    '/images/manager-rh.png',
    '/images/box equilibre.png',
    '/images/qvteen box.jpg',
    '/images/bulle-eval.png',
    '/images/box team.png',
    '/images/box bureau.png'
  ];

  return (
    <PlatformProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Enhanced Floating Bubbles with Images */}
        <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none z-0">
          {Array.from({ length: 15 }, (_, i) => {
            const size = Math.random() * 120 + 80; // 80px to 200px
            const image = bubbleImages[i % bubbleImages.length];
            const amplitude = Math.random() * 40 + 30;
            const delay = Math.random() * 25;
            const duration = Math.random() * 20 + 20;
            
            return (
              <motion.div
                key={`bubble_${i}`}
                className="absolute pointer-events-auto cursor-pointer"
                style={{
                  left: `${Math.random() * 90}%`,
                  width: size,
                  height: size,
                  bottom: -size,
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: `-${window.innerHeight + size * 2}px`,
                  x: [0, amplitude, -amplitude, 0],
                  opacity: [0, 0.8, 0.8, 0],
                  scale: [0.8, 1, 1, 0.8],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  ease: 'linear',
                  times: [0, 0.15, 0.85, 1],
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 0,
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  // Random navigation on bubble click
                  const routes = ['/entreprise', '/teens', '/concept-qvt', '/contact'];
                  const randomRoute = routes[Math.floor(Math.random() * routes.length)];
                  navigate(randomRoute);
                }}
              >
                <div 
                  className="w-full h-full rounded-full shadow-2xl border-4 border-white/30 overflow-hidden relative group"
                  style={{
                    background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <img 
                    src={image} 
                    alt="QVT Visual"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full"></div>
                  <motion.div
                    className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-3 h-3 text-blue-600" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <Header />
        
        {/* Hero Section Enhanced */}
        <section className="relative py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Hero Logo in Floating Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 0.8,
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="mb-8 relative"
            >
              <div className="w-40 h-40 mx-auto relative">
                <div 
                  className="w-full h-full rounded-full shadow-2xl border-4 border-white/50 overflow-hidden relative"
                  style={{
                    background: `linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))`,
                    backdropFilter: 'blur(15px)',
                  }}
                >
                  <img 
                    src="/images/logo-qvt.png" 
                    alt="QVT Platform Logo" 
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-full"></div>
                </div>
                {/* Floating sparkles around logo */}
                {Array.from({ length: 6 }, (_, i) => (
                  <motion.div
                    key={`sparkle_${i}`}
                    className="absolute w-3 h-3"
                    style={{
                      top: `${20 + Math.sin(i * Math.PI / 3) * 60}%`,
                      left: `${50 + Math.cos(i * Math.PI / 3) * 60}%`,
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.3, 1, 0.3],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-full h-full text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 leading-tight">
                QVT Platform
              </h1>
              
              {/* Animated subtitle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto mb-8 font-semibold leading-relaxed">
                  La plateforme française de référence pour améliorer la{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                    qualité de vie au travail
                  </span>{' '}
                  et en famille
                </p>
              </motion.div>
            </motion.div>

            {/* Feature Images in Floating Bubbles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            >
              {[
                '/images/team qvt.jpg',
                '/images/qvt spirit.jpg', 
                '/images/famille-connectee.png',
                '/images/equipe-bien-etre.png'
              ].map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: index % 2 === 0 ? 10 : -10,
                    y: -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div 
                    className="w-full h-32 rounded-2xl shadow-lg overflow-hidden border-3 border-white/40 relative"
                    style={{
                      background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Feature Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {[
                { icon: <Zap className="w-5 h-5" />, text: "🤖 Intelligence Artificielle", color: "from-blue-500 to-cyan-500" },
                { icon: <Star className="w-5 h-5" />, text: "📊 Analytics Avancés", color: "from-purple-500 to-pink-500" },
                { icon: <Heart className="w-5 h-5" />, text: "🇫🇷 Made in France", color: "from-green-500 to-blue-500" }
              ].map((tag, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${tag.color} text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl flex items-center space-x-3 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  {tag.icon}
                  <span className="relative z-10">{tag.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-16"
            >
              <Button
                size="lg"
                onClick={() => navigate('/concept-qvt')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin relative z-10" />
                <span className="relative z-10">Découvrir la magie QVT</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform relative z-10" />
              </Button>
            </motion.div>
          </div>

          {/* Enhanced floating decorative elements */}
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-30"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </section>

        {/* Platform Selector Enhanced */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 relative z-10"
        >
          <PlatformSelector />
        </motion.section>

        {/* Features Section Enhanced with Images in Bubbles */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-white via-blue-50 to-purple-50 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-8">
                Une technologie, deux univers
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Notre plateforme s'adapte à vos besoins spécifiques grâce à un système de segments intelligent
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: "🎯",
                  title: "Personnalisé",
                  description: "Chaque univers propose une expérience sur-mesure selon votre contexte",
                  gradient: "from-blue-500 to-cyan-500",
                  image: "/images/capable.jpg"
                },
                {
                  icon: "🔄",
                  title: "Évolutif",
                  description: "Activation et désactivation des fonctionnalités selon vos besoins",
                  gradient: "from-green-500 to-emerald-500",
                  image: "/images/leadership femme.jpg"
                },
                {
                  icon: "🚀",
                  title: "Performant",
                  description: "Une seule infrastructure pour deux expériences utilisateur optimales",
                  gradient: "from-purple-500 to-pink-500",
                  image: "/images/manager-rh.png"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                >
                  <div className="relative mb-6">
                    <div 
                      className="w-full h-32 rounded-2xl mb-4 overflow-hidden relative border-3 border-white/40"
                      style={{
                        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                    </div>
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mx-auto flex items-center justify-center text-2xl transform hover:rotate-12 transition-transform duration-300 absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">
                Des résultats qui parlent
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "10K+", label: "Utilisateurs actifs", icon: "👥" },
                { number: "95%", label: "Satisfaction client", icon: "⭐" },
                { number: "50+", label: "Entreprises partenaires", icon: "🏢" },
                { number: "24/7", label: "Support disponible", icon: "🚀" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </PlatformProvider>
  );
};

export default Index;
