import { useState } from "react";
import { TQuestion } from "~/@types/question.types";
import { SButton } from "~/components/SButton";
import { View, StyleSheet, Text, Image } from "react-native";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

type QuestionProps = { question: TQuestion };

export function Question({ question }: QuestionProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionText}>{question.questionText}</Text>
        <View style={styles.imageWrapper}>
          {question.questionImage && (
            <Image
              style={styles.questionImage}
              source={{ uri: question.questionImage }}
            />
          )}
        </View>
      </View>

      <SButton
        style={[styles.showButton, showAnswer && styles.openedButton]}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? "დახურვა" : "ნახვა"}
      </SButton>
      {showAnswer && (
        <View style={styles.content}>
          <Text style={styles.answerText}>{question.answer}</Text>
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
    imageWrapper: {
      flex: 1,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: sizes.spaceMedium,
    },
    questionText: { fontSize: sizes.textSmall },
    questionImage: {
      width: "100%",
      height: "100%",
      aspectRatio: 1.5,
      resizeMode: "contain",
    },
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
