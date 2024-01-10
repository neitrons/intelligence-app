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
  noRadius?: boolean;
  prefix?: React.ReactNode;
  sufix?: React.ReactNode;
} & TouchableOpacityProps;

export function SButton({
  style,
  children,
  type = "default",
  prefix,
  sufix,
  ...props
}: SButtonProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme, type, disabled: props.disabled });
  const touchableStyles = StyleSheet.flatten([styles.touchable, style]);

  return (
    <TouchableOpacity {...props} style={touchableStyles}>
      {prefix && prefix}
      {children && <Text style={styles.text}>{children}</Text>}
      {sufix && sufix}
    </TouchableOpacity>
  );
}

export function getStyleSheet({
  sizes,
  colors,
  type,
  disabled,
}: { type: TSButtonTypes; disabled?: boolean } & ThemeContextValue) {
  return StyleSheet.create({
    touchable: {
      flexDirection: "row",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: sizes.spaceSmall,
      borderRadius: sizes.radiusSmall,
      opacity: disabled ? 0.5 : 1,
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
