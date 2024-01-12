import { useState, useMemo, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { TQuestion, TQuizAnswer } from "~/@types/question.types";
import { useQuizContext } from "~/providers/QuizProvider";

export default function Quiz() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { quizQuestions } = useStaticData();

  const [answerText, setAnswerText] = useState<string>("");
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState<TQuizAnswer>();
  const { currentQuiz, setCurrentQuiz, setCorrectAnswers } = useQuizContext();

  const correctAnswer = useMemo(
    () => questions[currentQuiz]?.answer === userAnswer?.userAnswer,
    [questions, currentQuiz, userAnswer?.userAnswer]
  );

  function onAnswerCheck() {
    const newAnswer = {
      question: questions[currentQuiz],
      userAnswer: answerText,
    };
    if (answerText === questions[currentQuiz].answer) {
      setCorrectAnswers((prev) => [...prev, newAnswer]);
    }
    setUserAnswer(newAnswer);
  }

  function onAnswerSubmit() {
    if (currentQuiz === questions.length - 1) {
      return;
    }
    setCurrentQuiz((prev) => prev + 1);
    setUserAnswer(undefined);
    setAnswerText("");
  }

  useEffect(() => {
    const randomQuestions = composeRandomQuestions(quizQuestions, 5);
    setQuestions(randomQuestions);
  }, [quizQuestions]);

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
