import { View, StyleSheet, ViewProps } from "react-native";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

type CardProps = {} & ViewProps;

export function Card({ style, children }: CardProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const cardStyles = StyleSheet.flatten([styles.card, style]);

  return <View style={cardStyles}>{children}</View>;
}

function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    card: {
      borderWidth: 1,
      padding: sizes.spaceMedium,
      borderRadius: sizes.radiusSmall,
      backgroundColor: colors.primaryBg,
    },
  });
}
