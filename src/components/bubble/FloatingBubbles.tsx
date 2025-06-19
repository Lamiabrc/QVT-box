
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { useNavigate } from 'react-router-dom';

const bubbleContent = [
  { imageUrl: '/images/logo-qvt.png', link: '/concept-qvt' },
  { imageUrl: '/images/bulle-collaborateur.png', link: '/entreprise/simulator' },
  { imageUrl: '/images/bulle-famille.jpg', link: '/famille' },
  { imageUrl: '/images/qvteens-bubble.png', link: '/teens' },
  { imageUrl: '/images/bulle-eval.png', link: '/simulators' },
  { imageUrl: '/images/bulle-shop.png', link: '/teens/shop-v3' },
];

const FloatingBubbles = () => {
  const [animatedBubbles, setAnimatedBubbles] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const bubbles = Array.from({ length: 15 }, (_, i) => {
      const content = bubbleContent[i % bubbleContent.length];
      const size = Math.random() * 80 + 60; // 60px to 140px
      const amplitude = Math.random() * 40 + 30; // Sideways wave amplitude from 30 to 70px
      return {
        id: `floating_${i}`,
        size: size,
        left: `${Math.random() * 90 + 5}%`, // 5% to 95% to avoid edges
        delay: Math.random() * 25,
        duration: Math.random() * 20 + 20, // 20s to 40s
        ...content,
        emotion: 'neutral',
        intensity: 5,
        color: 'rgba(255, 255, 255, 0.15)',
        animation: 'float',
        timestamp: new Date(),
        xKeyframes: [0, amplitude, -amplitude, 0], 
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
              opacity: [0, 0.8, 0.8, 0],
              transition: {
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.15, 0.85, 1],
              },
            }}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => bubble.link && navigate(bubble.link)}
          >
            <div 
              className="w-full h-full rounded-full shadow-2xl backdrop-blur-sm border-2 border-white/30 flex items-center justify-center overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`,
              }}
            >
              <img
                src={bubble.imageUrl}
                alt="Bubble content"
                className="w-3/4 h-3/4 object-contain rounded-full"
                style={{
                  filter: 'brightness(1.1) contrast(1.1)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingBubbles;
