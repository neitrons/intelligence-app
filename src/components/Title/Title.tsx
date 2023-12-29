import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextProps,
} from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type TTitleSize = "small" | "medium" | "large";

type TitleProps = {
  size?: TTitleSize;
  style?: StyleProp<TextStyle>;
} & TextProps;

export function Title({ size = "medium", style, ...props }: TitleProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ size, ...theme });
  const textStyles = StyleSheet.flatten([styles.title, style]);

  return <Text style={textStyles} {...props} />;
}

function getStyleSheet({
  sizes,
  colors,
  size,
}: { size: TTitleSize } & ThemeContextValue) {
  const fontSize =
    (size === "small" && sizes.textSmall) ||
    (size === "medium" && sizes.textMedium) ||
    (size === "large" && sizes.textLarge);
  return StyleSheet.create({
    title: {
      fontSize: fontSize as number,
      color: colors.primaryText,
      fontWeight: "bold",
    },
  });
}
