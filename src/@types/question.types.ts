export type TQuestion = {
  answer: string;
  questionText: string;
  pageNumber: number;
  comment?: string;
  sources?: string[];
  questionImage?: string;
};

export type TQuizAnswer = {
  question: TQuestion;
  userAnswer: string;
  supported: boolean;
};
