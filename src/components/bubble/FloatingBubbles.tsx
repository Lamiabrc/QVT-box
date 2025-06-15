
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { useNavigate } from 'react-router-dom';

const bubbleContent = [
  { imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=200&h=200&fit=crop&crop=entropy', link: '/auth' },
  { imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=200&h=200&fit=crop&crop=entropy', link: '/entreprise/simulator' },
  { imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=200&h=200&fit=crop&crop=entropy', link: '/famille' },
  { imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&h=200&fit=crop&crop=entropy', link: '/auth/login' },
  { imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=200&h=200&fit=crop&crop=entropy', link: '/qui-sommes-nous' },
  { imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=200&h=200&fit=crop&crop=entropy', link: '/contact' },
];

const FloatingBubbles = () => {
  const [animatedBubbles, setAnimatedBubbles] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const bubbles = Array.from({ length: 20 }, (_, i) => {
      const content = bubbleContent[i % bubbleContent.length];
      const size = Math.random() * 60 + 40; // 40px to 100px
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
      };
    });
    setAnimatedBubbles(bubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none">
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
              x: [0, Math.random() * 60 - 30, 0],
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
