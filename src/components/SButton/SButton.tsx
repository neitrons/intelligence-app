import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type TSButtonTypes = "primary" | "default";

type SButtonProps = {
  type?: TSButtonTypes;
} & TouchableOpacityProps;

export function SButton({
  style,
  children,
  type = "default",
  ...props
}: SButtonProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme, type });
  const touchableStyles = StyleSheet.flatten([styles.touchable, style]);

  return (
    <TouchableOpacity {...props} style={touchableStyles}>
      {children && <Text style={styles.text}>{children}</Text>}
    </TouchableOpacity>
  );
}

export function getStyleSheet({
  sizes,
  colors,
  type,
}: { type: TSButtonTypes } & ThemeContextValue) {
  return StyleSheet.create({
    touchable: {
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: sizes.spaceSmall,
      borderRadius: sizes.radiusSmall,
      borderColor:
        (type === "primary" && colors.primaryText) ||
        ((type === "default" && colors.primaryActions) as string),
      backgroundColor:
        (type === "primary" && colors.primaryActions) ||
        ((type === "default" && colors.primaryBg) as string),
    },
    text: {
      fontWeight: "600",
      fontSize: sizes.textSmall,
      color:
        (type === "primary" && colors.primaryText) ||
        ((type === "default" && colors.primaryActions) as string),
    },
  });
}
