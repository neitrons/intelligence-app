import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useThemeProvider() {
  const { ...values } = useContext(ThemeContext);
  return { ...values };
}
