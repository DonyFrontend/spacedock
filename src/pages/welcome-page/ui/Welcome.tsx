import "@/shared/lang/i18n/i18n";
import { useTranslation } from "react-i18next";
import "@/app/styles/app.css";
import { LangSelect } from "@/shared/lang/ui/lang-select";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-16 items-center text-white">
      <div
        className="w-full h-svh flex justify-center items-center bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dthqqetyt/image/upload/v1766739038/R_ac3mvc_llfsht.webp)`,
        }}
      >
        <div className="absolute inset-0 bg-black/75 z-0"></div>{" "}
        <div className="max-w-350 mx-auto font-exo flex flex-col justify-center items-center gap-y-16 z-10 relative">
          <motion.div
            initial={{ translateY: -80, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 4 }}
            className="flex flex-col gap-y-3 text-center"
          >
            <h1 className="text-4xl font-exo font-bold">
              {t("landing.title")}
            </h1>
            <h2 className="text-2xl">
              <Trans
                i18nKey="landing.under_title"
                components={{ b: <b className="text-neon" /> }}
              />
            </h2>
          </motion.div>
          <div className="fixed top-2.5 left-2.5">
            <LangSelect />
          </div>
          <motion.div
            initial={{ translateY: 80, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <Link
              to="/biblary"
              className="border-2 text-[18px] cursor-pointer font-semibold shadow-main  border-main p-3 py-4 hover:bg-main duration-200 rounded-[15px]"
            >
              {t("landing.button")}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
