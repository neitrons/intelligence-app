import { useState } from "react";
import { useIntl } from "react-intl";
import { router } from "expo-router";
import { ActionCard } from "~/components/ActionCard";
import { View, StyleSheet, Text } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import cup from "~/assets/images/cup.png";
import books from "~/assets/images/books.png";
import list from "~/assets/images/list.png";
import cupLarge from "~/assets/images/cupLarge.png";
import booksLarge from "~/assets/images/booksLarge.png";

import { GuideModal } from "~/modules/GuideModal";

export default function Page() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const { formatMessage } = useIntl();
  const [showStandardModal, setShowStandardModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formatMessage({ id: "main.title" })}</Text>
      <Text style={styles.subTitle}>
        {formatMessage({ id: "main.subtitle" })}
      </Text>
      <View style={styles.cardsContainer}>
        <ActionCard
          onPress={() => setShowStandardModal(true)}
          title={formatMessage({ id: "main.standard.game.title" })}
          description={formatMessage({ id: "main.standard.game.description" })}
          image={cup}
        />
        <ActionCard
          onPress={() => setShowQuizModal(true)}
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
      <GuideModal
        title="ჩემპიონატის რეჟიმი"
        image={cupLarge}
        open={showStandardModal}
        guideTexts={[
          "ჩემპიონატი შედგება 12 შემთხვევითი კითხვისაგან",
          "მინიმუმ 7 კითხვას უნდა გასცეთ სწორად პასუხი რომ გაიმარჯვოთ",
          "თითოეულ კითხვაზე პასუხის გასაცემად გექნებათ 1 წუთი",
          "პასუხის სწრაფად გაცემის შემთხვევაში დარჩენილი დრო შეგენახებათ",
          "შენახული დროის გამოყენებას შეძლებთ დამატებითი დროის სახით სხვა კითხვაზე",
        ]}
        onSubmit={() => router.push("/standard")}
        onClose={() => setShowStandardModal(false)}
      />
      <GuideModal
        title="ქვიზის რეჟიმი"
        image={booksLarge}
        open={showQuizModal}
        guideTexts={[
          "ქვიზი შედგება 15 შეკითხვისგან",
          "ქვიზის მთავარი მიზანია საკუთარი ცოდნის გაუმჯობესება",
          "ასერომ არდაიძაბო და გისურვებ წარმატებებს",
        ]}
        onSubmit={() => router.push("/quiz")}
        onClose={() => setShowQuizModal(false)}
      />
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
      fontSize: 48,
      fontWeight: "bold",
      width: "100%",
      textAlign: "left",
      color: colors.primaryText,
    },
    subTitle: {
      width: "100%",
      fontSize: 16,
      textAlign: "left",
      color: colors.primaryText,
      marginTop: sizes.spaceMedium,
    },
    cardsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: sizes.spaceSmall,
      marginTop: sizes.spaceMedium,
    },
  });
}
