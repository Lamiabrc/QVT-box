
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X } from "lucide-react";
import { Question, SimulatorResponse } from "@/types/simulator";

interface QuestionWithCommentsProps {
  question: Question;
  response: SimulatorResponse | undefined;
  onResponseChange: (questionId: string, value: number | string, comment?: string) => void;
}

const QuestionWithComments: React.FC<QuestionWithCommentsProps> = ({
  question,
  response,
  onResponseChange
}) => {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState(response?.comment || '');

  const handleValueChange = (value: number | string) => {
    onResponseChange(question.id, value, comment);
  };

  const handleCommentChange = (newComment: string) => {
    setComment(newComment);
    onResponseChange(question.id, response?.value || '', newComment);
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case "scale":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: question.scale.max - question.scale.min + 1 }, (_, i) => {
                const value = question.scale.min + i;
                return (
                  <Button
                    key={value}
                    variant={response?.value === value ? "default" : "outline"}
                    className={`h-12 ${response?.value === value ? 'bg-blue-500' : ''}`}
                    onClick={() => handleValueChange(value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{question.scale.labels[0]}</span>
              <span>{question.scale.labels[1]}</span>
            </div>
          </div>
        );

      case "multiple_choice":
        return (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={response?.value === option.value ? "default" : "outline"}
                className={`w-full text-left justify-start h-auto py-4 px-4 ${
                  response?.value === option.value ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleValueChange(option.value)}
              >
                <div className="flex items-center space-x-3">
                  {option.emoji && <span className="text-xl">{option.emoji}</span>}
                  <span>{option.text}</span>
                </div>
              </Button>
            ))}
          </div>
        );

      case "text":
        return (
          <Textarea
            value={response?.value as string || ""}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder={question.placeholder || "Votre réponse..."}
            className="min-h-24"
            maxLength={question.maxLength}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold leading-relaxed">
              {question.text}
            </h3>
            {question.category && (
              <Badge variant="secondary">{question.category}</Badge>
            )}
          </div>

          {renderQuestionInput()}

          {/* Section commentaire */}
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowComment(!showComment)}
                className="flex items-center space-x-2 text-gray-600"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {showComment ? 'Masquer le commentaire' : 'Ajouter un commentaire'}
                </span>
              </Button>
              {comment && !showComment && (
                <Badge variant="outline">Commentaire ajouté</Badge>
              )}
            </div>

            {showComment && (
              <div className="space-y-2">
                <Textarea
                  value={comment}
                  onChange={(e) => handleCommentChange(e.target.value)}
                  placeholder="Ajoutez un commentaire pour expliquer votre choix ou donner plus de contexte..."
                  className="min-h-20 text-sm"
                  maxLength={500}
                />
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Optionnel - visible uniquement par vous</span>
                  <span>{comment.length}/500</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionWithComments;
