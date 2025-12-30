import i18next, { type Resource } from "i18next";
import ru from "../translations/ru.json";
import en from "../translations/en.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

let lang = localStorage.getItem("current_lang");

if (!lang) {
  lang = "ru";
  localStorage.setItem("current_lang", lang);
}

const resources: Resource = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: lang,
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
