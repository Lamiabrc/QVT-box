
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Images uniques pour éviter les doublons
const uniqueBubbleContent = [
  { imageUrl: '/images/logo-qvt.png', link: '/concept-qvt', id: 'logo' },
  { imageUrl: '/images/bulle-collaborateur.png', link: '/entreprise/simulator', id: 'collaborateur' },
  { imageUrl: '/images/bulle-famille.jpg', link: '/famille', id: 'famille' },
  { imageUrl: '/images/qvteens-bubble.png', link: '/teens', id: 'teens' },
  { imageUrl: '/images/bulle-eval.png', link: '/simulators', id: 'eval' },
  { imageUrl: '/images/bulle-shop.png', link: '/teens/shop', id: 'shop' },
  { imageUrl: '/images/bulle-dashboard.jpg', link: '/entreprise/dashboard', id: 'dashboard' },
  { imageUrl: '/images/bulle-equipe.jpg', link: '/entreprise/simulator', id: 'equipe' },
];

const FloatingBubbles = () => {
  const [animatedBubbles, setAnimatedBubbles] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Créer des bulles uniques avec des contenus différents
    const bubbles = Array.from({ length: 12 }, (_, i) => {
      const content = uniqueBubbleContent[i % uniqueBubbleContent.length];
      const size = Math.random() * 60 + 50; // 50px to 110px pour éviter qu'elles soient trop grosses
      const amplitude = Math.random() * 30 + 20; // Amplitude réduite pour plus de fluidité
      return {
        id: `floating_${content.id}_${i}`, // ID unique basé sur le contenu
        size: size,
        left: `${Math.random() * 85 + 7.5}%`, // 7.5% to 92.5% pour éviter les bords
        delay: Math.random() * 30, // Délai étalé sur 30s
        duration: Math.random() * 25 + 25, // 25s to 50s pour plus de variété
        ...content,
        emotion: 'neutral',
        intensity: 5,
        color: 'rgba(255, 255, 255, 0.12)',
        animation: 'float',
        timestamp: new Date(),
        xKeyframes: [0, amplitude, -amplitude/2, amplitude/3, 0], // Mouvement plus naturel
      };
    });
    setAnimatedBubbles(bubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none z-0">
      <AnimatePresence>
        {animatedBubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              bottom: -bubble.size,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: `-${window.innerHeight + bubble.size * 2}px`,
              x: bubble.xKeyframes,
              opacity: [0, 0.6, 0.8, 0.6, 0],
              scale: [0.8, 1, 1.1, 1, 0.9],
              transition: {
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.1, 0.5, 0.9, 1],
              },
            }}
            whileHover={{ 
              scale: 1.3, 
              transition: { duration: 0.3 },
              opacity: 1
            }}
            whileTap={{ scale: 0.8 }}
            onClick={() => bubble.link && navigate(bubble.link)}
          >
            <div 
              className="w-full h-full rounded-full shadow-2xl backdrop-blur-sm border-2 border-white/20 flex items-center justify-center overflow-hidden relative group"
              style={{ 
                background: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`,
              }}
            >
              <img
                src={bubble.imageUrl}
                alt={`Bubble ${bubble.id}`}
                className="w-3/4 h-3/4 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent rounded-full pointer-events-none"></div>
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingBubbles;
