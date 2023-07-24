/**
 * @file Config file for i18next.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import TRANSLATIONS_FR from "./fr/translations";
import TRANSLATIONS_EN from "./en/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: TRANSLATIONS_EN,
      },
      fr: {
        translations: TRANSLATIONS_FR,
      },
    },
    fallbackLng: "en",
    debug: process.env.NODE_ENV !== "production",
    ns: ["translations"],
    defaultNS: "translations",

    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18n;
