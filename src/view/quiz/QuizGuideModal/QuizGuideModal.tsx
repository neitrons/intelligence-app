import { StyleSheet, Image, View } from "react-native";

import { Title } from "~/components/Title";
import { SModal } from "~/components/SModal";
import { PlayButton } from "~/components/PlayButton";
import { TextList } from "~/components/TextList";

import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

import cup from "~/assets/images/cupLarge.png";

type StandardGuideModalProps = {
  open: boolean;
  onClose: () => void;
};

export function StandardGuideModal({ open, onClose }: StandardGuideModalProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const guideTexts = [
    "ჩემპიონატი შედგება 12 შემთხვევითი კითხვისაგან",
    "მინიმუმ 7 კითხვას უნდა გასცეთ სწორად პასუხი რომ გაიმარჯვოთ",
    "თითოეულ კითხვაზე პასუხის გასაცემად გექნებათ 1 წუთი",
    "პასუხის სწრაფად გაცემის შემთხვევაში დარჩენილი დრო შეგენახებათ",
    "შენახული დროის გამოყენებას შეძლებთ დამატებითი დროის სახით სხვა კითხვაზე",
  ];

  return (
    <SModal viewStyle={styles.modalContainer} open={open} onClose={onClose}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={cup} />
      </View>
      <Title size="large">ჩემპიონატის წესები</Title>
      <View style={styles.itemsContainer}>
        <TextList texts={guideTexts} />
      </View>
      <View style={styles.bottomContainer}>
        <PlayButton />
      </View>
    </SModal>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    modalContainer: {
      paddingTop: sizes.spaceLarge,
    },
    imageWrapper: {
      flex: 1,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      aspectRatio: 2,
      resizeMode: "contain",
    },
    itemsContainer: {
      marginTop: sizes.spaceMedium,
      justifyContent: "flex-start",
      paddingHorizontal: sizes.spaceLarge,
    },
    bottomContainer: {
      flex: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
}
