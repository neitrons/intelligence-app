import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type SwitcherButtonProps = {
  text: string;
  icon?: React.ReactNode;
} & PressableProps;

export function SwitcherButton({ icon, text, ...props }: SwitcherButtonProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <Pressable {...props} style={styles.switcherButton}>
      {icon && <View>{icon}</View>}
      <Text style={styles.switcherText}>{text}</Text>
    </Pressable>
  );
}

export function getStyleSheet({ sizes, colors }: {} & ThemeContextValue) {
  return StyleSheet.create({
    switcherButton: {
      flex: 1,
      height: 80,
      borderWidth: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: sizes.spaceMedium,
      padding: sizes.spaceMedium,
      borderRadius: sizes.radiusSmall,
    },
    switcherText: {
      fontWeight: "bold",
      color: colors.primaryText,
    },
  });
}
