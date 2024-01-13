import { PropsWithChildren, useEffect, useReducer } from "react";
import { QuizContext, TQuizState, TQuizAction } from "./QuizContext";
import { composeRandomQuestions } from "./utils/composeRandomQuestions";

import { useStaticData } from "../StaticDataProvider/hooks/useStaticData";

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

  useEffect(() => {
    if (quizQuestions.length === 0) return;
    const randomQuestions = composeRandomQuestions(quizQuestions, quizLength);
    dispatch({ type: "QUESTIONS", payload: randomQuestions });
  }, [quizQuestions]);

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        state,
        quizLength,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
