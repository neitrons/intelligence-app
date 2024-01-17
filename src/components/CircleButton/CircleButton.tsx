import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type CircleButtonProps = {} & TouchableOpacityProps;

export function CircleButton({ style, ...props }: CircleButtonProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const touchableStyles = StyleSheet.flatten([styles.touchable, style]);

  return <TouchableOpacity style={touchableStyles} {...props} />;
}

function getStyleSheet({}: {} & ThemeContextValue) {
  return StyleSheet.create({
    touchable: {
      width: 100,
      height: 100,
      borderRadius: 100,
      borderWidth: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
