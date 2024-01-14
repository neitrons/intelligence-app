import { StyleSheet, View, ViewStyle, StyleProp } from "react-native";

import { Title } from "~/components/Title";
import { SwitcherButton } from "./SwitherButton";
import {
  ThemeContextValue,
  ThemeMode_Enum,
  useThemeProvider,
} from "~/providers/ThemeProvider";
import IconFeather from "react-native-vector-icons/Feather";

type ThemeSwitcherProps = {
  style?: StyleProp<ViewStyle>;
};

export function ThemeSwitcher({ style }: ThemeSwitcherProps) {
  const themeValues = useThemeProvider();
  const { changeTheme } = themeValues;

  const styles = getStyleSheet({ ...themeValues });

  const containerStyles = StyleSheet.flatten([styles.container, style]);

  return (
    <View style={containerStyles}>
      <Title>აირჩიე სასურველი ვიზუალი</Title>
      <View style={styles.buttons}>
        <SwitcherButton
          text="ღამე"
          onPress={() => changeTheme(ThemeMode_Enum.GREEN)}
          icon={
            <IconFeather
              name="moon"
              size={themeValues.sizes.iconMedium}
              color="#2d2d30"
            />
          }
        />
        <SwitcherButton
          text="დღე"
          onPress={() => changeTheme(ThemeMode_Enum.LIGHT)}
          icon={
            <IconFeather
              name="sun"
              size={themeValues.sizes.iconMedium}
              color="#FFD700"
            />
          }
        />
      </View>
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {},
    buttons: {
      flex: 1,

      display: "flex",
      flexDirection: "row",
      gap: sizes.spaceMedium,
      marginTop: sizes.spaceMedium,
    },
  });
}
