import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {  useEffect } from "react";
import logo from "/src/assets/logo-badge-uplifted-figures.svg";
import { SunIcon, MoonIcon } from "./Icons.jsx";

function getStoredTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const [menuActive, setMenuActive] = useState(false);
  const [theme, setTheme] = useState(getStoredTheme);
  const [systemPrefersDark, setSystemPrefersDark] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
  const [activeSection, setActiveSection] = useState(null);

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
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

    useEffect(() => {
      document.documentElement.lang = i18n.language;
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.title = t("title");
    }, [i18n.language, t]);

    useEffect(() => {
      const sections = document.querySelectorAll("#about, #goals, #programs, #contact");
      if (!sections.length || !("IntersectionObserver" in window)) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );

      sections.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => setSystemPrefersDark(e.matches);
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
      if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    }, [theme]);

    const resolvedTheme = theme || (systemPrefersDark ? "dark" : "light");

    const toggleTheme = () => {
      const next = resolvedTheme === "dark" ? "light" : "dark";
      setTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // ignore storage errors (e.g. private browsing)
      }
    };

    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    };

    const handleMenuLinkClick = () => {
      closeMenu();
      toggleBtnRef.current?.focus();
    };

    const handleNavBlur = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.relatedTarget)) {
        setMenuOpen(false);
      }
    };

    const nextLanguage = i18n.language === "en" ? "ar" : "en";

    return (
    <nav className="navbar" aria-label="Primary" ref={menuRef} onBlur={handleNavBlur}>
      <div className="navbar-start">
        <a href="#top" aria-label={t("home")}>
          <img className="logo" src={logo} alt="" />
        </a>

        <button
          type="button"
          ref={toggleBtnRef}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t("close-menu") : t("open-menu")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>

      <ul className="desktop-menu">
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : undefined}
            aria-current={activeSection === "about" ? "location" : undefined}
          >
            {t("About-header")}
          </a>
        </li>
        <li>
          <a
            href="#goals"
            className={activeSection === "goals" ? "active" : undefined}
            aria-current={activeSection === "goals" ? "location" : undefined}
          >
            {t("goals-title")}
          </a>
        </li>
        <li>
          <a
            href="#programs"
            className={activeSection === "programs" ? "active" : undefined}
            aria-current={activeSection === "programs" ? "location" : undefined}
          >
            {t("our-services")}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : undefined}
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            {t("call")}
          </a>
        </li>
      </ul>

      <div className="navbar-end">
        <button
          type="button"
          className="theme-toggle desktop-only"
          onClick={toggleTheme}
          aria-label={resolvedTheme === "dark" ? t("switch-to-light-theme") : t("switch-to-dark-theme")}
        >
          {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          type="button"
          className="langBtn desktop-only"
          onClick={toggleLanguage}
          lang={nextLanguage}
          aria-label={t("switch-language")}
        >
          {t("lang")}
        </button>
      </div>

      {menuOpen && (
          <div className="mobile-menu" id="mobile-menu">
          <a
            href="#about"
            onClick={handleMenuLinkClick}
            className={activeSection === "about" ? "active" : undefined}
            aria-current={activeSection === "about" ? "location" : undefined}
          >
            {t("About-header")}
          </a>
          <a
            href="#goals"
            onClick={handleMenuLinkClick}
            className={activeSection === "goals" ? "active" : undefined}
            aria-current={activeSection === "goals" ? "location" : undefined}
          >
            {t("goals-title")}
          </a>
          <a
            href="#programs"
            onClick={handleMenuLinkClick}
            className={activeSection === "programs" ? "active" : undefined}
            aria-current={activeSection === "programs" ? "location" : undefined}
          >
            {t("our-services")}
          </a>
          <a
            href="#contact"
            onClick={handleMenuLinkClick}
            className={activeSection === "contact" ? "active" : undefined}
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            {t("call")}
          </a>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={resolvedTheme === "dark" ? t("switch-to-light-theme") : t("switch-to-dark-theme")}
            >
              {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              className="langBtn"
              onClick={toggleLanguage}
              lang={nextLanguage}
              aria-label={t("switch-language")}
            >
              {t("lang")}
            </button>
        </div>
      )}
    </nav>
  );
}



export default Header;
