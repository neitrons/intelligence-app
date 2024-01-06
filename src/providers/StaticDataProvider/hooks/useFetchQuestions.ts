import { useState, useEffect } from "react";
import { TQuestion } from "~/@types/question.types";
import { axiosGithub } from "~/utils/axiosInstances";

export function useFetchQuestions() {
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchQuestions() {
    try {
      setLoading(true);
      const response = await axiosGithub.get("/result.json");
      setQuestions(response.data as TQuestion[]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { questions, questionsLoading: loading };
}
