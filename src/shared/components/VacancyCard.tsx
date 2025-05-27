import React from "react";
import { Vacancy } from "../types/vacancy";
import { useTranslation } from "react-i18next";

interface Props {
  vacancy: Vacancy;
}

const VacancyCard: React.FC<Props> = ({ vacancy }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
      <img
        src={vacancy.img}
        alt={vacancy.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2">
          {t(`vacancies.${vacancy.title}`)}
        </h3>
        <p className="text-gray-600 text-sm flex-grow">
          {t(`vacancies.${vacancy.description}`)}
        </p>
        <p className="text-gray-500 text-xs mt-2 italic">
          {t(`countries.${vacancy.country}`)}
        </p>
      </div>
    </div>
  );
};

export default VacancyCard;
