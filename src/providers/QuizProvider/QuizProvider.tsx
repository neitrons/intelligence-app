import { QuizContext } from "./QuizContext";
import { PropsWithChildren, useState, useEffect } from "react";
import { TQuestion, TQuizAnswer } from "~/@types/question.types";
import { useStaticData } from "../StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "./utils/composeRandomQuestions";

export function QuizProvider({ children }: PropsWithChildren) {
  const quizLength = 15;
  const { quizQuestions } = useStaticData();

  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [skippedQuestions, setSkippedQuestions] = useState<TQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<TQuizAnswer[]>([]);

  useEffect(() => {
    if (quizQuestions.length === 0) return;
    const randomQuestions = composeRandomQuestions(quizQuestions, quizLength);
    setQuestions(randomQuestions);
  }, [quizQuestions]);

  return (
    <QuizContext.Provider
      value={{
        quizLength,
        questions,
        setQuestions,
        currentQuiz,
        setCurrentQuiz,
        userAnswers,
        setUserAnswers,
        skippedQuestions,
        setSkippedQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
