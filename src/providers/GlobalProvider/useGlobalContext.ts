import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function useGlobalContext() {
  return useContext(GlobalContext);
}
