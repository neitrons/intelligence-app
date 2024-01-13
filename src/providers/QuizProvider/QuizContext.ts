import { createContext } from "react";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";

type TQuizContextValue = {
  quizLength: number;
  currentQuiz: number;
  quizFinished: boolean;
  answerText: string;
  userAnswer: TQuizAnswer | undefined;
  setUserAnswer: React.Dispatch<React.SetStateAction<TQuizAnswer | undefined>>;
  setAnswerText: React.Dispatch<React.SetStateAction<string>>;
  setQuizFinished: React.Dispatch<React.SetStateAction<boolean>>;
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
  quizLength: 15,
  quizFinished: false,
  questions: [],
  answerText: "",
  setAnswerText: () => {},
  setQuestions: () => {},
  setCurrentQuiz: () => {},
  setUserAnswer: () => {},
  userAnswer: undefined,
  userAnswers: [],
  setUserAnswers: () => {},
  skippedQuestions: [],
  setSkippedQuestions: () => {},
  setQuizFinished: () => {},
});
