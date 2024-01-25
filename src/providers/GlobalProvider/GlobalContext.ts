import { createContext } from "react";

type GlobalContextValue = {
  isConnected: boolean;
};

export const GlobalContext = createContext<GlobalContextValue>({
  isConnected: false,
});
