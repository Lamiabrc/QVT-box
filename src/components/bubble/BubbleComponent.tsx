
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BubbleData } from '@/types/qvtbox';

interface BubbleComponentProps {
  bubble: BubbleData;
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
}

const BubbleComponent: React.FC<BubbleComponentProps> = ({
  bubble,
  interactive = false,
  onClick,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getEmotionEmoji = (emotion: string) => {
    const emojis = {
      happy: "😊",
      neutral: "😐", 
      sad: "😢",
      stressed: "😰",
      excited: "🤩",
      angry: "😠",
      confused: "😕"
    };
    return emojis[emotion as keyof typeof emojis] || "😐";
  };

  const getSizeClass = (size: string) => {
    const sizes = {
      small: "w-16 h-16",
      medium: "w-24 h-24", 
      large: "w-32 h-32"
    };
    return sizes[size as keyof typeof sizes] || sizes.medium;
  };

  const getAnimationProps = () => {
    const baseProps = {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.8, opacity: 0 }
    };

    switch (bubble.animation) {
      case 'float':
        return {
          ...baseProps,
          animate: {
            ...baseProps.animate,
            y: [-5, 5, -5],
            transition: { 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse" as const
            }
          }
        };
      case 'pulse':
        return {
          ...baseProps,
          animate: {
            ...baseProps.animate,
            scale: [1, 1.1, 1],
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" as const
            }
          }
        };
      case 'bounce':
        return {
          ...baseProps,
          animate: {
            ...baseProps.animate,
            y: [0, -10, 0],
            transition: { 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop" as const
            }
          }
        };
      default:
        return baseProps;
    }
  };

  return (
    <motion.div
      className={`${getSizeClass(bubble.size)} rounded-full flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm border-2 border-white/30 ${className}`}
      style={{ 
        backgroundColor: bubble.color,
        boxShadow: `0 0 20px ${bubble.color}40`
      }}
      {...getAnimationProps()}
      whileHover={interactive ? { 
        scale: 1.1,
        boxShadow: `0 0 30px ${bubble.color}60`,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={interactive ? { scale: 0.95 } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-2xl mb-1">
          {getEmotionEmoji(bubble.emotion)}
        </div>
        {(interactive && isHovered) && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium text-white/90"
          >
            {bubble.intensity}/10
          </motion.div>
        )}
      </div>
      
      {interactive && (
        <motion.div
          className="absolute -inset-2 rounded-full border-2 border-white/50"
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { 
            scale: 1, 
            opacity: 1,
            rotate: 360
          } : { 
            scale: 0, 
            opacity: 0 
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default BubbleComponent;
