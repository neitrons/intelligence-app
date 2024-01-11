import { View, StyleSheet } from "react-native";
import { SButton } from "~/components/SButton";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { TQuizAnswer } from "../../../../app/quiz";

type QuizFooterProps = {
  onSkip: () => void;
  onSubmit: () => void;
  correctAnswer: boolean;
  answerText: string;
};

export function QuizFooter({
  onSubmit,
  onSkip,
  correctAnswer,
  answerText,
}: QuizFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme, correctAnswer });

  return (
    <View style={styles.footer}>
      {!correctAnswer && (
        <SButton type="default" onPress={onSkip} style={styles.button}>
          გამოტოვება
        </SButton>
      )}
      <SButton
        type="primary"
        onPress={onSubmit}
        style={styles.button}
        disabled={!answerText}
      >
        {correctAnswer ? "შემდეგი" : "შემოწმება"}
      </SButton>
    </View>
  );
}

function getStyleSheet({
  sizes,
  correctAnswer,
}: { correctAnswer: boolean } & ThemeContextValue) {
  return StyleSheet.create({
    footer: {
      display: "flex",
      flexDirection: "row",
      padding: sizes.spaceMedium,
      justifyContent: "space-between",
    },
    button: {
      width: correctAnswer ? "100%" : "48%",
    },
  });
}
