import { createContext } from "react";
import { TQuestion } from "~/@types/question.types";

export type TMainGameState = {
  questions: TQuestion[];
};

export const mainGameInitialState: TMainGameState = {
  questions: [],
};

export type TMainGameAction = { type: "QUESTIONS"; payload: TQuestion[] };

type TMainGameContextValue = {
  state: TMainGameState;
  dispatch: React.Dispatch<TMainGameAction>;
};

export const MainGameContext = createContext<TMainGameContextValue>({
  state: mainGameInitialState,
  dispatch: () => {},
});
