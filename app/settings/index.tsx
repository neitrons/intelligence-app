import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { ThemeSwitcher } from "~/modules/ThemeSwitcher";
import { LanguageSwitcher } from "~/modules/LanguageSwitcher";

export default function Settings() {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <LanguageSwitcher />
      <ThemeSwitcher style={styles.themeSwitcher} />
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.spaceMedium,
    },
    themeSwitcher: {
      marginTop: sizes.spaceMedium,
    },
  });
}
