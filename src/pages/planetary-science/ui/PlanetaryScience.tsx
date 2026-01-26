import { Navigation } from "@/widgets/navigation";
import { useTranslation } from "react-i18next";

const PlanetaryScience = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-20 w-full">
      <Navigation data={[{ text: "text", to: "/text" }]} />
    </div>
  );
};

export default PlanetaryScience;
