
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { FamilyQuestion } from "@/types/familySimulator";

interface FamilyQuestionCardProps {
  currentQuestion: FamilyQuestion;
  currentStep: number;
  totalSteps: number;
  answer: string | number | undefined;
  onAnswerChange: (value: string | number) => void;
}

const FamilyQuestionCard: React.FC<FamilyQuestionCardProps> = ({
  currentQuestion,
  currentStep,
  totalSteps,
  answer,
  onAnswerChange
}) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const renderQuestionInput = () => {
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
                    variant={answer === value ? "default" : "outline"}
                    className="h-16 text-lg font-semibold"
                    onClick={() => onAnswerChange(value)}
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
                variant={answer === option ? "default" : "outline"}
                className="w-full text-left justify-start h-auto py-4 px-6"
                onClick={() => onAnswerChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        );

      case "text":
        return (
          <Textarea
            value={answer as string || ""}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Tapez votre réponse ici..."
            className="min-h-32"
          />
        );

      default:
        return null;
    }
  };

  return (
    <Card className="shadow-lg border-t-4 border-t-pink-500">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {currentStep + 1} sur {totalSteps}
          </span>
          <span className="text-sm font-medium text-pink-600">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="mb-4" />
        <CardTitle className="text-xl font-semibold leading-relaxed">
          {currentQuestion.text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {renderQuestionInput()}
      </CardContent>
    </Card>
  );
};

export default FamilyQuestionCard;
