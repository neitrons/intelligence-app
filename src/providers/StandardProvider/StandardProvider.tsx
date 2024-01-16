import { PropsWithChildren, useReducer } from "react";
import {
  StandardContext,
  TStandardAction,
  TStandardState,
  standardInitialState,
} from "./StandardContext";

const standardReducer = (
  state: TStandardState,
  action: TStandardAction
): TStandardState => {
  switch (action.type) {
    case "QUESTIONS":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

export function StandardProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(standardReducer, standardInitialState);

  return (
    <StandardContext.Provider value={{ state, dispatch }}>
      {children}
    </StandardContext.Provider>
  );
}
