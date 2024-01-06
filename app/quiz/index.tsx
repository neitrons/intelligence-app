import { View, Text } from "react-native";
import { useStaticData } from "~/providers/StaticDataProvider/hooks/useStaticData";
import { composeRandomQuestions } from "~/view/Quiz/utils/composeRandomQuestions";

export default function Quiz() {
  const { questions } = useStaticData();

  const randomQuestions = composeRandomQuestions(questions, 15);

  return (
    <View>
      <Text>ქვიზის რეჟიმი</Text>
    </View>
  );
}
