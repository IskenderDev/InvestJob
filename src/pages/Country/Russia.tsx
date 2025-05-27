import { useTranslation } from "react-i18next";
import bgImage from "../../shared/image/RussiaBG.png";
import polandMap from "../../shared/image/russiaMap.svg";
import polandFlagBig from "../../shared/image/russiaFlagBig.png";
import VacanciesBlock from "../../widgets/VacanciesBlock";

const Russia = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-white flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight pb-2">
            {t("russiaMain")}
          </h1>
        </div>
      </section>

      <>
        <section className="min-h-[120px] flex items-center justify-center px-4">
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl text-center leading-snug">
            {t("ruMain")}
          </h1>
        </section>
        ``{" "}
        <div
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
                {t("dworkTimeTitle")}
              </h3>
              <p className="text-sm leading-relaxed">{t("dworkTimeDesc")}</p>
            </div>

            <div className="rounded-4xl shadow-md p-6 text-gray-700">
              <h3 className="text-green-600 font-semibold mb-4 text-lg">
                {t("dworkSystemTitle")}
              </h3>
              <p className="text-sm leading-relaxed">{t("dworkSystemDesc")}</p>
            </div>

            <div className="rounded-4xl shadow-md p-6 text-gray-700 sm:col-span-2">
              <h3 className="text-green-600 font-semibold mb-4 text-lg">
                {t("dworkAccountingTitle")}
              </h3>
              <p className="text-sm leading-relaxed">
                {t("dworkAccountingDesc")}
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full py-8 flex justify-center items-center -mt-6">
          <img
            src={polandFlagBig}
            alt={t("polandMain")}
            className="relative object-contain max-w-[800px] w-full"
          />
        </div>
      </>
      <VacanciesBlock />
    </>
  );
};

export default Russia;
