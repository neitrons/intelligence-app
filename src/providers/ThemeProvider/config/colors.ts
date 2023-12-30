import { ThemeMode_Enum } from "../ThemeContext";

export interface ColorScheme {
  primaryBg: string;
  secondaryBg: string;
  primaryText: string;
  primaryActions: string;
}

export type Colors = {
  [key in ThemeMode_Enum]: ColorScheme;
};

export const colors: Colors = {
  [ThemeMode_Enum.DARK]: {
    primaryBg: "#1C3132",
    secondaryBg: "#244443",
    primaryText: "#DFE0DA",
    primaryActions: "#D5A368",
  },
  [ThemeMode_Enum.LIGHT]: {
    primaryBg: "#FFFFFF",
    secondaryBg: "#F5F5F5",
    primaryText: "#000000",
    primaryActions: "#f39c12",
  },
};
