import { useTranslation } from "react-i18next";
import bgImage from "../../shared/image/mainBG.jpg";
import aboutUsImage from "../../shared/image/AboutUs.png";
import flagPL from "../../shared/image/pl.png";
import flagRu from "../../shared/image/ru.png";
import flagGerman from "../../shared/image/german.png";
import imgPoland from "../../shared/image/poland-cover.png";
import imgGerman from "../../shared/image/german-cover.png";
import imgRu from "../../shared/image/ru-cover.png";
import { CountrySection } from "../../shared/components/CountrySection";
import VacanciesBlock from "../../widgets/VacanciesBlock";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-white flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight pb-2">
            {t("open_europe")}
          </h1>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-serif pb-2">
            {t("with_new_job")}
          </h2>
        </div>
      </section>

      <section className="px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        <div className="flex-1 max-w-xl text-gray-800">
          <h3 className="text-green-600 font-semibold mb-2">{t("about_us")}</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("about_heading")}
          </h2>
          <p className="text-lg leading-relaxed">{t("about_text")}</p>
        </div>
        <div className="flex-1">
          <img
            src={aboutUsImage}
            alt={t("about_us")}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>
      <CountrySection
        title={t("country_pl_title")}
        text={t("country_pl_text")}
        flag={flagPL}
        image={imgPoland}
        imagePosition="right"
        buttonLabel={t("more_btn")}
      />
       <CountrySection
        title={t("country_de_title")}
        text={t("country_de_text")}
        flag={flagGerman}
        image={imgGerman}
        imagePosition="left"
        buttonLabel={t("more_btn")}
      />
        <CountrySection
        title={t("country_ru_title")}
        text={t("country_ru_text")}
        flag={flagRu}
        image={imgRu}
        imagePosition="right"
        buttonLabel={t("more_btn")}
      />
      <VacanciesBlock/>
    </>
  );
};
