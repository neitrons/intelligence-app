import { createContext } from "react";
import { TQuestion, TUserAnswer } from "~/@types/question.types";

export type TStandardState = {
  questions: TQuestion[];
  currentQuestion: number;
  questionsLength: number;
  supports: number;
  userAnswers: TUserAnswer[];
  timerUsed: boolean;
  userAnswered: boolean;
};

export const standardInitialState: TStandardState = {
  questions: [],
  userAnswers: [],
  supports: 3,
  currentQuestion: 0,
  questionsLength: 12,
  timerUsed: false,
  userAnswered: false,
};

export type TStandardAction =
  | { type: "QUESTIONS"; payload: TQuestion[] }
  | { type: "ADD_USER_ANSWER"; payload: TUserAnswer }
  | { type: "ADD_SUPPORT" }
  | { type: "REMOVE_SUPPORT" }
  | { type: "RESET" }
  | { type: "NEXT_QUESTION" }
  | { type: "SET_USER_ANSWERED"; payload: boolean }
  | { type: "TIMER_USED"; payload: boolean };

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
