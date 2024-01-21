import { View, StyleSheet } from "react-native";
import { useQuizContext } from "~/providers/QuizProvider";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { SButton } from "~/components/SButton";

import Icon from "react-native-vector-icons/AntDesign";

type QuizFooterProps = {
  onSkip: () => void;
  onSubmit: () => void;
  correctAnswer: boolean;
};

export function QuizFooter({
  onSubmit,
  onSkip,
  correctAnswer,
}: QuizFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme, correctAnswer });

  const { state } = useQuizContext();

  return (
    <View style={styles.footer}>
      {!correctAnswer && (
        <SButton
          type="default"
          onPress={onSkip}
          style={styles.button}
          sufix={
            <Icon
              name="rightcircle"
              style={{ marginLeft: theme.sizes.spaceMedium }}
              size={theme.sizes.iconSmall}
              color={theme.colors.primaryActions}
            />
          }
        >
          გამოტოვება
        </SButton>
      )}
      {correctAnswer ? (
        <>
          <SButton
            onPress={onSubmit}
            textStyle={styles.next}
            style={[styles.button, styles.next]}
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
        <SButton
          onPress={onSubmit}
          style={[styles.button]}
          disabled={!state.answerText}
          sufix={
            <Icon
              name="checkcircleo"
              style={{ marginLeft: theme.sizes.spaceMedium }}
              size={theme.sizes.iconSmall}
              color={theme.colors.primaryActions}
            />
          }
        >
          შემოწმება
        </SButton>
      )}
    </View>
  );
}

function getStyleSheet({
  sizes,
  colors,
  correctAnswer,
}: { correctAnswer: boolean } & ThemeContextValue) {
  return StyleSheet.create({
    footer: {
      display: "flex",
      flexDirection: "row",
      padding: sizes.spaceMedium,
      justifyContent: "space-between",
    },
    next: {
      color: colors.successColor,
      borderColor: colors.successColor,
    },
    buttonCheck: {},
    button: {
      width: correctAnswer ? "100%" : "48%",
    },
  });
}
