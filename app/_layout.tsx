import { Slot } from "expo-router";

import { Header } from "~/modules/Header/Header";
import { Providers } from "~/providers/Providers";
import { LayoutContainer } from "~/components/LayoutContainer";

export default function _layout() {
  return (
    <Providers>
      <LayoutContainer>
        <Header />
        <Slot />
      </LayoutContainer>
    </Providers>
  );
}
