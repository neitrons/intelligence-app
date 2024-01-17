import { StyleSheet, Image, View, ImageSourcePropType } from "react-native";
import { ThemeContextValue, useThemeProvider } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";
import { SModal } from "~/components/SModal";
import { TextList } from "~/components/TextList";
import { CircleButton } from "~/components/CircleButton";

import Icon from "react-native-vector-icons/AntDesign";

type GuideModalProps = {
  title: string;
  guideTexts: string[];
  image: ImageSourcePropType;
  open: boolean;
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
        <CircleButton
          style={styles.playButton}
          onPress={() => {
            onSubmit();
            onClose();
          }}
        >
          <Icon name="play" style={styles.playIcon} />
        </CircleButton>
      </View>
    </SModal>
  );
}

function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    modalContainer: {
      paddingTop: sizes.spaceLarge,
    },
    playButton: {
      borderColor: colors.successColor,
    },
    playIcon: {
      fontSize: 60,
      color: colors.successColor,
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
