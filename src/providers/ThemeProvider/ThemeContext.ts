import { createContext } from "react";
import { ColorScheme } from "./config/colors";
import { SizesScheme } from "./config/sizes";

export enum ThemeMode_Enum {
  DARK = "dark",
}

export type ThemeContextValue = {
  theme: ThemeMode_Enum;
  colors: ColorScheme;
  sizes: SizesScheme;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode_Enum>>;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: ThemeMode_Enum.DARK,
  setTheme: () => {},
  colors: {} as ColorScheme,
  sizes: {} as SizesScheme,
});