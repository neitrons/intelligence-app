import { useContext } from "react";
import { StaticDataContext } from "../StaticDataContext";

export function useStaticData() {
  return useContext(StaticDataContext);
}
