import { useState } from "react";
import { router } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { AgreeModal } from "~/modules/AgreeModal";

import { Title } from "~/components/Title";
import { HeaderBack } from "../../components/HeaderBack";

export function QuizHeader() {
  const [cancelGameModal, setCancelGameModal] = useState(false);
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { state } = useQuizContext();

  const ownAnswers = state.userAnswers.filter(
    (answer) => answer.supported === false
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
          <Title size="small">
            {ownAnswers.length} / {state.quizLength}
          </Title>
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
