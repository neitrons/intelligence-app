import { useIntl } from "react-intl";
import { router } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { ActionCard } from "~/components/ActionCard";

import cup from "~/assets/images/cup.png";
import books from "~/assets/images/books.png";
import list from "~/assets/images/list.png";

export default function Page() {
  const theme = useThemeProvider();
  const { formatMessage } = useIntl();

  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formatMessage({ id: "main.title" })}</Text>
      <View style={styles.cardsContainer}>
        <ActionCard
          onPress={() => router.push("/standard")}
          title={formatMessage({ id: "main.standard.game.title" })}
          description={formatMessage({ id: "main.standard.game.description" })}
          image={cup}
        />
        <ActionCard
          onPress={() => router.push("/quiz")}
          title={formatMessage({ id: "main.quiz.title" })}
          description={formatMessage({ id: "main.quiz.description" })}
          image={books}
        />
        <ActionCard
          onPress={() => router.push("/list")}
          title={formatMessage({ id: "main.all.questions.title" })}
          description={formatMessage({ id: "main.all.questions.description" })}
          image={list}
        />
      </View>
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      padding: sizes.spaceMedium,
    },
    title: {
      fontSize: 54,
      fontWeight: "bold",
      width: "100%",
      textAlign: "center",
      color: colors.primaryText,
      marginBottom: sizes.spaceLarge,
    },
    cardsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: sizes.spaceSmall,
    },
  });
}
