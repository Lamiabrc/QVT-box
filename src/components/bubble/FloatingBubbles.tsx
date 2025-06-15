
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleComponent from '@/components/bubble/BubbleComponent';

const FloatingBubbles = () => {
  const [animatedBubbles, setAnimatedBubbles] = useState<any[]>([]);

  // Générer des bulles flottantes animées
  useEffect(() => {
    const bubbles = Array.from({ length: 25 }, (_, i) => ({
      id: `floating_${i}`,
      emotion: ['happy', 'excited', 'neutral'][Math.floor(Math.random() * 3)],
      intensity: Math.floor(Math.random() * 5) + 5,
      color: ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3', '#9C27B0'][Math.floor(Math.random() * 5)],
      size: ['small', 'medium', 'large'][Math.floor(Math.random() * 3)],
      animation: ['float', 'pulse'][Math.floor(Math.random() * 2)],
      timestamp: new Date(),
      position: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      },
      delay: Math.random() * 5
    }));
    setAnimatedBubbles(bubbles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <AnimatePresence>
          {animatedBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute opacity-20"
              style={{
                top: bubble.position.top,
                left: bubble.position.left,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.3,
                scale: 1,
                y: [-20, 20, -20],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  delay: bubble.delay,
                  ease: "easeInOut"
                }
              }}
            >
              <BubbleComponent bubble={bubble} />
            </motion.div>
          ))}
        </AnimatePresence>
    </div>
  );
};

export default FloatingBubbles;
