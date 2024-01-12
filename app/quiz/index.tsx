import { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { TQuizAnswer } from "~/@types/question.types";

export default function Quiz() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const [answerText, setAnswerText] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<TQuizAnswer>();

  const { currentQuiz, setCurrentQuiz, setCorrectAnswers, questions } =
    useQuizContext();

  const correctAnswer = useMemo(
    () => questions[currentQuiz]?.answer === userAnswer?.userAnswer,
    [questions, currentQuiz, userAnswer?.userAnswer]
  );

  function onAnswerCheck() {
    const new_answer = {
      question: questions[currentQuiz],
      userAnswer: answerText,
    };
    if (answerText === questions[currentQuiz].answer) {
      setCorrectAnswers((prev) => [...prev, new_answer]);
    }
    setUserAnswer(new_answer);
  }

  function onAnswerSubmit() {
    if (currentQuiz === questions.length - 1) {
      return;
    }
    setCurrentQuiz((prev) => prev + 1);
    setUserAnswer(undefined);
    setAnswerText("");
  }

  return (
    <View style={styles.container}>
      {questions?.[currentQuiz] && (
        <QuizQuestion
          userAnswer={userAnswer}
          answerText={answerText}
          setAnswerText={setAnswerText}
          question={questions[currentQuiz]}
        />
      )}
      <QuizFooter
        correctAnswer={correctAnswer}
        answerText={answerText}
        canSkip={currentQuiz !== questions.length - 1}
        onSubmit={() => {
          if (!correctAnswer) onAnswerCheck();
          else if (correctAnswer) onAnswerSubmit();
        }}
        onSkip={() => {}}
      />
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
