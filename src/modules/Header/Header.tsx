import { View, Text, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <Text>ჰედერი</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 12,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,
  },
});
