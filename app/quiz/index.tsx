import { useState, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { TQuizAnswer } from "~/@types/question.types";
import { useGlobalContext } from "~/providers/GlobalProvider";

export default function Quiz() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { quizQuestions } = useStaticData();

  const randomQuestions = useMemo(
    () => composeRandomQuestions(quizQuestions, 15),
    [quizQuestions]
  );

  const [answerText, setAnswerText] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<TQuizAnswer>();
  const { currentQuiz, setCurrentQuiz, correctAnswers, setCorrectAnswers } =
    useGlobalContext();

  const correctAnswer = useMemo(
    () => randomQuestions[currentQuiz]?.answer === userAnswer?.userAnswer,
    [randomQuestions, currentQuiz, userAnswer?.userAnswer]
  );

  function onSubmit() {
    if (!correctAnswer) {
      const newAnswer = {
        question: randomQuestions[currentQuiz],
        userAnswer: answerText,
      };
      if (answerText === randomQuestions[currentQuiz].answer) {
        setCorrectAnswers((prev) => [...prev, newAnswer]);
      }
      setUserAnswer(newAnswer);
    } else if (correctAnswer && currentQuiz !== randomQuestions.length - 1) {
      setCurrentQuiz((prev) => prev + 1);
      setUserAnswer(undefined);
      setAnswerText("");
    }
  }

  return (
    <View style={styles.container}>
      <Text>{correctAnswers.length}</Text>
      <QuizQuestion
        userAnswer={userAnswer}
        answer={answerText}
        correctAnswer={correctAnswer}
        setAnswer={setAnswerText}
        question={randomQuestions[currentQuiz]}
      />
      <QuizFooter
        correctAnswer={correctAnswer}
        answerText={answerText}
        onSubmit={onSubmit}
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
