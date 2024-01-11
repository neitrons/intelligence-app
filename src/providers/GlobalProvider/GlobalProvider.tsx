import { PropsWithChildren } from "react";
import { GlobalContext } from "./GlobalContext";
import { useQuiz } from "./hooks/useQuiz";

export function GlobalProvider({ children }: PropsWithChildren) {
  const { currentQuiz, setCurrentQuiz, correctAnswers, setCorrectAnswers } =
    useQuiz();

  return (
    <GlobalContext.Provider
      value={{ currentQuiz, setCurrentQuiz, correctAnswers, setCorrectAnswers }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
