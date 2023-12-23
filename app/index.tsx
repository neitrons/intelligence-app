import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>გეოგრაფია</Text>
      <Link href={"/flags"}>Flags</Link>
      <Link href={"/countries"}>Countries</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    textAlign: "center",
  },
});
