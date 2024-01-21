import { View, StyleSheet } from "react-native";
import { useStandardProvider } from "~/providers/StandardProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { SButton } from "~/components/SButton";
import { CircleButton } from "~/components/CircleButton";
import { useCountDown } from "~/hooks/useCountDown";
import { Title } from "~/components/Title";

import Icon from "react-native-vector-icons/AntDesign";
import IconAwesome from "react-native-vector-icons/FontAwesome5";

type StandardFooterProps = {};

export function StandardFooter({}: StandardFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const {
    state: { userAnswered, timerUsed, supports, supportUsed },
    dispatch,
  } = useStandardProvider();

  const { seconds, startTimer, running, stopReset } = useCountDown({
    secondsAmount: 10,
  });

  const initialMode = !timerUsed && !running;
  const timerMode = timerUsed && running;
  const supportsMode = timerUsed && !running && supports > 0 && !supportUsed;
  const answerMode =
    (timerUsed && !running && supports === 0) ||
    (timerUsed && !running && supportUsed);

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
            {timerMode && <Title>{seconds}</Title>}
            {initialMode && <Icon name="play" style={styles.circleIcon} />}
            {supportsMode && (
              <IconAwesome name="stopwatch" style={styles.circleIcon} />
            )}
            {answerMode && <Title>პასუხის დროა</Title>}
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
              შემდეგი
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
              არასწორი
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
              სწორი
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
