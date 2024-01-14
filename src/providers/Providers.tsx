import { PropsWithChildren } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvider";
import { StaticDataProvider } from "./StaticDataProvider";
import { QuizProvider } from "./QuizProvider";
import { MainGameProvider } from "./MainGameProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <LocaleProvider>
        <ThemeProvider>
          <StaticDataProvider>
            <MainGameProvider>
              <QuizProvider>{children}</QuizProvider>
            </MainGameProvider>
          </StaticDataProvider>
        </ThemeProvider>
      </LocaleProvider>
    </SafeAreaProvider>
  );
}
