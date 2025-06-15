
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BubbleComponent from '@/components/bubble/BubbleComponent';
import { BubbleData } from '@/types/qvtbox';
import { Calendar, TrendingUp, Heart, AlertTriangle, Gift, History } from 'lucide-react';

interface PersonalDashboardProps {
  userBubbles: BubbleData[];
  currentMood: BubbleData;
  alerts: Array<{ id: string; type: 'warning' | 'info'; message: string; }>;
  onNewEvaluation: () => void;
  onViewHistory: () => void;
  onExploreBoxes: () => void;
}

const PersonalDashboard: React.FC<PersonalDashboardProps> = ({
  userBubbles,
  currentMood,
  alerts,
  onNewEvaluation,
  onViewHistory,
  onExploreBoxes
}) => {
  const recentBubbles = userBubbles.slice(-7); // Dernières 7 évaluations
  
  const moodTrend = () => {
    if (recentBubbles.length < 2) return 'stable';
    const recent = recentBubbles.slice(-3);
    const avgIntensity = recent.reduce((sum, b) => sum + b.intensity, 0) / recent.length;
    const previousAvg = recentBubbles.slice(-6, -3).reduce((sum, b) => sum + b.intensity, 0) / 3;
    
    if (avgIntensity > previousAvg + 1) return 'improving';
    if (avgIntensity < previousAvg - 1) return 'declining';
    return 'stable';
  };

  const getTrendIcon = () => {
    const trend = moodTrend();
    switch (trend) {
      case 'improving': return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'declining': return <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />;
      default: return <TrendingUp className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      {/* Header avec bulle actuelle */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <BubbleComponent bubble={currentMood} interactive />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Ta bulle du moment
        </h1>
        <p className="text-gray-600">
          Comment te sens-tu aujourd'hui dans ta bulle ?
        </p>
      </div>

      {/* Alertes */}
      {alerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {alerts.map((alert) => (
            <Card key={alert.id} className={`border-l-4 ${
              alert.type === 'warning' ? 'border-orange-500 bg-orange-50' : 'border-blue-500 bg-blue-50'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className={`w-5 h-5 ${
                    alert.type === 'warning' ? 'text-orange-500' : 'text-blue-500'
                  }`} />
                  <span className="text-sm font-medium">{alert.message}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {/* Historique des bulles */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Tes dernières bulles</span>
              {getTrendIcon()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-end space-x-4 mb-6">
              {recentBubbles.map((bubble, index) => (
                <motion.div
                  key={bubble.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <BubbleComponent 
                    bubble={{
                      ...bubble,
                      size: 'small'
                    }}
                  />
                  <span className="text-xs text-gray-500">
                    {new Date(bubble.timestamp).toLocaleDateString('fr-FR', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </motion.div>
              ))}
            </div>
            <Button 
              variant="outline" 
              onClick={onViewHistory}
              className="w-full"
            >
              <History className="w-4 h-4 mr-2" />
              Voir tout l'historique
            </Button>
          </CardContent>
        </Card>

        {/* Actions rapides */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <span>Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={onNewEvaluation}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Nouvelle évaluation
              </Button>
              <Button 
                variant="outline" 
                onClick={onExploreBoxes}
                className="w-full"
              >
                <Gift className="w-4 h-4 mr-2" />
                Explorer les box
              </Button>
            </CardContent>
          </Card>

          {/* Recommandation du jour */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-lg">💡 Conseil du jour</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Prends 5 minutes pour respirer profondément et te reconnecter à tes sensations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
