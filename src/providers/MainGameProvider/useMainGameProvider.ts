import { useContext } from "react";
import { MainGameContext } from "./MainGameContext";

export function useMainGameProvider() {
  return useContext(MainGameContext);
}
