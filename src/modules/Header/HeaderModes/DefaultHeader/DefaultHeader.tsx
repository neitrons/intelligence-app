import { StyleSheet, View } from "react-native";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";
import { HeaderBack } from "../../components/HeaderBack";

import { ThemeSwitch } from "~/modules/ThemeSwitch";

export function DefaultHeader() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <View>
        <HeaderBack />
      </View>
      <ThemeSwitch />
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
}
