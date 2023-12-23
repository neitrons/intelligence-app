import React, { PropsWithChildren, useState } from "react";
import { IntlProvider } from "react-intl";

import en from "./translations/en.json";
import ka from "./translations/ka.json";

import { Locale_Enum, LocaleContext } from "./LocaleContext";

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale_Enum>(Locale_Enum.EN);

  const languages = { en, ka };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale="en"
        messages={languages[locale]}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
