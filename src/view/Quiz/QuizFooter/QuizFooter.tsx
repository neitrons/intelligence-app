import { View, StyleSheet } from "react-native";
import { SButton } from "~/components/SButton";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type QuizFooterProps = { onNext: () => void };

export function QuizFooter({ onNext }: QuizFooterProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.footer}>
      <SButton type="primary" onPress={onNext}>
        შემდეგი
      </SButton>
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    footer: {
      padding: sizes.spaceMedium,
    },
  });
}
