
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { BubbleData, EmotionalEvaluation, MLDataPoint } from '@/types/qvtbox';
import { MessageCircle, Brain, Save, Sparkles } from 'lucide-react';

interface BubbleEvaluationWithMLProps {
  onEvaluationComplete: (evaluation: EmotionalEvaluation, mlData: MLDataPoint) => void;
  userId: string;
  userContext: any;
}

const BubbleEvaluationWithML: React.FC<BubbleEvaluationWithMLProps> = ({
  onEvaluationComplete,
  userId,
  userContext
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bubbleData, setBubbleData] = useState<BubbleData>({
    id: `eval_${Date.now()}`,
    emotion: 'neutral',
    intensity: 5,
    color: '#2196F3',
    size: 'large',
    animation: 'pulse',
    timestamp: new Date(),
    emotionalState: 5,
    mood: 'neutral'
  });
  
  const [scores, setScores] = useState<Record<string, number>>({
    energie: 5,
    stress: 5,
    satisfaction: 5,
    motivation: 5,
    relations: 5
  });
  
  const [comments, setComments] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const emotions = [
    { name: 'happy', emoji: '😊', color: '#4CAF50', label: 'Heureux/se' },
    { name: 'excited', emoji: '🤩', color: '#FF9800', label: 'Excité(e)' },
    { name: 'neutral', emoji: '😐', color: '#2196F3', label: 'Neutre' },
    { name: 'confused', emoji: '😕', color: '#9C27B0', label: 'Confus(e)' },
    { name: 'stressed', emoji: '😰', color: '#FF5722', label: 'Stressé(e)' },
    { name: 'sad', emoji: '😢', color: '#607D8B', label: 'Triste' },
    { name: 'angry', emoji: '😠', color: '#F44336', label: 'En colère' }
  ];

  const evaluationSteps = [
    {
      title: '🫧 Choisis ton état émotionnel',
      subtitle: 'Quelle bulle représente le mieux ton humeur actuelle ?'
    },
    {
      title: '🎯 Ajuste l\'intensité',
      subtitle: 'À quel point ressens-tu cette émotion ?'
    },
    {
      title: '📊 Évalue tes dimensions',
      subtitle: 'Note ces différents aspects de ton bien-être'
    },
    {
      title: '💬 Partage ton ressenti',
      subtitle: 'Explique-nous ce qui influence ton état actuel'
    }
  ];

  const handleEmotionSelect = (emotion: any) => {
    setBubbleData(prev => ({
      ...prev,
      emotion: emotion.name,
      color: emotion.color,
      animation: 'bounce'
    }));
  };

  const handleIntensityChange = (value: number[]) => {
    setBubbleData(prev => ({
      ...prev,
      intensity: value[0],
      emotionalState: value[0],
      mood: value[0] > 6 ? 'good' : value[0] > 4 ? 'neutral' : 'bad'
    }));
  };

  const handleScoreChange = (dimension: string, value: number[]) => {
    setScores(prev => ({
      ...prev,
      [dimension]: value[0]
    }));
  };

  const generateMLData = (): MLDataPoint => {
    const now = new Date();
    const avgScore = Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length;
    
    // Analyse des facteurs de risque basée sur les scores
    const riskFactors = [];
    if (scores.stress > 7) riskFactors.push('high_stress');
    if (scores.energie < 4) riskFactors.push('low_energy');
    if (scores.satisfaction < 4) riskFactors.push('low_satisfaction');
    if (scores.motivation < 4) riskFactors.push('low_motivation');
    if (scores.relations < 4) riskFactors.push('poor_relationships');

    return {
      timestamp: now,
      features: {
        emotionalScore: avgScore,
        textSentiment: comments.length > 0 ? Math.random() * 2 - 1 : 0, // Simulation NLP
        riskFactors,
        timeOfDay: now.getHours(),
        dayOfWeek: now.getDay()
      },
      label: avgScore > 6 ? 'positive' : avgScore > 4 ? 'neutral' : 'negative',
      confidence: 0.8,
      userId,
      evaluation: {
        id: bubbleData.id,
        userId,
        bubbleData,
        scores,
        comment: comments,
        timestamp: now,
        recommendations: []
      },
      userContext
    };
  };

  const handleSubmit = async () => {
    setIsAnalyzing(true);
    
    // Simulation d'analyse IA
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mlData = generateMLData();
    const evaluation: EmotionalEvaluation = {
      ...mlData.evaluation,
      aiAnalysis: `Analyse automatique : Niveau de bien-être ${mlData.features.emotionalScore > 6 ? 'bon' : mlData.features.emotionalScore > 4 ? 'moyen' : 'préoccupant'}. ${mlData.features.riskFactors.length > 0 ? `Facteurs d'attention détectés: ${mlData.features.riskFactors.join(', ')}.` : 'Aucun facteur de risque majeur détecté.'}`,
      recommendations: [] // Sera rempli par l'IA
    };
    
    setIsAnalyzing(false);
    onEvaluationComplete(evaluation, mlData);
  };

  const nextStep = () => {
    if (currentStep < evaluationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {evaluationSteps[currentStep].title}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {evaluationSteps[currentStep].subtitle}
        </p>
        
        {/* Progress bar */}
        <div className="flex space-x-2 justify-center mb-8">
          {evaluationSteps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-pink-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <Card className="shadow-xl border-2 border-pink-200/50">
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            {/* Étape 1: Sélection d'émotion */}
            {currentStep === 0 && (
              <motion.div
                key="emotions"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <div className="flex justify-center mb-8">
                  <BubbleComponent bubble={bubbleData} interactive />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {emotions.map((emotion) => (
                    <motion.button
                      key={emotion.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEmotionSelect(emotion)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        bubbleData.emotion === emotion.name
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{emotion.emoji}</div>
                      <div className="text-sm font-medium">{emotion.label}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Étape 2: Intensité */}
            {currentStep === 1 && (
              <motion.div
                key="intensity"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <div className="flex justify-center mb-8">
                  <BubbleComponent bubble={bubbleData} interactive />
                </div>
                
                <div className="space-y-6">
                  <Label className="text-lg font-semibold">Intensité : {bubbleData.intensity}/10</Label>
                  <Slider
                    value={[bubbleData.intensity]}
                    onValueChange={handleIntensityChange}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Très faible</span>
                    <span>Très intense</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Étape 3: Dimensions */}
            {currentStep === 2 && (
              <motion.div
                key="dimensions"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                {Object.entries(scores).map(([dimension, value]) => (
                  <div key={dimension} className="space-y-3">
                    <Label className="text-lg capitalize">
                      {dimension} : {value}/10
                    </Label>
                    <Slider
                      value={[value]}
                      onValueChange={(newValue) => handleScoreChange(dimension, newValue)}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                ))}
              </motion.div>
            )}

            {/* Étape 4: Commentaires */}
            {currentStep === 3 && (
              <motion.div
                key="comments"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800 font-semibold">Intelligence Artificielle</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Tes commentaires nous aident à mieux comprendre ton état et à personnaliser nos recommandations grâce au machine learning.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-lg font-semibold flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Raconte-nous ton ressenti (optionnel mais précieux)</span>
                  </Label>
                  <Textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Ex: Je me sens stressé(e) à cause des échéances au travail, mais j'ai hâte de retrouver ma famille ce soir..."
                    className="min-h-32"
                    maxLength={1000}
                  />
                  <div className="text-sm text-gray-500 text-right">
                    {comments.length}/1000 caractères
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <span>← Précédent</span>
            </Button>

            {currentStep < evaluationSteps.length - 1 ? (
              <Button
                onClick={nextStep}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <span>Suivant →</span>
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 flex items-center space-x-2"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Analyse IA en cours...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Terminer l'évaluation</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BubbleEvaluationWithML;
