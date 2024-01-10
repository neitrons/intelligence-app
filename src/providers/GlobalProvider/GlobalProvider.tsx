import { PropsWithChildren } from "react";
import { GlobalContext } from "./GlobalContext";

import { useQuiz } from "./hooks/useQuiz";

export function GlobalProvider({ children }: PropsWithChildren) {
  const { currentQuiz, setCurrentQuiz } = useQuiz();

  return (
    <GlobalContext.Provider value={{ currentQuiz, setCurrentQuiz }}>
      {children}
    </GlobalContext.Provider>
  );
}
