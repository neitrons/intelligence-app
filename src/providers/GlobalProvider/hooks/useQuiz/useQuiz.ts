import { useState } from "react";
import { TQuestion, TQuizAnswer } from "~/@types/question.types";

export function useQuiz() {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<TQuizAnswer[]>([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState<TQuestion[]>(
    []
  );

  return {
    currentQuiz,
    setCurrentQuiz,
    correctAnswers,
    setCorrectAnswers,
    currentQuizQuestion,
    setCurrentQuizQuestion,
  };
}
