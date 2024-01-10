import { createContext } from "react";

type TGlobalContextValue = {};

export const GlobalContext = createContext<TGlobalContextValue>({});
