
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FamilyWelcome from '@/components/family/FamilyWelcome';
import BubbleEvaluation from '@/components/bubble/BubbleEvaluation';
import FamilySpace from '@/components/family/FamilySpace';
import { EmotionalEvaluation, UserProfile, BubbleData } from '@/types/qvtbox';

type ViewState = 'welcome' | 'evaluation' | 'space';

const FamilyDashboard = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<ViewState>('welcome');

  // Mock data pour la démo
  const mockUserProfile: UserProfile = {
    id: 'user1',
    role: 'parent',
    universe: 'famille',
    riskFactors: [],
    preferences: [],
    specialStatus: [],
    currentMood: {
      id: 'mood1',
      emotion: 'happy',
      intensity: 7,
      color: '#4CAF50',
      size: 'medium',
      animation: 'float',
      timestamp: new Date(),
      emotionalState: 7,
      mood: 'good'
    },
    bubbleHistory: []
  };

  const mockFamilyMembers: UserProfile[] = [
    mockUserProfile,
    {
      ...mockUserProfile,
      id: 'user2',
      role: 'enfant_ado',
      currentMood: {
        ...mockUserProfile.currentMood,
        emotion: 'neutral',
        intensity: 5,
        color: '#FFC107'
      }
    }
  ];

  const handleEvaluationComplete = (evaluation: EmotionalEvaluation) => {
    console.log('Évaluation terminée:', evaluation);
    setCurrentView('space');
  };

  const handleSendSupport = (memberId: string) => {
    console.log('Envoi de soutien à:', memberId);
  };

  const handleScheduleActivity = () => {
    console.log('Planification d\'activité');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'evaluation':
        return (
          <BubbleEvaluation
            onComplete={handleEvaluationComplete}
            userId="user1"
          />
        );
      case 'space':
        return (
          <FamilySpace
            familyMembers={mockFamilyMembers}
            currentUser={mockUserProfile}
            familyAlerts={[]}
            onSendSupport={handleSendSupport}
            onScheduleActivity={handleScheduleActivity}
          />
        );
      default:
        return (
          <FamilyWelcome
            onStartEvaluation={() => setCurrentView('evaluation')}
            onViewSpace={() => setCurrentView('space')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation 
        userType="parent" 
        onBack={() => navigate('/famille')} 
      />
      <div className="container mx-auto py-8">
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default FamilyDashboard;
