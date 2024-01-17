import { useMemo } from "react";
import { usePathname } from "expo-router";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { QuizHeader } from "./HeaderModes/QuizHeader";
import { DefaultHeader } from "./HeaderModes/DefaultHeader";
import { StandardHeader } from "./HeaderModes/StandardHeader";

export function Header() {
  const pathname = usePathname();
  const theme = useThemeProvider();
  const insets = useSafeAreaInsets();

  const { header } = getStyleSheet({ top: insets.top, ...theme });

  const headerContent = useMemo(() => {
    if (pathname.includes("/quiz")) {
      return <QuizHeader />;
    } else if (pathname.includes("/standard")) {
      return <StandardHeader />;
    } else {
      return <DefaultHeader />;
    }
  }, [pathname]);

  return <View style={header}>{headerContent}</View>;
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
      padding: sizes.spaceMedium,
      paddingTop: sizes.spaceMedium + top,
      borderBottomWidth: 1,
      borderColor: colors.primaryBorder,
      backgroundColor: colors.secondaryBg,
      position: "relative",
    },
  });
}
