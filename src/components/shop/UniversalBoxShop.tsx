
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Search, Filter, ShoppingCart, Eye, Star, Gift, Heart, CheckCircle, AlertTriangle } from 'lucide-react';
import { UniverseType, UserRole, BoxRecommendation, UserProfile } from '@/types/qvtbox';
import { familyBoxes } from '@/data/familyBoxes';
import { enterpriseBoxes } from '@/data/enterpriseBoxes';
import BubbleComponent from '@/components/bubble/BubbleComponent';

interface UniversalBoxShopProps {
  universe: UniverseType;
  userRole: UserRole;
  userProfile: UserProfile;
  aiRecommendations: BoxRecommendation[];
  onOrderBox: (boxId: string) => void;
  onViewBoxDetails: (boxId: string) => void;
}

const UniversalBoxShop: React.FC<UniversalBoxShopProps> = ({
  universe,
  userRole,
  userProfile,
  aiRecommendations,
  onOrderBox,
  onViewBoxDetails
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('recommended');

  // Catalogue complet basé sur l'univers
  const allBoxes = useMemo(() => {
    return universe === 'famille' ? familyBoxes : enterpriseBoxes;
  }, [universe]);

  // Filtrage des box
  const filteredBoxes = useMemo(() => {
    let boxes = activeTab === 'recommended' ? aiRecommendations : allBoxes;
    
    return boxes.filter(box => {
      const matchesSearch = box.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           box.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || box.category === selectedCategory;
      const matchesUrgency = selectedUrgency === 'all' || box.urgency === selectedUrgency;
      
      return matchesSearch && matchesCategory && matchesUrgency;
    });
  }, [allBoxes, aiRecommendations, activeTab, searchTerm, selectedCategory, selectedUrgency]);

  // Catégories disponibles
  const categories = useMemo(() => {
    const cats = new Set(allBoxes.map(box => box.category));
    return Array.from(cats);
  }, [allBoxes]);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'destructive';
      case 'high': return 'secondary';
      case 'medium': return 'default';
      case 'low': return 'outline';
      default: return 'default';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return <AlertTriangle className="w-3 h-3" />;
      case 'high': return <Star className="w-3 h-3" />;
      default: return <CheckCircle className="w-3 h-3" />;
    }
  };

  const getBoxMoodColor = (category: string) => {
    const colorMap: Record<string, string> = {
      communication: '#3B82F6',
      soutien: '#10B981',
      relation: '#8B5CF6',
      activités: '#F59E0B',
      inclusivité: '#EC4899',
      harmonie: '#06B6D4',
      télétravail: '#6366F1',
      environnement: '#84CC16',
      transition: '#F97316',
      récupération: '#EF4444',
      mobilité: '#14B8A6',
      collectif: '#A855F7',
      équilibre: '#059669',
      évolution: '#DC2626',
      excellence: '#7C2D12'
    };
    return colorMap[category] || '#6B7280';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header avec bulles */}
      <div className="relative py-16 px-4">
        <div className="absolute top-4 left-4">
          <BubbleComponent
            bubble={{
              id: 'shop_mood_1',
              emotion: 'happy',
              intensity: 8,
              color: '#4CAF50',
              size: 'large',
              animation: 'float',
              timestamp: new Date(),
              emotionalState: 8,
              mood: 'excellent'
            }}
          />
        </div>
        <div className="absolute top-8 right-8">
          <BubbleComponent
            bubble={{
              id: 'shop_mood_2',
              emotion: 'excited',
              intensity: 7,
              color: '#FF6B6B',
              size: 'medium',
              animation: 'pulse',
              timestamp: new Date(),
              emotionalState: 7,
              mood: 'good'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            🛒 QVT Box Shop
            <span className="block text-2xl md:text-3xl text-slate-600 mt-2">
              {universe === 'famille' ? '👨‍👩‍👧‍👦 Univers Famille' : '🏢 Univers Entreprise'}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Découvrez nos box bien-être personnalisées, 
            sélectionnées par notre IA selon votre profil et vos besoins actuels.
          </motion.p>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher une box..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedUrgency} onValueChange={setSelectedUrgency}>
                <SelectTrigger>
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Urgence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les urgences</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">Élevée</SelectItem>
                  <SelectItem value="medium">Moyenne</SelectItem>
                  <SelectItem value="low">Faible</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-blue-50">
                  {filteredBoxes.length} box{filteredBoxes.length > 1 ? 'es' : ''}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Onglets et contenu */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-white shadow-lg">
            <TabsTrigger value="recommended" className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Recommandées IA</span>
              <Badge variant="secondary">{aiRecommendations.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="catalog" className="flex items-center space-x-2">
              <Gift className="w-4 h-4" />
              <span>Catalogue complet</span>
              <Badge variant="outline">{allBoxes.length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-6">
            {aiRecommendations.length === 0 ? (
              <Card className="text-center p-12">
                <div className="space-y-4">
                  <Sparkles className="w-16 h-16 text-gray-400 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-600">
                    Aucune recommandation IA disponible
                  </h3>
                  <p className="text-gray-500">
                    Complétez votre évaluation pour recevoir des recommandations personnalisées
                  </p>
                </div>
              </Card>
            ) : (
              <BoxGrid 
                boxes={filteredBoxes} 
                getUrgencyColor={getUrgencyColor}
                getUrgencyIcon={getUrgencyIcon}
                getBoxMoodColor={getBoxMoodColor}
                onOrderBox={onOrderBox}
                onViewBoxDetails={onViewBoxDetails}
                isRecommended={true}
              />
            )}
          </TabsContent>

          <TabsContent value="catalog" className="space-y-6">
            <BoxGrid 
              boxes={filteredBoxes} 
              getUrgencyColor={getUrgencyColor}
              getUrgencyIcon={getUrgencyIcon}
              getBoxMoodColor={getBoxMoodColor}
              onOrderBox={onOrderBox}
              onViewBoxDetails={onViewBoxDetails}
              isRecommended={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Composant Grid réutilisable
interface BoxGridProps {
  boxes: BoxRecommendation[];
  getUrgencyColor: (urgency: string) => string;
  getUrgencyIcon: (urgency: string) => React.ReactNode;
  getBoxMoodColor: (category: string) => string;
  onOrderBox: (boxId: string) => void;
  onViewBoxDetails: (boxId: string) => void;
  isRecommended: boolean;
}

const BoxGrid: React.FC<BoxGridProps> = ({
  boxes,
  getUrgencyColor,
  getUrgencyIcon,
  getBoxMoodColor,
  onOrderBox,
  onViewBoxDetails,
  isRecommended
}) => {
  if (boxes.length === 0) {
    return (
      <Card className="text-center p-12">
        <div className="space-y-4">
          <Search className="w-16 h-16 text-gray-400 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-600">
            Aucune box trouvée
          </h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={getUrgencyColor(box.urgency) as any}
                      className="flex items-center space-x-1"
                    >
                      {getUrgencyIcon(box.urgency)}
                      <span className="capitalize">{box.urgency}</span>
                    </Badge>
                    {isRecommended && (
                      <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700">
                        <Sparkles className="w-3 h-3 mr-1" />
                        IA {Math.round(box.aiConfidence * 100)}%
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-lg font-bold leading-tight">
                  {box.title}
                </CardTitle>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {box.description}
                </p>
                
                <div className="flex items-center space-x-2 mt-2">
                  <Badge 
                    variant="outline" 
                    style={{ 
                      borderColor: getBoxMoodColor(box.category),
                      color: getBoxMoodColor(box.category)
                    }}
                  >
                    {box.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">
                      📦 Contenu de la box :
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {box.contents.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {box.contents.length > 3 && (
                        <li className="text-gray-400 italic">
                          +{box.contents.length - 3} autres éléments...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onViewBoxDetails(box.id)}
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Détails
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => onOrderBox(box.id)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default UniversalBoxShop;
