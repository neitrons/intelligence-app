import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";
import { composeVisiblePages } from "./utils/pagination.utils";

import { SButton } from "~/components/SButton";
import Icon from "react-native-vector-icons/AntDesign";

type PaginationProps = {
  totalPages: number;
  current: number;
  onChange: (newPage: number) => void;
};

export function Pagination({ current, totalPages, onChange }: PaginationProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });
  const { visiblePages } = composeVisiblePages(current, totalPages);

  return (
    <View style={styles.container}>
      {current - 2 > 0 && (
        <>
          <SButton style={styles.button} onPress={() => onChange(1)}>
            1
          </SButton>
          <Icon style={styles.dividerDots} name="arrowleft" />
        </>
      )}

      {visiblePages.map((page) => {
        return (
          <SButton
            key={page}
            style={styles.button}
            onPress={() => onChange(page)}
            type={(page === current && "primary") || "default"}
          >
            {page}
          </SButton>
        );
      })}
      {current + 2 < totalPages && (
        <>
          <Icon style={styles.dividerDots} name="arrowright" />
          <SButton onPress={() => onChange(totalPages)} style={styles.button}>
            {totalPages}
          </SButton>
        </>
      )}
    </View>
  );
}

function getStyleSheet({ sizes, colors }: {} & ThemeContextValue) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: sizes.spaceSmall,
    },
    button: { width: 50 },
    dividerDots: {
      color: colors.primaryActions,
      fontSize: sizes.textMedium,
    },
  });
}
