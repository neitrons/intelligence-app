import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type PlayButtonProps = {
  icon: "play" | "pausecircle";
} & TouchableOpacityProps;

export function PlayButton({
  children,
  icon,
  style,
  ...props
}: PlayButtonProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme, icon });
  const touchableStyles = StyleSheet.flatten([styles.button, style]);

  return (
    <TouchableOpacity {...props} style={touchableStyles}>
      <Icon name={icon} style={styles.playIcon} />
    </TouchableOpacity>
  );
}

function getStyleSheet({
  colors,
  sizes,
  icon,
}: { icon: string } & ThemeContextValue) {
  return StyleSheet.create({
    button: {
      width: 100,
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: sizes.radiusFull,
      borderWidth: 2,
      borderColor: icon === "play" ? colors.successColor : colors.errorColor,
    },
    playIcon: {
      fontSize: 60,
      color: icon === "play" ? colors.successColor : colors.errorColor,
    },
  });
}
