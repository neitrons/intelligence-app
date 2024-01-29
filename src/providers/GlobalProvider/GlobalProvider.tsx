import { PropsWithChildren } from "react";
import { GlobalContext } from "./GlobalContext";
import { useNetworkCheck } from "./hooks/useNetworkCheck";

export function GlobalProvider({ children }: PropsWithChildren) {
  const { isConnected } = useNetworkCheck();

  return (
    <GlobalContext.Provider value={{ isConnected }}>
      {children}
    </GlobalContext.Provider>
  );
}
