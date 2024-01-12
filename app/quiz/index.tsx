import { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizResult } from "~/view/Quiz/QuizResult";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { TQuizAnswer, TQuestion } from "~/@types/question.types";

export default function Quiz() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const [answerText, setAnswerText] = useState<string>("");
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<TQuizAnswer>();

  const {
    questions,
    setQuestions,
    currentQuiz,
    setCurrentQuiz,
    setUserAnswers,
    skippedQuestions,
    setSkippedQuestions,
  } = useQuizContext();

  const correctAnswer = useMemo(
    () => questions[currentQuiz]?.answer === userAnswer?.userAnswer,
    [questions, currentQuiz, userAnswer?.userAnswer]
  );

  function onAnswerCheck(withSupport: boolean = false) {
    if (withSupport) setAnswerText(questions[currentQuiz].answer);

    const new_answer = {
      question: questions[currentQuiz],
      userAnswer: withSupport ? questions[currentQuiz].answer : answerText,
      supported: withSupport,
    };
    if (new_answer.userAnswer === questions[currentQuiz].answer) {
      setUserAnswers((prev) => [...prev, new_answer]);
    }
    setUserAnswer(new_answer);
  }

  function onAnswerSubmit() {
    if (currentQuiz === questions.length - 1) {
      return onQuizEnd(skippedQuestions);
    }
    setCurrentQuiz((prev) => prev + 1);
    setUserAnswer(undefined);
    setAnswerText("");
  }

  function onQuizEnd(newSkippedQuestions: TQuestion[]) {
    if (skippedQuestions.length > 0) {
      setQuestions(newSkippedQuestions);
      setSkippedQuestions([]);
      setCurrentQuiz(0);
      setAnswerText("");
      setUserAnswer(undefined);
    } else {
      setQuestions([]);
      setSkippedQuestions([]);
      setCurrentQuiz(0);
      setAnswerText("");
      setUserAnswer(undefined);
      setQuizFinished(true);
    }
  }

  function onSkipQuiz() {
    const newSkippedQuestions = [...skippedQuestions, questions[currentQuiz]];
    setSkippedQuestions(newSkippedQuestions);
    if (currentQuiz === questions.length - 1) {
      onQuizEnd(newSkippedQuestions);
      return;
    } else if (currentQuiz !== questions.length - 1) {
      setCurrentQuiz((prev) => prev + 1);
    }
  }

  return (
    <View style={styles.container}>
      {quizFinished ? (
        <QuizResult />
      ) : (
        <>
          {questions?.[currentQuiz] && (
            <QuizQuestion
              userAnswer={userAnswer}
              answerText={answerText}
              setAnswerText={setAnswerText}
              question={questions[currentQuiz]}
              onSupport={() => onAnswerCheck(true)}
            />
          )}
          <QuizFooter
            correctAnswer={correctAnswer}
            answerText={answerText}
            canSkip={currentQuiz !== questions.length - 1}
            onSkip={onSkipQuiz}
            onSubmit={() => {
              if (!correctAnswer) onAnswerCheck(false);
              else if (correctAnswer) onAnswerSubmit();
            }}
          />
        </>
      )}
    </View>
  );
}

function getStyleSheet({}: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
}
