import { PropsWithChildren } from "react";
import { useFetchQuestions } from "./hooks/useFetchQuestions";

export function StaticDataProvider({ children }: PropsWithChildren) {
  useFetchQuestions();

  return <>{children}</>;
}
