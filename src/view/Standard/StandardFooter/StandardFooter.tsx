import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { SButton } from "~/components/SButton";

type StandardFooterProps = {};

export function StandardFooter({}: StandardFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.footer}>
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
    footer: {
      padding: sizes.spaceMedium,
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
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
    incorrectText: {},
    button: {
      width: "48%",
    },
  });
}
