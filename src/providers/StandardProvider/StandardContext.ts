import { createContext } from "react";
import { TQuestion } from "~/@types/question.types";

export type TStandardState = {
  questions: TQuestion[];
  questionsLength: number;
};

export const standardInitialState: TStandardState = {
  questions: [],
  questionsLength: 12,
};

export type TStandardAction =
  | { type: "QUESTIONS"; payload: TQuestion[] }
  | { type: "RESET" };

type TStandardContextValue = {
  state: TStandardState;
  dispatch: React.Dispatch<TStandardAction>;
  startGame: () => void;
};

export const StandardContext = createContext<TStandardContextValue>({
  state: standardInitialState,
  dispatch: () => {},
  startGame: () => {},
});
