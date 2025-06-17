
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FamilyWelcome from '@/components/family/FamilyWelcome';
import BubbleEvaluation from '@/components/bubble/BubbleEvaluation';
import { EmotionalEvaluation } from '@/types/qvtbox';

type ViewState = 'welcome' | 'evaluation' | 'results';

const TeensDashboard = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<ViewState>('welcome');
  const [evaluation, setEvaluation] = useState<EmotionalEvaluation | null>(null);

  const handleEvaluationComplete = (newEvaluation: EmotionalEvaluation) => {
    setEvaluation(newEvaluation);
    setCurrentView('results');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'evaluation':
        return (
          <BubbleEvaluation
            onComplete={handleEvaluationComplete}
            userId="teen1"
          />
        );
      case 'results':
        return (
          <div className="max-w-2xl mx-auto p-6">
            <div className="text-center mb-8">
              <img 
                src="/images/bulle-ado.jpg" 
                alt="Ado heureux" 
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Merci pour ton partage ! 💖
              </h2>
              <p className="text-gray-600">
                Ton évaluation a été enregistrée. Tes parents pourront mieux t'accompagner.
              </p>
            </div>
            <button
              onClick={() => setCurrentView('welcome')}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-colors"
            >
              Retour à l'accueil
            </button>
          </div>
        );
      default:
        return (
          <FamilyWelcome
            onStartEvaluation={() => setCurrentView('evaluation')}
            onViewSpace={() => navigate('/famille/dashboard')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation 
        userType="teen" 
        onBack={() => navigate('/famille')} 
      />
      <div className="container mx-auto py-8">
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default TeensDashboard;
