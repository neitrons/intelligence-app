import { StyleSheet, View, Text } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Card } from "~/components/Card";
import { SModal } from "~/components/SModal";
import { Title } from "~/components/Title";
import { PlayButton } from "~/components/PlayButton";

type AgreeModalProps = {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onSubmit: () => void;
};

export function AgreeModal({
  onClose,
  onSubmit,
  open,
  title,
  description,
}: AgreeModalProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <SModal onClose={onClose} open={open}>
      <View style={styles.modalContaienr}>
        <Title style={styles.title}>{title}</Title>
        <Card style={styles.card}>
          <Title style={styles.cardText}>{description}</Title>
        </Card>
        <View style={styles.bottomContainer}>
          <PlayButton icon="pausecircle" onPress={onSubmit} />
        </View>
      </View>
    </SModal>
  );
}

function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    modalContaienr: {
      paddingTop: sizes.spaceLarge,
    },
    card: {
      marginTop: sizes.spaceLarge,
      padding: sizes.spaceLarge,
      backgroundColor: "rgba(181, 75, 75, 0.3)",
    },
    cardText: {
      textAlign: "center",
      fontWeight: "500",
    },
    title: {
      textAlign: "center",
    },
    bottomContainer: {
      flex: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
}
