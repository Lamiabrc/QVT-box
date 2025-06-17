
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import BubbleComponent from './BubbleComponent';
import { BubbleData, EmotionalEvaluation } from '@/types/qvtbox';

interface BubbleEvaluationProps {
  onComplete: (evaluation: EmotionalEvaluation) => void;
  userId: string;
}

const BubbleEvaluation: React.FC<BubbleEvaluationProps> = ({ onComplete, userId }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>('');
  const [intensity, setIntensity] = useState<number>(5);
  const [comments, setComments] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<'emotion' | 'intensity' | 'comment'>('emotion');

  const emotions = [
    { key: 'happy', label: 'Heureux', color: '#FFD700' },
    { key: 'excited', label: 'Excité', color: '#FF6B6B' },
    { key: 'neutral', label: 'Neutre', color: '#95A5A6' },
    { key: 'confused', label: 'Confus', color: '#9B59B6' },
    { key: 'sad', label: 'Triste', color: '#3498DB' },
    { key: 'stressed', label: 'Stressé', color: '#E67E22' },
    { key: 'angry', label: 'En colère', color: '#E74C3C' }
  ];

  const intensityBubbles = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleEmotionSelect = (emotion: string, color: string) => {
    setSelectedEmotion(emotion);
    setCurrentStep('intensity');
  };

  const handleIntensitySelect = (value: number) => {
    setIntensity(value);
    setCurrentStep('comment');
  };

  const handleComplete = () => {
    const selectedEmotionData = emotions.find(e => e.key === selectedEmotion);
    
    const bubbleData: BubbleData = {
      id: `bubble_${Date.now()}`,
      emotion: selectedEmotion as any,
      intensity,
      color: selectedEmotionData?.color || '#95A5A6',
      size: intensity <= 3 ? 'small' : intensity <= 7 ? 'medium' : 'large',
      animation: intensity >= 8 ? 'bounce' : intensity >= 5 ? 'pulse' : 'float',
      timestamp: new Date(),
      emotionalState: intensity,
      mood: intensity > 6 ? 'good' : intensity > 4 ? 'neutral' : 'bad'
    };

    const evaluation: EmotionalEvaluation = {
      id: `eval_${Date.now()}`,
      userId,
      bubbleData,
      scores: { emotion_intensity: intensity },
      comment: comments,
      recommendations: [], // To be filled by AI
      timestamp: new Date()
    };

    onComplete(evaluation);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🫧 Comment te sens-tu dans ta bulle aujourd'hui ?
          </CardTitle>
          <p className="text-gray-600">Exprime ton état émotionnel en choisissant ta bulle</p>
        </CardHeader>

        <CardContent className="space-y-8">
          <AnimatePresence mode="wait">
            {/* Étape 1: Sélection de l'émotion */}
            {currentStep === 'emotion' && (
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
                      onClick={() => handleEmotionSelect(emotion.key, emotion.color)}
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
            )}

            {/* Étape 2: Sélection de l'intensité */}
            {currentStep === 'intensity' && (
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
                      onClick={() => handleIntensitySelect(value)}
                    >
                      <BubbleComponent
                        bubble={{
                          id: `intensity_${value}`,
                          emotion: selectedEmotion as any,
                          intensity: value,
                          color: emotions.find(e => e.key === selectedEmotion)?.color || '#95A5A6',
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
            )}

            {/* Étape 3: Commentaires */}
            {currentStep === 'comment' && (
              <motion.div
                key="comment"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Partage ce qui se passe dans ta bulle</h3>
                  <div className="flex justify-center mb-6">
                    <BubbleComponent
                      bubble={{
                        id: 'final',
                        emotion: selectedEmotion as any,
                        intensity,
                        color: emotions.find(e => e.key === selectedEmotion)?.color || '#95A5A6',
                        size: intensity <= 3 ? 'small' : intensity <= 7 ? 'medium' : 'large',
                        animation: 'bounce',
                        timestamp: new Date(),
                        emotionalState: intensity,
                        mood: intensity > 6 ? 'good' : intensity > 4 ? 'neutral' : 'bad'
                      }}
                    />
                  </div>
                </div>
                
                <Textarea
                  placeholder="Raconte-nous ce qui t'amène à te sentir ainsi... (optionnel)"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="min-h-32 text-lg border-2 border-purple-200 focus:border-purple-400 rounded-xl"
                />

                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep('intensity')}
                    className="px-8"
                  >
                    Retour
                  </Button>
                  <Button
                    onClick={handleComplete}
                    className="px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Terminer l'évaluation
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};

export default BubbleEvaluation;
