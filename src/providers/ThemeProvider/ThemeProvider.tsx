import { PropsWithChildren, useState } from "react";
import { ThemeContext, ThemeMode_Enum } from "./ThemeContext";

import { colors } from "./config/colors";
import { sizes } from "./config/sizes";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode_Enum>(ThemeMode_Enum.DARK);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, colors: colors[theme], sizes }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
