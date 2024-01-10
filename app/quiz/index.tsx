import { View, StyleSheet } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";

import { QuizFooter } from "~/view/Quiz/QuizFooter";
import { QuizQuestion } from "~/view/Quiz/QuizQuestion";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { useGlobalContext } from "~/providers/GlobalProvider";

export default function Quiz() {
  const { currentQuiz, setCurrentQuiz } = useGlobalContext();

  const theme = useThemeProvider();
  const { questions } = useStaticData();
  const styles = getStyleSheet({ ...theme });
  const randomQuestions = composeRandomQuestions(questions, 15);

  return (
    <View style={styles.container}>
      <QuizQuestion
        question={randomQuestions[currentQuiz]}
        onAnswer={(data) => {}}
      />
      <QuizFooter onNext={() => setCurrentQuiz(currentQuiz + 1)} />
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
