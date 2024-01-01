import { Text, StyleSheet, View } from "react-native";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

import Icon from "react-native-vector-icons/AntDesign";

import { SButton } from "~/components/SButton";

export function StandardResult() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>შედეგები</Text>
      <View style={styles.boxes}>
        <View style={[styles.box, styles.success]}>
          <Text style={styles.boxTextSmall}>სწორი</Text>
          <Text style={styles.boxText}>10</Text>
        </View>
        <View style={[styles.box]}>
          <Text style={styles.boxTextSmall}>არასწორი</Text>
          <Text style={styles.boxText}>5</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <SButton
          style={styles.startAgain}
          textStyle={styles.startAgain}
          sufix={
            <Icon
              name="play"
              color={theme.colors.successColor}
              size={theme.sizes.iconSmall}
              style={{ marginLeft: theme.sizes.spaceMedium }}
            />
          }
        >
          თავიდან დაწყება
        </SButton>
        <SButton
          style={styles.goToMain}
          textStyle={styles.goToMain}
          prefix={
            <Icon
              name="leftcircle"
              color={theme.colors.errorColor}
              size={theme.sizes.iconSmall}
              style={{ marginRight: theme.sizes.spaceMedium }}
            />
          }
        >
          მთავარ გვერდზე დაბრუნება
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
      backgroundColor: "red",
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
    title: {
      fontSize: 48,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
      color: colors.primaryText,
    },
    goToMain: {
      color: colors.errorColor,
      borderColor: colors.errorColor,
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
