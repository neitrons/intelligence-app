import { createContext } from "react";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";

export type TQuizState = {
  answerText: string;
  userAnswer?: TQuizAnswer;
  currentQuiz: number;
  quizFinished: boolean;
  questions: TQuestion[];
  skippedQuestions: TQuestion[];
  userAnswers: TQuizAnswer[];
  quizLength: number;
};

export type TQuizAction =
  | { type: "ANSWER_TEXT"; payload: string }
  | { type: "USER_ANSWER"; payload?: TQuizAnswer }
  | { type: "CURRENT_QUIZ"; payload: number }
  | { type: "QUIZ_FINISHED"; payload: boolean }
  | { type: "QUESTIONS"; payload: TQuestion[] }
  | { type: "SKIPPED_QUESTIONS"; payload: TQuestion[] }
  | { type: "USER_ANSWERS"; payload: TQuizAnswer[] }
  | { type: "RESET" };

type TQuizContextValue = {
  state: TQuizState;
  dispatch: React.Dispatch<TQuizAction>;
  startQuiz: () => void;
};

export const QuizContext = createContext<TQuizContextValue>({
  dispatch: () => {},
  state: {
    answerText: "",
    quizFinished: false,
    quizLength: 15,
    currentQuiz: 0,
    questions: [],
    userAnswers: [],
    skippedQuestions: [],
  },
  startQuiz: () => {},
});
