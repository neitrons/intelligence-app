import { useIntl } from "react-intl";
import { View, StyleSheet, FlatList } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";
import { SquareCard } from "~/components/SquareCard";
import { ActionCard } from "~/components/ActionCard";
import { ScrollView } from "react-native-gesture-handler";

import map from "~/assets/images/map.png";

const items = [
  {
    title: "Title",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
  },
  {
    title: "Title 1",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
  },
  {
    title: "Title 2",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
  },
  {
    title: "Title 3",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
  },
  {
    title: "Title 4",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
  },
];

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
      <View>
        <FlatList
          style={styles.quizList}
          numColumns={4}
          data={elements}
          columnWrapperStyle={styles.quizWrapper}
          contentContainerStyle={styles.quizContainer}
          keyExtractor={(item) => item}
          renderItem={({ index, item }) => (
            <SquareCard index={index} text={item} />
          )}
        />
      </View>
      <ScrollView
        style={styles.categories}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item, index) => {
          return (
            <ActionCard
              {...item}
              key={item.title}
              style={index === 0 ? styles.firstCategory : styles.category}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.spaceMedium,
    },
    quizList: {
      marginTop: sizes.spaceMedium,
    },
    quizWrapper: {
      gap: sizes.spaceMedium,
    },
    quizContainer: {
      gap: sizes.spaceMedium,
    },
    categories: {
      marginTop: sizes.spaceMedium,
    },
    category: {
      marginTop: sizes.spaceMedium,
    },
    firstCategory: {
      marginTop: 0,
    },
  });
}
