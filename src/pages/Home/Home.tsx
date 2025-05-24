import { useTranslation } from "react-i18next";
import bgImage from "../../shared/image/mainBG.jpg";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      className="h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-white flex flex-col gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight pb-2">
          {t("Открой Европу")}
        </h1>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-serif pb-2">
          {t("С новой работой")}
        </h2>
      </div>
    </section>
  );
};
