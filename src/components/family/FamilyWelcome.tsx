
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Sparkles } from 'lucide-react';

interface FamilyWelcomeProps {
  onStartEvaluation: () => void;
  onViewSpace: () => void;
}

const FamilyWelcome: React.FC<FamilyWelcomeProps> = ({
  onStartEvaluation,
  onViewSpace
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <img 
          src="/images/bulle-famille.jpg" 
          alt="Famille heureuse" 
          className="w-32 h-32 mx-auto rounded-full object-cover mb-6 shadow-lg"
        />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Bienvenue dans votre espace famille
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Un espace bienveillant pour prendre soin du bien-être de toute votre famille
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer" onClick={onStartEvaluation}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <CardTitle className="text-xl text-gray-800">
                Évaluation bien-être
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Exprimez vos émotions à travers notre système de bulles interactif
              </p>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                Commencer l'évaluation
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer" onClick={onViewSpace}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-800">
                Espace famille
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Accédez au tableau de bord partagé de votre famille
              </p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Voir l'espace famille
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-6">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Votre bien-être, notre priorité
            </h3>
            <p className="text-gray-600">
              Ensemble, créons un environnement familial épanouissant et bienveillant
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default FamilyWelcome;
