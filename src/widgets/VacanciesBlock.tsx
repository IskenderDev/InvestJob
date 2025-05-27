// pages/VacanciesPage.tsx
import React from 'react';
import VacancyList from '../shared/components/VacancyList';
import { vacancies } from '../shared/data/vacancies';

const VacanciesBlock: React.FC = () => {
  return (
    <div className="p-6 px-10">
      <h1 className="text-2xl font-bold mb-6">Вакансии</h1>
      <VacancyList vacancies={vacancies} />
    </div>
  );
};

export default VacanciesBlock;
