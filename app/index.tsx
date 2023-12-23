import { View, StyleSheet } from "react-native";

export default function Page() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  title: {
    fontSize: 48,
    textAlign: "center",
  },
});
