import { router } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { HeaderBack } from "./HeaderBack";

import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Header() {
  const { top } = useSafeAreaInsets();
  const theme = useThemeProvider();

  const { header } = getStyleSheet({ top, ...theme });

  return (
    <View style={header}>
      <HeaderBack />
      <TouchableOpacity onPress={() => router.push({ pathname: "/settings" })}>
        <Icon
          name="setting"
          size={theme.sizes.iconSmall}
          color={theme.colors.primaryActions}
        />
      </TouchableOpacity>
    </View>
  );
}

export function getStyleSheet({
  colors,
  sizes,
  top,
}: {
  top: number;
} & ThemeContextValue) {
  return StyleSheet.create({
    header: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: sizes.spaceSmall,
      paddingTop: sizes.spaceSmall + top,
      borderBottomWidth: 1,
      borderColor: colors.primaryBorder,
      backgroundColor: colors.secondaryBg,
      position: "relative",
    },
    titleContainer: {
      position: "absolute",
      bottom: sizes.spaceSmall,
      left: 0,
      right: 0,
      color: "white",
      alignItems: "center",
    },
    title: {
      fontSize: sizes.textMedium,
      fontWeight: "bold",
      color: colors.primaryText,
    },
  });
}
