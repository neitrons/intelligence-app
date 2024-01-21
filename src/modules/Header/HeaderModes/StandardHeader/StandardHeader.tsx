import { useState } from "react";
import { router } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { useStandardProvider } from "~/providers/StandardProvider";

import { AgreeModal } from "~/modules/AgreeModal";
import { ResultBox } from "~/components/ResultBox";
import { HeaderBack } from "../../components/HeaderBack";

export function StandardHeader() {
  const [cancelGameModal, setCancelGameModal] = useState(false);
  const {
    state: { userAnswers, finished },
  } = useStandardProvider();

  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const correctAnswers = userAnswers.filter((userAnswer) => userAnswer.correct);
  const incorrectAnswers = userAnswers.filter(
    (userAnswer) => !userAnswer.correct
  );

  return (
    <View style={styles.header}>
      {finished ? (
        <HeaderBack />
      ) : (
        <>
          <TouchableOpacity onPress={() => setCancelGameModal(true)}>
            <Text style={styles.cancel}>შეწყვეტა</Text>
          </TouchableOpacity>
          <View style={styles.results}>
            <ResultBox text={correctAnswers.length.toString()} mode="correct" />
            <ResultBox
              text={incorrectAnswers.length.toString()}
              mode={"incorrect"}
            />
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

function getStyleSheet({ colors, sizes }: {} & ThemeContextValue) {
  return StyleSheet.create({
    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
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
