import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import content_en from "./translations/en/common.json"
import content_es from "./translations/es/common.json"

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: content_en
    },

    es: {
        translations: content_es
    },
    
    ger: {
      translations: {
        Introduction: "Einführung",
        "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
          "ist ein Internationalisierungs-Framework, das eine Komplettlösung für die Lokalisierung Ihres Produkts vom Web auf das Handy und den Desktop bietet",
        "Plugins to detect the user language":
          "Plugins zur Erkennung der Benutzersprache",
        "Plugins to load translations": "Plugins zum Laden von Übersetzungen",
        "Optionally cache the translations":
          "Optional die Übersetzungen zwischenspeichern",
        Advantages: "Vorteile",
        "Flexibility to use other packages":
          "Flexibilität zur Verwendung anderer Pakete",
          "date": "Today's date: {{date, currentDate}}"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;