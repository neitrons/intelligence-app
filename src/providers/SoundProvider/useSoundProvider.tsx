import { useContext } from "react";
import { SoundContext } from "./SoundContext";

export function useSoundProvider() {
  return useContext(SoundContext);
}
