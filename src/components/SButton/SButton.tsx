import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type TSButtonTypes = "primary" | "default";

type TButtonSize = "small" | "medium" | "large";

type SButtonProps = {
  type?: TSButtonTypes;
  noRadius?: boolean;
  size?: TButtonSize;
  prefix?: React.ReactNode;
  sufix?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;

export function SButton({
  style,
  children,
  type = "default",
  prefix,
  size = "medium",
  sufix,
  textStyle,
  ...props
}: SButtonProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({
    ...theme,
    type,
    disabled: props.disabled,
    size,
  });
  const touchableStyles = StyleSheet.flatten([styles.touchable, style]);
  const textStyles = StyleSheet.flatten([styles.text, textStyle]);

  return (
    <TouchableOpacity {...props} style={touchableStyles}>
      {prefix && prefix}
      {children && <Text style={textStyles}>{children}</Text>}
      {sufix && sufix}
    </TouchableOpacity>
  );
}

export function getStyleSheet({
  sizes,
  colors,
  type,
  size,
  disabled,
}: {
  type: TSButtonTypes;
  disabled?: boolean;
  size: TButtonSize;
} & ThemeContextValue) {
  const padding =
    (size === "small" && sizes.spaceSmall) ||
    (size === "medium" && sizes.spaceMedium) ||
    (size === "large" && sizes.spaceLarge);

  const font =
    (size === "small" && sizes.textSmall) ||
    (size === "medium" && sizes.textMedium) ||
    (size === "large" && sizes.textLarge);

  return StyleSheet.create({
    touchable: {
      flexDirection: "row",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: padding as number,
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
      fontSize: font as number,
      color:
        (type === "primary" && colors.primaryText) ||
        ((type === "default" && colors.primaryActions) as string),
    },
  });
}
