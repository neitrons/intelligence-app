import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export function Footer() {
  const theme = useThemeProvider();
  const { bottom } = useSafeAreaInsets();

  const styles = getStyleSheet({ bottom, ...theme });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>რეკლამა</Text>
    </View>
  );
}

function getStyleSheet({
  colors,
  sizes,
  bottom,
}: { bottom: number } & ThemeContextValue) {
  return StyleSheet.create({
    container: {
      width: "100%",
      borderTopWidth: 1,
      padding: sizes.spaceLarge,
      backgroundColor: colors.secondaryBg,
      paddingBottom: sizes.spaceLarge + bottom,
    },
    text: {
      fontSize: sizes.textMedium,
      color: colors.primaryText,
      width: "100%",
      textAlign: "center",
    },
  });
}
