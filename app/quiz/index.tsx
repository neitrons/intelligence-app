import { View, StyleSheet } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export default function Quiz() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { questions } = useStaticData();
  const randomQuestions = composeRandomQuestions(questions, 15);

  return (
    <View style={styles.container}>
      <QuizQuestion question={randomQuestions[0]} onAnswer={(data) => {}} />
      <QuizFooter />
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
