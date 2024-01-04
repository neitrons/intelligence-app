import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { SModal } from "~/components/SModal";

export default function Standard() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
      <SModal open={modalVisible} onClose={closeModal}>
        <Text>Modal Content Here</Text>
      </SModal>
    </View>
  );
}
