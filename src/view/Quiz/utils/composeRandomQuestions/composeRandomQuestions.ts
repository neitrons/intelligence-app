import { TQuestion } from "~/@types/question.types";
import { composeRandomNumbers } from "~/utils/composeRandomNumbers";

export function composeRandomQuestions(
  questions: TQuestion[],
  amount: number
): TQuestion[] {
  const randomQuestions: TQuestion[] = [];
  const randomIndexs = composeRandomNumbers(questions.length, amount);

  randomIndexs.forEach((index) => {
    randomQuestions.push(questions[index]);
  });

  return randomQuestions;
}
