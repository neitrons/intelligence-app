import { PropsWithChildren } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvider";
import { QuizProvider } from "./QuizProvider";
import { StandardProvider } from "./StandardProvider";
import { GlobalProvider } from "./GlobalProvider";
import { StaticDataProvider } from "./StaticDataProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <LocaleProvider>
        <ThemeProvider>
          <GlobalProvider>
            <StaticDataProvider>
              <StandardProvider>
                <QuizProvider>{children}</QuizProvider>
              </StandardProvider>
            </StaticDataProvider>
          </GlobalProvider>
        </ThemeProvider>
      </LocaleProvider>
    </SafeAreaProvider>
  );
}
