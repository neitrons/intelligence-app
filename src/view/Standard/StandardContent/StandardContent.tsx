import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Card } from "~/components/Card";
import { Title } from "~/components/Title";

import { TQuestion } from "~/@types/question.types";

import Clock from "~/assets/icons/clock.svg";

type StandardContentProps = {
  question: TQuestion;
};

export function StandardContent({ question }: StandardContentProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Title>კითხვა</Title>
        <View style={styles.supports}></View>
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

function getStyleSheet({ sizes }: {} & ThemeContextValue) {
  return StyleSheet.create({
    header: {
      display: "flex",
      marginTop: sizes.spaceMedium,
      justifyContent: "space-between",
    },
    supports: {},
    box: {
      marginTop: sizes.spaceMedium,
    },
    answerTitle: { marginTop: sizes.spaceMedium },
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
  });
}
