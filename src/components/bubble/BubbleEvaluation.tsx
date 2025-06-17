
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import BubbleComponent from './BubbleComponent';
import EmotionSelector from './EmotionSelector';
import IntensitySelector from './IntensitySelector';
import { BubbleData, EmotionalEvaluation } from '@/types/qvtbox';

interface BubbleEvaluationProps {
  onComplete: (evaluation: EmotionalEvaluation) => void;
  userId: string;
}

const BubbleEvaluation: React.FC<BubbleEvaluationProps> = ({ onComplete, userId }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>('');
  const [selectedEmotionColor, setSelectedEmotionColor] = useState<string>('');
  const [intensity, setIntensity] = useState<number>(5);
  const [comment, setComment] = useState<string>('');
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

  const handleEmotionSelect = (emotion: string, color: string) => {
    setSelectedEmotion(emotion);
    setSelectedEmotionColor(color);
    setCurrentStep('intensity');
  };

  const handleIntensitySelect = (value: number) => {
    setIntensity(value);
    setCurrentStep('comment');
  };

  const handleComplete = () => {
    const bubbleData: BubbleData = {
      id: `bubble_${Date.now()}`,
      emotion: selectedEmotion as any,
      intensity,
      color: selectedEmotionColor,
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
      comment,
      recommendations: [],
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
            {currentStep === 'emotion' && (
              <EmotionSelector 
                emotions={emotions}
                onEmotionSelect={handleEmotionSelect}
              />
            )}

            {currentStep === 'intensity' && (
              <IntensitySelector
                selectedEmotion={selectedEmotion}
                emotionColor={selectedEmotionColor}
                onIntensitySelect={handleIntensitySelect}
              />
            )}

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
                        color: selectedEmotionColor,
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
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
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
