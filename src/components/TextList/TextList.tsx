import { View, StyleSheet, Platform, Text } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type TextListProps = { texts: string[] };

export function TextList({ texts }: TextListProps) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme });

  return (
    <>
      {texts.map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
}
function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },

    dot: {
      fontSize: 10,
      marginRight: 8,
    },
    itemText: {
      ...Platform.select({
        ios: { fontSize: sizes.textSmall },
      }),
    },
  });
}
