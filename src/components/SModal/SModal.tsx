import { PropsWithChildren } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

type SModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SModal({
  open,
  onClose,
  children,
}: PropsWithChildren<SModalProps>) {
  const theme = useThemeProvider();

  const styles = getStyleSheet({ ...theme });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export function getStyleSheet({ colors, sizes }: {} & ThemeContextValue) {
  return StyleSheet.create({
    modalContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: colors.primaryOverlay,
    },
    modalView: {
      width: "100%",
      height: "80%",
      alignItems: "center",
      padding: sizes.spaceMedium,
      backgroundColor: colors.primaryBg,
      borderTopLeftRadius: sizes.radiusSmall,
      borderTopRightRadius: sizes.radiusSmall,
    },
  });
}