import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";

type ResultBoxProps = {
  text: string;
  correct: boolean;
};

export function ResultBox({ text, correct }: ResultBoxProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme, correct });

  return (
    <View style={styles.box}>
      <Title>{text}</Title>
    </View>
  );
}

function getStyleSheet({
  colors,
  sizes,
  correct,
}: { correct: boolean } & ThemeContextValue) {
  return StyleSheet.create({
    box: {
      width: 50,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: sizes.radiusSmall,
      backgroundColor: correct ? colors.successColor : colors.errorColor,
    },
  });
}
