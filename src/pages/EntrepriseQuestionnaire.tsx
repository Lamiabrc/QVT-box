import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EntrepriseQuestionnaire = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: "stress_level",
      category: "Stress et Charge de Travail",
      question: "Comment évaluez-vous votre niveau de stress au travail ces dernières semaines ?",
      type: "radio",
      options: [
        { value: "1", label: "Très faible - Je me sens détendu(e)" },
        { value: "2", label: "Faible - Quelques tensions occasionnelles" },
        { value: "3", label: "Modéré - Stress gérable la plupart du temps" },
        { value: "4", label: "Élevé - Stress fréquent et difficile à gérer" },
        { value: "5", label: "Très élevé - Stress constant et envahissant" }
      ]
    },
    {
      id: "workload",
      category: "Charge de Travail",
      question: "Ma charge de travail actuelle est :",
      type: "radio",
      options: [
        { value: "1", label: "Trop faible - Je ne suis pas assez occupé(e)" },
        { value: "2", label: "Légère - J'aimerais plus de responsabilités" },
        { value: "3", label: "Équilibrée - Parfaitement adaptée" },
        { value: "4", label: "Importante - Parfois difficile à gérer" },
        { value: "5", label: "Excessive - Impossible à tenir sur la durée" }
      ]
    },
    {
      id: "team_relations",
      category: "Relations d'Équipe",
      question: "Comment décririez-vous l'ambiance avec vos collègues ?",
      type: "radio",
      options: [
        { value: "1", label: "Excellente - Très bonne entente et collaboration" },
        { value: "2", label: "Bonne - Relations cordiales et professionnelles" },
        { value: "3", label: "Correcte - Quelques tensions occasionnelles" },
        { value: "4", label: "Difficile - Conflits fréquents ou communication compliquée" },
        { value: "5", label: "Très difficile - Ambiance pesante et conflictuelle" }
      ]
    },
    {
      id: "management",
      category: "Management",
      question: "Vous sentez-vous soutenu(e) par votre hiérarchie ?",
      type: "radio",
      options: [
        { value: "1", label: "Totalement - Support constant et feedback constructif" },
        { value: "2", label: "Plutôt oui - Soutien disponible quand nécessaire" },
        { value: "3", label: "Moyennement - Soutien variable selon les situations" },
        { value: "4", label: "Plutôt non - Sentiment d'être livré(e) à moi-même" },
        { value: "5", label: "Pas du tout - Absence totale de soutien" }
      ]
    },
    {
      id: "work_life_balance",
      category: "Équilibre Vie Pro/Perso",
      question: "Arrivez-vous à maintenir un bon équilibre entre travail et vie personnelle ?",
      type: "radio",
      options: [
        { value: "1", label: "Parfaitement - Excellent équilibre" },
        { value: "2", label: "Plutôt bien - Quelques ajustements mineurs" },
        { value: "3", label: "Moyennement - Difficultés occasionnelles" },
        { value: "4", label: "Difficilement - Le travail empiète souvent" },
        { value: "5", label: "Très mal - Vie personnelle sacrifiée" }
      ]
    },
    {
      id: "recognition",
      category: "Reconnaissance",
      question: "Vous sentez-vous reconnu(e) pour votre travail et vos efforts ?",
      type: "radio",
      options: [
        { value: "1", label: "Totalement - Reconnaissance fréquente et valorisante" },
        { value: "2", label: "Plutôt oui - Reconnaissance occasionnelle" },
        { value: "3", label: "Moyennement - Reconnaissance rare mais présente" },
        { value: "4", label: "Plutôt non - Efforts peu reconnus" },
        { value: "5", label: "Pas du tout - Aucune reconnaissance" }
      ]
    },
    {
      id: "additional_comments",
      category: "Commentaires",
      question: "Souhaitez-vous partager des commentaires supplémentaires ou des suggestions ?",
      type: "textarea",
      placeholder: "Vos commentaires et suggestions (optionnel)..."
    }
  ];

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const numericResponses = Object.entries(responses)
      .filter(([key]) => key !== 'additional_comments')
      .map(([, value]) => parseInt(value) || 0);
    
    if (numericResponses.length === 0) return 0;
    
    const average = numericResponses.reduce((sum, val) => sum + val, 0) / numericResponses.length;
    return Math.round((6 - average) * 3);
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 12) return { level: "Excellent", color: "text-green-600", description: "Très bon niveau de bien-être" };
    if (score >= 9) return { level: "Bon", color: "text-blue-600", description: "Bien-être satisfaisant" };
    if (score >= 6) return { level: "Moyen", color: "text-yellow-600", description: "Quelques points d'amélioration" };
    if (score >= 3) return { level: "Faible", color: "text-orange-600", description: "Attention requise" };
    return { level: "Critique", color: "text-red-600", description: "Intervention urgente recommandée" };
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
      title: "Questionnaire complété !",
      description: `Votre score QVT: ${score}/15`,
    });

    console.log("Responses:", responses);
    console.log("QVT Score:", score);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  if (isCompleted) {
    const score = calculateScore();
    const interpretation = getScoreInterpretation(score);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Questionnaire QVT Complété !</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">{score}/15</h3>
              <p className={`text-lg font-semibold ${interpretation.color}`}>{interpretation.level}</p>
              <p className="text-muted-foreground">{interpretation.description}</p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Vos réponses ont été analysées par notre IA. Vous recevrez bientôt des recommandations personnalisées 
                pour améliorer votre qualité de vie au travail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/recommandations')} className="rounded-2xl">
                Voir mes recommandations
              </Button>
              <Button onClick={() => navigate('/entreprise/dashboard')} variant="outline" className="rounded-2xl">
                Retour au dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/entreprise')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                Question {currentStep + 1} sur {questions.length}
              </div>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Question Card */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                <Target className="w-4 h-4" />
                <span>{currentQuestion.category}</span>
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentQuestion.type === "radio" && currentQuestion.options && (
                <RadioGroup
                  value={responses[currentQuestion.id] || ""}
                  onValueChange={(value) => handleResponse(currentQuestion.id, value)}
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer leading-relaxed">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {currentQuestion.type === "textarea" && (
                <Textarea
                  placeholder={currentQuestion.placeholder}
                  value={responses[currentQuestion.id] || ""}
                  onChange={(e) => handleResponse(currentQuestion.id, e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="rounded-2xl"
                >
                  Précédent
                </Button>

                {currentStep === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    className="rounded-2xl bg-primary"
                    disabled={!responses[currentQuestion.id] && currentQuestion.id !== 'additional_comments'}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Terminer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="rounded-2xl"
                    disabled={!responses[currentQuestion.id]}
                  >
                    Suivant
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicator */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Temps estimé restant: {Math.max(1, questions.length - currentStep - 1)} minute(s)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseQuestionnaire;
