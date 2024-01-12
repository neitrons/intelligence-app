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

  const {
    questions,
    currentQuiz,
    setQuestions,
    setCurrentQuiz,
    setUserAnswers,
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
          onSupport={() => onAnswerCheck(true)}
        />
      )}
      <QuizFooter
        correctAnswer={correctAnswer}
        answerText={answerText}
        canSkip={currentQuiz !== questions.length - 1}
        onSkip={() => {}}
        onSubmit={() => {
          if (!correctAnswer) onAnswerCheck(false);
          else if (correctAnswer) onAnswerSubmit();
        }}
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
