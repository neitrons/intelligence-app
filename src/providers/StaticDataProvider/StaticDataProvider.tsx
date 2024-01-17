import { PropsWithChildren } from "react";
import { StaticDataContext } from "./StaticDataContext";
import { useFetchQuestions } from "./hooks/useFetchQuestions";
import { useQuizQuestions } from "./hooks/useQuizQuestions";

import { MainSkeleton } from "~/components/MainSkeleton";

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
      {questionsLoading || quizQuestionsLoading ? <MainSkeleton /> : children}
    </StaticDataContext.Provider>
  );
}
