export type LangType = { code: string; label: string };

export const current_lang = localStorage.getItem("current_lang") || "ru";

export const langsStaticArray: LangType[] = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

export let langs: LangType[] = langsStaticArray;

export const resetLangs = (): void => {
  langs = langsStaticArray;
};
