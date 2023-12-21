import { Slot } from "expo-router";
import { Header } from "../src/modules/Header/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function _layout() {
  return (
    <SafeAreaProvider>
      <Header />
      <Slot />
    </SafeAreaProvider>
  );
}
