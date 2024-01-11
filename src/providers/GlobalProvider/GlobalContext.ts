import { createContext } from "react";
import { TQuizAnswer } from "~/@types/question.types";

type TGlobalContextValue = {
  currentQuiz: number;
  setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
  correctAnswers: TQuizAnswer[];
  setCorrectAnswers: React.Dispatch<React.SetStateAction<TQuizAnswer[]>>;
};

export const GlobalContext = createContext<TGlobalContextValue>({
  currentQuiz: 0,
  setCurrentQuiz: () => {},
  correctAnswers: [],
  setCorrectAnswers: () => {},
});
