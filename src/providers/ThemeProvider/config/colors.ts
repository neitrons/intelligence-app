import { ThemeMode_Enum } from "../ThemeContext";

export interface ColorScheme {
  primaryBg: string;
  secondaryBg: string;
  primaryText: string;
  primaryActions: string;
  primaryBorder: string;
  primaryOverlay: string;
  successColor: string;
  errorColor: string;
}

export type Colors = {
  [key in ThemeMode_Enum]: ColorScheme;
};

export const colors: Colors = {
  [ThemeMode_Enum.GREEN]: {
    primaryBg: "#1C3132",
    primaryBorder: "#000000",
    secondaryBg: "#244443",
    primaryText: "#DFE0DA",
    primaryActions: "#D5A368",
    primaryOverlay: "rgba(0, 0, 0, 0.5)",
    successColor: "#9dcf62",
    errorColor: "#df5536",
  },
  [ThemeMode_Enum.LIGHT]: {
    primaryBg: "#FFFFFF",
    primaryBorder: "#000000",
    secondaryBg: "#F5F5F5",
    primaryText: "#000000",
    primaryActions: "#f39c12",
    primaryOverlay: "rgba(0, 0, 0, 0.5)",
    successColor: "#9dcf62",
    errorColor: "#df5536",
  },
};
