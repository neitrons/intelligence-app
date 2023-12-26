import { useIntl } from "react-intl";
import { View, StyleSheet, FlatList } from "react-native";

import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";
import { SquareCard } from "~/components/SquareCard";

export default function Flags() {
  const theme = useThemeProvider();
  const { formatMessage } = useIntl();
  const styles = getStyleSheet({ ...theme });

  const elements = Array.from({ length: 16 })
    .fill(0)
    .map((_, index) => String(index + 1));

  return (
    <View style={styles.container}>
      <Title>{formatMessage({ id: "flags.quizes.title" })}</Title>
      <FlatList
        style={styles.flatList}
        numColumns={4}
        data={elements}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item}
        renderItem={({ index, item }) => (
          <SquareCard index={index} text={item} />
        )}
      />
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      padding: sizes.spaceMedium,
    },
    flatList: {
      marginTop: sizes.spaceMedium,
    },
    columnWrapperStyle: {
      gap: sizes.spaceMedium,
    },
    contentContainerStyle: {
      gap: sizes.spaceMedium,
    },
  });
}
