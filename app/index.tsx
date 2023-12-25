import { useIntl } from "react-intl";
import { View, StyleSheet } from "react-native";
import { ActionCard } from "~/components/ActionCard";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

export default function Page() {
  const theme = useThemeProvider();
  const { formatMessage } = useIntl();

  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <ActionCard
          title={formatMessage({ id: "flags.title" })}
          description="შეისწავლე მსოფილიოს ყველა დროშა თამაშ თამაშით"
        />
        <ActionCard
          title={formatMessage({ id: "capitals.title" })}
          description="შეისწავლე მსოფლიოს ყველა დედაქალაქი თამაშ თამაშით"
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
    cardsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: sizes.spaceSmall,
    },
  });
}
