
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getQuestionsForType } from "@/data/familyQuestions";
import FamilyQuestionCard from "@/components/teens/FamilyQuestionCard";

const FamilySimulator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = getQuestionsForType("family");

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

  const handleAnswerChange = (questionId: string, value: string | number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    setIsLoading(true);
    
    // Calculate score based on answers
    let totalScore = 0;
    let scaleQuestions = 0;
    
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === questionId);
      if ((question?.type === "emoji_scale" || question?.type === "animated_slider") && typeof answer === "number") {
        totalScore += answer;
        scaleQuestions++;
      }
    });
    
    const finalScore = scaleQuestions > 0 ? Math.round((totalScore / (scaleQuestions * 5)) * 100) : 75;
    setScore(finalScore);
    setIsLoading(false);
    setShowResults(true);
  };

  const handleSaveResults = async () => {
    if (!user) {
      toast({
        title: "Connexion requise 🔐",
        description: "Connecte-toi pour sauvegarder tes résultats !",
        variant: "destructive"
      });
      navigate('/teens/login');
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
          context: 'family',
          happiness_score: Math.round(score * 0.8)
        });

      if (error) throw error;

      toast({
        title: "Résultats sauvegardés ! 🎉",
        description: "Tes résultats ont été enregistrés avec succès.",
      });
    } catch (error) {
      console.error('Error saving results:', error);
      toast({
        title: "Erreur 😕",
        description: "Impossible de sauvegarder les résultats.",
        variant: "destructive"
      });
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setScore(0);
    setShowResults(false);
  };

  const currentQuestion = questions[currentStep];
  const isCurrentQuestionAnswered = answers[currentQuestion?.id] !== undefined;

  const renderResults = () => {
    const riskLevel = score >= 70 ? 'Excellent' : score >= 50 ? 'Bon' : score >= 30 ? 'À améliorer' : 'Préoccupant';
    const riskEmoji = score >= 70 ? '🌟' : score >= 50 ? '😊' : score >= 30 ? '😐' : '😟';
    
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="text-center shadow-xl bg-gradient-to-br from-pink-50 to-purple-50 border-t-4 border-t-pink-500">
          <CardContent className="p-8">
            <div className="text-6xl mb-4">{riskEmoji}</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Bravo ! Voici tes résultats familiaux ✨
            </h2>
            
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-pink-600 mb-2">{score}%</div>
              <div className="text-xl text-gray-700">Score de bien-être familial</div>
              <div className="text-lg font-semibold text-purple-600 mt-2">
                Niveau : {riskLevel}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3 text-lg">🎯 Recommandations personnalisées</h3>
                <ul className="text-sm text-blue-700 space-y-2 text-left">
                  {score >= 70 ? (
                    <>
                      <li>• Continue sur cette excellente voie ! 🌟</li>
                      <li>• Planifiez des activités familiales régulières 🎮</li>
                      <li>• Célébrez vos moments de bonheur ensemble 🎉</li>
                    </>
                  ) : score >= 50 ? (
                    <>
                      <li>• Améliorez la communication en famille 💬</li>
                      <li>• Organisez des temps sans écrans 📱</li>
                      <li>• Créez des rituels familiaux 🏠</li>
                    </>
                  ) : (
                    <>
                      <li>• Envisagez un accompagnement familial 👨‍👩‍👧‍👦</li>
                      <li>• Créez des moments de dialogue privilégiés 💝</li>
                      <li>• Établissez des règles communes bienveillantes ✨</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <h3 className="font-bold text-green-800 mb-3 text-lg">🚀 Prochaines étapes</h3>
                <ul className="text-sm text-green-700 space-y-2 text-left">
                  <li>• Partage ces résultats en famille 👨‍👩‍👧‍👦</li>
                  <li>• Définissez ensemble des objectifs communs 🎯</li>
                  <li>• Refais l'évaluation dans 1 mois 📅</li>
                  <li>• Explore nos autres outils famille 🛠️</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                onClick={handleRestart} 
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50"
              >
                🔄 Refaire l'évaluation
              </Button>
              {user && (
                <Button 
                  onClick={handleSaveResults}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                >
                  💾 Sauvegarder les résultats
                </Button>
              )}
              {!user && (
                <Button 
                  onClick={() => navigate('/teens/login')}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                >
                  🔐 Se connecter pour sauvegarder
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/famille')}
              className="flex items-center space-x-2 text-pink-600 hover:text-pink-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil famille</span>
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ✨ Évaluation Famille Interactive ✨
            </h1>
            {!user && (
              <Button 
                onClick={() => navigate('/teens/login')}
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500"
              >
                <LogIn className="w-4 h-4" />
                <span>Se connecter</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!user && !showResults && (
          <div className="mb-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200 rounded-xl">
            <p className="text-pink-800 text-center text-lg">
              🎁 <strong>Évaluation 100% gratuite et fun !</strong> - Découvre le bien-être de ta famille avec une expérience interactive. Connecte-toi pour sauvegarder tes résultats ! ✨
            </p>
          </div>
        )}

        {showResults ? (
          renderResults()
        ) : (
          <div className="max-w-4xl mx-auto">
            <FamilyQuestionCard
              currentQuestion={currentQuestion}
              currentStep={currentStep}
              totalSteps={questions.length}
              answer={answers[currentQuestion?.id]}
              onAnswerChange={(value) => handleAnswerChange(currentQuestion.id, value)}
            />

            <Card className="mt-6 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2 border-pink-300 text-pink-600 hover:bg-pink-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </Button>

                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">
                      Question {currentStep + 1} sur {questions.length}
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: questions.length }, (_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i <= currentStep ? 'bg-pink-500' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleNext}
                    disabled={!isCurrentQuestionAnswered || isLoading}
                    className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:opacity-50"
                  >
                    <span>
                      {isLoading ? "Calcul en cours... ⏳" : currentStep === questions.length - 1 ? "Terminer 🎉" : "Suivant"}
                    </span>
                    {!isLoading && <ChevronRight className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilySimulator;
