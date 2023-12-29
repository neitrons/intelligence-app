import { TopicLayout, TTopicCategory } from "~/modules/TopicLayout";

import map from "~/assets/images/map.png";

const categories: TTopicCategory[] = [
  {
    id: "1",
    title: "Title",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
    onPress: () => {},
  },
  {
    id: "2",
    title: "Title 2",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
    onPress: () => {},
  },
  {
    id: "3",
    title: "Title 3",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
    onPress: () => {},
  },
  {
    id: "4",
    title: "Title 4",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
    onPress: () => {},
  },
  {
    id: "5",
    title: "Title 5",
    description: "ეს არის აღწერა ჩემი კარგი ქარდის",
    image: map,
    onPress: () => {},
  },
];

export default function Flags() {
  return (
    <TopicLayout
      title="ისწავლე 245 დედაქალაქი ქვიზებით"
      quizList={[]}
      categories={categories}
    />
  );
}
