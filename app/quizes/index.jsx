import { View, Text } from "react-native";

export default function index() {
  return (
    <View>
      <Text onPress={() => getData()}>ქვიზები</Text>
    </View>
  );
}
