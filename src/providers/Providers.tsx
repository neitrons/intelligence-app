import { PropsWithChildren } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvider";
import { StaticDataProvider } from "./StaticDataProvider";
import { QuizProvider } from "./QuizProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <QuizProvider>
        <LocaleProvider>
          <ThemeProvider>
            <StaticDataProvider>{children}</StaticDataProvider>
          </ThemeProvider>
        </LocaleProvider>
      </QuizProvider>
    </SafeAreaProvider>
  );
}
