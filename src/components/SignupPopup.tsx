
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { X, Sparkles, Heart, Building2, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignupPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUniverse, setSelectedUniverse] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // Afficher le popup après 3 secondes, seulement si c'est la première visite
    const hasSeenPopup = localStorage.getItem('hasSeenSignupPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenSignupPopup', 'true');
  };

  const handleUniverseSelect = (universe: string) => {
    setSelectedUniverse(universe);
    handleClose();
    
    switch (universe) {
      case 'famille':
        navigate('/famille');
        break;
      case 'entreprise':
        navigate('/entreprise/register');
        break;
      case 'coach':
        navigate('/coach-qvt');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogContent className="max-w-4xl p-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-2 border-blue-200/50 shadow-2xl">
            <div className="relative">
              {/* Bouton fermer */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 hover:bg-red-100 hover:text-red-600"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="p-8">
                <DialogHeader className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <img 
                        src="/images/logo-qvt.png" 
                        alt="QVT Box" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <DialogTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 mb-4">
                      🫧 Bienvenue sur QVT Box !
                    </DialogTitle>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Sortez de votre bulle et découvrez votre univers QVT personnalisé. 
                      Choisissez votre profil pour commencer votre parcours bien-être.
                    </p>
                  </motion.div>
                </DialogHeader>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Univers Famille */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="cursor-pointer h-full border-2 hover:border-teal-400 bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-xl transition-all duration-300"
                      onClick={() => handleUniverseSelect('famille')}
                    >
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                          👨‍👩‍👧‍👦 Famille
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 flex-1">
                          Accompagnement bienveillant pour toute la famille. 
                          Renforcez les liens et créez un environnement sain.
                        </p>
                        <div className="text-xs text-teal-600 font-medium">
                          ✨ Gratuit pour commencer
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Univers Entreprise */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="cursor-pointer h-full border-2 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300"
                      onClick={() => handleUniverseSelect('entreprise')}
                    >
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                          🏢 Entreprise
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 flex-1">
                          QVT nouvelle génération avec dashboard RH intelligent 
                          et solutions bien-être collaborateurs.
                        </p>
                        <div className="text-xs text-blue-600 font-medium">
                          🎯 Essai gratuit 30 jours
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Univers Coach */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className="cursor-pointer h-full border-2 hover:border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-all duration-300"
                      onClick={() => handleUniverseSelect('coach')}
                    >
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                          🎯 Coach QVT
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 flex-1">
                          Outils professionnels pour accompagner vos clients 
                          dans leur parcours bien-être.
                        </p>
                        <div className="text-xs text-amber-600 font-medium">
                          🚀 Bientôt disponible
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center mt-8"
                >
                  <p className="text-sm text-slate-500 mb-4">
                    Vous pourrez toujours changer d'univers plus tard
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={handleClose}
                    className="text-slate-600 hover:text-slate-800"
                  >
                    Je découvre d'abord le site
                  </Button>
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default SignupPopup;
