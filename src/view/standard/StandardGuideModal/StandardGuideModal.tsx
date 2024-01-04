import { Text } from "react-native";
import { SModal } from "~/components/SModal";

type StandardGuideModalProps = {
  open: boolean;
  onClose: () => void;
};

export function StandardGuideModal({ open, onClose }: StandardGuideModalProps) {
  return (
    <SModal open={open} onClose={onClose}>
      <Text> Standard Guide Modal</Text>
    </SModal>
  );
}
