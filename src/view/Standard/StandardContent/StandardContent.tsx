import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { useStandardProvider } from "~/providers/StandardProvider";

import { Card } from "~/components/Card";
import { Title } from "~/components/Title";

import { TQuestion } from "~/@types/question.types";
import Icon from "react-native-vector-icons/FontAwesome5";

type StandardContentProps = {
  question: TQuestion;
};

export function StandardContent({ question }: StandardContentProps) {
  const theme = useThemeProvider();
  const {
    state: { supports },
  } = useStandardProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Title>კითხვა</Title>
        <View style={styles.supports}>
          {Array.from({ length: supports }).map((_, index) => {
            return <Icon style={styles.icon} name="stopwatch" />;
          })}
        </View>
      </View>
      <Card style={styles.box}>
        <Text>{question?.questionText}</Text>
      </Card>
      <Title style={styles.answerTitle}>პასუხი</Title>
      <Card style={styles.box}>
        <Text>{question?.answer}</Text>
      </Card>
    </ScrollView>
  );
}

function getStyleSheet({ sizes, colors }: {} & ThemeContextValue) {
  return StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      marginTop: sizes.spaceMedium,
      alignItems: "center",
      justifyContent: "space-between",
    },
    supports: {
      display: "flex",
      flexDirection: "row",
      gap: sizes.spaceSmall,
    },
    icon: {
      fontSize: sizes.iconSmall,
      color: colors.successColor,
    },
    box: {
      marginTop: sizes.spaceMedium,
    },
    answerTitle: { marginTop: sizes.spaceMedium },
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
  });
}
