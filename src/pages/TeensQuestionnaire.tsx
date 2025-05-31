
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Heart, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TeensQuestionnaire = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: "mood_general",
      question: "Comment tu te sens en général ces derniers temps ? 😊",
      emoji: "🌟",
      options: [
        { value: "5", label: "Super bien ! 😄", emoji: "😄" },
        { value: "4", label: "Plutôt bien 😊", emoji: "😊" },
        { value: "3", label: "Ça va, normal quoi 😐", emoji: "😐" },
        { value: "2", label: "Pas terrible 😕", emoji: "😕" },
        { value: "1", label: "Vraiment pas bien 😢", emoji: "😢" }
      ]
    },
    {
      id: "school_stress",
      question: "Le collège/lycée, ça te stresse ? 📚",
      emoji: "🎒",
      options: [
        { value: "1", label: "Pas du tout ! 😎", emoji: "😎" },
        { value: "2", label: "Un peu parfois 🤔", emoji: "🤔" },
        { value: "3", label: "Moyennement 😐", emoji: "😐" },
        { value: "4", label: "Assez souvent 😰", emoji: "😰" },
        { value: "5", label: "Tout le temps ! 😵", emoji: "😵" }
      ]
    },
    {
      id: "friends_relations",
      question: "Avec tes potes, comment ça se passe ? 👥",
      emoji: "👫",
      options: [
        { value: "5", label: "C'est génial ! 🥳", emoji: "🥳" },
        { value: "4", label: "Bien dans l'ensemble 😊", emoji: "😊" },
        { value: "3", label: "Ça va, quelques galères 😐", emoji: "😐" },
        { value: "2", label: "C'est compliqué 😕", emoji: "😕" },
        { value: "1", label: "J'ai des problèmes 😢", emoji: "😢" }
      ]
    },
    {
      id: "family_relations",
      question: "À la maison avec ta famille ? 🏠",
      emoji: "🏡",
      options: [
        { value: "5", label: "Ambiance cool ! 😄", emoji: "😄" },
        { value: "4", label: "Plutôt bien 😊", emoji: "😊" },
        { value: "3", label: "Ça dépend des jours 😐", emoji: "😐" },
        { value: "2", label: "Souvent tendu 😕", emoji: "😕" },
        { value: "1", label: "C'est difficile 😢", emoji: "😢" }
      ]
    },
    {
      id: "sleep_quality",
      question: "Tu dors bien en ce moment ? 😴",
      emoji: "🌙",
      options: [
        { value: "5", label: "Comme un bébé ! 😴", emoji: "😴" },
        { value: "4", label: "Plutôt bien 😊", emoji: "😊" },
        { value: "3", label: "Moyen, ça dépend 😐", emoji: "😐" },
        { value: "2", label: "J'ai du mal à m'endormir 😕", emoji: "😕" },
        { value: "1", label: "Je dors très mal 😴💤", emoji: "😵" }
      ]
    },
    {
      id: "activities_enjoyment",
      question: "Tu prends du plaisir dans tes activités ? 🎮🎨🏃‍♂️",
      emoji: "🎯",
      options: [
        { value: "5", label: "Carrément ! 🤩", emoji: "🤩" },
        { value: "4", label: "Oui, souvent 😄", emoji: "😄" },
        { value: "3", label: "Parfois 😐", emoji: "😐" },
        { value: "2", label: "Rarement 😕", emoji: "😕" },
        { value: "1", label: "Plus vraiment 😢", emoji: "😢" }
      ]
    }
  ];

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const numericResponses = Object.values(responses).map(val => parseInt(val) || 0);
    if (numericResponses.length === 0) return 0;
    
    const average = numericResponses.reduce((sum, val) => sum + val, 0) / numericResponses.length;
    return Math.round(average * 3); // Convert to 1-15 scale
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 12) return { 
      level: "Tu pètes la forme ! 🌟", 
      color: "text-green-600", 
      description: "Continue comme ça, tu gères ! 💪",
      emoji: "🌟"
    };
    if (score >= 9) return { 
      level: "Ça roule plutôt bien ! 😊", 
      color: "text-blue-600", 
      description: "Quelques petites choses à améliorer 👍",
      emoji: "😊"
    };
    if (score >= 6) return { 
      level: "C'est moyen 😐", 
      color: "text-yellow-600", 
      description: "On peut t'aider à aller mieux ! 🤗",
      emoji: "😐"
    };
    if (score >= 3) return { 
      level: "Pas terrible 😕", 
      color: "text-orange-600", 
      description: "On va trouver des solutions ensemble 💝",
      emoji: "😕"
    };
    return { 
      level: "C'est dur en ce moment 😢", 
      color: "text-red-600", 
      description: "Parles-en à quelqu'un, tu n'es pas seul(e) 🫂",
      emoji: "😢"
    };
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setIsCompleted(true);
    
    toast({
      title: "C'est dans la boîte ! 🎉",
      description: `Score bien-être: ${score}/15`,
    });
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  if (isCompleted) {
    const score = calculateScore();
    const interpretation = getScoreInterpretation(score);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-background to-accent/10 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-4 border-2 border-secondary/20">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">{interpretation.emoji}</div>
            <CardTitle className="text-2xl">GG ! Tu as fini ! 🎉</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-2">{score}/15</h3>
              <p className={`text-lg font-semibold ${interpretation.color}`}>{interpretation.level}</p>
              <p className="text-muted-foreground">{interpretation.description}</p>
            </div>
            
            <div className="bg-secondary/10 rounded-2xl p-4">
              <p className="text-sm text-muted-foreground">
                Notre IA va analyser tes réponses et te proposer des activités cool et des conseils 
                pour te sentir encore mieux ! 🚀
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/recommandations')} className="rounded-2xl bg-secondary">
                Voir mes recommandations 🎁
              </Button>
              <Button onClick={() => navigate('/teens')} variant="outline" className="rounded-2xl">
                Retour à l'accueil
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-background to-accent/10">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/teens')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                {currentStep + 1} / {questions.length}
              </div>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Question Card */}
          <Card className="animate-fade-in border-2 border-secondary/20">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{currentQuestion.emoji}</div>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={responses[currentQuestion.id] || ""}
                onValueChange={(value) => handleResponse(currentQuestion.id, value)}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 rounded-2xl hover:bg-secondary/10 transition-colors border border-secondary/20">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer flex items-center space-x-3">
                      <span className="text-2xl">{option.emoji}</span>
                      <span className="text-lg">{option.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="rounded-2xl"
                >
                  ← Retour
                </Button>

                {currentStep === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    className="rounded-2xl bg-secondary"
                    disabled={!responses[currentQuestion.id]}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Terminer ! 🎉
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="rounded-2xl bg-secondary"
                    disabled={!responses[currentQuestion.id]}
                  >
                    Suivant →
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Encouragement */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Heart className="w-4 h-4 text-secondary" />
              <span>Plus que {questions.length - currentStep - 1} question(s) ! Tu gères ! 💪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensQuestionnaire;
