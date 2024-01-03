import { TQuestion } from "~/@types/question";

export function composeCurrentQuestions({
  currentPage,
  size,
  questions,
}: {
  currentPage: number;
  size: number;
  questions: TQuestion[];
}) {
  const currentQuestions = [];
  for (
    let i = (currentPage - 1) * size;
    i < (currentPage - 1) * size + size;
    i++
  ) {
    if (questions?.[i]) {
      currentQuestions.push(questions?.[i]);
    }
  }

  return { currentQuestions };
}
