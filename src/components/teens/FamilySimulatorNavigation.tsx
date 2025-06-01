
import React from 'react';
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FamilySimulatorNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isCurrentQuestionAnswered: boolean;
  isLoading: boolean;
}

const FamilySimulatorNavigation: React.FC<FamilySimulatorNavigationProps> = ({
  onPrevious,
  onNext,
  isFirstStep,
  isLastStep,
  isCurrentQuestionAnswered,
  isLoading
}) => {
  return (
    <CardContent>
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isFirstStep}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Précédent</span>
        </Button>

        <Button
          onClick={onNext}
          disabled={!isCurrentQuestionAnswered || isLoading}
          className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700"
        >
          <span>
            {isLoading ? "Calcul en cours..." : isLastStep ? "Terminer" : "Suivant"}
          </span>
          {!isLoading && <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
    </CardContent>
  );
};

export default FamilySimulatorNavigation;
