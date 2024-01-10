import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";

import { QuizHeader } from "~/view/Quiz/QuizHeader";
import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export default function Quiz() {
  const theme = useThemeProvider();
  const { questions } = useStaticData();
  const styles = getStyleSheet({ ...theme });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const randomQuestions = composeRandomQuestions(questions, 15);

  return (
    <View style={styles.container}>
      <QuizHeader />
      <QuizQuestion question={randomQuestions[0]} onAnswer={(data) => {}} />
      <QuizFooter />
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
}
