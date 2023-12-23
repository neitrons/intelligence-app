import { createContext } from "react";

export enum Locale_Enum {
  EN = "en",
  KA = "ka",
}

type LocalContextValue = {
  locale: Locale_Enum;
  setLocale: React.Dispatch<React.SetStateAction<Locale_Enum>>;
};

export const LocaleContext = createContext<LocalContextValue>({
  locale: Locale_Enum.EN,
  setLocale: () => {},
});
