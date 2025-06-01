
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import SimulatorTypeSelector, { SimulatorType } from "@/components/simulator/SimulatorTypeSelector";
import SimulatorQuestionnaire from "@/components/simulator/SimulatorQuestionnaire";
import SimulatorResults from "@/components/simulator/SimulatorResults";

const Simulator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [currentStep, setCurrentStep] = useState<'type-selection' | 'questionnaire' | 'results'>('type-selection');
  const [selectedType, setSelectedType] = useState<SimulatorType | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<number>(0);

  // Check auth status silently (no redirect)
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleTypeSelection = (type: SimulatorType) => {
    setSelectedType(type);
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (questionnaireAnswers: Record<string, string>, questionnaireScore: number) => {
    setAnswers(questionnaireAnswers);
    setScore(questionnaireScore);
    setCurrentStep('results');
  };

  const handleSaveResults = async () => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Connectez-vous pour sauvegarder vos résultats.",
        variant: "destructive"
      });
      navigate('/entreprise/login');
      return;
    }

    try {
      const { error } = await supabase
        .from('simulator_responses')
        .insert({
          user_id: user.id,
          answers: answers,
          qvt_score: score,
          burnout_risk_percentage: Math.max(0, 100 - score),
          burnout_risk: score >= 70 ? 'low' : score >= 40 ? 'medium' : 'high',
          context: selectedType,
          happiness_score: Math.round(score * 0.8)
        });

      if (error) throw error;

      toast({
        title: "Résultats sauvegardés",
        description: "Vos résultats ont été enregistrés avec succès.",
      });
    } catch (error) {
      console.error('Error saving results:', error);
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les résultats.",
        variant: "destructive"
      });
    }
  };

  const handleRestart = () => {
    setCurrentStep('type-selection');
    setSelectedType(null);
    setAnswers({});
    setScore(0);
  };

  const handleBack = () => {
    if (currentStep === 'questionnaire') {
      setCurrentStep('type-selection');
      setSelectedType(null);
    } else if (currentStep === 'results') {
      setCurrentStep('questionnaire');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Simulateur QVT Entreprise - Gratuit</h1>
            {!user && (
              <Button 
                onClick={() => navigate('/entreprise/login')}
                className="flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Se connecter</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!user && currentStep === 'type-selection' && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-center">
              💡 <strong>Simulateur 100% gratuit</strong> - Testez tous les types d'évaluation. Connectez-vous uniquement pour sauvegarder vos résultats.
            </p>
          </div>
        )}

        {currentStep === 'type-selection' && (
          <SimulatorTypeSelector
            selectedType={selectedType}
            onTypeSelect={handleTypeSelection}
          />
        )}

        {currentStep === 'questionnaire' && selectedType && (
          <SimulatorQuestionnaire
            simulatorType={selectedType}
            onBack={handleBack}
            onComplete={handleQuestionnaireComplete}
          />
        )}

        {currentStep === 'results' && selectedType && (
          <SimulatorResults
            simulatorType={selectedType}
            score={score}
            answers={answers}
            onRestart={handleRestart}
            onSave={user ? handleSaveResults : undefined}
            userConnected={!!user}
          />
        )}
      </div>
    </div>
  );
};

export default Simulator;
