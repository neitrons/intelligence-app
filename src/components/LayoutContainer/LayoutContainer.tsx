import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeProvider, ColorScheme } from "~/providers/ThemeProvider";

export function LayoutContainer({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const { colors } = useThemeProvider();
  const styles = getStyleSheet({ colors, ...insets });

  return <View style={styles.container}>{children}</View>;
}

function getStyleSheet({
  left,
  right,
  bottom,
  colors,
}: {
  left: number;
  right: number;
  bottom: number;
  colors: ColorScheme;
}) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
      backgroundColor: colors.primaryBg,
    },
  });
}
