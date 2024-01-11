import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HTML from "react-native-render-html";

import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Card } from "~/components/Card";
import { Title } from "~/components/Title";
import { TQuestion } from "~/@types/question.types";

type QuizQuestionProps = {
  question: TQuestion;
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
