import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export function MainSkeleton() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return <View style={styles.skeletonContainer}></View>;
}

function getStyleSheet({}: ThemeContextValue) {
  return StyleSheet.create({
    skeletonContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
  });
}
