import { useContext } from "react";
import { StandardContext } from "./StandardContext";

export function useStandardProvider() {
  return useContext(StandardContext);
}
