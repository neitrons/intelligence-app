import { View, Text, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export interface SBadgeProps {}

export function SBadge({}: SBadgeProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.badge}>
      <Text>ბეიჯი</Text>
    </View>
  );
}

function getStyleSheet({}: ThemeContextValue) {
  return StyleSheet.create({ badge: {} });
}
