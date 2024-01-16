import { ScrollView, Text, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type StandardContentProps = {};

export function StandardContent({}: StandardContentProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <ScrollView style={styles.scrollView}>
      <Text>ეს არის სტანდარტული რეჟიმის content</Text>
    </ScrollView>
  );
}

function getStyleSheet({ sizes }: {} & ThemeContextValue) {
  return StyleSheet.create({
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
  });
}
