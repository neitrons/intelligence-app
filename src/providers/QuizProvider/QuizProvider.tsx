import { PropsWithChildren, useState, useEffect, useReducer } from "react";
import { QuizContext } from "./QuizContext";
import { TQuestion, TQuizAnswer } from "~/@types/question.types";

import { composeRandomQuestions } from "./utils/composeRandomQuestions";
import { useStaticData } from "../StaticDataProvider/hooks/useStaticData";

export type TQuizState = {
  answerText: string;
  userAnswer?: TQuizAnswer;
  currentQuiz: number;
  quizFinished: boolean;
  questions: TQuestion[];
  skippedQuestions: TQuestion[];
  userAnswers: TQuizAnswer[];
};

export type TQuizAction =
  | { type: "ANSWER_TEXT"; payload: string }
  | { type: "USER_ANSWER"; payload?: TQuizAnswer }
  | { type: "CURRENT_QUIZ"; payload: number }
  | { type: "QUIZ_FINISHED"; payload: boolean }
  | { type: "QUESTIONS"; payload: TQuestion[] }
  | { type: "SKIPPED_QUESTIONS"; payload: TQuestion[] }
  | { type: "USER_ANSWERS"; payload: TQuizAnswer[] };

const QuizReducer = (state: TQuizState, action: TQuizAction): TQuizState => {
  switch (action.type) {
    case "ANSWER_TEXT":
      return { ...state, answerText: action.payload };
    case "USER_ANSWER":
      return { ...state, userAnswer: action.payload };
    case "CURRENT_QUIZ":
      return { ...state, currentQuiz: action.payload };
    case "QUIZ_FINISHED":
      return { ...state, quizFinished: action.payload };
    case "QUESTIONS":
      return { ...state, questions: action.payload };
    case "SKIPPED_QUESTIONS":
      return { ...state, skippedQuestions: action.payload };
    case "USER_ANSWERS":
      return { ...state, userAnswers: action.payload };
    default:
      return state;
  }
};

export function QuizProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(QuizReducer, {
    answerText: "",
    userAnswer: undefined,
    currentQuiz: 0,
    quizFinished: false,
    questions: [],
    skippedQuestions: [],
    userAnswers: [],
  });

  const quizLength = 15;
  const { quizQuestions } = useStaticData();

  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [skippedQuestions, setSkippedQuestions] = useState<TQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<TQuizAnswer[]>([]);

  useEffect(() => {
    if (quizQuestions.length === 0) return;
    const randomQuestions = composeRandomQuestions(quizQuestions, quizLength);
    setQuestions(randomQuestions);
  }, [quizQuestions]);

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        state,
        quizLength,
        questions,
        setQuestions,
        userAnswers,
        setUserAnswers,
        skippedQuestions,
        setSkippedQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
