import { PropsWithChildren, useReducer } from "react";
import {
  MainGameContext,
  TMainGameAction,
  TMainGameState,
  mainGameInitialState,
} from "./MainGameContext";

const mainGameReducer = (
  state: TMainGameState,
  action: TMainGameAction
): TMainGameState => {
  switch (action.type) {
    case "QUESTIONS":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

export function MainGameProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(mainGameReducer, mainGameInitialState);

  return (
    <MainGameContext.Provider value={{ state, dispatch }}>
      {children}
    </MainGameContext.Provider>
  );
}
