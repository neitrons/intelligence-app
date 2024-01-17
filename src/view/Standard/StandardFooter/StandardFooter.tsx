import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { SButton } from "~/components/SButton";
import { CircleButton } from "~/components/CircleButton";

import Icon from "react-native-vector-icons/AntDesign";

type StandardFooterProps = {};

export function StandardFooter({}: StandardFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.footer}>
      <View style={styles.actions}>
        <CircleButton style={styles.circleIndicator}>
          <Icon name="play" style={styles.circleIcon} />
        </CircleButton>
      </View>
      <View style={styles.buttons}>
        <SButton
          style={[styles.button, styles.incorrectButton]}
          textStyle={styles.incorrectButton}
        >
          არასწორი
        </SButton>
        <SButton
          style={[styles.button, styles.correctButton]}
          textStyle={styles.correctButton}
        >
          სწორი
        </SButton>
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
    button: {
      width: "48%",
    },
  });
}
