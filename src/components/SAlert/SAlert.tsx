import { StyleSheet, TextProps } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { Title } from "../Title";

type TSAlertType = "error" | "warning" | "success";

type SAlertProps = {
  type: TSAlertType;
  message: string;
} & TextProps;

export function SAlert({ type, style, message }: SAlertProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme, type });
  const textStyles = StyleSheet.flatten([styles.text, style]);

  return (
    <Title size="small" style={textStyles}>
      {message}
    </Title>
  );
}

function getStyleSheet({
  colors,
  sizes,
  type,
}: { type: TSAlertType } & ThemeContextValue) {
  return StyleSheet.create({
    text: {
      opacity: 1,
      color: type === "error" ? colors.errorColor : colors.successColor,
    },
  });
}
