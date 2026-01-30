import React from "react";
import { Trans, useTranslation } from "react-i18next";
import ExploreCards from "../model/utils/ExploreCards";
import APOD from "../model/utils/APOD";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-60 w-full">
      <div className="max-w-350 m-auto flex flex-col gap-y-60">
        <div className="flex flex-col gap-y-10 w-full">
          <h1 className="text-3xl text-center">{t("main.discover")}</h1>
          <ExploreCards />
        </div>
        <APOD />
        <div className="w-full flex gap-10 items-center">
          <div className="w-1/2 flex flex-col gap-y-7">
            <h1 className="text-4xl">{t("main.what_is_nasa")}</h1>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {t("main.what_is_nasa_text")}
            </p>
          </div>

          <div className="w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/Kk1vR7BdTno"
              title="Cosmic Dawn (Official NASA Trailer)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dthqqetyt/image/upload/v1769313612/webb-tarantula-neb_qzcmwf.png)",
        }}
        className="flex flex-start bg-center bg-cover p-16"
      >
        <article className="w-1/3 flex flex-col gap-y-8">
          <h2 className="text-[2.4rem] font-bold">
            {t("main.explore_banner.title")}
          </h2>
          <div className="flex flex-col gap-y-3">
            <p>{t("main.explore_banner.subtitle")}</p>
            <Trans
              i18nKey={"main.explore_banner.privacy"}
              components={{
                a: (
                  <a
                    href="https://www.nasa.gov/privacy/"
                    target="_blank"
                    className="underline cursor-pointer"
                  ></a>
                ),
                p: <p></p>,
              }}
            />
          </div>
          <a
            className="text-[1.4rem] font-semibold inline w-fit cursor-pointer hover:underline"
            href="https://lp.constantcontactpages.com/sl/7ThAX6O/signup"
          >
            {t("main.explore_banner.sign_up")}
          </a>
        </article>
      </div>
    </div>
  );
};

export default React.memo(Main);
