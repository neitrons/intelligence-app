import { useState } from "react";
import { TQuizQuestion } from "../@types/quiz.types";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Card } from "~/components/Card";
import { Title } from "~/components/Title";

type TOnAnswerArgs = {
  userAnswer: string;
  question: TQuizQuestion;
  isCorrectAnswer: boolean;
};

type QuizQuestionProps = {
  question: TQuizQuestion;
  onAnswer: (data: TOnAnswerArgs) => void;
};

export function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  function onAnswerSelect(answer: string) {
    const isCorrect = answer === question.answer;
    setSelectedAnswer(answer);
    setIsCorrectAnswer(isCorrect);
    onAnswer({ question, isCorrectAnswer: isCorrect, userAnswer: answer });
  }

  function stylesByAnswer(currentQuestion: string) {
    if (selectedAnswer && selectedAnswer === currentQuestion) {
      return isCorrectAnswer
        ? styles.correctAnswerBox
        : styles.incorrectAnswerBox;
    }
    return;
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Title style={styles.titleStyles}>კითხვა</Title>
      <Card>
        <Text>{question.questionText}</Text>
      </Card>
      <Title style={styles.titleStyles}>პასუხები</Title>
      <View style={styles.answersWrapper}>
        {question.possibleAnswers.map((possibleAnswer) => (
          <TouchableOpacity
            key={possibleAnswer}
            disabled={!!selectedAnswer}
            onPress={() => onAnswerSelect(possibleAnswer)}
          >
            <Card style={stylesByAnswer(possibleAnswer)}>
              <Text>{possibleAnswer}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    titleStyles: { paddingVertical: sizes.spaceMedium },
    answersWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: sizes.spaceMedium,
    },
    correctAnswerBox: {
      borderColor: colors.successColor,
    },
    incorrectAnswerBox: {
      borderColor: colors.errorColor,
    },
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
  });
}
