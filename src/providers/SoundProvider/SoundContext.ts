import { createContext } from "react";
import { Audio } from "expo-av";

type SoundContextValues = {
  standardClickS?: Audio.Sound;
};

export const SoundContext = createContext<SoundContextValues>({
  standardClickS: undefined,
});
