import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import Icon from "react-native-vector-icons/AntDesign";

type CircleButtonProps = {} & TouchableOpacityProps;

export function PlayButton({ children, style, ...props }: CircleButtonProps) {
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
