import { Stack } from "expo-router";

import { Header } from "~/modules/Header/Header";
import { Providers } from "~/providers/Providers";

import { LayoutContainer } from "~/components/LayoutContainer";

export default function AppLayout() {
  return (
    <Providers>
      <Header />
      <LayoutContainer>
        <Stack
          screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="countries/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="flags/index" options={{ headerShown: false }} />
        </Stack>
      </LayoutContainer>
    </Providers>
  );
}
