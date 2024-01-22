import { useIntl } from "react-intl";
import { StyleSheet, View } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Card } from "~/components/Card";
import { SModal } from "~/components/SModal";
import { Title } from "~/components/Title";
import { SButton } from "~/components/SButton";
import Icon from "react-native-vector-icons/AntDesign";

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

  const { formatMessage } = useIntl();

  return (
    <SModal onClose={onClose} open={open} viewStyle={styles.modalContaienr}>
      <Title style={styles.title}>{title}</Title>
      <Card style={styles.card}>
        <Title style={styles.cardText}>{description}</Title>
      </Card>
      <View style={styles.bottomContainer}>
        <SButton
          style={[styles.footerButton, styles.stopButton]}
          textStyle={styles.stopButton}
          onPress={onSubmit}
          sufix={
            <Icon
              name="closecircle"
              size={theme.sizes.iconSmall}
              color={theme.colors.errorColor}
              style={{ marginLeft: theme.sizes.spaceMedium }}
            />
          }
        >
          {formatMessage({ id: "main.agree.modal.cancel" })}
        </SButton>
        <SButton
          style={[styles.footerButton, styles.continueButton]}
          textStyle={styles.continueButton}
          onPress={onClose}
          sufix={
            <Icon
              name="play"
              size={theme.sizes.iconSmall}
              color={theme.colors.successColor}
              style={{ marginLeft: theme.sizes.spaceMedium }}
            />
          }
        >
          {formatMessage({ id: "main.agree.modal.continue" })}
        </SButton>
      </View>
    </SModal>
  );
}

function getStyleSheet({ sizes, colors }: ThemeContextValue) {
  return StyleSheet.create({
    modalContaienr: {
      paddingTop: sizes.spaceLarge,
      height: "35%",
    },
    card: {
      width: "100%",
      marginTop: sizes.spaceMedium,
      padding: sizes.spaceMedium,
      backgroundColor: "rgba(181, 75, 75, 0.3)",
    },
    cardText: {
      textAlign: "left",
      fontWeight: "500",
    },
    footerButton: {
      width: "48%",
    },
    continueButton: {
      borderColor: colors.successColor,
      color: colors.successColor,
    },
    stopButton: {
      borderColor: colors.errorColor,
      color: colors.errorColor,
    },
    title: {
      width: "100%",
      textAlign: "left",
    },
    bottomContainer: {
      flex: 2,
      display: "flex",
      gap: sizes.spaceMedium,
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: sizes.spaceMedium,
    },
  });
}
