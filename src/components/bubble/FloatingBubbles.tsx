import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { useNavigate } from 'react-router-dom';

const bubbleContent = [
  { imageUrl: '/lovable-uploads/1487ccee-42cd-40a6-8a14-c02384e891be.jpg', link: '/auth' },
  { imageUrl: '/lovable-uploads/a4ecdc7a-c850-42e1-b650-f1c34a951345.png', link: '/entreprise/simulator' },
  { imageUrl: '/lovable-uploads/1398cdff-61cf-4c6c-a073-6f67536dd04b.png', link: '/famille' },
  { imageUrl: '/lovable-uploads/1487ccee-42cd-40a6-8a14-c02384e891be.jpg', link: '/auth/login' },
  { imageUrl: '/lovable-uploads/a4ecdc7a-c850-42e1-b650-f1c34a951345.png', link: '/qui-sommes-nous' },
  { imageUrl: '/lovable-uploads/1398cdff-61cf-4c6c-a073-6f67536dd04b.png', link: '/contact' },
];

const FloatingBubbles = () => {
  const [animatedBubbles, setAnimatedBubbles] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const bubbles = Array.from({ length: 20 }, (_, i) => {
      const content = bubbleContent[i % bubbleContent.length];
      const size = Math.random() * 60 + 40; // 40px to 100px
      const amplitude = Math.random() * 30 + 20; // Sideways wave amplitude from 20 to 50px
      return {
        id: `floating_${i}`,
        size: size,
        left: `${Math.random() * 95}%`,
        delay: Math.random() * 20,
        duration: Math.random() * 15 + 15, // 15s to 30s
        ...content,
        emotion: 'neutral',
        intensity: 5,
        color: 'rgba(255, 255, 255, 0.1)',
        animation: 'float',
        timestamp: new Date(),
        // Adding more points to the x-axis animation to create a wave-like motion
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
              opacity: [0, 0.9, 0.9, 0],
              transition: {
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.15, 0.85, 1],
              },
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => bubble.link && navigate(bubble.link)}
          >
            <BubbleComponent bubble={bubble} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingBubbles;
