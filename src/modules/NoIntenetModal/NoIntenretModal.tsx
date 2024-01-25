import { StyleSheet, Image, View } from "react-native";

import { Title } from "~/components/Title";
import { SModal } from "~/components/SModal";
import NoInternetImage from "~/assets/images/no-internet.png";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type NoInternetModal = {
  open: boolean;
};

export function NoInternetModal({ open }: NoInternetModal) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <SModal open={open} viewStyle={{ height: "50%" }}>
      <View style={styles.imageWrapper}>
        <Title size="large" style={styles.title}>
          შეამოწმეთ ინტერნეტის გამართულობა
        </Title>
        <Image source={NoInternetImage} style={styles.image} />
      </View>
    </SModal>
  );
}

export function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    title: {
      textAlign: "center",
      color: colors.errorColor,
    },
    imageWrapper: {
      flex: 1,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: sizes.radiusSmall,
    },
    image: {
      width: "50%",
      height: "50%",
      aspectRatio: 2,
      resizeMode: "contain",
      marginTop: sizes.spaceMedium,
    },
  });
}
