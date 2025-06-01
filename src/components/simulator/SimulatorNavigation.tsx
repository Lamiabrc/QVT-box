
import React from 'react';
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, SkipForward } from "lucide-react";

interface SimulatorNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isCurrentQuestionAnswered: boolean;
  isLoading: boolean;
  showSkip?: boolean;
}

const SimulatorNavigation: React.FC<SimulatorNavigationProps> = ({
  onPrevious,
  onNext,
  isFirstStep,
  isLastStep,
  isCurrentQuestionAnswered,
  isLoading,
  showSkip = false
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

        <div className="flex space-x-3">
          {showSkip && (
            <Button
              variant="outline"
              onClick={onNext}
              className="flex items-center space-x-2"
            >
              <SkipForward className="w-4 h-4" />
              <span>Passer</span>
            </Button>
          )}

          <Button
            onClick={onNext}
            disabled={!isCurrentQuestionAnswered || isLoading}
            className="flex items-center space-x-2"
          >
            <span>
              {isLoading ? "Calcul en cours..." : isLastStep ? "Terminer" : "Suivant"}
            </span>
            {!isLoading && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </CardContent>
  );
};

export default SimulatorNavigation;
