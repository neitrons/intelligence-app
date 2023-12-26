import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type SquareCardProps = {
  text: string;
  index?: number;
  style?: StyleProp<ViewStyle>;
};

export function SquareCard({ text, style }: SquareCardProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const cardStyle = StyleSheet.flatten([styles.card, style]);

  return (
    <View style={cardStyle}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

function getStyleSheet({ colors }: ThemeContextValue) {
  return StyleSheet.create({
    card: {
      flex: 1,
      maxWidth: "25%",
      backgroundColor: colors.secondaryBg,
    },
    text: {},
  });
}
