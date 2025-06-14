
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { getQuestionsForType } from "@/data/familyQuestions";

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
      if (question?.type === "scale" && typeof answer === "number") {
        totalScore += answer;
        scaleQuestions++;
      }
    });
    
    const finalScore = scaleQuestions > 0 ? Math.round((totalScore / (scaleQuestions * 5)) * 100) : 50;
    setScore(finalScore);
    setIsLoading(false);
    setShowResults(true);
  };

  const handleSaveResults = async () => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Connectez-vous pour sauvegarder vos résultats.",
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
    setCurrentStep(0);
    setAnswers({});
    setScore(0);
    setShowResults(false);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const isCurrentQuestionAnswered = answers[currentQuestion?.id] !== undefined;

  const renderQuestionInput = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case "scale":
        const scale = currentQuestion.scale || { min: 1, max: 5, labels: [] };
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: scale.max - scale.min + 1 }, (_, i) => {
                const value = scale.min + i;
                return (
                  <Button
                    key={value}
                    variant={answers[currentQuestion.id] === value ? "default" : "outline"}
                    className="h-16 text-lg font-semibold"
                    onClick={() => handleAnswerChange(currentQuestion.id, value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
            {scale.labels.length > 0 && (
              <div className="flex justify-between text-sm text-gray-600">
                <span>{scale.labels[0]}</span>
                <span>{scale.labels[1]}</span>
              </div>
            )}
          </div>
        );

      case "multiple_choice":
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <Button
                key={index}
                variant={answers[currentQuestion.id] === option ? "default" : "outline"}
                className="w-full text-left justify-start h-auto py-4 px-6"
                onClick={() => handleAnswerChange(currentQuestion.id, option)}
              >
                {option}
              </Button>
            ))}
          </div>
        );

      case "text":
        return (
          <Textarea
            value={answers[currentQuestion.id] as string || ""}
            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
            placeholder="Tapez votre réponse ici..."
            className="min-h-32"
          />
        );

      default:
        return null;
    }
  };

  const renderResults = () => {
    const riskLevel = score >= 70 ? 'low' : score >= 40 ? 'medium' : 'high';
    const riskColor = riskLevel === 'low' ? 'text-green-600' : riskLevel === 'medium' ? 'text-yellow-600' : 'text-red-600';
    
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Résultats de votre évaluation familiale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{score}%</div>
              <div className="text-gray-600">Score de bien-être familial</div>
            </div>
            
            <div className={`text-lg font-semibold ${riskColor}`}>
              Niveau de risque familial : {riskLevel === 'low' ? 'Faible' : riskLevel === 'medium' ? 'Modéré' : 'Élevé'}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">💡 Recommandations</h3>
                <ul className="text-sm text-blue-700 space-y-2">
                  {score >= 70 ? (
                    <>
                      <li>• Continuez à maintenir cette excellente dynamique familiale</li>
                      <li>• Planifiez des activités communes régulières</li>
                      <li>• Célébrez vos réussites familiales</li>
                    </>
                  ) : score >= 40 ? (
                    <>
                      <li>• Améliorez la communication en famille</li>
                      <li>• Organisez des temps d'échange sans écrans</li>
                      <li>• Considérez un accompagnement familial</li>
                    </>
                  ) : (
                    <>
                      <li>• Envisagez une thérapie familiale</li>
                      <li>• Créez des moments de dialogue privilégiés</li>
                      <li>• Établissez des règles communes respectueuses</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">🎯 Prochaines étapes</h3>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Partagez ces résultats en famille</li>
                  <li>• Définissez ensemble des objectifs communs</li>
                  <li>• Refaites l'évaluation dans 3 mois</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button onClick={handleRestart} variant="outline">
                Refaire l'évaluation
              </Button>
              {user && (
                <Button onClick={handleSaveResults}>
                  Sauvegarder les résultats
                </Button>
              )}
              {!user && (
                <Button onClick={() => navigate('/teens/login')}>
                  Se connecter pour sauvegarder
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-background to-purple-50">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/famille')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil famille</span>
            </Button>
            <h1 className="text-2xl font-bold text-primary">Simulateur Famille - Gratuit</h1>
            {!user && (
              <Button 
                onClick={() => navigate('/teens/login')}
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
        {!user && !showResults && (
          <div className="mb-8 p-4 bg-pink-50 border border-pink-200 rounded-lg">
            <p className="text-pink-800 text-center">
              💡 <strong>Simulateur 100% gratuit</strong> - Évaluez le bien-être de votre famille. Connectez-vous uniquement pour sauvegarder vos résultats.
            </p>
          </div>
        )}

        {showResults ? (
          renderResults()
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-t-4 border-t-pink-500">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Question {currentStep + 1} sur {questions.length}
                  </span>
                  <span className="text-sm font-medium text-pink-600">
                    {Math.round(progress)}%
                  </span>
                </div>
                <Progress value={progress} className="mb-4" />
                <CardTitle className="text-xl font-semibold leading-relaxed">
                  {currentQuestion?.text}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {renderQuestionInput()}
              </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Précédent</span>
              </Button>

              <Button
                onClick={handleNext}
                disabled={!isCurrentQuestionAnswered || isLoading}
                className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700"
              >
                <span>
                  {isLoading ? "Calcul en cours..." : currentStep === questions.length - 1 ? "Terminer" : "Suivant"}
                </span>
                {!isLoading && <ArrowLeft className="w-4 h-4 rotate-180" />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilySimulator;
