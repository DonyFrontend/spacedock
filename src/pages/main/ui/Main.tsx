import React from "react";
import { useTranslation } from "react-i18next";
import ExploreCards from "../model/utils/ExploreCards";
import APOD from "../model/utils/APOD";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-20 w-full">
      <div className="flex flex-col gap-y-10 w-full">
        <h1 className="text-3xl text-center">{t("main.discover")}</h1>
        <ExploreCards />
      </div>
      <APOD />
    </div>
  );
};

export default React.memo(Main);
