import { View, StyleSheet } from "react-native";
import { Title } from "~/components/Title";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type HeaderTitleProps = { title: string };

export function HeaderTitle({ title }: HeaderTitleProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.titleContainer}>
      <Title style={styles.title}>{title}</Title>
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
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
