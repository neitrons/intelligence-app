import { createContext } from "react";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";

type TQuizContextValue = {
  currentQuiz: number;
  questions: TQuestion[];
  setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
  userAnswers: TQuizAnswer[];
  skippedQuestions: TQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<TQuestion[]>>;
  setSkippedQuestions: React.Dispatch<React.SetStateAction<TQuestion[]>>;
  setUserAnswers: React.Dispatch<React.SetStateAction<TQuizAnswer[]>>;
};

export const QuizContext = createContext<TQuizContextValue>({
  currentQuiz: 0,
  questions: [],
  setQuestions: () => {},
  setCurrentQuiz: () => {},
  userAnswers: [],
  setUserAnswers: () => {},
  skippedQuestions: [],
  setSkippedQuestions: () => {},
});
