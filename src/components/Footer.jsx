import React from "react";
import { useTranslation } from "react-i18next";


export default function Footer() {
    const { t, i18n } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
                  <h3>{ t("title")}</h3>
                  <p>{ t("slogan")}</p>
        </div>

        <nav className="footer-links">
                  <a href="#about">{ t("About-header")}</a>
                  <a href="#goals">{ t("goals-title")}</a>
                  <a href="#activities">{ t("activities")}</a>
                  <a href="#contact">{ t("call")}</a>
        </nav>

        <div className="footer-contact">
          <p>الظاهرية، فلسطين</p>
          <p dir="ltr">+970 XX XXX XXXX</p>
          <p>info@example.org</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} جمعية شباب البلد. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}