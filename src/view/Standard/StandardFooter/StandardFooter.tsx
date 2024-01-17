import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { SButton } from "~/components/SButton";
import Icon from "react-native-vector-icons/AntDesign";

type StandardFooterProps = {};

export function StandardFooter({}: StandardFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.footer}>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.circleIndicator}>
          <Icon name="play" style={styles.circleIcon} />
        </TouchableOpacity>
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
      width: 100,
      height: 100,
      borderRadius: 100,
      borderWidth: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
