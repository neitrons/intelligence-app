import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeProvider, ColorScheme } from "~/providers/ThemeProvider";

export function Header() {
  const { top } = useSafeAreaInsets();
  const { colors } = useThemeProvider();

  const { header } = getStyleSheet({ colors, top });
  return (
    <View style={header}>
      <Text>ჰედერი</Text>
    </View>
  );
}

export function getStyleSheet({
  colors,
  top,
}: {
  top: number;
  colors: ColorScheme;
}) {
  return StyleSheet.create({
    header: {
      width: "100%",
      paddingTop: 8 + top,
      padding: 12,
      borderBottomWidth: 1,
      backgroundColor: colors.secondaryBg,
    },
  });
}
