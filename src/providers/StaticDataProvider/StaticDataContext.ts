import { createContext } from "react";

import { TQuestion } from "~/@types/question";

type StaticDataContextValue = {
  questions: TQuestion[];
  questionsLoading: boolean;
};

export const StaticDataContext = createContext<StaticDataContextValue>({
  questions: [],
  questionsLoading: false,
});
