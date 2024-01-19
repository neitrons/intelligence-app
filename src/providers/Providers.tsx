import { PropsWithChildren } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvider";
import { QuizProvider } from "./QuizProvider";
import { StandardProvider } from "./StandardProvider";
import { StaticDataProvider } from "./StaticDataProvider";
import { SoundProvider } from "./SoundProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <LocaleProvider>
        <ThemeProvider>
          <SoundProvider>
            <StaticDataProvider>
              <StandardProvider>
                <QuizProvider>{children}</QuizProvider>
              </StandardProvider>
            </StaticDataProvider>
          </SoundProvider>
        </ThemeProvider>
      </LocaleProvider>
    </SafeAreaProvider>
  );
}
