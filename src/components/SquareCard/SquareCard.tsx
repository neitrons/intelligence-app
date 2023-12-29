import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type SquareCardProps = {
  text: string;
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

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    card: {
      flex: 1,
      maxWidth: "25%",
      backgroundColor: colors.secondaryBg,
      borderRadius: sizes.radiusSmall,
      padding: sizes.spaceSmall,
      paddingVertical: sizes.spaceMedium,
    },
    text: {
      fontWeight: "bold",
      color: colors.primaryText,
      width: "100%",
      textAlign: "center",
      fontSize: sizes.textMedium,
    },
  });
}
