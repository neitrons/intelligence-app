import { StyleSheet, View, Switch } from "react-native";
import {
  useThemeProvider,
  ThemeMode_Enum,
  ThemeContextValue,
} from "~/providers/ThemeProvider";

import IconAwesome from "react-native-vector-icons/Ionicons";

export function ThemeSwitch() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.switchWrapper}>
      {theme.theme === ThemeMode_Enum.DARK ? (
        <IconAwesome
          name="sunny"
          size={theme.sizes.iconSmall}
          color={"#ffffff"}
        />
      ) : (
        <IconAwesome
          name="moon"
          size={theme.sizes.iconSmall}
          color={"#000000"}
        />
      )}
      <Switch
        trackColor={{ true: "#000000", false: "" }}
        style={styles.switch}
        value={theme.theme === ThemeMode_Enum.DARK}
        onChange={() => {
          if (theme.theme === ThemeMode_Enum.DARK)
            theme.changeTheme(ThemeMode_Enum.LIGHT);
          else theme.changeTheme(ThemeMode_Enum.DARK);
        }}
      />
    </View>
  );
}

export function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    switchWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: sizes.spaceSmall,
    },
    switch: {
      overflow: "hidden",
    },
  });
}
