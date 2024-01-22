import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
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
    state: { supports, currentQuestion },
  } = useStandardProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Title>კითხვა #{currentQuestion + 1}</Title>
        <View style={styles.supports}>
          <Icon style={styles.icon} name="stopwatch" />
          <Title size="large">{supports}</Title>
        </View>
      </View>
      <Card style={styles.box}>
        <Text style={styles.questionText}>{question?.questionText}</Text>
        {question?.questionImage && (
          <View style={styles.imageWrapper}>
            <Image
              style={styles.questionImage}
              source={{ uri: question.questionImage }}
            />
          </View>
        )}
      </Card>
      <Title style={styles.answerTitle}>პასუხი</Title>
      <Card style={styles.answerBox}>
        <Text style={styles.answerText}>{question?.answer}</Text>
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
      justifyContent: "center",
      alignItems: "center",
      gap: sizes.spaceSmall,
    },
    questionText: {
      fontSize: sizes.textSmall,
      color: colors.primaryText,
    },
    icon: {
      fontSize: sizes.iconSmall,
      color: colors.successColor,
    },
    box: {
      marginTop: sizes.spaceMedium,
    },
    answerBox: {
      marginTop: sizes.spaceMedium,
      borderColor: colors.successColor,
    },
    answerText: {
      color: colors.successColor,
      fontSize: sizes.textSmall,
    },
    answerTitle: {
      marginTop: sizes.spaceMedium,
    },
    scrollView: {
      paddingHorizontal: sizes.spaceMedium,
    },
    imageWrapper: {
      flex: 1,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: sizes.spaceMedium,
    },
    questionImage: {
      width: "100%",
      height: "100%",
      aspectRatio: 1.5,
      resizeMode: "contain",
    },
  });
}
