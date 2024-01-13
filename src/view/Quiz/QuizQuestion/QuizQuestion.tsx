import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { SAlert } from "~/components/SAlert";
import { Card } from "~/components/Card";
import { Title } from "~/components/Title";
import { STextInput } from "~/components/STextInput";
import { composeGeoString } from "~/utils/composeGeoChar";
import { TQuestion, TQuizAnswer } from "~/@types/question.types";

import Icon from "react-native-vector-icons/FontAwesome5";

type QuizQuestionProps = {
  question: TQuestion;
  userAnswer?: TQuizAnswer;
  answerText: string;
  onSupport: () => void;
  setAnswerText: React.Dispatch<React.SetStateAction<string>>;
};

export function QuizQuestion({
  question,
  answerText,
  setAnswerText,
  userAnswer,
  onSupport,
}: QuizQuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const correctAnswer = question.answer === userAnswer?.userAnswer;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Title>კითხვა / {question.answer}</Title>
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
        value={answerText}
        onChangeText={(e) => setAnswerText(composeGeoString(e))}
      />
      <View style={styles.alertWrapper}>
        {userAnswer && correctAnswer && (
          <SAlert type="success" message="პასუხი სწორია" />
        )}
        {userAnswer && !correctAnswer && (
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
