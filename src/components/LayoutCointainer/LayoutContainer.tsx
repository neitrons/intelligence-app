import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useThemeProvider } from "../../providers/ThemeProvider";
import { ColorScheme } from "../../providers/ThemeProvider/config/colors";

export function LayoutContainer({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const { colors } = useThemeProvider();
  const styles = getStyleSheet({ colors, ...insets });

  return <View style={styles.container}>{children}</View>;
}

function getStyleSheet({
  top,
  left,
  right,
  bottom,
  colors,
}: {
  top: number;
  left: number;
  right: number;
  bottom: number;
  colors: ColorScheme;
}) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
      backgroundColor: colors.primaryBg,
    },
  });
}
