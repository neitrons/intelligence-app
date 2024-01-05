import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";

import { Title } from "~/components/Title";
import { SModal } from "~/components/SModal";
import { PlayButton } from "~/components/PlayButton";
import { TextList } from "~/components/TextList";

import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

type GuideModalProps = {
  open: boolean;
  title: string;
  guideTexts: string[];
  image: ImageSourcePropType;
  onClose: () => void;
  onSubmit: () => void;
};

export function GuideModal({
  open,
  title,
  image,
  guideTexts,
  onSubmit,
  onClose,
}: GuideModalProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <SModal viewStyle={styles.modalContainer} open={open} onClose={onClose}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={image} />
      </View>
      <Title size="large">{title}</Title>
      <View style={styles.itemsContainer}>
        <TextList texts={guideTexts} />
      </View>
      <View style={styles.bottomContainer}>
        <PlayButton
          onPress={() => {
            onSubmit();
            onClose();
          }}
        />
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
      width: "100%",
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
