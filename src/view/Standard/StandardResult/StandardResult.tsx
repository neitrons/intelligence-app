import { useMemo } from "react";
import { useIntl } from "react-intl";
import { router } from "expo-router";
import { Text, StyleSheet, View } from "react-native";
import { useStandardProvider } from "~/providers/StandardProvider";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

import { SButton } from "~/components/SButton";
import Icon from "react-native-vector-icons/AntDesign";

export function StandardResult() {
  const theme = useThemeProvider();
  const { formatMessage } = useIntl();
  const styles = getStyleSheet({ ...theme });

  const {
    prepareGame,
    state: { userAnswers },
  } = useStandardProvider();

  const correctAnswerCount = useMemo(
    () => userAnswers.filter((answer) => answer.correct).length,
    [userAnswers]
  );
  const incorrectAnswerCount = useMemo(
    () => userAnswers.filter((answer) => !answer.correct).length,
    [userAnswers]
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
          <Text style={styles.boxText}>{correctAnswerCount}</Text>
        </View>
        <View style={[styles.box, styles.incorrect]}>
          <Text style={styles.boxTextSmall}>
            {formatMessage({ id: "common.incorrect" })}
          </Text>
          <Text style={styles.boxText}>{incorrectAnswerCount}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <SButton
          style={styles.startAgain}
          textStyle={styles.startAgain}
          onPress={() => prepareGame()}
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

export function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.spaceMedium,
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
      borderRadius: sizes.radiusSmall,
    },
    boxText: {
      fontSize: 68,
      fontWeight: "bold",
    },
    boxTextSmall: {
      fontSize: sizes.textMedium,
    },
    success: {
      backgroundColor: colors.successColor,
    },
    incorrect: {
      backgroundColor: colors.errorColor,
    },
    title: {
      fontSize: 48,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
      color: colors.primaryText,
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
