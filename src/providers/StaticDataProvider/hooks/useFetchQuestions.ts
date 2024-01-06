import { useState, useEffect } from "react";
import { axiosGithub } from "~/utils/axiosInstances";
import { QUESTIONS_KEY } from "~/config/storageKeys";

import Storage from "@react-native-async-storage/async-storage";
import { TQuestion } from "~/@types/question.types";

export function useFetchQuestions() {
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchQuestions() {
    setLoading(true);
    const questionsString = await Storage.getItem(QUESTIONS_KEY);

    if (questionsString !== null) {
      setQuestions(JSON.parse(questionsString) as TQuestion[]);
    } else {
      const response = await axiosGithub.get("/result.json");
      await Storage.setItem(QUESTIONS_KEY, JSON.stringify(response.data));
      setQuestions(response.data as TQuestion[]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { questions, questionsLoading: loading };
}
