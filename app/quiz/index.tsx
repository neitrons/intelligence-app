import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";

import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export default function Quiz() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { questions } = useStaticData();
  const randomQuestions = composeRandomQuestions(questions, 15);

  return (
    <View style={styles.container}>
      <Text></Text>
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
