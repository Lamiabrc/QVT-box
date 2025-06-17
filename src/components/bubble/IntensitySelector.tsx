
import React from 'react';
import { motion } from 'framer-motion';
import BubbleComponent from './BubbleComponent';

interface IntensitySelectorProps {
  selectedEmotion: string;
  emotionColor: string;
  onIntensitySelect: (value: number) => void;
}

const IntensitySelector: React.FC<IntensitySelectorProps> = ({ 
  selectedEmotion, 
  emotionColor, 
  onIntensitySelect 
}) => {
  const intensityBubbles = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <motion.div
      key="intensity"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold text-center">À quel point ressens-tu cette émotion ?</h3>
      <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
        {intensityBubbles.map((value) => (
          <motion.div
            key={value}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => onIntensitySelect(value)}
          >
            <BubbleComponent
              bubble={{
                id: `intensity_${value}`,
                emotion: selectedEmotion as any,
                intensity: value,
                color: emotionColor,
                size: value <= 3 ? 'small' : value <= 7 ? 'medium' : 'large',
                animation: 'pulse',
                timestamp: new Date(),
                emotionalState: value,
                mood: value > 6 ? 'good' : value > 4 ? 'neutral' : 'bad'
              }}
              interactive
            />
            <div className="text-center mt-2 text-sm font-medium">{value}</div>
          </motion.div>
        ))}
      </div>
      <div className="text-center text-sm text-gray-600">
        1 = Très faible • 10 = Très intense
      </div>
    </motion.div>
  );
};

export default IntensitySelector;
