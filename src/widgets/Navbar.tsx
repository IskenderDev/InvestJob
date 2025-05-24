import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import clsx from "clsx"; // если не установлен, установи: npm i clsx

export const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 text-white p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="src/shared/image/logo.svg" alt="logo" className="w-14 h-13" />
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center gap-8">
          <Link to="/">{t("Главная")}</Link>
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

        {/* Burger icon */}
        <button
          className="sm:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={clsx(
          "transition-all duration-300 overflow-hidden sm:hidden",
          menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 items-center pl-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>{t("Главная")}</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>{t("О нас")}</Link>
          <Link to="/country/poland" onClick={() => setMenuOpen(false)}>{t("Польша")}</Link>
          <Link to="/country/germany" onClick={() => setMenuOpen(false)}>{t("Германия")}</Link>
          <Link to="/country/russia" onClick={() => setMenuOpen(false)}>{t("Россия")}</Link>
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
      </div>
    </nav>
  );
};
