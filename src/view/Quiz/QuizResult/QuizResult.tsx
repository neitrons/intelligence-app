import { useMemo } from "react";
import { router } from "expo-router";
import { useIntl } from "react-intl";
import { StyleSheet, Text, View } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { useQuizContext } from "~/providers/QuizProvider";

import { SButton } from "~/components/SButton";
import Icon from "react-native-vector-icons/AntDesign";

export function QuizResult() {
  const { formatMessage } = useIntl();
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const { state, startQuiz } = useQuizContext();

  const correctAnswers = useMemo(
    () =>
      state.userAnswers?.filter((answer) => answer.supported === false).length,
    [state.userAnswers]
  );

  const supportedAnswers = useMemo(
    () => state.userAnswers?.filter((state) => state.supported === true).length,
    [state.userAnswers]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {formatMessage({ id: "common.results" })}
      </Text>
      <View style={styles.boxes}>
        <View style={[styles.box, styles.success]}>
          <Text style={styles.boxTextSmall}>
            {formatMessage({ id: "common.correct" })}
          </Text>
          <Text style={styles.boxText}>{correctAnswers}</Text>
        </View>
        <View style={[styles.box, styles.supported]}>
          <Text style={styles.boxTextSmall}>
            {formatMessage({ id: "common.supported" })}
          </Text>
          <Text style={styles.boxText}>{supportedAnswers}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <SButton
          style={styles.startAgain}
          textStyle={styles.startAgain}
          onPress={() => startQuiz()}
          sufix={
            <Icon
              name="play"
              color={theme.colors.successColor}
              size={theme.sizes.iconSmall}
              style={{ marginLeft: theme.sizes.spaceMedium }}
            />
          }
        >
          {formatMessage({ id: "standard.result.replay" })}
        </SButton>
        <SButton
          style={styles.goToMain}
          textStyle={styles.goToMain}
          onPress={() => router.push("/")}
          prefix={
            <Icon
              name="leftcircle"
              color={theme.colors.primaryActions}
              size={theme.sizes.iconSmall}
              style={{ marginRight: theme.sizes.spaceMedium }}
            />
          }
        >
          {formatMessage({ id: "standard.result.break" })}
        </SButton>
      </View>
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.spaceMedium,
    },
    success: {
      backgroundColor: colors.successColor,
    },
    supported: {
      backgroundColor: colors.primaryActions,
    },
    title: {
      fontSize: 48,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
      color: colors.primaryText,
    },
    boxes: {
      width: "100%",
      height: 150,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: sizes.spaceLarge,
    },
    box: {
      width: "48%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.errorColor,
      borderRadius: sizes.radiusSmall,
    },
    boxText: {
      fontSize: 68,
      fontWeight: "bold",
    },
    boxTextSmall: {
      fontSize: sizes.textMedium,
    },
    goToMain: {
      color: colors.primaryActions,
      borderColor: colors.primaryActions,
    },
    startAgain: {
      color: colors.successColor,
      borderColor: colors.successColor,
    },
    actions: {
      flex: 1,
      alignItems: "center",
      gap: sizes.spaceMedium,
      justifyContent: "center",
    },
  });
}
