import { View, StyleSheet } from "react-native";
import { ThemeSwitcher } from "~/modules/ThemeSwitcher";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export default function Settings() {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <ThemeSwitcher />
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.spaceMedium,
    },
  });
}
