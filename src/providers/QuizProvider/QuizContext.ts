import { createContext } from "react";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";

type TQuizContextValue = {
  currentQuiz: number;
  setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
  correctAnswers: TQuizAnswer[];
  setCorrectAnswers: React.Dispatch<React.SetStateAction<TQuizAnswer[]>>;
};

export const QuizContext = createContext<TQuizContextValue>({
  currentQuiz: 0,
  setCurrentQuiz: () => {},
  correctAnswers: [],
  setCorrectAnswers: () => {},
});
