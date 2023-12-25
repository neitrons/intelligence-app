import { PropsWithChildren } from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextProps,
} from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type TitleProps = {
  style?: StyleProp<TextStyle>;
} & TextProps;

export function Title({ style, ...props }: TitleProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme });
  const textStyles = StyleSheet.flatten([styles.title, style]);

  return <Text style={textStyles} {...props} />;
}

function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    title: {
      fontSize: sizes.textMedium,
      color: colors.primaryText,
      fontWeight: "bold",
    },
  });
}
