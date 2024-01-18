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
    case "ADD_USER_ANSWER": {
      state.userAnswers.push(action.payload);
      return { ...state };
    }
    case "ADD_SUPPORT": {
      return { ...state, supports: ++state.supports };
    }
    case "REMOVE_SUPPORT": {
      return { ...state, supports: --state.supports };
    }
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

  function prepareGame() {
    if (questions.length === 0) return;
    dispatch({ type: "RESET" });
    const randomQuestions = composeRandomQuestions(
      questions,
      state.questionsLength
    );
    dispatch({ type: "QUESTIONS", payload: randomQuestions });
  }

  return (
    <StandardContext.Provider value={{ prepareGame, state, dispatch }}>
      {children}
    </StandardContext.Provider>
  );
}
