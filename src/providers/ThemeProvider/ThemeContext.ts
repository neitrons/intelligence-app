import { createContext } from "react";
import { ColorScheme } from "./config/colors";
import { SizesScheme } from "./config/sizes";

export enum ThemeMode_Enum {
  GREEN = "green",
  LIGHT = "light",
}

export type ThemeContextValue = {
  theme: ThemeMode_Enum;
  colors: ColorScheme;
  sizes: SizesScheme;
  changeTheme: (newTheme: ThemeMode_Enum) => Promise<void>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode_Enum>>;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: ThemeMode_Enum.GREEN,
  setTheme: () => {},
  colors: {} as ColorScheme,
  sizes: {} as SizesScheme,
  changeTheme: async () => {},
});
