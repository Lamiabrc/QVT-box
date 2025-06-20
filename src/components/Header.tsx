
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Users, User, LogOut, Shield, Sparkles, Heart } from 'lucide-react';
import { useSecureAuth } from '@/hooks/useSecureAuth';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import BubbleComponent from '@/components/bubble/BubbleComponent';

const Header = () => {
  const {
    user,
    isAdmin
  } = useSecureAuth();
  const navigate = useNavigate();

  // Vérifier si l'utilisateur est lamia.brechet@outlook.fr
  const isSuperAdmin = user?.email === 'lamia.brechet@outlook.fr';
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="bg-gradient-to-r from-slate-50 via-white to-blue-50 border-b border-slate-200/50 shadow-lg backdrop-blur-sm relative overflow-hidden"
    >
      {/* Effet de background animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo avec bulle et effets */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                {/* Bulle logo avec image centrée */}
                <motion.div 
                  animate={{
                    y: [-2, 2, -2],
                    rotate: [0, 1, -1, 0]
                  }} 
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} 
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-2 border-white/30 shadow-xl flex items-center justify-center overflow-hidden relative"
                >
                  <img 
                    src="/images/logo-qvt.png" 
                    alt="QVT Box Logo" 
                    className="w-12 h-12 object-contain rounded-full group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                </motion.div>
                
                {/* Bulle émotionnelle du logo */}
                <div className="absolute -top-1 -right-1">
                  <BubbleComponent bubble={{
                    id: 'logo_bubble',
                    emotion: 'excited',
                    intensity: 8,
                    color: '#3B82F6',
                    size: 'small',
                    animation: 'pulse',
                    timestamp: new Date(),
                    emotionalState: 8,
                    mood: 'excellent'
                  }} />
                </div>
              </div>
              
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <motion.h1 
                  className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600" 
                  whileHover={{ scale: 1.02 }}
                >
                  QVT Box
                </motion.h1>
                <motion.p 
                  className="text-sm text-slate-600 font-medium" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.3 }}
                >
                  🫧 Sortir de sa bulle • Qualité de Vie
                </motion.p>
              </div>
            </Link>
          </motion.div>

          {/* Navigation avec effets */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/entreprise" className="group flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-all duration-300 relative">
                <div className="relative">
                  <Building2 className="h-5 w-5 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <BubbleComponent bubble={{
                      id: 'enterprise_nav_bubble',
                      emotion: 'happy',
                      intensity: 6,
                      color: '#3B82F6',
                      size: 'small',
                      animation: 'float',
                      timestamp: new Date(),
                      emotionalState: 6,
                      mood: 'good'
                    }} />
                  </div>
                </div>
                <span className="font-semibold group-hover:underline decoration-blue-500 decoration-2 underline-offset-4">
                  🏢 Entreprise
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/famille" className="group flex items-center space-x-2 text-slate-700 hover:text-teal-600 transition-all duration-300 relative">
                <div className="relative">
                  <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1">
                    <BubbleComponent bubble={{
                      id: 'family_nav_bubble',
                      emotion: 'happy',
                      intensity: 7,
                      color: '#0F766E',
                      size: 'small',
                      animation: 'bounce',
                      timestamp: new Date(),
                      emotionalState: 7,
                      mood: 'excellent'
                    }} />
                  </div>
                </div>
                <span className="font-semibold group-hover:underline decoration-teal-500 decoration-2 underline-offset-4">
                  👨‍👩‍👧‍👦 Famille & Teens
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/coach-qvt" className="group flex items-center space-x-2 text-slate-700 hover:text-amber-600 transition-all duration-300">
                <Users className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold group-hover:underline decoration-amber-500 decoration-2 underline-offset-4">
                  🎯 Coach QVT
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/concept-qvt" className="group flex items-center space-x-2 text-slate-700 hover:text-purple-600 transition-all duration-300">
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold group-hover:underline decoration-purple-500 decoration-2 underline-offset-4">✨ Concept QVT</span>
              </Link>
            </motion.div>
          </nav>

          {/* Actions utilisateur avec effets */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {isSuperAdmin && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/admin">
                      <Button variant="outline" size="sm" className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 shadow-md">
                        <Shield className="h-4 w-4 mr-2" />
                        👑 Admin Principal
                      </Button>
                    </Link>
                  </motion.div>
                )}
                {isAdmin && !isSuperAdmin && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/entreprise/admin-dashboard">
                      <Button variant="outline" size="sm" className="shadow-md">
                        <Shield className="h-4 w-4 mr-2" />
                        🛡️ Admin
                      </Button>
                    </Link>
                  </motion.div>
                )}
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center space-x-2 hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                    <LogOut className="h-4 w-4" />
                    <span>🚪 Déconnexion</span>
                  </Button>
                </motion.div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/auth">
                    <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md">
                      <User className="h-4 w-4 mr-2" />
                      🔐 Connexion
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/auth/register">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Sparkles className="h-4 w-4 mr-2" />
                      🚀 S'inscrire
                    </Button>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ligne décorative animée */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500" 
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ duration: 1, delay: 0.5 }} 
      />
    </motion.header>
  );
};

export default Header;
