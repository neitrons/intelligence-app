import { router } from "expo-router";
import { HeaderBack } from "../../components/HeaderBack";
import { View, TouchableOpacity } from "react-native";
import { useThemeProvider } from "~/providers/ThemeProvider";

import Icon from "react-native-vector-icons/AntDesign";

export function StandardHeader() {
  const theme = useThemeProvider();

  return (
    <>
      <HeaderBack />
      <TouchableOpacity onPress={() => router.push({ pathname: "/settings" })}>
        <Icon
          name="setting"
          size={theme.sizes.iconSmall}
          color={theme.colors.primaryActions}
        />
      </TouchableOpacity>
    </>
  );
}
