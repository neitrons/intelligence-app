import { PropsWithChildren } from "react";
import { GlobalContext } from "./GlobalContext";
import { useQuiz } from "./hooks/useQuiz";

export function GlobalProvider({ children }: PropsWithChildren) {
  const {
    currentQuiz,
    setCurrentQuiz,
    correctAnswers,
    setCorrectAnswers,
    currentQuizQuestion,
    setCurrentQuizQuestion,
  } = useQuiz();

  return (
    <GlobalContext.Provider
      value={{
        currentQuiz,
        setCurrentQuiz,
        correctAnswers,
        setCorrectAnswers,
        currentQuizQuestion,
        setCurrentQuizQuestion,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
