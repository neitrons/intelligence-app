import { useIntl } from "react-intl";
import { router } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { ActionCard } from "~/components/ActionCard";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

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
          image={{}}
        />
        <ActionCard
          onPress={() => router.push("/standard")}
          title={formatMessage({ id: "main.learning.title" })}
          description={formatMessage({ id: "main.learning.description" })}
          image={{}}
        />
        <ActionCard
          onPress={() => router.push("/standard")}
          title={formatMessage({ id: "main.all.questions.title" })}
          description={formatMessage({ id: "main.all.questions.description" })}
          image={{}}
        />
      </View>
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flex: 1,
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
