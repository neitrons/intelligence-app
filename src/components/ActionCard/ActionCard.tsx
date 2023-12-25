import { Pressable, Text, StyleSheet, View } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import Icon from "react-native-vector-icons/AntDesign";

import { Title } from "../Title";

type ActionCardProps = {
  title: string;
  description: string;
};

export function ActionCard({ title, description }: ActionCardProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  return (
    <Pressable style={styles.container}>
      <View style={styles.content}>
        <Title>{title}</Title>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.action}>
        <Icon
          name="rightcircle"
          size={theme.sizes.iconLarge}
          color={theme.colors.primaryActions}
        />
      </View>
    </Pressable>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      borderWidth: 1,
      borderRadius: sizes.radiusSmall,
      backgroundColor: colors.secondaryBg,
    },
    content: {
      flex: 2,
      padding: sizes.spaceMedium,
    },
    action: {
      width: 100,
      flex: 1,
      borderLeftWidth: 1,
      backgroundColor: colors.primaryBg,
      borderTopRightRadius: sizes.radiusSmall,
      borderBottomRightRadius: sizes.radiusSmall,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    description: {
      color: colors.primaryText,
      marginTop: sizes.spaceSmall,
    },
  });
}
