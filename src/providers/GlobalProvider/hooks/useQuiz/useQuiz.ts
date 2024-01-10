import { useState } from "react";

export function useQuiz() {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);

  return { currentQuiz, setCurrentQuiz };
}
