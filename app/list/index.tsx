import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Pagination } from "~/components/Pagination";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Question } from "./Question";
import { FlatList } from "react-native-gesture-handler";

export default function List() {
  const theme = useThemeProvider();
  const { questions } = useStaticData();
  const [currentPage, setCurrentPage] = useState(1);

  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        contentContainerStyle={styles.listContainerStyles}
        renderItem={({ item }) => (
          <Question question={item.questionText} answer={item.answer} />
        )}
      />
      <Pagination
        totalPages={140}
        current={currentPage}
        style={styles.paginationStyles}
        onChange={(newPage) => setCurrentPage(newPage)}
      />
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.spaceMedium,
    },
    listContainerStyles: { gap: 10 },
    paginationStyles: { paddingTop: sizes.spaceMedium },
  });
}
