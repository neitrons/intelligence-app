import { createContext } from "react";
import { TQuestion, TUserAnswer } from "~/@types/question.types";

export type TStandardState = {
  questions: TQuestion[];
  questionsLength: number;
  userAnswers: TUserAnswer[];
};

export const standardInitialState: TStandardState = {
  questions: [],
  userAnswers: [],
  questionsLength: 12,
};

export type TStandardAction =
  | { type: "QUESTIONS"; payload: TQuestion[] }
  | { type: "ADD_USER_ANSWER"; payload: TUserAnswer }
  | { type: "RESET" };

type TStandardContextValue = {
  state: TStandardState;
  dispatch: React.Dispatch<TStandardAction>;
  prepareGame: () => void;
};

export const StandardContext = createContext<TStandardContextValue>({
  state: standardInitialState,
  dispatch: () => {},
  prepareGame: () => {},
});
