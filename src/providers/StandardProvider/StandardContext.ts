import { createContext } from "react";
import { TQuestion, TUserAnswer } from "~/@types/question.types";

export type TStandardState = {
  supports: number;
  timerUsed: boolean;
  userAnswered: boolean;
  questions: TQuestion[];
  currentQuestion: number;
  questionsLength: number;
  userAnswers: TUserAnswer[];
  supportUsed: boolean;
  finished: boolean;
};

export const standardInitialState: TStandardState = {
  questions: [],
  userAnswers: [],
  supports: 0,
  currentQuestion: 0,
  questionsLength: 12,
  timerUsed: false,
  userAnswered: false,
  supportUsed: false,
  finished: true,
};

export type TStandardAction =
  | { type: "QUESTIONS"; payload: TQuestion[] }
  | { type: "ON_QUESTION_ANSWERED"; payload: boolean }
  | { type: "ON_NEXT_QUESTION" }
  | { type: "SET_TIMER_USED"; payload: boolean }
  | { type: "USE_SUPPORT" }
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
