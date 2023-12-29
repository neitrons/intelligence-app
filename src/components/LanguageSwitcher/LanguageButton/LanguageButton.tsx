import {
  StyleSheet,
  Pressable,
  Text,
  ImageSourcePropType,
  PressableProps,
  Image,
} from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type TButtonType = "primary" | "secondary";

type LanguageButtonProps = {
  type?: TButtonType;
  text: string;
  image?: ImageSourcePropType;
} & PressableProps;

export function LanguageButton({
  image,
  type = "primary",
  text,
  ...props
}: LanguageButtonProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ type, ...theme });

  return (
    <Pressable {...props} style={styles.button}>
      {image && <Image source={image} />}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export function getStyleSheet({
  sizes,
  colors,
  type,
}: { type: TButtonType } & ThemeContextValue) {
  return StyleSheet.create({
    text: {
      fontWeight: "bold",
      color: ((type === "primary" && colors.primaryBg) ||
        (type === "secondary" && colors.primaryText)) as string,
    },
    button: {
      borderRadius: sizes.radiusSmall,
      padding: sizes.spaceMedium,
      borderWidth: 1,
      backgroundColor: ((type === "primary" && colors.primaryActions) ||
        (type === "secondary" && colors.secondaryBg)) as string,
    },
  });
}
