import { TQuestion } from "~/@types/question.types";
import { TQuizQuestion } from "../../@types/quiz.types";
import { composeRandomNumbers } from "~/utils/composeRandomNumbers";

export function composeRandomQuestions(
  questions: TQuestion[],
  amount: number
): TQuizQuestion[] {
  const randomQuestions: TQuizQuestion[] = [];
  const randomIndexs = composeRandomNumbers(questions.length, amount);

  randomIndexs.forEach((index) => {
    const randomQuestion: TQuizQuestion = questions[index] as TQuizQuestion;
    randomQuestion.possibleAnswers = [];
    randomQuestions.push(randomQuestion);
  });

  randomQuestions.map((question) => {
    const randomAnswers = composeRandomAnswers(question, questions, 4);
    question.possibleAnswers = randomAnswers;
  });

  return randomQuestions;
}

export function composeRandomAnswers(
  question: TQuestion,
  questions: TQuestion[],
  amount: number
) {
  const randomAnswers: Set<string> = new Set();
  randomAnswers.add(question.answer);

  while (randomAnswers.size !== amount) {
    const randomNumber = Math.floor(Math.random() * questions.length);
    randomAnswers.add(questions[randomNumber].answer);
  }

  return Array.from(randomAnswers).sort(() => Math.random() - 0.5);
}
