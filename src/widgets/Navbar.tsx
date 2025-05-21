import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <nav className="bg-gray-100 p-4 shadow-md flex justify-between">
      <div className="text-lg font-bold">InvestJob</div>
      <div className="space-x-4">
        <Link to="/">Главная</Link>
        <Link to="/country/poland">Польша</Link>
        <Link to="/country/germany">Германия</Link>
        <Link to="/country/russia">Россия</Link>
      </div>
      <div className="flex gap-2.5">
        <Select
          defaultValue="ru"
          style={{ width: 120 }}
          onChange={handleLanguageChange}
          options={[
            { label: 'RU', value: 'ru' },
            { label: 'EN', value: 'en' },
            { label: 'KG', value: 'kg' },
          ]}
        />
      </div>
    </nav>
  );
};
