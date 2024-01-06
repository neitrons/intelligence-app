import { createContext } from "react";

import { TQuestion } from "~/@types/question.types";

type StaticDataContextValue = {
  questions: TQuestion[];
  questionsLoading: boolean;
};

export const StaticDataContext = createContext<StaticDataContextValue>({
  questions: [],
  questionsLoading: false,
});
