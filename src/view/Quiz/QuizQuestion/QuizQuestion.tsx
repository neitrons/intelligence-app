import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { ScrollView } from "react-native-gesture-handler";

import { SAlert } from "~/components/SAlert";
import { Card } from "~/components/Card";
import { Title } from "~/components/Title";
import { STextInput } from "~/components/STextInput";
import { composeGeoString } from "~/utils/composeGeoChar";
import { TQuestion } from "~/@types/question.types";
import { useQuizContext } from "~/providers/QuizProvider";
import Icon from "react-native-vector-icons/FontAwesome5";

type QuizQuestionProps = {
  question: TQuestion;
  onSupport: () => void;
};

export function QuizQuestion({ question, onSupport }: QuizQuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { state, dispatch } = useQuizContext();
  const correctAnswer = question.answer === state.userAnswer?.userAnswer;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Title>კითხვა #{state.currentQuiz + 1}</Title>
        <TouchableOpacity onPress={onSupport}>
          <Icon name="question-circle" style={styles.supportIcon} />
        </TouchableOpacity>
      </View>
      <Card>
        <Text>{question.questionText}</Text>
      </Card>
      <Title style={styles.title}>შეიყვანეთ პასუხი</Title>
      <STextInput
        placeholder="ერთი სიტყვა"
        value={state.answerText}
        onChangeText={(e) =>
          dispatch({ type: "ANSWER_TEXT", payload: composeGeoString(e) })
        }
      />
      <View style={styles.alertWrapper}>
        {state.userAnswer && correctAnswer && (
          <SAlert type="success" message="პასუხი სწორია" />
        )}
        {state.userAnswer && !correctAnswer && (
          <SAlert type="error" message="პასუხი არასწორია კიდევ სცადეთ" />
        )}
      </View>
    </ScrollView>
  );
}

export function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    title: {
      paddingVertical: sizes.spaceMedium,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: sizes.spaceMedium,
    },
    alertWrapper: {
      width: "100%",
      marginTop: sizes.spaceMedium,
    },
    supportIcon: {
      color: colors.successColor,
      fontSize: sizes.iconSmall,
    },
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
  });
}
