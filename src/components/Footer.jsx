import React from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "../siteInfo.js";


export default function Footer() {
    const { t, i18n } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
                  <h2>{ t("title")}</h2>
                  <p>{ t("slogan")}</p>
        </div>

        <nav className="footer-links" aria-label={t("footer-nav-label")}>
                  <a href="#about">{ t("About-header")}</a>
                  <a href="#goals">{ t("goals-title")}</a>
                  <a href="#programs">{ t("programs-title")}</a>
                  <a href="#activities">{ t("activities")}</a>
                  <a href="#contact">{ t("call")}</a>
        </nav>

        <div className="footer-contact">
          <p>{t("location")}</p>
          <p dir="ltr"><a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a></p>
          <p dir="ltr"><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {t("title")}. {t("rights-reserved")}</p>
      </div>
    </footer>
  );
}