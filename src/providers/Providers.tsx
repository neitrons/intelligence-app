import { PropsWithChildren } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <LocaleProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LocaleProvider>
    </SafeAreaProvider>
  );
}
