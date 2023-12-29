import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { LanguageSwitcher } from "~/components/LanguageSwitcher";

export default function Settings() {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <LanguageSwitcher />
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.spaceMedium,
    },
  });
}
