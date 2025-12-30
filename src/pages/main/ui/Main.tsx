import { ReactParticles } from "@/widgets/particles";
import React from "react";
import { useTranslation } from "react-i18next";
import ExploreCards from "../model/utils/ExploreCards";
import { useImageOfTheDayStore } from "@/app/providers/store/image-of-the-day/image-of-the-day-store";
import { useFetch } from "@/shared/api/useFetch";

const Main = () => {
  const { t } = useTranslation();
  const { imageOfTheDay, setImageOfTheDay } = useImageOfTheDayStore();
  const { loading } = useFetch({ fetch: setImageOfTheDay });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(imageOfTheDay);

  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <ReactParticles />
      </div>
      <div className="text-white max-w-350 m-auto pt-20 flex flex-col items-center">
        <div className="flex flex-col gap-y-20 w-full">
          <div className="flex flex-col gap-y-10 w-full">
            <h1 className="text-3xl text-center">{t("main.discover")}</h1>
            <ExploreCards />
          </div>
          <div>
            <h1 className="text-4xl text-center">
              {t("main.picture_of_the_day")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Main);
