import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TQuizAnswer } from "../../../../app/quiz";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { Card } from "~/components/Card";
import { Title } from "~/components/Title";
import { STextInput } from "~/components/STextInput";
import { TQuestion } from "~/@types/question.types";
import { composeGeoString } from "~/utils/composeGeoChar";

type QuizQuestionProps = {
  question: TQuestion;
  answer: string;
  correctAnswer: boolean;
  userAnswer?: TQuizAnswer;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
};

export function QuizQuestion({
  question,
  answer,
  correctAnswer,
  setAnswer,
  userAnswer,
}: QuizQuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

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
        editable={!correctAnswer}
        value={answer}
        onChangeText={(e) => {
          setAnswer(composeGeoString(e));
        }}
      />
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
