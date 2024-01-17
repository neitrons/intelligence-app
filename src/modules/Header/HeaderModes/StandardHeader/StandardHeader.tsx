import { useState } from "react";
import { router } from "expo-router";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { AgreeModal } from "~/modules/AgreeModal";

export function StandardHeader() {
  const [cancelGameModal, setCancelGameModal] = useState(false);

  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => setCancelGameModal(true)}>
        <Text style={styles.cancel}>შეწყვეტა</Text>
      </TouchableOpacity>
      <AgreeModal
        open={cancelGameModal}
        onClose={() => setCancelGameModal(false)}
        onSubmit={() => router.replace("/")}
        title="თამაშის შეწყვეტა"
        description="თამაშის შეწყვეტის შემთხვევაში დაგეკარგებად მიღწეული პროგრესი"
      />
    </View>
  );
}

function getStyleSheet({ colors }: {} & ThemeContextValue) {
  return StyleSheet.create({
    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cancel: {
      color: colors.errorColor,
    },
  });
}
