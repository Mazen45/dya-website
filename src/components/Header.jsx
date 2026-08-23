import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import logo from "/src/assets/logo-badge-uplifted-figures.svg"
function Header() {
    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      document.documentElement.lang = i18n.language;
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    }, [i18n.language]);
  
    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    };
  return (
    <div>
      <a href="#main" className="skip-link">{ t("skip")}</a>
    <nav className='navbar' aria-label='Primary'>
      <a href="/home"><img className="logo" src={logo} alt="" style={{ height: "80px", width: "80px" }}/></a>
      <ul>
        <li><a href="/about">{t("About-header")}</a></li>
        <li><a href="/services">{ t("our-services")}</a></li>
        <li><a href="/contact">{t("call")}</a></li>
      
      </ul>
      <a href={t("lang")} onClick={(e) => {
          toggleLanguage();
          e.preventDefault();
        }
        }>{t("lang")}</a>
      </nav>
      </div>

  );

}
export default Header;
