import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <nav className="bg-transparent p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="src/shared/image/logo.svg" alt="logo" className="w-10 h-10" />
        </div>

        <div className="hidden sm:flex items-center gap-8">
          <Link to="/">{t("Главная")}</Link>
          <Link to="/about">{t("О нас")}</Link>
          <Link to="/country/poland">{t("Польша")}</Link>
          <Link to="/country/germany">{t("Германия")}</Link>
          <Link to="/country/russia">{t("Россия")}</Link>

          <Select
            defaultValue="ru"
            onChange={handleLanguageChange}
            className="w-[90px] text-black"
            options={[
              { label: "RU", value: "ru" },
              { label: "EN", value: "en" },
              { label: "KG", value: "kg" },
            ]}
          />
        </div>

        <button
          className="sm:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 items-start pl-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {t("Главная")}
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            {t("О нас")}
          </Link>
          <Link to="/country/poland" onClick={() => setMenuOpen(false)}>
            {t("Польша")}
          </Link>
          <Link to="/country/germany" onClick={() => setMenuOpen(false)}>
            {t("Германия")}
          </Link>
          <Link to="/country/russia" onClick={() => setMenuOpen(false)}>
            {t("Россия")}
          </Link>
          <Select
            defaultValue="ru"
            onChange={handleLanguageChange}
            className="w-[90px] text-black"
            options={[
              { label: "RU", value: "ru" },
              { label: "EN", value: "en" },
              { label: "KG", value: "kg" },
            ]}
          />
        </div>
      )}
    </nav>
  );
};
