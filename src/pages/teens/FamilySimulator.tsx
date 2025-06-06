import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import FamilySimulatorResults from "@/components/teens/FamilySimulatorResults";
import { familyQuestions, getQuestionsForRole } from "@/data/familySimulatorQuestions";
import FamilyQuestionCard from "@/components/teens/FamilyQuestionCard";
import FamilyRoleSelector from "@/components/teens/FamilyRoleSelector";
import FamilySimulatorNavigation from "@/components/teens/FamilySimulatorNavigation";
import AuthGuard from "@/components/AuthGuard";
import { 
  calculateFamilyWellnessScore, 
  calculateFamilyRisk, 
  getRecommendedFamilyBox 
} from "@/utils/familySimulatorCalculations";
import { FamilySimulatorResult, FamilyRole } from "@/types/familySimulator";
import { supabase } from "@/integrations/supabase/client";

const FamilySimulator = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(-1);
  const [role, setRole] = useState<FamilyRole | null>(null);
  const [questions, setQuestions] = useState(familyQuestions);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [showResults, setShowResults] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);
  const [results, setResults] = useState<FamilySimulatorResult | null>(null);
  
  useEffect(() => {
    if (role) {
      const roleQuestions = getQuestionsForRole(role);
      setQuestions([...familyQuestions, ...roleQuestions]);
    }
  }, [role]);

  const processResults = async (): Promise<FamilySimulatorResult> => {
    setLoadingResults(true);
    
    try {
      const wellnessScore = calculateFamilyWellnessScore(answers, role!);
      const familyRisk = calculateFamilyRisk(wellnessScore, role!);
      
      const recommendedBox = getRecommendedFamilyBox(answers, wellnessScore, role!);
      const recommendations = [recommendedBox];
      
      const finalResult = {
        wellnessScore,
        familyRisk: familyRisk.category,
        riskPercentage: familyRisk.percentage,
        recommendations,
        role: role!,
        communicationScore: Math.round(wellnessScore * 7),
        emotionalScore: Math.round(wellnessScore * 6.5),
        supportScore: Math.round(wellnessScore * 8)
      };
      
      setResults(finalResult);
      
      // Sauvegarder les résultats
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('teen_checkins').insert({
          teen_id: user.id,
          mood: familyRisk.category as any,
          stress_level: Math.round((100 - wellnessScore) / 10),
          family_relationship: Math.round(wellnessScore / 10),
          personal_notes: `Simulateur famille - Role: ${role}`
        });
      }
      
      return finalResult;
    } catch (error) {
      console.error("Error processing family results:", error);
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors du traitement des résultats.",
        variant: "destructive"
      });
      
      const wellnessScore = calculateFamilyWellnessScore(answers, role!);
      const familyRisk = calculateFamilyRisk(wellnessScore, role!);
      
      const fallbackResult = {
        wellnessScore,
        familyRisk: familyRisk.category,
        riskPercentage: familyRisk.percentage,
        recommendations: ["Nous recommandons de refaire le test plus tard."],
        role: role!,
        communicationScore: Math.round(wellnessScore * 7),
        emotionalScore: Math.round(wellnessScore * 6.5),
        supportScore: Math.round(wellnessScore * 8)
      };
      
      setResults(fallbackResult);
      return fallbackResult;
    } finally {
      setLoadingResults(false);
    }
  };

  const handleRoleChange = (selectedRole: FamilyRole) => {
    setRole(selectedRole);
    setAnswers({ role: selectedRole });
    setCurrentStep(0);
  };

  const handleQuestionChange = (value: string | number) => {
    const currentQuestion = questions[currentStep];
    setAnswers({
      ...answers,
      [currentQuestion.id]: value,
    });
  };

  const handleNext = async () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      toast({
        title: "Évaluation terminée !",
        description: "Votre score bien-être familial est en cours de calcul.",
      });
      await processResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 0) {
      setCurrentStep(-1);
      setRole(null);
      setQuestions(familyQuestions);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(-1);
    setRole(null);
    setQuestions(familyQuestions);
    setShowResults(false);
    setResults(null);
  };

  const handleFeedback = (type: "like" | "dislike") => {
    toast({
      title: type === "like" ? "Merci pour votre avis positif !" : "Merci pour votre retour !",
      description: type === "like" 
        ? "Nous sommes ravis que ces recommandations vous soient utiles." 
        : "Nous allons améliorer nos suggestions en fonction de votre retour.",
    });
  };

  const isCurrentQuestionAnswered = () => {
    if (currentStep === -1) return role !== null;
    
    const currentQuestion = questions[currentStep];
    return answers[currentQuestion.id] !== undefined;
  };

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-400 relative overflow-hidden">
        {/* Floating cubes inspired by Rubik's cube */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-2xl transform rotate-12 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400 rounded-2xl transform -rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-500 rounded-2xl transform rotate-45 animate-spin-slow"></div>
          <div className="absolute top-60 left-1/2 w-14 h-14 bg-orange-500 rounded-2xl transform rotate-12 animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-18 h-18 bg-purple-500 rounded-2xl transform -rotate-12 animate-pulse"></div>
        </div>

        <Header />
        
        <main className="flex-1 py-8 px-4 relative z-10">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
                  🎨 Simulateur Bien-être Familial Créatif
                </h1>
                <div className="absolute -top-2 -right-8 text-3xl animate-spin-slow">🎲</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border-4 border-white/30 shadow-2xl">
                <p className="text-white font-semibold text-lg">
                  Évaluez le bien-être familial et obtenez des recommandations colorées et personnalisées
                </p>
                {role && (
                  <p className="text-lg text-yellow-300 mt-3 font-black">
                    Mode : {role === "teen" ? "🎨 Adolescent Créatif" : role === "parent" ? "👨‍👩‍👧‍👦 Parent Bienveillant" : "👪 Famille Unie"}
                  </p>
                )}
              </div>
            </div>
            
            {!showResults ? (
              <>
                {currentStep === -1 && (
                  <FamilyRoleSelector
                    selectedRole={role}
                    onRoleChange={handleRoleChange}
                  />
                )}

                {currentStep >= 0 && (
                  <FamilyQuestionCard 
                    currentQuestion={questions[currentStep]}
                    currentStep={currentStep}
                    totalSteps={questions.length}
                    answer={answers[questions[currentStep].id]}
                    onAnswerChange={handleQuestionChange}
                  />
                )}

                {currentStep >= -1 && (
                  <Card className="shadow-2xl border-4 border-white/30 bg-white/20 backdrop-blur-sm mt-4 rounded-3xl">
                    <FamilySimulatorNavigation
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                      isFirstStep={currentStep === -1}
                      isLastStep={currentStep === questions.length - 1}
                      isCurrentQuestionAnswered={isCurrentQuestionAnswered()}
                      isLoading={loadingResults}
                    />
                  </Card>
                )}
              </>
            ) : (
              results && (
                <FamilySimulatorResults 
                  result={results}
                  onFeedback={handleFeedback}
                  onReset={handleReset}
                />
              )
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default FamilySimulator;
