import { useState } from "react";
import { TQuizQuestion } from "../@types/quiz.types";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Card } from "~/components/Card";
import { Title } from "~/components/Title";

type QuizQuestionProps = {
  question: TQuizQuestion;
};

export function QuizQuestion({ question }: QuizQuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  function onAnswerSelect(answer: string) {
    setSelectedAnswer(answer);
    if (answer === question.answer) {
      setIsCorrectAnswer(true);
    }
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
        {question.possibleAnswers.map((possibleAnswer) => {
          const styles = stylesByAnswer(possibleAnswer);
          return (
            <TouchableOpacity
              key={possibleAnswer}
              disabled={!!selectedAnswer}
              onPress={() => onAnswerSelect(possibleAnswer)}
            >
              <Card style={styles}>
                <Text>{possibleAnswer}</Text>
              </Card>
            </TouchableOpacity>
          );
        })}
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
