import { StyleSheet, View, ViewStyle, StyleProp } from "react-native";

import { Title } from "~/components/Title";
import { SwitcherButton } from "./SwitherButton";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

import IconAwesome from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";

type ThemeSwitcherProps = {
  style?: StyleProp<ViewStyle>;
};

export function ThemeSwitcher({ style }: ThemeSwitcherProps) {
  const themeValues = useThemeProvider();
  const styles = getStyleSheet({ ...themeValues });

  const containerStyles = StyleSheet.flatten([styles.container, style]);

  return (
    <View style={containerStyles}>
      <Title>აირჩიე სასურველი ვიზუალი</Title>
      <View style={styles.buttons}>
        <SwitcherButton
          text="მწვანე"
          icon={
            <IconAwesome
              name="frog"
              size={themeValues.sizes.iconMedium}
              color="#98FB98"
            />
          }
        />
        <SwitcherButton
          text="დღე"
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
