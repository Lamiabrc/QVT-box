import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { BoxRecommendation, UniverseType, UserProfile } from '@/types/qvtbox';
import { Gift, Star, Users, Sparkles, ShoppingCart, Info, Brain, Heart, Building2 } from 'lucide-react';
import BubbleComponent from '@/components/bubble/BubbleComponent';

interface UniversalBoxShopProps {
  universe: UniverseType;
  userRole?: string;
  userProfile?: UserProfile;
  aiRecommendations?: BoxRecommendation[];
  onOrderBox: (boxId: string) => void;
  onViewBoxDetails: (boxId: string) => void;
}

const UniversalBoxShop: React.FC<UniversalBoxShopProps> = ({
  universe,
  userRole,
  userProfile,
  aiRecommendations = [],
  onOrderBox,
  onViewBoxDetails
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ai-recommendations');
  const [searchQuery, setSearchQuery] = useState('');
  const [boxes, setBoxes] = useState<BoxRecommendation[]>([]);

  // Simulation des 30 box selon l'univers
  const teensBoxes: BoxRecommendation[] = [
    {
      id: "teen_school_stress",
      title: "📚 Décompression Scolaire",
      description: "Outils anti-stress pour mieux gérer la pression scolaire et les examens",
      category: "scolaire",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.95,
      urgency: "high",
      contents: ["Balle anti-stress personnalisable", "Guide techniques respiration", "Planning révisions zen", "Cartes motivation examens", "Playlist relaxation étude", "Tisane détente ado", "Marque-pages citations", "Journal réussites scolaires"]
    },
    {
      id: "teen_emotions",
      title: "🌈 Humeur & Gestion des Émotions",
      description: "Kit complet pour comprendre et apprivoiser ses émotions d'adolescent",
      category: "emotions",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.9,
      urgency: "high",
      contents: ["Roue des émotions interactive", "Carnet de bord émotionnel", "Cartes situations + réactions", "Bracelet mood ring", "Guide parent : comprendre émotions ado", "App mood tracker", "Techniques régulation émotionnelle", "Vidéos témoignages ados"]
    },
    {
      id: "teen_creativity",
      title: "🎨 Expression & Créativité",
      description: "Libère ta créativité et exprime-toi à travers l'art et l'écriture",
      category: "creativite",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.8,
      urgency: "medium",
      contents: ["Carnet dessin et écriture", "Set feutres et crayons", "Stickers créatifs", "Guide activités artistiques", "Défis créatifs hebdomadaires", "Accès plateforme création", "Tutoriels DIY ados", "Kit scrapbooking personnel"]
    },
    {
      id: "teen_sleep",
      title: "😴 Sommeil & Récupération",
      description: "Améliore la qualité de ton sommeil pour être en forme",
      category: "sommeil",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.85,
      urgency: "medium",
      contents: ["Masque sommeil personnalisé", "Spray oreiller relaxant", "Guide sommeil ados", "Veilleuse sons nature", "Planning sommeil + tracker", "Tisane bonne nuit", "Techniques relaxation pré-sommeil", "Livre audio conte moderne"]
    },
    {
      id: "teen_body_confidence",
      title: "💪 Corps & Estime de Soi",
      description: "Développe une relation positive avec ton corps et renforce ta confiance",
      category: "estime",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.9,
      urgency: "high",
      contents: ["Miroir affirmations positives", "Guide nutrition équilibrée ado", "Cartes exercices bien-être", "Journal gratitude corps", "Vidéos yoga ados", "Produits soin naturels", "Guide diversité corporelle", "Activités sport plaisir"]
    },
    {
      id: "teen_friendships",
      title: "👫 Relations & Amitiés",
      description: "Construis des amitiés saines et gère les conflits relationnels",
      category: "social",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.85,
      urgency: "medium",
      contents: ["Cartes communication amicale", "Guide résolution conflits", "Activités groupe amis", "Journal moments amitié", "Techniques écoute active", "Gestion réseaux sociaux", "Bracelets amitié DIY", "Vidéos témoignages amitié"]
    },
    {
      id: "teen_bullying",
      title: "🛡️ Harcèlement / Isolement",
      description: "Ressources et soutien face au harcèlement et à l'isolement",
      category: "protection",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.95,
      urgency: "urgent",
      contents: ["Guide urgence anti-harcèlement", "Cartes contacts ressources", "Techniques confiance en soi", "Journal libération émotionnelle", "Hotline jeunes 24h/24", "Vidéos témoignages conseils", "Kit soutien psychologique", "Protocole alerte famille"]
    },
    {
      id: "teen_transitions",
      title: "🔄 Changements / Transitions",
      description: "Accompagnement lors des grandes transitions de la vie d'ado",
      category: "transition",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.8,
      urgency: "medium",
      contents: ["Guide transitions adolescentes", "Carnet projets avenir", "Cartes gestion changement", "Journal passage âge adulte", "Techniques adaptation", "Vidéos orientation scolaire/pro", "Kit découverte de soi", "Planning objectifs personnels"]
    },
    {
      id: "teen_parent_relationship",
      title: "👨‍👩‍👧‍👦 Parent-Ado (relationnel)",
      description: "Améliore la communication et les relations avec tes parents",
      category: "famille",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.9,
      urgency: "high",
      contents: ["Cartes conversation parent-ado", "Guide communication familiale", "Activités rapprochement", "Contrat confiance mutuelle", "Techniques expression besoins", "Journal moments complices", "Vidéos conseils relations familiales", "Planning temps qualité famille"]
    },
    {
      id: "teen_passions",
      title: "🎯 Passion & Projets Personnels",
      description: "Explore tes passions et développe tes projets personnels",
      category: "developpement",
      targetRole: "enfant_ado",
      targetUniverse: "famille",
      aiConfidence: 0.8,
      urgency: "low",
      contents: ["Carnet explorateur passions", "Guide création projets", "Planning organisation personnel", "Cartes motivation persévérance", "Vidéos parcours inspirants", "Kit entrepreneur en herbe", "Techniques créativité", "Journal réalisations"]
    }
  ];

  const parentsBoxes: BoxRecommendation[] = [
    {
      id: "parent_burnout",
      title: "🔥 Prévention Burn-out Parental",
      description: "Outils et stratégies pour prévenir l'épuisement parental",
      category: "prevention",
      targetRole: "parent",
      targetUniverse: "famille",
      aiConfidence: 0.9,
      urgency: "high",
      contents: ["Guide prévention burn-out", "Techniques relaxation express", "Planning me-time", "Cartes gestion émotions", "Réseau soutien parental", "Méditations guidées", "Journal bien-être parent", "Ressources urgence"]
    },
    {
      id: "parent_communication",
      title: "💬 Communication Bienveillante",
      description: "Développer une communication positive avec vos enfants",
      category: "communication",
      targetRole: "parent",
      targetUniverse: "famille",
      aiConfidence: 0.85,
      urgency: "medium",
      contents: ["Guide communication non-violente", "Cartes phrases bienveillantes", "Techniques écoute active", "Jeux communication famille", "Vidéos expertes parentalité", "Journal dialogues positifs", "Scripts situations difficiles", "Ressources conflit résolution"]
    },
    {
      id: "parent_shared_moments",
      title: "❤️ Moments Partagés",
      description: "Créer des liens privilégiés et des souvenirs en famille",
      category: "partage",
      targetRole: "parent",
      targetUniverse: "famille",
      aiConfidence: 0.8,
      urgency: "low",
      contents: ["Carnet activités famille", "Jeux de société sélection", "Recettes cuisine ensemble", "Projets créatifs parent-enfant", "Planning sorties découvertes", "Photos souvenirs kit", "Rituel coucher spécial", "Traditions familiales"]
    }
  ];

  const enterpriseBoxes: BoxRecommendation[] = [
    {
      id: "enterprise_remote",
      title: "🏠 Télétravail & Isolement",
      description: "Solutions pour maintenir le lien et la productivité en télétravail",
      category: "teletravail",
      targetRole: "collaborateur",
      targetUniverse: "entreprise",
      aiConfidence: 0.9,
      urgency: "high",
      contents: ["Guide organisation espace travail", "Outils collaboration efficace", "Techniques anti-isolement", "Planning pauses actives", "Kit ergonomie domicile", "Méditations micro-pauses", "Cartes team building virtuel", "Ressources équilibre vie pro/perso"]
    },
    {
      id: "enterprise_office",
      title: "🏢 Bureau Doux",
      description: "Créer un environnement de travail serein et motivant",
      category: "bureau",
      targetRole: "collaborateur",
      targetUniverse: "entreprise",
      aiConfidence: 0.8,
      urgency: "medium",
      contents: ["Plantes dépolluantes bureau", "Diffuseur huiles essentielles", "Coussin ergonomique", "Éclairage bien-être", "Kit déco zen", "Organiseurs futés", "Cartes motivation quotidienne", "Guide feng shui bureau"]
    },
    {
      id: "enterprise_retirement",
      title: "🌅 Départ à la Retraite",
      description: "Accompagnement dans la transition vers la retraite",
      category: "transition",
      targetRole: "senior",
      targetUniverse: "entreprise",
      aiConfidence: 0.95,
      urgency: "high",
      contents: ["Guide préparation retraite", "Carnet projets post-carrière", "Techniques gestion changement", "Réseau seniors actifs", "Activités nouvelles passions", "Journal transition", "Conseils financiers", "Rituels passage"]
    }
  ];

  useEffect(() => {
    switch (universe) {
      case 'famille':
        if (userRole === 'enfant_ado') {
          setBoxes(teensBoxes);
        } else {
          setBoxes(parentsBoxes);
        }
        break;
      case 'entreprise':
        setBoxes(enterpriseBoxes);
        break;
      default:
        setBoxes([]);
    }
  }, [universe, userRole]);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getUniverseTheme = (universe: UniverseType) => {
    switch (universe) {
      case 'famille':
        return {
          gradient: 'from-pink-50 via-purple-50 to-blue-50',
          primary: 'pink',
          accent: 'purple',
          icon: Heart
        };
      case 'entreprise':
        return {
          gradient: 'from-blue-50 via-indigo-50 to-purple-50',
          primary: 'blue',
          accent: 'indigo',
          icon: Building2
        };
      default:
        return {
          gradient: 'from-gray-50 to-white',
          primary: 'gray',
          accent: 'gray',
          icon: Gift
        };
    }
  };

  const theme = getUniverseTheme(universe);
  const ThemeIcon = theme.icon;

  const filteredBoxes = boxes.filter(box => {
    const matchesSearch = searchQuery === '' || 
      box.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      box.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'ai-recommendations') {
      return matchesSearch && box.aiConfidence > 0.8;
    }
    
    if (selectedCategory === 'all') return matchesSearch;
    
    return matchesSearch && box.category === selectedCategory;
  });

  const categories = [
    { id: 'ai-recommendations', label: 'IA Recommandations', icon: Brain },
    { id: 'all', label: 'Toutes', icon: Gift },
    { id: 'prevention', label: 'Prévention', icon: Users },
    { id: 'communication', label: 'Communication', icon: Sparkles }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden`}>
      {/* Bulles flottantes d'ambiance */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <BubbleComponent
          bubble={{
            id: 'ambient1',
            emotion: 'happy',
            intensity: 6,
            color: '#EC4899',
            size: 'large',
            animation: 'float',
            timestamp: new Date()
          }}
        />
        <BubbleComponent
          bubble={{
            id: 'ambient2',
            emotion: 'excited',
            intensity: 7,
            color: '#8B5CF6',
            size: 'medium',
            animation: 'pulse',
            timestamp: new Date()
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Heart className="w-12 h-12 text-pink-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
              🎁 Boutique Box Bien-être V3
            </h1>
          </div>
          <p className="text-gray-600 mb-6">
            {universe === 'famille' 
              ? userRole === 'enfant_ado' 
                ? 'Des box personnalisées pour ton bien-être et ton épanouissement 🌸'
                : 'Des solutions famille pour renforcer les liens et accompagner vos enfants ❤️'
              : 'Solutions QVT nouvelle génération adaptées à votre environnement professionnel 🏢'
            }
          </p>

          {/* Barre de recherche */}
          <div className="max-w-md mx-auto mb-6">
            <Input
              placeholder="🔍 Rechercher une box..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border-2 border-purple-200 focus:border-purple-400"
            />
          </div>
        </motion.div>

        {/* Recommandations IA */}
        {aiRecommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-r from-${theme.accent}-50 to-${theme.primary}-50 rounded-2xl p-6 mb-8 border-2 border-${theme.accent}-200`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-12 h-12 bg-${theme.accent}-100 rounded-full flex items-center justify-center`}>
                <Brain className={`w-6 h-6 text-${theme.accent}-600`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  🤖 IA Recommandations Personnalisées
                </h2>
                <p className="text-gray-600">
                  Basées sur vos évaluations et votre profil émotionnel
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {aiRecommendations.slice(0, 3).map((box, index) => (
                <motion.div
                  key={box.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full hover:shadow-lg transition-shadow border-2 border-${theme.accent}-200`}>
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
                              <div className={`w-1.5 h-1.5 bg-${theme.accent}-400 rounded-full`} />
                              <span>{content}</span>
                            </li>
                          ))}
                          {box.contents.length > 3 && (
                            <li className={`text-${theme.accent}-600`}>
                              +{box.contents.length - 3} autres éléments
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => onOrderBox(box.id)}
                          className={`flex-1 bg-${theme.accent}-600 hover:bg-${theme.accent}-700`}
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
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="flex items-center space-x-2">
                <cat.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
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
                        <CardTitle className={`text-lg group-hover:text-${theme.accent}-600 transition-colors`}>
                          {box.title}
                        </CardTitle>
                        <div className="flex flex-col items-end space-y-1">
                          <Badge className={`${getUrgencyColor(box.urgency)} text-white`}>
                            {box.urgency}
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
                              <div className={`w-1.5 h-1.5 bg-${theme.primary}-400 rounded-full`} />
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
                  Aucune box trouvée
                </h3>
                <p className="text-gray-400">
                  Essayez une autre catégorie ou modifiez votre recherche
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UniversalBoxShop;
