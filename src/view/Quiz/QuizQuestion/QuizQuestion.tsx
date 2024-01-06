import { View, Text, StyleSheet } from "react-native";
import { TQuizQuestion } from "../@types/quiz.types";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { QuizQuestionHeader } from "./QuizQuestionHeader";
import { QuizQuestionFooter } from "./QuizQuestionFooter";
import { ScrollView } from "react-native-gesture-handler";

type QuizQuestionProps = {
  question: TQuizQuestion;
};

export function QuizQuestion({ question }: QuizQuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <QuizQuestionHeader />
      <ScrollView style={styles.scrollView}>
        <View style={styles.questionBox}>
          <Text>{question.questionText}</Text>
        </View>
      </ScrollView>
      <QuizQuestionFooter />
    </View>
  );
}

export function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
    questionBox: {
      borderWidth: 1,
      padding: sizes.spaceMedium,
      borderRadius: sizes.radiusSmall,
      backgroundColor: colors.primaryBg,
    },
  });
}
