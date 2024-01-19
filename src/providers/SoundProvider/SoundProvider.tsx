import { Audio } from "expo-av";
import { PropsWithChildren, useEffect, useState } from "react";

import { SoundContext } from "./SoundContext";

import StandardClickSound from "~/assets/sounds/button-click.mp3";

export function SoundProvider({ children }: PropsWithChildren) {
  const [standardClickS, setStandardClickS] = useState<Audio.Sound>();

  async function loadSounds() {
    const { sound: standardClickSound } = await Audio.Sound.createAsync(
      StandardClickSound
    );
    setStandardClickS(standardClickSound);
  }

  useEffect(() => {
    loadSounds();
  }, []);

  return (
    <SoundContext.Provider value={{ standardClickS }}>
      {children}
    </SoundContext.Provider>
  );
}
