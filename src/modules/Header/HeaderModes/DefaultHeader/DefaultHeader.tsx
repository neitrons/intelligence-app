import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useThemeProvider } from "~/providers/ThemeProvider";

import Icon from "react-native-vector-icons/AntDesign";
import { HeaderBack } from "../../components/HeaderBack";

export function DefaultHeader() {
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
