
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart } from "lucide-react";

interface FamilyQuestion {
  id: string;
  text: string;
  type: "emoji_scale" | "fun_multiple_choice" | "creative_text" | "story_choice" | "animated_slider";
  scale?: { min: number; max: number; emojis?: string[]; labels?: string[]; unit?: string };
  options?: Array<{ text: string; emoji: string; points?: number; story?: string }>;
  placeholder?: string;
  suggestions?: string[];
}

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
  const [selectedStory, setSelectedStory] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const renderQuestionInput = () => {
    switch (currentQuestion.type) {
      case "emoji_scale":
        const scale = currentQuestion.scale || { min: 1, max: 5, emojis: [], labels: [] };
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: scale.max - scale.min + 1 }, (_, i) => {
                const value = scale.min + i;
                const emoji = scale.emojis?.[i] || "⭐";
                return (
                  <Button
                    key={value}
                    variant={answer === value ? "default" : "outline"}
                    className={`h-20 text-3xl font-bold transition-all duration-300 transform hover:scale-110 ${
                      answer === value ? 'bg-pink-500 border-pink-500 shadow-lg animate-pulse' : 'hover:bg-pink-50'
                    }`}
                    onClick={() => onAnswerChange(value)}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl">{emoji}</span>
                      <span className="text-xs mt-1">{value}</span>
                    </div>
                  </Button>
                );
              })}
            </div>
            {scale.labels && scale.labels.length > 0 && (
              <div className="flex justify-between text-sm text-gray-600 px-2">
                <span className="flex items-center gap-1">
                  <span>{scale.emojis?.[0]}</span>
                  {scale.labels[0]}
                </span>
                <span className="flex items-center gap-1">
                  {scale.labels[1]}
                  <span>{scale.emojis?.[scale.emojis.length - 1]}</span>
                </span>
              </div>
            )}
          </div>
        );

      case "fun_multiple_choice":
        return (
          <div className="space-y-4">
            {currentQuestion.options?.map((option, index) => (
              <Button
                key={index}
                variant={answer === option.text ? "default" : "outline"}
                className={`w-full text-left justify-start h-auto py-6 px-6 transition-all duration-300 ${
                  answer === option.text 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105' 
                    : 'hover:bg-pink-50 hover:border-pink-300 hover:transform hover:scale-102'
                }`}
                onClick={() => onAnswerChange(option.text)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{option.emoji}</span>
                  <div className="flex-1">
                    <span className="text-lg">{option.text}</span>
                    {option.points && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        +{option.points} pts
                      </Badge>
                    )}
                  </div>
                  {answer === option.text && (
                    <Sparkles className="w-5 h-5 animate-spin" />
                  )}
                </div>
              </Button>
            ))}
          </div>
        );

      case "creative_text":
        return (
          <div className="space-y-4">
            <div className="relative">
              <Textarea
                value={answer as string || ""}
                onChange={(e) => onAnswerChange(e.target.value)}
                placeholder={currentQuestion.placeholder || "Raconte-nous..."}
                className="min-h-32 text-lg border-2 border-pink-200 focus:border-pink-400 rounded-xl"
                onFocus={() => setShowSuggestions(true)}
              />
              <Heart className="absolute top-3 right-3 w-5 h-5 text-pink-400" />
            </div>
            
            {showSuggestions && currentQuestion.suggestions && (
              <div className="bg-pink-50 p-4 rounded-xl border border-pink-200">
                <p className="text-sm text-pink-600 mb-3 font-medium">💡 Quelques idées pour t'inspirer :</p>
                <div className="flex flex-wrap gap-2">
                  {currentQuestion.suggestions.map((suggestion, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="text-xs border-pink-300 hover:bg-pink-100"
                      onClick={() => {
                        const currentText = (answer as string) || "";
                        const newText = currentText ? `${currentText}, ${suggestion}` : suggestion;
                        onAnswerChange(newText);
                      }}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case "story_choice":
        return (
          <div className="space-y-4">
            {currentQuestion.options?.map((option, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  answer === option.text
                    ? 'ring-2 ring-pink-400 bg-gradient-to-r from-pink-50 to-purple-50 transform scale-105'
                    : 'hover:shadow-md hover:transform hover:scale-102'
                }`}
                onClick={() => {
                  onAnswerChange(option.text);
                  if (option.story) setSelectedStory(option.story);
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{option.emoji}</span>
                    <div className="flex-1">
                      <p className="text-lg font-medium">{option.text}</p>
                      {answer === option.text && option.story && (
                        <p className="text-pink-600 mt-2 text-sm italic animate-fade-in">
                          {option.story}
                        </p>
                      )}
                    </div>
                    {answer === option.text && (
                      <Sparkles className="w-5 h-5 text-pink-500 animate-spin" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "animated_slider":
        const sliderScale = currentQuestion.scale || { min: 0, max: 100, emojis: [], unit: "%" };
        const sliderValue = typeof answer === 'number' ? answer : sliderScale.min;
        const emojiIndex = Math.floor((sliderValue / sliderScale.max) * (sliderScale.emojis?.length || 1));
        const currentEmoji = sliderScale.emojis?.[Math.min(emojiIndex, (sliderScale.emojis?.length || 1) - 1)] || "😊";
        
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4 transition-all duration-300 transform hover:scale-110">
                {currentEmoji}
              </div>
              <div className="text-3xl font-bold text-pink-600 mb-2">
                {sliderValue}{sliderScale.unit || ""}
              </div>
            </div>
            
            <div className="px-4">
              <Slider
                value={[sliderValue]}
                onValueChange={(value) => onAnswerChange(value[0])}
                max={sliderScale.max}
                min={sliderScale.min}
                step={1}
                className="w-full"
              />
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 px-4">
              <span>{sliderScale.min}{sliderScale.unit || ""}</span>
              <span>{sliderScale.max}{sliderScale.unit || ""}</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="shadow-xl border-t-4 border-t-pink-500 bg-gradient-to-br from-white to-pink-50">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline" className="text-pink-600 border-pink-300">
            Question {currentStep + 1} sur {totalSteps}
          </Badge>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-pink-600">
              {Math.round(progress)}%
            </span>
            <Sparkles className="w-4 h-4 text-pink-500" />
          </div>
        </div>
        <Progress value={progress} className="mb-6 h-3 bg-pink-100" />
        <CardTitle className="text-2xl font-bold leading-relaxed bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {currentQuestion.text}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {renderQuestionInput()}
      </CardContent>
    </Card>
  );
};

export default FamilyQuestionCard;
