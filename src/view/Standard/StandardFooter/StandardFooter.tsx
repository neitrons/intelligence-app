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
    state: { userAnswered, timerUsed, supports },
    dispatch,
  } = useStandardProvider();

  const { seconds, startTimer, running } = useCountDown({
    secondsAmount: 60,
  });

  function onCircleButtonPress() {
    if (!timerUsed && !running) {
      startTimer();
      dispatch({ type: "SET_TIMER_USED", payload: true });
    } else if (timerUsed && !running && supports > 0) {
      console.log("დახმარების გამოყენება");
    }
  }

  return (
    <View style={styles.footer}>
      {!userAnswered && (
        <View style={styles.actions}>
          <CircleButton
            style={styles.circleIndicator}
            onPress={onCircleButtonPress}
          >
            {timerUsed && running && <Title>{seconds}</Title>}
            {!timerUsed && !running && (
              <Icon name="play" style={styles.circleIcon} />
            )}
            {timerUsed && !running && supports > 0 && (
              <IconAwesome name="stopwatch" style={styles.circleIcon} />
            )}
          </CircleButton>
        </View>
      )}
      <View style={styles.buttons}>
        {userAnswered ? (
          <>
            <SButton
              style={styles.nextButton}
              type="primary"
              onPress={() => dispatch({ type: "ON_NEXT_QUESTION" })}
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
            >
              არასწორი
            </SButton>
            <SButton
              style={[styles.answerButton, styles.correctButton]}
              textStyle={styles.correctButton}
              onPress={() =>
                dispatch({ type: "ON_QUESTION_ANSWERED", payload: true })
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
