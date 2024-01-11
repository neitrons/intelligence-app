import { TQuestion } from "~/@types/question.types";

export type TQuizQuestion = { possibleAnswers: string[] } & TQuestion;

export type TUserAnswer = {
  question: TQuizQuestion;
  userAnswer: string;
  isCorrectAnswer: boolean;
};
