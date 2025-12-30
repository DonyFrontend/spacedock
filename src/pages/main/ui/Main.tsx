import { ReactParticles } from "@/widgets/particles";
import React from "react";
import { useTranslation } from "react-i18next";
import ExploreCards from "../model/utils/ExploreCards";
import APOD from "../model/utils/APOD";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <ReactParticles />
      </div>
      <div className="text-white max-w-350 m-auto flex flex-col items-center">
        <div className="flex flex-col gap-y-20 w-full">
          <div className="flex flex-col gap-y-10 w-full">
            <h1 className="text-3xl text-center">{t("main.discover")}</h1>
            <ExploreCards />
          </div>
          <APOD />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Main);
