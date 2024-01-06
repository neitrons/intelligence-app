import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Pagination } from "~/components/Pagination";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { composeCurrentQuestions } from "~/view/List/utils/composeList.utils";

import { Question } from "~/view/List/Question";
import { FlatList } from "react-native-gesture-handler";

export default function List() {
  const theme = useThemeProvider();
  const { questions } = useStaticData();
  const [currentPage, setCurrentPage] = useState(1);

  const { currentQuestions } = composeCurrentQuestions({
    questions,
    currentPage,
    size: 15,
  });

  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <FlatList
        data={currentQuestions}
        contentContainerStyle={styles.listContainerStyles}
        renderItem={({ item }) => (
          <Question key={item.questionText} question={item} />
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
