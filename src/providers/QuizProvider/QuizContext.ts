import { createContext } from "react";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";
import { TQuizAction, TQuizState } from "./QuizProvider";

type TQuizContextValue = {
  state: TQuizState;
  dispatch: React.Dispatch<TQuizAction>;
  quizLength: number;

  questions: TQuestion[];
  userAnswers: TQuizAnswer[];
  skippedQuestions: TQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<TQuestion[]>>;
  setSkippedQuestions: React.Dispatch<React.SetStateAction<TQuestion[]>>;
  setUserAnswers: React.Dispatch<React.SetStateAction<TQuizAnswer[]>>;
};

export const QuizContext = createContext<TQuizContextValue>({
  dispatch: () => {},
  state: {
    answerText: "",
    quizFinished: false,
    currentQuiz: 0,
    questions: [],
    userAnswers: [],
    skippedQuestions: [],
  },

  quizLength: 15,
  questions: [],
  setQuestions: () => {},
  userAnswers: [],
  setUserAnswers: () => {},
  skippedQuestions: [],
  setSkippedQuestions: () => {},
});
