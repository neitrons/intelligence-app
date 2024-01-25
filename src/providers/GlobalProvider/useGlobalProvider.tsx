import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function useGlobalProvider() {
  return useContext(GlobalContext);
}
