import { View, Text, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export function QuizResult() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  return (
    <View>
      <Text>ქვიზის შედეგი</Text>
    </View>
  );
}

function getStyleSheet({}: ThemeContextValue) {}
