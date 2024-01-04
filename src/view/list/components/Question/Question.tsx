import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SButton } from "~/components/SButton";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

type QuestionProps = { question: React.ReactNode; answer: React.ReactNode };

export function Question({ question, answer }: QuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <SButton
        style={[styles.showButton, showAnswer && styles.openedButton]}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? "დახურვა" : "ნახვა"}
      </SButton>
      {showAnswer && (
        <View style={styles.content}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      width: "100%",
      borderWidth: 1,
      borderColor: colors.primaryBorder,
      borderRadius: sizes.radiusSmall,
      overflow: "hidden",
    },

    header: {
      backgroundColor: colors.secondaryBg,
      padding: sizes.spaceMedium,
    },
    content: {
      padding: sizes.spaceMedium,
    },
    questionText: { fontSize: sizes.textSmall },
    answerText: { fontSize: sizes.textSmall },
    showButton: {
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    openedButton: {
      borderBottomWidth: 1,
    },
  });
}
