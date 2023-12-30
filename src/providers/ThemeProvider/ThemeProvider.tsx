import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext, ThemeMode_Enum } from "./ThemeContext";
import Storage from "@react-native-async-storage/async-storage";

import { THEME_KEY } from "~/config/storageKeys";

import { colors } from "./config/colors";
import { sizes } from "./config/sizes";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode_Enum>(ThemeMode_Enum.GREEN);

  async function changeTheme(newTheme: ThemeMode_Enum) {
    await Storage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    (async () => {
      const key = (await Storage.getItem(THEME_KEY)) as ThemeMode_Enum;
      if (key !== null) {
        setTheme(key);
      }
    })();
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, colors: colors[theme], sizes, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
