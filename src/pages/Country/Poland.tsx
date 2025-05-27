import { useTranslation } from "react-i18next";
import bgImage from "../../shared/image/PolandBG.png";
import polandMap from "../../shared/image/polandMap.svg";
import polandFlagBig from "../../shared/image/polandFlagBig.png";
import VacanciesBlock from "../../widgets/VacanciesBlock";

const Poland = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-white flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight pb-2">
            {t("polandMain")}
          </h1>
        </div>
      </section>

      <>
        <section className="min-h-[120px] flex items-center justify-center px-4">
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl text-center leading-snug">
            {t("plMain")}
          </h1>
        </section>

``        <div
          className="relative flex-grow px-6 py-14 flex flex-col items-center max-w-7xl mx-auto"
          style={{
            backgroundImage: `url(${polandMap})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-15">
            <div className="rounded-4xl shadow-md p-6 text-gray-700">
              <h3 className="text-green-600 font-semibold mb-4 text-lg">
                {t("workTimeTitle")}
              </h3>
              <p className="text-sm leading-relaxed">{t("workTimeDesc")}</p>
            </div>

            <div className="rounded-4xl shadow-md p-6 text-gray-700">
              <h3 className="text-green-600 font-semibold mb-4 text-lg">
                {t("workSystemTitle")}
              </h3>
              <p className="text-sm leading-relaxed">{t("workSystemDesc")}</p>
            </div>

            <div className="rounded-4xl shadow-md p-6 text-gray-700 sm:col-span-2">
              <h3 className="text-green-600 font-semibold mb-4 text-lg">
                {t("workAccountingTitle")}
              </h3>
              <p className="text-sm leading-relaxed">{t("workAccountingDesc")}</p>
            </div>
          </div>
        </div>

        <div className="relative w-full py-8 flex justify-center items-center">
          <img
            src={polandFlagBig}
            alt={t("polandMain")}
            className="relative object-contain"
          />
        </div>
      </>
      <VacanciesBlock />
    </>
  );
};

export default Poland;
