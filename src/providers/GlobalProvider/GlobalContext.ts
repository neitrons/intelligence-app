import { createContext } from "react";

type TGlobalContextValue = {
  currentQuiz: number;
  setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
};

export const GlobalContext = createContext<TGlobalContextValue>({
  currentQuiz: 0,
  setCurrentQuiz: () => {},
});
