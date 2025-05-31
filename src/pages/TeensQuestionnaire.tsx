
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
      question: "Comment tu te sens en général ces derniers temps ?",
      emoji: "🌟",
      options: [
        { value: "very_happy", label: "Super bien ! Je pète la forme", emoji: "😄" },
        { value: "happy", label: "Plutôt bien, ça roule", emoji: "😊" },
        { value: "neutral", label: "Ça va, normal quoi", emoji: "😐" },
        { value: "sad", label: "Pas terrible en ce moment", emoji: "😕" },
        { value: "very_sad", label: "Vraiment pas bien", emoji: "😢" }
      ]
    },
    {
      id: "school_stress",
      question: "Le collège/lycée, ça te stresse ?",
      emoji: "🎒",
      options: [
        { value: "1", label: "Pas du tout ! J'adore ça", emoji: "😎" },
        { value: "2", label: "Un peu parfois", emoji: "🤔" },
        { value: "3", label: "Moyennement", emoji: "😐" },
        { value: "4", label: "Assez souvent ça me prend la tête", emoji: "😰" },
        { value: "5", label: "Tout le temps ! C'est l'enfer", emoji: "😵" }
      ]
    },
    {
      id: "friends_relations",
      question: "Avec tes potes, comment ça se passe ?",
      emoji: "👫",
      options: [
        { value: "very_happy", label: "C'est génial ! Mes potes sont au top", emoji: "🥳" },
        { value: "happy", label: "Bien dans l'ensemble", emoji: "😊" },
        { value: "neutral", label: "Ça va, quelques galères parfois", emoji: "😐" },
        { value: "sad", label: "C'est compliqué en ce moment", emoji: "😕" },
        { value: "very_sad", label: "J'ai des vrais problèmes avec eux", emoji: "😢" }
      ]
    },
    {
      id: "family_relations",
      question: "À la maison avec ta famille ?",
      emoji: "🏡",
      options: [
        { value: "very_happy", label: "Ambiance cool ! On s'entend bien", emoji: "😄" },
        { value: "happy", label: "Plutôt bien", emoji: "😊" },
        { value: "neutral", label: "Ça dépend des jours", emoji: "😐" },
        { value: "sad", label: "Souvent tendu", emoji: "😕" },
        { value: "very_sad", label: "C'est vraiment difficile", emoji: "😢" }
      ]
    },
    {
      id: "sleep_quality",
      question: "Tu dors bien en ce moment ?",
      emoji: "🌙",
      options: [
        { value: "5", label: "Comme un bébé ! Je récupère bien", emoji: "😴" },
        { value: "4", label: "Plutôt bien", emoji: "😊" },
        { value: "3", label: "Moyen, ça dépend", emoji: "😐" },
        { value: "2", label: "J'ai du mal à m'endormir", emoji: "😕" },
        { value: "1", label: "Je dors très mal, je suis crevé(e)", emoji: "😵" }
      ]
    },
    {
      id: "activities_enjoyment",
      question: "Tu prends du plaisir dans tes activités ?",
      emoji: "🎯",
      options: [
        { value: "very_happy", label: "Carrément ! J'adore ce que je fais", emoji: "🤩" },
        { value: "happy", label: "Oui, souvent", emoji: "😄" },
        { value: "neutral", label: "Parfois", emoji: "😐" },
        { value: "sad", label: "Rarement", emoji: "😕" },
        { value: "very_sad", label: "Plus vraiment, ça me saoule", emoji: "😢" }
      ]
    },
    // NEW QUESTIONS
    {
      id: "body_confidence",
      question: "Comment tu te sens dans ton corps ?",
      emoji: "💪",
      options: [
        { value: "very_happy", label: "Super ! Je me sens bien dans ma peau", emoji: "💪" },
        { value: "happy", label: "Plutôt à l'aise", emoji: "😊" },
        { value: "neutral", label: "Ça va, normal", emoji: "😐" },
        { value: "sad", label: "Pas terrible, j'ai des complexes", emoji: "😕" },
        { value: "very_sad", label: "Vraiment mal, je me déteste", emoji: "😢" }
      ]
    },
    {
      id: "future_anxiety",
      question: "Quand tu penses à ton avenir, tu ressens quoi ?",
      emoji: "🚀",
      options: [
        { value: "very_happy", label: "De l'excitation ! J'ai hâte", emoji: "🤩" },
        { value: "happy", label: "De la confiance", emoji: "😊" },
        { value: "neutral", label: "Neutre, on verra bien", emoji: "😐" },
        { value: "anxious", label: "De l'angoisse", emoji: "😰" },
        { value: "very_sad", label: "De la peur, ça me stresse grave", emoji: "😨" }
      ]
    },
    {
      id: "social_pressure",
      question: "Tu ressens de la pression pour être comme les autres ?",
      emoji: "👥",
      options: [
        { value: "1", label: "Pas du tout ! Je suis unique", emoji: "😎" },
        { value: "2", label: "Un peu parfois", emoji: "🤔" },
        { value: "3", label: "Moyennement", emoji: "😐" },
        { value: "4", label: "Souvent, c'est lourd", emoji: "😰" },
        { value: "5", label: "Tout le temps ! Je dois rentrer dans le moule", emoji: "😵" }
      ]
    }
  ];

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const values = Object.values(responses);
    if (values.length === 0) return 0;
    
    let totalScore = 0;
    let count = 0;
    
    values.forEach(val => {
      if (val === 'very_happy') totalScore += 5;
      else if (val === 'happy') totalScore += 4;
      else if (val === 'neutral') totalScore += 3;
      else if (val === 'sad') totalScore += 2;
      else if (val === 'very_sad') totalScore += 1;
      else if (val === 'anxious') totalScore += 2;
      else totalScore += parseInt(val) || 0;
      count++;
    });
    
    return Math.round((totalScore / count) * 3); // Convert to 1-15 scale
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 12) return { 
      level: "Tu pètes la forme ! 🌟", 
      color: "text-green-400", 
      description: "Continue comme ça, tu gères de ouf ! 💪",
      emoji: "🌟",
      bgColor: "from-green-500/20 to-emerald-500/20"
    };
    if (score >= 9) return { 
      level: "Ça roule plutôt bien ! 😊", 
      color: "text-blue-400", 
      description: "Quelques petites choses à améliorer 👍",
      emoji: "😊",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    };
    if (score >= 6) return { 
      level: "C'est moyen 😐", 
      color: "text-yellow-400", 
      description: "On peut t'aider à aller mieux ! 🤗",
      emoji: "😐",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    };
    if (score >= 3) return { 
      level: "Pas terrible 😕", 
      color: "text-orange-400", 
      description: "On va trouver des solutions ensemble 💝",
      emoji: "😕",
      bgColor: "from-orange-500/20 to-red-500/20"
    };
    return { 
      level: "C'est dur en ce moment 😢", 
      color: "text-red-400", 
      description: "Parles-en à quelqu'un, tu n'es pas seul(e) 🫂",
      emoji: "😢",
      bgColor: "from-red-500/20 to-pink-500/20"
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
      description: `Score bien-être: ${score}/15 - Tu viens de gagner 10 points ! ⭐`,
    });
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  if (isCompleted) {
    const score = calculateScore();
    const interpretation = getScoreInterpretation(score);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 flex items-center justify-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
        </div>

        <Card className={`w-full max-w-2xl mx-4 border-2 border-white/20 bg-gradient-to-br ${interpretation.bgColor} backdrop-blur-sm`}>
          <CardHeader className="text-center">
            <div className="text-8xl mb-6 animate-bounce">{interpretation.emoji}</div>
            <CardTitle className="text-3xl font-black text-white">GG ! Tu as fini ! 🎉</CardTitle>
            <div className="text-6xl">🏆</div>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="bg-black/40 rounded-2xl p-6 border border-white/20">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">{score}/15</h3>
              <p className={`text-xl font-semibold ${interpretation.color}`}>{interpretation.level}</p>
              <p className="text-gray-200">{interpretation.description}</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-400/30">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Star className="text-yellow-400 w-8 h-8" />
                <span className="text-2xl font-bold text-yellow-400">+10 POINTS !</span>
                <Star className="text-yellow-400 w-8 h-8" />
              </div>
              <p className="text-gray-200 text-sm">
                Notre IA va analyser tes réponses et te proposer des activités cool et des conseils 
                personnalisés pour te sentir encore mieux ! 🚀
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/recommandations')} 
                className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 shadow-lg shadow-pink-500/30"
              >
                Voir mes recommandations 🎁
              </Button>
              <Button 
                onClick={() => navigate('/teens')} 
                variant="outline" 
                className="rounded-2xl border-white/30 text-white hover:bg-white/10"
              >
                Retour à l'accueil
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
      </div>

      {/* Header */}
      <header className="border-b border-white/20 bg-black/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/teens')}
              className="flex items-center space-x-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-300 font-semibold">
                Question {currentStep + 1} / {questions.length}
              </div>
              <Progress value={progress} className="w-32 h-2" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Question Card */}
          <Card className="animate-fade-in border-2 border-white/20 bg-black/40 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="text-8xl mb-6 animate-bounce">{currentQuestion.emoji}</div>
              <CardTitle className="text-2xl leading-relaxed text-white font-bold">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={responses[currentQuestion.id] || ""}
                onValueChange={(value) => handleResponse(currentQuestion.id, value)}
                className="space-y-4"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="group">
                    <div className="flex items-center space-x-4 p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/20 hover:border-white/40 cursor-pointer">
                      <RadioGroupItem value={option.value} id={option.value} className="border-white text-white" />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer flex items-center space-x-4">
                        <span className="text-3xl group-hover:scale-110 transition-transform">{option.emoji}</span>
                        <span className="text-lg text-white font-medium">{option.label}</span>
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="rounded-2xl border-white/30 text-white hover:bg-white/10"
                >
                  ← Retour
                </Button>

                {currentStep === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold"
                    disabled={!responses[currentQuestion.id]}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Terminer ! 🎉
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold"
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
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
              <span className="text-lg">Plus que {questions.length - currentStep - 1} question(s) ! Tu gères ! 💪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensQuestionnaire;
