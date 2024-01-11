import { useState } from "react";
import { TQuizAnswer } from "~/@types/question.types";

export function useQuiz() {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<TQuizAnswer[]>([]);

  return { currentQuiz, setCurrentQuiz, correctAnswers, setCorrectAnswers };
}
