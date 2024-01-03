import { useState } from "react";
import { View, Text } from "react-native";
import { Pagination } from "~/components/Pagination";

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <View>
      <Text>ყველა შეკითხვა</Text>
      <Pagination
        totalPages={140}
        current={currentPage}
        onChange={(newPage) => setCurrentPage(newPage)}
      />
    </View>
  );
}
