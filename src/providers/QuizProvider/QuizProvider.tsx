import { QuizContext } from "./QuizContext";
import { PropsWithChildren, useState, useEffect } from "react";
import { TQuestion, TQuizAnswer } from "~/@types/question.types";
import { useStaticData } from "../StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "./utils/composeRandomQuestions";

export function QuizProvider({ children }: PropsWithChildren) {
  const { quizQuestions } = useStaticData();

  const [currentQuiz, setCurrentQuiz] = useState<number>(0);
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<TQuizAnswer[]>([]);

  useEffect(() => {
    const randomQuestions = composeRandomQuestions(quizQuestions, 10);
    setQuestions(randomQuestions);
  }, [quizQuestions]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
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
