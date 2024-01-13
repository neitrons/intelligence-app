import { Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { SAlert } from "~/components/SAlert";
import { Card } from "~/components/Card";
import { Title } from "~/components/Title";
import { STextInput } from "~/components/STextInput";
import { SButton } from "~/components/SButton";
import { composeGeoString } from "~/utils/composeGeoChar";
import { TQuestion, TQuizAnswer } from "~/@types/question.types";

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
      <View></View>
      <Title style={styles.titleStyles}>კითხვა</Title>
      <Card>
        <Text>{question.questionText}</Text>
      </Card>
      <Title style={styles.titleStyles}>შეიყვანეთ პასუხი</Title>
      <STextInput
        placeholder="ერთი სიტყვა"
        value={answerText}
        onChangeText={(e) => setAnswerText(composeGeoString(e))}
      />
      <View style={styles.alertBox}>
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
    titleStyles: {
      paddingVertical: sizes.spaceMedium,
    },
    answersWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: sizes.spaceMedium,
    },
    alertBox: {
      width: "100%",
      marginTop: sizes.spaceMedium,
    },
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
  });
}
