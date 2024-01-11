import { PropsWithChildren } from "react";
import { StaticDataContext } from "./StaticDataContext";
import { useFetchQuestions } from "./hooks/useFetchQuestions";
import { LoadingLayout } from "~/modules/LoadingLayout";
import { useQuizQuestions } from "./hooks/useQuizQuestions";

export function StaticDataProvider({ children }: PropsWithChildren) {
  const { questions, questionsLoading } = useFetchQuestions();
  const { quizQuestions, quizQuestionsLoading } = useQuizQuestions();

  return (
    <StaticDataContext.Provider
      value={{
        questions,
        quizQuestions,
        questionsLoading,
        quizQuestionsLoading,
      }}
    >
      {questionsLoading ? <LoadingLayout /> : children}
    </StaticDataContext.Provider>
  );
}
