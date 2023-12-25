import { useIntl } from "react-intl";
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
          title={formatMessage({ id: "main.flags.title" })}
          description={formatMessage({ id: "main.flags.description" })}
        />
        <ActionCard
          title={formatMessage({ id: "main.capitals.title" })}
          description={formatMessage({ id: "main.capitals.description" })}
        />
      </View>
    </View>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
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
