import { ImageSourcePropType } from "react-native";

export type TTopicCategory = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: (id: string) => void;
};

export type TTopicQuiz = {
  id: string;
  title: string;
  onPress: (id: string) => void;
};
