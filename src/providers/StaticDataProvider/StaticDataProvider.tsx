import { PropsWithChildren } from "react";
import { StaticDataContext } from "./StaticDataContext";
import { useFetchQuestions } from "./hooks/useFetchQuestions";
import { MainSkeleton } from "~/components/MainSkeleton";
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
      {true ? <MainSkeleton /> : children}
    </StaticDataContext.Provider>
  );
}
