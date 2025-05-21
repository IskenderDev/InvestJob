import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-bold">{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};
