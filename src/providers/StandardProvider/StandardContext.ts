import { createContext } from "react";
import { TQuestion } from "~/@types/question.types";

export type TStandardState = {
  questions: TQuestion[];
};

export const standardInitialState: TStandardState = {
  questions: [],
};

export type TStandardAction = { type: "QUESTIONS"; payload: TQuestion[] };

type TStandardContextValue = {
  state: TStandardState;
  dispatch: React.Dispatch<TStandardAction>;
};

export const StandardContext = createContext<TStandardContextValue>({
  state: standardInitialState,
  dispatch: () => {},
});
