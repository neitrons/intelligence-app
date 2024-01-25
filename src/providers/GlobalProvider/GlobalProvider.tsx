import { PropsWithChildren } from "react";
import { GlobalContext } from "./GlobalContext";
import { useNetworkCheck } from "./hooks/useNetworkCheck";

import { NoInternetModal } from "~/modules/NoIntenetModal";

export function GlobalProvider({ children }: PropsWithChildren) {
  const { isConnected } = useNetworkCheck();

  return (
    <GlobalContext.Provider value={{ isConnected }}>
      <NoInternetModal open={!isConnected} />
      {children}
    </GlobalContext.Provider>
  );
}
