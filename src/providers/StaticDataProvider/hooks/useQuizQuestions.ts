import { useState, useEffect } from "react";
import { TQuestion } from "~/@types/question.types";
import { axiosGithub } from "~/utils/axiosInstances";

export function useQuizQuestions() {
  const [quizQuestions, setQuizQuestions] = useState<TQuestion[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchQuestions() {
    try {
      setLoading(true);
      const response = await axiosGithub.get("/quiz-questions.json");
      setQuizQuestions(response.data as TQuestion[]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { quizQuestions, quizQuestionsLoading: loading };
}
