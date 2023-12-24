import { Pressable, Text, StyleSheet } from "react-native";
import { useThemeProvider } from "~/providers/ThemeProvider";

type ActionCardProps = {};

export function ActionCard({}: ActionCardProps) {
  const { colors } = useThemeProvider();

  return <Pressable>ActionCard</Pressable>;
}
