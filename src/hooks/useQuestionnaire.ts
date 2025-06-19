import { useMemo } from "react";
import questionsData from "@/data/questions.json";

export type Univers = "teens" | "entreprise" | "famille";

interface Option {
  value: string;
  label: string;
}

interface Question {
  id: string;
  univers: Univers;
  category: string;
  question: string;
  type: "radio" | "textarea";
  options?: Option[];
  placeholder?: string;
  source?: string;
}

export function useQuestionnaire(univers: Univers) {
  const questions = useMemo(() => {
    return (questionsData as Question[]).filter(q => q.univers === univers);
  }, [univers]);

  const radioQuestions = questions.filter(q => q.type === "radio");
  const freeComment = questions.find(q => q.type === "textarea") || null;

  return {
    questions,
    radioQuestions,
    freeComment,
  };
}
