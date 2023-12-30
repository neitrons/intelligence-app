import { View, StyleSheet } from "react-native";
import { useThemeProvider, ThemeContextValue } from "~/providers/ThemeProvider";

import { Title } from "~/components/Title";
import { LanguageButton } from "./LanguageButton";
import { useLocaleProvider } from "~/providers/LocaleProvider";

import { Locale_Enum } from "~/providers/LocaleProvider";

export function LanguageSwitcher() {
  const theme = useThemeProvider();
  const styles = getStyleSheet({ ...theme });

  const { locale, setLocale } = useLocaleProvider();

  return (
    <View style={styles.container}>
      <Title>აირჩიე ენა</Title>
      <View style={styles.languages}>
        <LanguageButton
          text="ქართული"
          onPress={() => setLocale(Locale_Enum.KA)}
          type={locale === Locale_Enum.KA ? "primary" : "secondary"}
        />
        <LanguageButton
          text="ინგლისური"
          onPress={() => setLocale(Locale_Enum.EN)}
          type={locale === Locale_Enum.EN ? "primary" : "secondary"}
        />
      </View>
    </View>
  );
}

function getStyleSheet({ sizes }: ThemeContextValue) {
  return StyleSheet.create({
    container: {},
    languages: {
      display: "flex",
      flexDirection: "row",
      gap: sizes.spaceMedium,
      marginTop: sizes.spaceMedium,
    },
  });
}
