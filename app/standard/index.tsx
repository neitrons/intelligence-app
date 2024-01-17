import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { useStandardProvider } from "~/providers/StandardProvider";

import { StandardContent } from "~/view/Standard/StandardContent";
import { StandardFooter } from "~/view/Standard/StandardFooter";

export default function Standard() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const { startGame } = useStandardProvider();

  return (
    <View style={styles.container}>
      <StandardContent />
      <StandardFooter />
    </View>
  );
}

function getStyleSheet({}: {} & ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
}
