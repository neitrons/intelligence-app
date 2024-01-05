import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type PlayButtonProps = {} & TouchableOpacityProps;

export function PlayButton({ children, style, ...props }: PlayButtonProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme });
  const touchableStyles = StyleSheet.flatten([styles.button, style]);

  return (
    <TouchableOpacity {...props} style={touchableStyles}>
      <Icon name="play" style={styles.playIcon} />
    </TouchableOpacity>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    button: {
      width: 100,
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: sizes.radiusFull,
      borderWidth: 1,
    },
    playIcon: {
      fontSize: 60,
      color: colors.successColor,
    },
  });
}
