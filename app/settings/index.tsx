import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { ThemeSwitcher } from "~/modules/ThemeSwitcher";

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
