import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import lang_icon from "@/shared/assets/icons/language.svg";
import type { LangType } from "@/shared/lang/data/lang";

const LANG_KEY = "current_lang";
const LANGS: LangType[] = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
];

const LangSelect = () => {
  const { i18n } = useTranslation();

  const [currentLang, setCurrentLang] = useState<LangType>(() => {
    const saved = localStorage.getItem(LANG_KEY);
    return LANGS.find((l) => l.code === saved) ?? LANGS[0];
  });

  useEffect(() => {
    if (i18n.language !== currentLang.code) {
      i18n.changeLanguage(currentLang.code);
    }
  }, [i18n, currentLang.code]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const newCurrentLang = LANGS.find((l) => l.code === newLang)!;
    setCurrentLang(newCurrentLang);
    localStorage.setItem(LANG_KEY, newLang);
  };

  const orderedLangs = [
    currentLang,
    ...LANGS.filter((l) => l.code !== currentLang.code),
  ];

  return (
    <div className="p-3 border-white bg-black border rounded-[500px] flex gap-x-2 px-4 py-2 items-center">
      <img src={lang_icon} alt="Language icon" />
      <select
        className="text-lg cursor-pointer outline-none"
        value={currentLang.code}
        onChange={handleChange}
      >
        {orderedLangs.map((item) => (
          <option className="bg-black text-white" key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangSelect;
