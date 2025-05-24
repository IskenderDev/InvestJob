import React from 'react';
import VacancyCard from './VacancyCard';
import { Vacancy } from '../types/vacancy';

interface Props {
  vacancies: Vacancy[];
}

const VacancyList: React.FC<Props> = ({ vacancies }) => {
  return (
    <div className="overflow-x-auto scrollbar-custom">
      <div className="flex gap-6 p-4">
        {vacancies.map((vacancy, index) => (
          <div className="flex-shrink-0 w-[300px] md:w-[300px]" key={index}>
            <VacancyCard vacancy={vacancy} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacancyList;
