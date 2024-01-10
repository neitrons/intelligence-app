import { PropsWithChildren } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvider";
import { StaticDataProvider } from "./StaticDataProvider";
import { GlobalProvider } from "./GlobalProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <GlobalProvider>
        <LocaleProvider>
          <ThemeProvider>
            <StaticDataProvider>{children}</StaticDataProvider>
          </ThemeProvider>
        </LocaleProvider>
      </GlobalProvider>
    </SafeAreaProvider>
  );
}
