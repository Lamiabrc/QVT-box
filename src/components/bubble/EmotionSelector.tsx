
import React from 'react';
import { motion } from 'framer-motion';
import BubbleComponent from './BubbleComponent';

interface EmotionOption {
  key: string;
  label: string;
  color: string;
}

interface EmotionSelectorProps {
  emotions: EmotionOption[];
  onEmotionSelect: (emotion: string, color: string) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ emotions, onEmotionSelect }) => {
  return (
    <motion.div
      key="emotion"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-center">Quelle émotion ressens-tu ?</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {emotions.map((emotion) => (
          <motion.div
            key={emotion.key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => onEmotionSelect(emotion.key, emotion.color)}
          >
            <BubbleComponent
              bubble={{
                id: emotion.key,
                emotion: emotion.key as any,
                intensity: 5,
                color: emotion.color,
                size: 'medium',
                animation: 'float',
                timestamp: new Date(),
                emotionalState: 5,
                mood: 'neutral'
              }}
              interactive
            />
            <span className="text-sm font-medium text-gray-700">{emotion.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EmotionSelector;
