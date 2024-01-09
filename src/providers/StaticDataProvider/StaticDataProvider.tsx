import { PropsWithChildren } from "react";
import { StaticDataContext } from "./StaticDataContext";
import { useFetchQuestions } from "./hooks/useFetchQuestions";
import { LoadingLayout } from "~/modules/LoadingLayout";

export function StaticDataProvider({ children }: PropsWithChildren) {
  const { questions, questionsLoading } = useFetchQuestions();

  return (
    <StaticDataContext.Provider value={{ questions, questionsLoading }}>
      {questionsLoading ? <LoadingLayout /> : children}
    </StaticDataContext.Provider>
  );
}
