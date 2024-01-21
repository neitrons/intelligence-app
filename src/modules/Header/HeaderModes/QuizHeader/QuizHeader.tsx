import { router } from "expo-router";
import { useState, useMemo } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { AgreeModal } from "~/modules/AgreeModal";

import { HeaderBack } from "../../components/HeaderBack";
import { ResultBox } from "~/components/ResultBox";

export function QuizHeader() {
  const [cancelGameModal, setCancelGameModal] = useState(false);
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { state } = useQuizContext();

  const ownAnswers = useMemo(
    () =>
      state.userAnswers.filter((answer) => answer.supported === false).length,
    [state.userAnswers]
  );

  const incorrectAnswers = useMemo(
    () =>
      state.userAnswers.filter((answer) => answer.supported === true).length,
    [state.userAnswers]
  );

  return (
    <View style={styles.header}>
      {state.quizFinished ? (
        <HeaderBack />
      ) : (
        <>
          <TouchableOpacity onPress={() => setCancelGameModal(true)}>
            <Text style={styles.cancel}>შეწყვეტა</Text>
          </TouchableOpacity>
          <View style={styles.results}>
            <ResultBox text={ownAnswers.toString()} mode="correct" />
            <ResultBox text={incorrectAnswers.toString()} mode={"supported"} />
          </View>
        </>
      )}
      <AgreeModal
        open={cancelGameModal}
        onClose={() => setCancelGameModal(false)}
        onSubmit={() => router.replace("/")}
        title="თამაშის შეწყვეტა"
        description="თამაშის შეწყვეტის შემთხვევაში დაგეკარგებად მიღწეული პროგრესი"
      />
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    results: {
      flexDirection: "row",
      alignItems: "center",
      gap: sizes.spaceSmall,
    },
    cancel: {
      color: colors.errorColor,
    },
  });
}
