/**
 * @file Navbar Component for the site.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import {useState} from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Button from './Button';

import '../styles/components/Navbar.css';

function Navbar({style}) {
  const navigate = useNavigate();
  const [language, setLang] = useState("en");
  const [t, i18n] = useTranslation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLanguageChange = () => {
    const nextLang = language === "en" ? "fr" : "en";
    i18n.changeLanguage(nextLang);
    setLang(nextLang);
  };

  const onClick = (path) => {
    navigate(path);
  };

    return (
      <nav className="navigation">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Button
                text={t("Navbar.languageSwitcher")}
                className={"nav-btn"}
                onClick={handleLanguageChange}
              />
            </li>
            <li>
              <Button
                text={t("Navbar.home")}
                className={"nav-btn"}
                onClick={() => navigate("/")}
              />
            </li>
            <li>
              <Button
                text={t("Navbar.gallery")}
                className={"nav-btn"}
                onClick={() => navigate("/gallery")}
              />
            </li>
            <li>
              <Button
                text={t("Navbar.about")}
                className={"nav-btn"}
                onClick={() => navigate("/about")}
              />
            </li>
            <li>
              <Button
                text={t("Navbar.donate")}
                className={"nav-btn"}
                onClick={() => navigate("/donate")}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;