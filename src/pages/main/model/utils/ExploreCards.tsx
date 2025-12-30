import { useTranslation } from "react-i18next";
import arrow_right from "@/shared/assets/icons/arrow-right.svg";

const ExploreCards = () => {
  const { t } = useTranslation();
  const explore_cards_data: { image: string; text: string; id: number }[] = [
    {
      image:
        "https://res.cloudinary.com/dthqqetyt/image/upload/v1766738723/planetary_f9whli.webp",
      text: t("main.explore_cards.planets"),
      id: 1,
    },
    {
      image:
        "https://res.cloudinary.com/dthqqetyt/image/upload/v1766739029/200225092214-02-nasa-moon-apollo-13-full-169_jmb5oy_nrozju.webp",
      text: t("main.explore_cards.lunary"),
      id: 2,
    },
    {
      image:
        "https://res.cloudinary.com/dthqqetyt/image/upload/v1766739015/1.Home_image_Helio-jpeg_bz9pps_thxzor.webp",
      text: t("main.explore_cards.heliophysics"),
      id: 3,
    },
    {
      image:
        "https://res.cloudinary.com/dthqqetyt/image/upload/v1766739242/3_balloons_stratosphere_view1_ji2vgn.webp",
      text: t("main.explore_cards.biological"),
      id: 4,
    },
  ];

  return (
    <section className="grid grid-cols-4 auto-rows-auto grid-rows-1 gap-14">
      {explore_cards_data.map((item) => (
        <article
          key={item.id}
          className="relative cursor-pointer h-[70svh] bg-center bg-cover rounded-lg flex p-3 items-end"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <div className="flex w-full justify-between items-center">
            <h3 className="relative z-10 p-6 text-2xl font-semibold">
              {item.text}
            </h3>
            <img src={arrow_right} alt="arrow" className="w-8 h-8 m-auto" />
          </div>
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </article>
      ))}
    </section>
  );
};

export default ExploreCards;
