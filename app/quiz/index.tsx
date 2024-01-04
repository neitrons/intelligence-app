import { View, Text } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";

export default function Quiz() {
  const { questions } = useStaticData();

  return (
    <View>
      <Text>ქვიზის რეჟიმი</Text>
    </View>
  );
}
