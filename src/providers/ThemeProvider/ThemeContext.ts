import { createContext } from "react";
import { ColorScheme } from "./config/colors";

export enum ThemeMode_Enum {
  DARK = "dark",
}

type ThemeContextValue = {
  theme: ThemeMode_Enum;
  colors: ColorScheme;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode_Enum>>;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: ThemeMode_Enum.DARK,
  setTheme: () => {},
  colors: {} as ColorScheme,
});
