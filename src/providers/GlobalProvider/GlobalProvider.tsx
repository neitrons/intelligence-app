import { PropsWithChildren } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
