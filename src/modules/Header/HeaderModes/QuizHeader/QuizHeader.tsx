import { router } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { Title } from "~/components/Title";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export function QuizHeader() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { userAnswers, quizLength } = useQuizContext();

  const ownAnswers = userAnswers.filter((answer) => answer.supported === false);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.cancel}>შეწყვეტა</Text>
      </TouchableOpacity>
      <Title size="small">
        {ownAnswers.length} / {quizLength}
      </Title>
    </View>
  );
}

function getStyleSheet({ colors }: {} & ThemeContextValue) {
  return StyleSheet.create({
    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    cancel: {
      color: colors.errorColor,
    },
  });
}
