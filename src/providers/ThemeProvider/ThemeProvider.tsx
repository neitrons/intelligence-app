import { PropsWithChildren, useState } from "react";
import { ThemeContext, ThemeMode_Enum } from "./ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { colors } from "./config/colors";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode_Enum>(ThemeMode_Enum.DARK);

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{ theme, setTheme, colors: colors[theme] }}>
        {children}
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
