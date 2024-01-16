import { View, Text, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type StandardFooterProps = {};

export function StandardFooter({}: StandardFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View>
      <Text>ეს არის სტანდარტული რეჟიმის footer</Text>
    </View>
  );
}

function getStyleSheet({}: {} & ThemeContextValue) {
  return StyleSheet.create({});
}
