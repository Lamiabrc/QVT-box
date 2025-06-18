
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

  return (
    <PlatformProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Floating Bubbles Background */}
        <FloatingBubbles />
        
        <Header />
        
        {/* Hero Section Enhanced */}
        <section className="relative py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/images/logo-qvt.png" 
                alt="QVT Platform Logo" 
                className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl"
              />
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

            {/* Feature Images Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            >
              <motion.img 
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="/images/team qvt.jpg" 
                alt="Équipe QVT" 
                className="w-full h-24 object-cover rounded-2xl shadow-lg"
              />
              <motion.img 
                whileHover={{ scale: 1.1, rotate: -5 }}
                src="/images/qvt spirit.jpg" 
                alt="Esprit QVT" 
                className="w-full h-24 object-cover rounded-2xl shadow-lg"
              />
              <motion.img 
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="/images/famille-connectee.png" 
                alt="Famille connectée" 
                className="w-full h-24 object-cover rounded-2xl shadow-lg"
              />
              <motion.img 
                whileHover={{ scale: 1.1, rotate: -5 }}
                src="/images/equipe-bien-etre.png" 
                alt="Équipe bien-être" 
                className="w-full h-24 object-cover rounded-2xl shadow-lg"
              />
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
                  className={`bg-gradient-to-r ${tag.color} text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl flex items-center space-x-3`}
                >
                  {tag.icon}
                  <span>{tag.text}</span>
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
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl group"
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
                Découvrir la magie QVT
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
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

        {/* Features Section Enhanced with Images */}
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
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative mb-6">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-32 object-cover rounded-2xl mb-4"
                    />
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mx-auto flex items-center justify-center text-2xl transform hover:rotate-12 transition-transform duration-300 absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg`}>
                      {feature.icon}
                    </div>
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
