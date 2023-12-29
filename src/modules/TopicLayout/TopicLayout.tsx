import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";
import { SquareCard } from "~/components/SquareCard";
import { ActionCard } from "~/components/ActionCard";

import { TTopicCategory, TTopicQuiz } from "./TopicLayout.types";

type TopicLayoutProps = {
  title: string;
  quizList: TTopicQuiz[];
  categories: TTopicCategory[];
};

export function TopicLayout({ title, categories, quizList }: TopicLayoutProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <Title>{title}</Title>
      <View>
        <FlatList
          numColumns={4}
          data={quizList}
          style={styles.quizList}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.quizWrapper}
          contentContainerStyle={styles.quizContainer}
          renderItem={({ item }) => <SquareCard text={item.title} />}
        />
      </View>
      <ScrollView
        style={styles.categories}
        showsVerticalScrollIndicator={false}
      >
        {categories.map((item, index) => {
          return (
            <ActionCard
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              onPress={() => item.onPress(item.id)}
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
