import { PropsWithChildren, useReducer } from "react";
import {
  QuizContext,
  TQuizState,
  TQuizAction,
  quizInitialState,
} from "./QuizContext";
import { composeRandomQuestions } from "~/utils/composeRandomQuestions";

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
    case "RESET": {
      return { ...quizInitialState };
    }
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
    quizLength: 15,
  });
  const { quizQuestions } = useStaticData();

  function startQuiz() {
    if (quizQuestions.length === 0) return;
    dispatch({ type: "RESET" });
    const randomQuestions = composeRandomQuestions(
      quizQuestions,
      state.quizLength
    );
    dispatch({ type: "QUESTIONS", payload: randomQuestions });
  }

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        state,
        startQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
