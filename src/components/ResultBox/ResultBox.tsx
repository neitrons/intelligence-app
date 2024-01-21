import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";

type TResultBoxModes = "correct" | "incorrect" | "supported";

type ResultBoxProps = {
  text: string;
  mode: TResultBoxModes;
};

export function ResultBox({ text, mode = "correct" }: ResultBoxProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme, mode });

  return (
    <View style={styles.box}>
      <Title>{text}</Title>
    </View>
  );
}

function getStyleSheet({
  colors,
  sizes,
  mode,
}: { mode: TResultBoxModes } & ThemeContextValue) {
  const backgroundColor =
    (mode === "correct" && colors.successColor) ||
    (mode === "incorrect" && colors.errorColor) ||
    colors.primaryActions;
  return StyleSheet.create({
    box: {
      width: 50,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: sizes.radiusSmall,
      backgroundColor,
    },
  });
}
