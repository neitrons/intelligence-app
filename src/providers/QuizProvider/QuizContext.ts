import { createContext } from "react";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";

type TQuizContextValue = {
  currentQuiz: number;
  questions: TQuestion[];
  setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
  correctAnswers: TQuizAnswer[];
  setQuestions: React.Dispatch<React.SetStateAction<TQuestion[]>>;
  setCorrectAnswers: React.Dispatch<React.SetStateAction<TQuizAnswer[]>>;
};

export const QuizContext = createContext<TQuizContextValue>({
  currentQuiz: 0,
  questions: [],
  setQuestions: () => {},
  setCurrentQuiz: () => {},
  correctAnswers: [],
  setCorrectAnswers: () => {},
});
