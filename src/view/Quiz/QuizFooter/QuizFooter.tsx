import { View, StyleSheet } from "react-native";
import { SButton } from "~/components/SButton";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type QuizFooterProps = {
  onSubmit: () => void;
  onSkip: () => void;
};

export function QuizFooter({ onSubmit, onSkip }: QuizFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.footer}>
      <SButton type="default" onPress={onSkip} style={styles.button}>
        გამოტოვება
      </SButton>
      <SButton type="primary" onPress={onSubmit} style={styles.button}>
        შემდეგი
      </SButton>
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    footer: {
      display: "flex",
      flexDirection: "row",
      padding: sizes.spaceMedium,
      justifyContent: "space-between",
    },
    button: {
      width: "48%",
    },
  });
}
