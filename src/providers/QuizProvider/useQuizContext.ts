import { useContext } from "react";
import { QuizContext } from "./QuizContext";

export function useQuizContext() {
  return useContext(QuizContext);
}
