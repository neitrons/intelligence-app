import { PropsWithChildren } from "react";
import { StaticDataContext } from "./StaticDataContext";
import { useFetchQuestions } from "./hooks/useFetchQuestions";

export function StaticDataProvider({ children }: PropsWithChildren) {
  const { questions, questionsLoading } = useFetchQuestions();

  return (
    <StaticDataContext.Provider value={{ questions, questionsLoading }}>
      {children}
    </StaticDataContext.Provider>
  );
}
