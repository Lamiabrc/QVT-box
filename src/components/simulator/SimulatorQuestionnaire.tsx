
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SimulatorType } from "./SimulatorTypeSelector";

interface Question {
  id: string;
  text: string;
  options: { value: string; label: string }[];
}

interface SimulatorQuestionnaireProps {
  simulatorType: SimulatorType;
  onBack: () => void;
  onComplete: (answers: Record<string, string>, score: number) => void;
}

const SimulatorQuestionnaire: React.FC<SimulatorQuestionnaireProps> = ({
  simulatorType,
  onBack,
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const getQuestionsForType = (type: SimulatorType): Question[] => {
    switch (type) {
      case "personal":
        return [
          {
            id: "stress_level",
            text: "Comment évaluez-vous votre niveau de stress au travail ?",
            options: [
              { value: "1", label: "Très faible" },
              { value: "2", label: "Faible" },
              { value: "3", label: "Modéré" },
              { value: "4", label: "Élevé" },
              { value: "5", label: "Très élevé" }
            ]
          },
          {
            id: "work_satisfaction",
            text: "Êtes-vous satisfait(e) de votre travail actuel ?",
            options: [
              { value: "5", label: "Très satisfait(e)" },
              { value: "4", label: "Satisfait(e)" },
              { value: "3", label: "Neutre" },
              { value: "2", label: "Insatisfait(e)" },
              { value: "1", label: "Très insatisfait(e)" }
            ]
          },
          {
            id: "work_life_balance",
            text: "Comment jugez-vous votre équilibre vie professionnelle/personnelle ?",
            options: [
              { value: "5", label: "Excellent équilibre" },
              { value: "4", label: "Bon équilibre" },
              { value: "3", label: "Équilibre correct" },
              { value: "2", label: "Déséquilibre léger" },
              { value: "1", label: "Déséquilibre important" }
            ]
          },
          {
            id: "motivation_level",
            text: "Comment évaluez-vous votre motivation au travail ?",
            options: [
              { value: "5", label: "Très motivé(e)" },
              { value: "4", label: "Motivé(e)" },
              { value: "3", label: "Moyennement motivé(e)" },
              { value: "2", label: "Peu motivé(e)" },
              { value: "1", label: "Pas du tout motivé(e)" }
            ]
          },
          {
            id: "physical_symptoms",
            text: "Ressentez-vous des symptômes physiques liés au stress professionnel ?",
            options: [
              { value: "1", label: "Jamais" },
              { value: "2", label: "Rarement" },
              { value: "3", label: "Parfois" },
              { value: "4", label: "Souvent" },
              { value: "5", label: "Très souvent" }
            ]
          }
        ];
      case "team":
        return [
          {
            id: "team_communication",
            text: "Comment évaluez-vous la communication au sein de votre équipe ?",
            options: [
              { value: "5", label: "Excellente" },
              { value: "4", label: "Bonne" },
              { value: "3", label: "Correcte" },
              { value: "2", label: "Difficile" },
              { value: "1", label: "Très difficile" }
            ]
          },
          {
            id: "team_cohesion",
            text: "Comment décririez-vous la cohésion de votre équipe ?",
            options: [
              { value: "5", label: "Très soudée" },
              { value: "4", label: "Unie" },
              { value: "3", label: "Correcte" },
              { value: "2", label: "Fragmentée" },
              { value: "1", label: "Divisée" }
            ]
          },
          {
            id: "workload_distribution",
            text: "La répartition de la charge de travail est-elle équitable ?",
            options: [
              { value: "5", label: "Parfaitement équitable" },
              { value: "4", label: "Généralement équitable" },
              { value: "3", label: "Acceptable" },
              { value: "2", label: "Inéquitable" },
              { value: "1", label: "Très inéquitable" }
            ]
          },
          {
            id: "team_management",
            text: "Comment évaluez-vous la qualité du management de votre équipe ?",
            options: [
              { value: "5", label: "Excellent" },
              { value: "4", label: "Bon" },
              { value: "3", label: "Correct" },
              { value: "2", label: "Insuffisant" },
              { value: "1", label: "Très mauvais" }
            ]
          },
          {
            id: "team_conflicts",
            text: "À quelle fréquence rencontrez-vous des conflits dans votre équipe ?",
            options: [
              { value: "5", label: "Jamais" },
              { value: "4", label: "Rarement" },
              { value: "3", label: "Parfois" },
              { value: "2", label: "Souvent" },
              { value: "1", label: "Très souvent" }
            ]
          }
        ];
      case "life_event":
        return [
          {
            id: "life_event_type",
            text: "Quel événement de vie traversez-vous actuellement ?",
            options: [
              { value: "birth", label: "Naissance d'un enfant" },
              { value: "divorce", label: "Divorce/Séparation" },
              { value: "bereavement", label: "Deuil" },
              { value: "illness", label: "Maladie (personnelle ou proche)" },
              { value: "moving", label: "Déménagement" },
              { value: "marriage", label: "Mariage" },
              { value: "job_change", label: "Changement professionnel" },
              { value: "other", label: "Autre événement majeur" }
            ]
          },
          {
            id: "event_impact",
            text: "Comment cet événement affecte-t-il votre travail ?",
            options: [
              { value: "1", label: "Impact très positif" },
              { value: "2", label: "Impact positif" },
              { value: "3", label: "Pas d'impact" },
              { value: "4", label: "Impact négatif" },
              { value: "5", label: "Impact très négatif" }
            ]
          },
          {
            id: "support_needed",
            text: "Quel type de soutien vous serait le plus utile ?",
            options: [
              { value: "flexibility", label: "Flexibilité horaire" },
              { value: "workload", label: "Réduction temporaire de charge" },
              { value: "emotional", label: "Soutien émotionnel" },
              { value: "resources", label: "Ressources spécialisées" },
              { value: "time_off", label: "Temps de congé supplémentaire" }
            ]
          },
          {
            id: "adaptation_difficulty",
            text: "Évaluez la difficulté d'adaptation à cette nouvelle situation :",
            options: [
              { value: "1", label: "Très facile" },
              { value: "2", label: "Facile" },
              { value: "3", label: "Modérée" },
              { value: "4", label: "Difficile" },
              { value: "5", label: "Très difficile" }
            ]
          },
          {
            id: "work_productivity",
            text: "Comment cet événement affecte-t-il votre productivité ?",
            options: [
              { value: "1", label: "Améliore ma productivité" },
              { value: "2", label: "Pas d'effet" },
              { value: "3", label: "Légère baisse" },
              { value: "4", label: "Baisse importante" },
              { value: "5", label: "Baisse très importante" }
            ]
          }
        ];
      case "family":
        return [
          {
            id: "family_communication",
            text: "Comment évaluez-vous la communication dans votre famille ?",
            options: [
              { value: "5", label: "Excellente - Nous parlons ouvertement" },
              { value: "4", label: "Bonne - Communication régulière" },
              { value: "3", label: "Correcte - Quelques difficultés" },
              { value: "2", label: "Difficile - Peu d'échanges" },
              { value: "1", label: "Très difficile - Quasi absence de dialogue" }
            ]
          },
          {
            id: "family_stress",
            text: "Quel est le niveau de stress général dans votre foyer ?",
            options: [
              { value: "1", label: "Très calme - Atmosphère détendue" },
              { value: "2", label: "Calme - Tensions occasionnelles" },
              { value: "3", label: "Modéré - Stress gérable" },
              { value: "4", label: "Élevé - Tensions fréquentes" },
              { value: "5", label: "Très élevé - Climat tendu permanent" }
            ]
          },
          {
            id: "teen_wellbeing",
            text: "Comment percevez-vous le bien-être de votre adolescent(e) ?",
            options: [
              { value: "5", label: "Excellent - Épanoui(e) et confiant(e)" },
              { value: "4", label: "Bon - Quelques préoccupations mineures" },
              { value: "3", label: "Moyen - Signaux d'alerte occasionnels" },
              { value: "2", label: "Préoccupant - Changements comportementaux" },
              { value: "1", label: "Très préoccupant - Signes de détresse" }
            ]
          },
          {
            id: "screen_time",
            text: "Comment gérez-vous le temps d'écran dans votre famille ?",
            options: [
              { value: "5", label: "Très bien - Règles claires et respectées" },
              { value: "4", label: "Bien - Quelques négociations" },
              { value: "3", label: "Moyennement - Difficultés occasionnelles" },
              { value: "2", label: "Difficilement - Conflits fréquents" },
              { value: "1", label: "Pas du tout - Usage incontrôlé" }
            ]
          },
          {
            id: "family_activities",
            text: "À quelle fréquence faites-vous des activités ensemble ?",
            options: [
              { value: "5", label: "Très souvent - Activités régulières" },
              { value: "4", label: "Souvent - Plusieurs fois par semaine" },
              { value: "3", label: "Parfois - Weekends principalement" },
              { value: "2", label: "Rarement - Occasions spéciales" },
              { value: "1", label: "Jamais - Chacun de son côté" }
            ]
          }
        ];
      default:
        return [];
    }
  };

  const questions = getQuestionsForType(simulatorType);
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate score
      const numericAnswers = Object.values(answers).map(val => {
        const numVal = parseInt(val);
        return isNaN(numVal) ? 3 : numVal; // Default to 3 for non-numeric answers
      });
      const avgScore = numericAnswers.reduce((sum, val) => sum + val, 0) / numericAnswers.length;
      const score = Math.round(((6 - avgScore) / 5) * 100); // Convert to 0-100 scale, higher is better
      
      onComplete(answers, Math.max(0, Math.min(100, score)));
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const getTypeTitle = (type: SimulatorType) => {
    switch (type) {
      case "personal": return "Évaluation Personnelle";
      case "team": return "Évaluation d'Équipe";
      case "life_event": return "Événement de Vie";
      case "family": return "Évaluation Familiale";
      default: return "Questionnaire";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">{getTypeTitle(simulatorType)}</h2>
        <div className="text-sm text-muted-foreground">
          Question {currentStep + 1} sur {questions.length}
        </div>
      </div>

      <Progress value={progress} className="w-full" />

      <Card>
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">
            {currentQuestion.text}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={answers[currentQuestion.id] || ""}
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{currentStep === 0 ? "Retour" : "Précédent"}</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className="flex items-center space-x-2"
            >
              <span>{currentStep === questions.length - 1 ? "Terminer" : "Suivant"}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulatorQuestionnaire;
