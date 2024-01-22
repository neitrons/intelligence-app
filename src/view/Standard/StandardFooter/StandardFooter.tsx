import { useMemo } from "react";
import { useIntl } from "react-intl";
import { View, StyleSheet, Text } from "react-native";
import { useStandardProvider } from "~/providers/StandardProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";
import { SButton } from "~/components/SButton";
import { useCountDown } from "~/hooks/useCountDown";
import { CircleButton } from "~/components/CircleButton";

import Icon from "react-native-vector-icons/AntDesign";
import IconAwesome from "react-native-vector-icons/FontAwesome5";

export function StandardFooter() {
  const theme = useThemeProvider();
  const { formatMessage } = useIntl();
  const styles = getStyleSheet({ ...theme });
  const {
    state: { userAnswered, timerUsed, supports, supportUsed },
    dispatch,
  } = useStandardProvider();

  const { seconds, startTimer, running, stopReset } = useCountDown({
    secondsAmount: 10,
  });

  const initialMode = useMemo(
    () => !timerUsed && !running,
    [timerUsed, running]
  );
  const timerMode = useMemo(() => timerUsed && running, [timerUsed, running]);

  const supportsMode = useMemo(
    () => timerUsed && !running && supports > 0 && !supportUsed,
    [timerUsed, running, supports, supportUsed]
  );

  const answerMode = useMemo(
    () =>
      (timerUsed && !running && supports === 0) ||
      (timerUsed && !running && supportUsed),
    [timerUsed, running, supports, supportUsed]
  );

  function onCircleButtonPress() {
    if (initialMode) {
      startTimer();
      dispatch({ type: "SET_TIMER_USED", payload: true });
    } else if (supportsMode) {
      dispatch({ type: "USE_SUPPORT" });
      startTimer();
    }
  }

  return (
    <View style={styles.footer}>
      {!userAnswered && (
        <View style={styles.actions}>
          <CircleButton
            style={styles.circleIndicator}
            onPress={onCircleButtonPress}
            disabled={timerMode && answerMode}
          >
            {timerMode && (
              <View style={styles.timer}>
                <Text style={styles.timerText}>{seconds}</Text>
              </View>
            )}
            {initialMode && <Icon name="play" style={styles.circleIcon} />}
            {supportsMode && (
              <IconAwesome name="stopwatch" style={styles.circleIcon} />
            )}
            {answerMode && (
              <View style={styles.answerMode}>
                <Title style={styles.answerModeText}>
                  {formatMessage({ id: "standard.footer.answer.time" })}
                </Title>
              </View>
            )}
          </CircleButton>
        </View>
      )}
      <View style={styles.buttons}>
        {userAnswered ? (
          <>
            <SButton
              style={[styles.correctButton, styles.nextButton]}
              textStyle={styles.correctButton}
              onPress={() => {
                dispatch({ type: "ON_NEXT_QUESTION" });
                stopReset();
              }}
              sufix={
                <Icon
                  name="rightcircle"
                  style={{ marginLeft: theme.sizes.spaceMedium }}
                  size={theme.sizes.iconSmall}
                  color={theme.colors.successColor}
                />
              }
            >
              {formatMessage({ id: "common.next" })}
            </SButton>
          </>
        ) : (
          <>
            <SButton
              style={[styles.answerButton, styles.incorrectButton]}
              textStyle={styles.incorrectButton}
              onPress={() =>
                dispatch({ type: "ON_QUESTION_ANSWERED", payload: false })
              }
              sufix={
                <Icon
                  name="closecircle"
                  size={theme.sizes.iconSmall}
                  color={theme.colors.errorColor}
                  style={{ marginLeft: theme.sizes.spaceMedium }}
                />
              }
            >
              {formatMessage({ id: "common.incorrect" })}
            </SButton>
            <SButton
              style={[styles.answerButton, styles.correctButton]}
              textStyle={styles.correctButton}
              onPress={() =>
                dispatch({ type: "ON_QUESTION_ANSWERED", payload: true })
              }
              sufix={
                <Icon
                  name="checkcircle"
                  size={theme.sizes.iconSmall}
                  color={theme.colors.successColor}
                  style={{ marginLeft: theme.sizes.spaceMedium }}
                />
              }
            >
              {formatMessage({ id: "common.correct" })}
            </SButton>
          </>
        )}
      </View>
    </View>
  );
}

function getStyleSheet({ sizes, colors }: {} & ThemeContextValue) {
  return StyleSheet.create({
    actions: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    timer: {
      width: 60,
      height: 60,
      borderRadius: sizes.radiusFull,
      backgroundColor: colors.successColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    timerText: {
      fontWeight: "bold",
      fontSize: sizes.textLarge * 1.5,
    },
    answerMode: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    answerModeText: {
      textAlign: "center",
    },
    footer: {
      padding: sizes.spaceMedium,
    },
    circleIndicator: {
      borderColor: colors.successColor,
    },
    circleIcon: {
      fontSize: 60,
      color: colors.successColor,
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      marginTop: sizes.spaceMedium,
      justifyContent: "space-between",
    },
    incorrectButton: {
      color: colors.errorColor,
      borderColor: colors.errorColor,
    },
    correctButton: {
      color: colors.successColor,
      borderColor: colors.successColor,
    },
    answerButton: {
      width: "48%",
    },
    nextButton: {
      width: "100%",
    },
  });
}
