import { PropsWithChildren, useState } from "react";
import { QuizContext } from "./QuizContext";

import { TQuestion, TQuizAnswer } from "~/@types/question.types";

export function QuizProvider({ children }: PropsWithChildren) {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<TQuizAnswer[]>([]);

  return (
    <QuizContext.Provider
      value={{
        currentQuiz,
        setCurrentQuiz,
        correctAnswers,
        setCorrectAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
