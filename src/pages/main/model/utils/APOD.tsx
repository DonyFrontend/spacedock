import { useImageOfTheDayStore } from "@/app/providers/store/image-of-the-day/image-of-the-day-store";
import { useFetch } from "@/shared/api/useFetch";
import { LazyImage } from "@/shared/ui/lazy-image";
import { useTranslation } from "react-i18next";

const APOD = () => {
  const { t } = useTranslation();
  const { imageOfTheDay, setImageOfTheDay } = useImageOfTheDayStore();
  const { loading } = useFetch({ fetch: setImageOfTheDay });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(imageOfTheDay);
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-4xl text-center">{t("main.picture_of_the_day")}</h1>
      <div className="flex w-full h-max justify-between">
        <div className="flex flex-col justify-between gap-y-5 p-4 w-1/2">
          <h2 className="text-[25px] font-bold">
            {imageOfTheDay.title}
            <span className="text-[16px] font-normal">
              {" "}
              - {imageOfTheDay.date}
            </span>
          </h2>
          <p>{imageOfTheDay.explanation}</p>
          <p className="font-semibold text-[18px]">
            {t("main.copyright", { author: imageOfTheDay.copyright })}
          </p>
        </div>
        <div className="w-1/2 rounded-[15px] overflow-hidden">
          <LazyImage src={imageOfTheDay.hdurl} alt="APOD" />
        </div>
      </div>
    </div>
  );
};

export default APOD;
