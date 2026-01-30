import { Navigation } from "@/widgets/navigation";
import { useTranslation } from "react-i18next";

const PlanetaryScience = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-20 w-full">
      <Navigation data={[{ text: "text", to: "/text" }]} />
      <div
        className="w-full top-9.5 h-svh flex items-center gap-y-5 bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dthqqetyt/image/upload/v1769605796/t_aa4bbbcf51d64fadb6ae10abecc365d6_name_a50d7068160e40c08f0df6c1b64caee0_zehi5j.jpg)",
        }}
      >
        <h1>{t("planetary_science.title")}</h1>
        <p>{t("planetary_science.under_title")}</p>
      </div>
    </div>
  );
};

export default PlanetaryScience;
