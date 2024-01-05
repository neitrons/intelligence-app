import { StyleSheet, Image, View } from "react-native";

import { Title } from "~/components/Title";
import { SModal } from "~/components/SModal";
import { PlayButton } from "~/components/PlayButton";

import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

import cup from "~/assets/images/cup.png";

type StandardGuideModalProps = {
  open: boolean;
  onClose: () => void;
};

export function StandardGuideModal({ open, onClose }: StandardGuideModalProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <SModal viewStyle={styles.modalContainer} open={open} onClose={onClose}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={cup} />
      </View>
      <Title size="large">ჩემპიონატის წესები</Title>
      <PlayButton />
    </SModal>
  );
}

function getStyleSheet({}: ThemeContextValue) {
  return StyleSheet.create({
    modalContainer: {},
    imageWrapper: {
      width: 200,
      height: 200,
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
  });
}
