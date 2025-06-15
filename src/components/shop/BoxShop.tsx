import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BoxRecommendation, UniverseType } from '@/types/qvtbox';
import { Gift, Star, Users, Sparkles, ShoppingCart, Info } from 'lucide-react';

interface BoxShopProps {
  universe: UniverseType;
  recommendations: BoxRecommendation[];
  userRole?: string;
  onOrderBox: (boxId: string) => void;
  onViewBoxDetails: (boxId: string) => void;
}

const BoxShop: React.FC<BoxShopProps> = ({
  universe,
  recommendations,
  userRole,
  onOrderBox,
  onViewBoxDetails
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'Urgent';
      case 'high': return 'Priorité haute';
      case 'medium': return 'Priorité moyenne';
      case 'low': return 'Priorité basse';
      default: return 'Standard';
    }
  };

  const categories = [
    { id: 'all', label: 'Toutes', icon: Gift },
    { id: 'recommended', label: 'Recommandées pour toi', icon: Star },
    { id: 'prevention', label: 'Prévention', icon: Users },
    { id: 'communication', label: 'Communication', icon: Sparkles }
  ];

  const filteredBoxes = recommendations.filter(box => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'recommended') return box.aiConfidence > 0.8;
    return box.category === selectedCategory;
  });

  const topRecommendations = recommendations
    .sort((a, b) => b.aiConfidence - a.aiConfidence)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🎁 Boutique Box Bien-être
        </h1>
        <p className="text-gray-600">
          {universe === 'famille' 
            ? 'Des box personnalisées pour renforcer les liens familiaux'
            : 'Des solutions QVT adaptées à votre environnement professionnel'
          }
        </p>
      </div>

      {/* Recommandations IA */}
      {topRecommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                🤖 Recommandations IA pour {userRole}
              </h2>
              <p className="text-gray-600">
                Basées sur vos évaluations et votre profil
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {topRecommendations.map((box, index) => (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 border-purple-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{box.title}</CardTitle>
                      <Badge className={`${getUrgencyColor(box.urgency)} text-white`}>
                        {Math.round(box.aiConfidence * 100)}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{box.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Contenu :</h4>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {box.contents.slice(0, 3).map((content, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            <span>{content}</span>
                          </li>
                        ))}
                        {box.contents.length > 3 && (
                          <li className="text-purple-600">
                            +{box.contents.length - 3} autres éléments
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => onOrderBox(box.id)}
                        className="flex-1 bg-purple-600 hover:bg-purple-700"
                        size="sm"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Commander
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onViewBoxDetails(box.id)}
                      >
                        <Info className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Catalogue principal */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-4">
          {categories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id} className="flex items-center space-x-2">
              <cat.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{cat.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBoxes.map((box, index) => (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                        {box.title}
                      </CardTitle>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge className={`${getUrgencyColor(box.urgency)} text-white`}>
                          {getUrgencyLabel(box.urgency)}
                        </Badge>
                        {box.aiConfidence > 0.8 && (
                          <Badge variant="outline" className="text-xs">
                            IA: {Math.round(box.aiConfidence * 100)}%
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{box.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Contenu de la box :</h4>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {box.contents.map((content, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            <span>{content}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button 
                        onClick={() => onOrderBox(box.id)}
                        className="flex-1"
                        size="sm"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Commander
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onViewBoxDetails(box.id)}
                      >
                        <Info className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredBoxes.length === 0 && (
            <div className="text-center py-12">
              <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                Aucune box dans cette catégorie
              </h3>
              <p className="text-gray-400">
                Essayez une autre catégorie ou faites une nouvelle évaluation
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BoxShop;
