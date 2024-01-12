import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { TQuestion, TQuizAnswer } from "~/@types/question.types";
import { composeGeoString } from "~/utils/composeGeoChar";

import { Card } from "~/components/Card";
import { Title } from "~/components/Title";
import { STextInput } from "~/components/STextInput";
import { SButton } from "~/components/SButton";

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
      <Title style={styles.titleStyles}>კითხვა</Title>
      <Text>{question.answer}</Text>
      <Card>
        <Text>{question.questionText}</Text>
      </Card>
      <Title style={styles.titleStyles}>შეიყვანეთ პასუხი</Title>
      <STextInput
        placeholder="ერთი სიტყვა"
        value={answerText}
        onChangeText={(e) => setAnswerText(composeGeoString(e))}
      />
      <SButton onPress={onSupport} style={styles.supportButton}>
        დახმარება
      </SButton>
      {userAnswer && correctAnswer && <Text>პასუხი სწორია</Text>}
      {userAnswer && !correctAnswer && (
        <Text>პასუხი არასწორია კიდევ სცადეთ</Text>
      )}
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
    supportButton: {
      marginTop: sizes.spaceMedium,
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
