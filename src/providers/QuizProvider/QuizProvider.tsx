import { QuizContext } from "./QuizContext";
import { PropsWithChildren, useState, useEffect } from "react";
import { TQuestion, TQuizAnswer } from "~/@types/question.types";
import { useStaticData } from "../StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "./utils/composeRandomQuestions";

export function QuizProvider({ children }: PropsWithChildren) {
  const { quizQuestions } = useStaticData();

  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<TQuizAnswer[]>([]);

  useEffect(() => {
    if (quizQuestions.length === 0) return;
    const randomQuestions = composeRandomQuestions(quizQuestions, 5);
    setQuestions(randomQuestions);
  }, [quizQuestions]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuiz,
        setCurrentQuiz,
        userAnswers,
        setUserAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
