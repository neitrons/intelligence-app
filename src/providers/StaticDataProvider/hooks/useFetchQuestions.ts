import { useState, useEffect } from "react";
import { axiosGithub } from "~/utils/axiosInstances";
import { QUESTIONS_KEY } from "~/config/storageKeys";
import Storage from "@react-native-async-storage/async-storage";

export function useFetchQuestions() {
  const [questions, setQuestions] = useState([]);

  async function fetchQuestions() {
    const questionsString = await Storage.getItem(QUESTIONS_KEY);
    const questionsArray = JSON.parse(questionsString as string);
    console.log(questionsArray);

    if (questions.length === 0) {
      const response = await axiosGithub.get("/result.json");
      await Storage.setItem(QUESTIONS_KEY, JSON.stringify(response.data));
      setQuestions(response.data);
      return;
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);
}
