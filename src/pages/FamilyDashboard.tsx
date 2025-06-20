
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FamilyWelcome from '@/components/family/FamilyWelcome';
import BubbleEvaluation from '@/components/bubble/BubbleEvaluation';
import FamilySpace from '@/components/family/FamilySpace';
import FamilyCarousel from '@/components/family/FamilyCarousel';
import { EmotionalEvaluation, UserProfile, BubbleData } from '@/types/qvtbox';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sun, Cloud, CloudRain, Zap, Heart, MessageCircle, Calendar, TrendingUp } from 'lucide-react';

type ViewState = 'welcome' | 'evaluation' | 'space';

const FamilyDashboard = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<ViewState>('welcome');

  // Mock data pour les membres de la famille avec météo émotionnelle
  const familyMembers = [
    {
      id: 'parent1',
      name: 'Maman',
      role: 'parent',
      age: 42,
      mood: 8,
      weather: 'sunny',
      lastActivity: '2h',
      concerns: [],
      avatar: '/images/parent-bubble.png'
    },
    {
      id: 'teen1',
      name: 'Emma',
      role: 'adolescent',
      age: 16,
      mood: 6,
      weather: 'cloudy',
      lastActivity: '30min',
      concerns: ['stress scolaire'],
      avatar: '/images/qvteens-bubble.png'
    },
    {
      id: 'child1',
      name: 'Lucas',
      role: 'enfant',
      age: 12,
      mood: 9,
      weather: 'sunny',
      lastActivity: '1h',
      concerns: [],
      avatar: '/images/bulle-famille.jpg'
    },
    {
      id: 'teen2',
      name: 'Alex',
      role: 'adolescent',
      age: 14,
      mood: 4,
      weather: 'stormy',
      lastActivity: '4h',
      concerns: ['isolement', 'anxiété'],
      avatar: '/images/qvteens-bubble.png'
    }
  ];

  const getWeatherIcon = (weather: string, mood: number) => {
    switch (weather) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      case 'stormy':
        return <Zap className="w-8 h-8 text-red-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getWeatherBg = (weather: string) => {
    switch (weather) {
      case 'sunny':
        return 'from-yellow-100 to-orange-100 border-yellow-300';
      case 'cloudy':
        return 'from-gray-100 to-slate-100 border-gray-300';
      case 'rainy':
        return 'from-blue-100 to-indigo-100 border-blue-300';
      case 'stormy':
        return 'from-red-100 to-pink-100 border-red-300';
      default:
        return 'from-yellow-100 to-orange-100 border-yellow-300';
    }
  };

  const handleEvaluationComplete = (evaluation: EmotionalEvaluation) => {
    console.log('Évaluation terminée:', evaluation);
    setCurrentView('space');
  };

  if (currentView === 'evaluation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navigation 
          userType="parent" 
          onBack={() => navigate('/famille')} 
        />
        <div className="container mx-auto py-8">
          <BubbleEvaluation
            onComplete={handleEvaluationComplete}
            userId="user1"
          />
        </div>
      </div>
    );
  }

  if (currentView === 'space') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navigation 
          userType="parent" 
          onBack={() => navigate('/famille')} 
        />
        <div className="container mx-auto py-8">
          <FamilySpace
            familyMembers={[]}
            currentUser={{} as UserProfile}
            familyAlerts={[]}
            onSendSupport={() => {}}
            onScheduleActivity={() => {}}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation 
        userType="parent" 
        onBack={() => navigate('/famille')} 
      />
      
      <div className="container mx-auto py-8 px-4">
        {/* Header avec effet waou */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Votre Espace Famille
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Prenez soin de votre bulle familiale avec bienveillance
          </p>
        </motion.div>

        {/* Carousel bienveillant */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <FamilyCarousel />
        </motion.div>

        {/* Météo familiale par enfant */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Météo Familiale du Jour
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={`bg-gradient-to-br ${getWeatherBg(member.weather)} border-2 hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-3">
                      {getWeatherIcon(member.weather, member.mood)}
                    </div>
                    <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
                    <p className="text-sm text-gray-600 capitalize">{member.role}, {member.age} ans</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Humeur */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{member.mood}/10</div>
                      <p className="text-xs text-gray-600">Humeur du jour</p>
                    </div>
                    
                    {/* Préoccupations */}
                    {member.concerns.length > 0 && (
                      <div className="space-y-1">
                        {member.concerns.map((concern, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {concern}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => navigate(`/teens/family-space`)}
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Envoyer un message
                      </Button>
                      
                      {member.mood < 6 && (
                        <Button 
                          size="sm" 
                          className="w-full bg-pink-500 hover:bg-pink-600"
                          onClick={() => setCurrentView('evaluation')}
                        >
                          <Heart className="w-3 h-3 mr-1" />
                          Proposer du soutien
                        </Button>
                      )}
                    </div>
                    
                    <div className="text-xs text-gray-500 text-center">
                      Dernière activité: {member.lastActivity}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Actions rapides */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>Planifier une activité</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Organisez un moment familial spécial</p>
              <Button className="w-full">Créer un événement</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span>Bilan familial</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Consultez l'évolution du bien-être</p>
              <Button variant="outline" className="w-full">Voir les stats</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <span>Évaluation personnelle</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Prenez votre température émotionnelle</p>
              <Button 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500"
                onClick={() => setCurrentView('evaluation')}
              >
                Commencer
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FamilyDashboard;
