import { createContext } from "react";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";

type TGlobalContextValue = {
  currentQuiz: number;
  setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
  correctAnswers: TQuizAnswer[];
  setCorrectAnswers: React.Dispatch<React.SetStateAction<TQuizAnswer[]>>;
  currentQuizQuestion: TQuestion[];
  setCurrentQuizQuestion: React.Dispatch<React.SetStateAction<TQuestion[]>>;
};

export const GlobalContext = createContext<TGlobalContextValue>({
  currentQuiz: 0,
  setCurrentQuiz: () => {},
  correctAnswers: [],
  setCorrectAnswers: () => {},
  currentQuizQuestion: [],
  setCurrentQuizQuestion: () => {},
});
