import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

type STextInputProps = {} & TextInputProps;

export function STextInput({ style, ...props }: STextInputProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const textInputStyles = StyleSheet.flatten([styles.textInput, style]);

  return <TextInput {...props} style={textInputStyles} />;
}

function getStyleSheet({ sizes }: {} & ThemeContextValue) {
  return StyleSheet.create({
    textInput: {
      borderWidth: 1,
      padding: sizes.spaceMedium,
      borderRadius: sizes.radiusSmall,
    },
  });
}
