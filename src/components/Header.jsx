import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {  useEffect } from "react";
import logo from "/src/assets/logo-badge-uplifted-figures.svg";
function Header() {   
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const [menuActive, setMenuActive] = useState(false);
  
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

    useEffect(() => {
      document.documentElement.lang = i18n.language;
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    }, [i18n.language]);
  
    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    };
    return (
    <nav className="navbar" aria-label="Primary" ref={menuRef}>
      <a href="/home" aria-label={t("home")}>
        <img className="logo" src={logo} alt="" />
      </a>

      <button
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className="desktop-menu">
        <li><a href="#">{t("About-header")}</a></li>
        <li><a href="#">{t("our-services")}</a></li>
        <li><a href="#">{t("call")}</a></li>
      </ul> 

      <button className="langBtn desktop-only" onClick={toggleLanguage}>{t("lang")}</button>
        

      {menuOpen && (
          <div className="mobile-menu" id="mobile-menu">
          <a href="/about" onClick={closeMenu}>{t("About-header")}</a>
          <a href="/services" onClick={closeMenu}>{t("our-services")}</a>
          <a href="/contact" onClick={closeMenu}>{t("call")}</a>
            <button className="langBtn" onClick={toggleLanguage}>{t("lang")}</button>
        </div>
      )}
    </nav>
  );
}



export default Header;
