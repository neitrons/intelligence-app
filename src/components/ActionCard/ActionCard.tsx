import {
  Text,
  View,
  Image,
  StyleProp,
  Pressable,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";

import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "../Title";

type ActionCardProps = {
  title: string;
  description: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  image: ImageSourcePropType;
};

export function ActionCard({
  title,
  description,
  image,
  onPress,
  style,
}: ActionCardProps) {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const pressableStyles = StyleSheet.flatten([styles.container, style]);

  return (
    <Pressable style={pressableStyles} onPress={onPress}>
      <View style={styles.content}>
        <Title>{title}</Title>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.action}>
        <Image source={image} alt="'image" style={styles.actionBackground} />
      </View>
    </Pressable>
  );
}

function getStyleSheet({ colors, sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {
      width: "100%",
      borderWidth: 1,
      flexDirection: "row",
      borderRadius: sizes.radiusSmall,
      backgroundColor: colors.secondaryBg,
    },
    content: {
      flex: 2,
      padding: sizes.spaceMedium,
    },
    actionBackground: {
      position: "absolute",
      width: 110,
      height: "100%",
    },
    action: {
      width: 100,
      flex: 1,
      display: "flex",
      overflow: "hidden",
      borderLeftWidth: 1,
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primaryBg,
      borderTopRightRadius: sizes.radiusSmall,
      borderBottomRightRadius: sizes.radiusSmall,
    },
    description: {
      color: colors.primaryText,
      marginTop: sizes.spaceSmall,
    },
  });
}
