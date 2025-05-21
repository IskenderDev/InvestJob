import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import RU from "./data/ru.json";
import EN from "./data/en.json";
import KG from "./data/kg.json";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      translation: RU,
    },
    en: {
      translation: EN,
    },
    kg: {
      translation: KG,
    },
  },
});

export default i18n;
