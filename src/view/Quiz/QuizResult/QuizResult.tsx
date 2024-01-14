import { StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { useQuizContext } from "~/providers/QuizProvider";

import { Title } from "~/components/Title";
import { Card } from "~/components/Card";
import { ScrollView } from "react-native-gesture-handler";

export function QuizResult() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const { state } = useQuizContext();

  const correctAnswers = state.userAnswers?.filter(
    (answer) => answer.supported === false
  );
  const supportedAnswers = state.userAnswers?.filter(
    (state) => state.supported === true
  );

  return (
    <ScrollView style={styles.scrollView}>
      <Title>შედეგები</Title>
      <Card style={styles.answerBox}>
        <Title size="small">სწორი პასუხები: {correctAnswers.length}</Title>
        <Title size="small">
          გამოყენებული დახმარება: {supportedAnswers.length}
        </Title>
      </Card>
    </ScrollView>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    scrollView: {
      padding: sizes.spaceMedium,
    },
    answerBox: {
      marginTop: sizes.spaceMedium,
    },
  });
}
