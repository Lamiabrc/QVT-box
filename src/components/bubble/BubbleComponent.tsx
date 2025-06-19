
import React from 'react';
import { motion } from 'framer-motion';
import { BubbleData } from '@/types/qvtbox';

interface BubbleComponentProps {
  bubble: BubbleData;
  interactive?: boolean;
  onClick?: () => void;
}

const BubbleComponent: React.FC<BubbleComponentProps> = ({ 
  bubble, 
  interactive = false,
  onClick 
}) => {
  const getSizeClass = () => {
    switch (bubble.size) {
      case 'small': return 'w-12 h-12';
      case 'medium': return 'w-16 h-16';
      case 'large': return 'w-24 h-24';
      default: return 'w-16 h-16';
    }
  };

  const getEmotionImage = () => {
    const emotionImages: Record<string, string> = {
      happy: '/images/happy.png',
      sad: '/images/sad.png',
      excited: '/images/excited.png',
      anxious: '/images/anxious.png',
      neutral: '/images/qvtspirit.jpg',
      angry: '/images/anxious.png',
      stressed: '/images/filledeprime.jpg',
      confused: '/images/mentalhealth.png'
    };
    
    return emotionImages[bubble.emotion] || '/images/breakup.png';
  };

  const getAnimationProps = () => {
    switch (bubble.animation) {
      case 'bounce':
        return {
          animate: { y: [0, -10, 0] },
          transition: { duration: 1, repeat: Infinity }
        };
      case 'pulse':
        return {
          animate: { scale: [1, 1.1, 1] },
          transition: { duration: 2, repeat: Infinity }
        };
      case 'float':
        return {
          animate: { y: [0, -5, 0] },
          transition: { duration: 3, repeat: Infinity }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`${getSizeClass()} relative ${interactive ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.1 } : {}}
      {...getAnimationProps()}
    >
      <div
        className="w-full h-full rounded-full flex items-center justify-center shadow-lg"
        style={{ 
          backgroundColor: bubble.color,
          opacity: 0.1 + (bubble.intensity / 10) * 0.9
        }}
      >
        <img
          src={getEmotionImage()}
          alt={bubble.emotion}
          className="w-2/3 h-2/3 object-contain"
        />
      </div>
      <div 
        className="absolute inset-0 rounded-full border-2"
        style={{ borderColor: bubble.color }}
      />
    </motion.div>
  );
};

export default BubbleComponent;
