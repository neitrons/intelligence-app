import { View, Text, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { SButton } from "~/components/SButton";

export function QuizFooter() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.footer}>
      <SButton type="primary">შემდეგი</SButton>
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    footer: {
      padding: sizes.spaceMedium,
    },
  });
}
