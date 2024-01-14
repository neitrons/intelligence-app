import { router } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";
import { HeaderBack } from "../../components/HeaderBack";

export function QuizHeader() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { state } = useQuizContext();

  const ownAnswers = state.userAnswers.filter(
    (answer) => answer.supported === false
  );

  return (
    <View style={styles.header}>
      {state.quizFinished ? (
        <View>
          <HeaderBack />
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.cancel}>შეწყვეტა</Text>
          </TouchableOpacity>
          <Title size="small">
            {ownAnswers.length} / {state.quizLength}
          </Title>
        </View>
      )}
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
