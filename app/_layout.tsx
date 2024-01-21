import { Stack } from "expo-router";

import { Header } from "~/modules/Header";
import { Footer } from "~/modules/Footer";
import { Providers } from "~/providers/Providers";
import { useThemeProvider } from "~/providers/ThemeProvider";
import { LayoutContainer } from "~/components/LayoutContainer";

export default function AppLayout() {
  const { colors } = useThemeProvider();

  return (
    <Providers>
      <Header />
      <LayoutContainer>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: colors.primaryBg },
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="list/index" options={{ headerShown: false }} />
          <Stack.Screen name="quiz/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="standard/index"
            options={{ headerShown: false }}
          />
        </Stack>
      </LayoutContainer>
      <Footer />
    </Providers>
  );
}
