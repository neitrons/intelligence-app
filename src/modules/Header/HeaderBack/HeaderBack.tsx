import React from "react";
import { usePathname, useNavigation } from "expo-router";
import { Text, StyleSheet, Pressable } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import Icon from "react-native-vector-icons/AntDesign";

export function HeaderBack() {
  const theme = useThemeProvider();
  const pathName = usePathname();
  const navigation = useNavigation();

  const styles = getStyleSheet({ ...theme });

  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      {pathName !== "/" && (
        <>
          <Icon
            name="arrowleft"
            size={theme.sizes.iconSmall}
            color={theme.colors.primaryActions}
          />
          <Text style={styles.title}>Back</Text>
        </>
      )}
    </Pressable>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      gap: sizes.spaceSmall,
      flexDirection: "row",
    },
    title: {
      fontWeight: "bold",
      color: colors.primaryActions,
    },
  });
}
