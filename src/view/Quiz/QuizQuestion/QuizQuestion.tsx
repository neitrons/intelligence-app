import { View, Text, StyleSheet } from "react-native";
import { TQuizQuestion } from "../@types/quiz.types";
import { ScrollView } from "react-native-gesture-handler";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Card } from "~/components/Card";
import { Title } from "~/components/Title";

type QuizQuestionProps = {
  question: TQuizQuestion;
};

export function QuizQuestion({ question }: QuizQuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <ScrollView style={styles.scrollView}>
      <Title style={styles.titleStyles}>კითხვა</Title>
      <Card>
        <Text>{question.questionText}</Text>
      </Card>
      <Title style={styles.titleStyles}>პასუხები</Title>
      <View style={styles.answersWrapper}>
        {question.possibleAnswers.map((possibleAnswer) => {
          return (
            <Card key={possibleAnswer}>
              <Text>{possibleAnswer}</Text>
            </Card>
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
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
  });
}
