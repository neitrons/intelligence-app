import { PropsWithChildren, useReducer } from "react";
import {
  StandardContext,
  TStandardAction,
  TStandardState,
  standardInitialState,
} from "./StandardContext";

import { useStaticData } from "../StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "~/utils/composeRandomQuestions";

const standardReducer = (
  state: TStandardState,
  action: TStandardAction
): TStandardState => {
  switch (action.type) {
    case "QUESTIONS":
      return { ...state, questions: action.payload };
    case "RESET": {
      return { ...standardInitialState };
    }
    default:
      return state;
  }
};

export function StandardProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(standardReducer, standardInitialState);

  const { questions } = useStaticData();

  function startGame() {
    if (questions.length === 0) return;
    dispatch({ type: "RESET" });
    const randomQuestions = composeRandomQuestions(
      questions,
      state.questionsLength
    );
    dispatch({ type: "QUESTIONS", payload: randomQuestions });
  }

  return (
    <StandardContext.Provider value={{ startGame, state, dispatch }}>
      {children}
    </StandardContext.Provider>
  );
}
