import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import activity1 from "/src/assets/activity1.jpeg";
import activity2 from "/src/assets/activity2.jpeg";
import activity3 from "/src/assets/activity3.jpeg";
import img from "/src/assets/img.jpeg";
import {
  BullseyeIcon,
  UsersIcon,
  LeafIcon,
  BookOpenIcon,
  HeartIcon,
  HealthIcon,
  MegaphoneIcon,
  BriefcaseIcon,
  CandleIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons.jsx";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "../siteInfo.js";
function Body() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const mainRef = useRef(null);

  useEffect(() => {
    const sections = mainRef.current?.querySelectorAll(".page-section") ?? [];

    if (!("IntersectionObserver" in window)) {
      sections.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main-content" className="info" lang={i18n.language} dir={isRTL ? "rtl" : "ltr"} ref={mainRef}>
      <h1>{t("title")}</h1>
      <p className="description">{t("description")}</p>

      <div className="hero" role="img" aria-label={t("hero-alt")}>
        <img
          className="hero-img"
          src={img}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-caption" style={{ position: "relative", zIndex: 1 }}></div>
      </div>

      <section id="about" className="page-section cards" aria-labelledby="about-heading">
        <h2 id="about-heading" className="objectives-header">
          {t("About-header")}
        </h2>
        <div className="card">
          <h3>{t("vision-title")}</h3>
          <p>{t("vision")}</p>
        </div>
        <div className="card">
          <h3>{t("mission-title")}</h3>
          <p>{t("mission")}</p>
        </div>
      </section>

      <section id="goals" className="page-section" aria-labelledby="objectives-heading">
        <h2 id="objectives-heading" className="objectives-header">
          {t("goals-title")}
        </h2>
        <ul className="objectives-grid">
          <li className="objective-card">
            <div className="objective-title">
              <BullseyeIcon className="objective-icon" />
              <span>{t("goal-title-1")}</span>
            </div>
            <p>{t("goal-1")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <UsersIcon className="objective-icon" />
              <span>{t("goal-title-2")}</span>
            </div>
            <p>{t("goal-2")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <LeafIcon className="objective-icon" />
              <span>{t("goal-title-3")}</span>
            </div>
            <p>{t("goal-3")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <BookOpenIcon className="objective-icon" />
              <span>{t("goal-title-4")}</span>
            </div>
            <p>{t("goal-4")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <HeartIcon className="objective-icon" />
              <span>{t("goal-title-5")}</span>
            </div>
            <p>{t("goal-5")}</p>
          </li>
        </ul>
      </section>

      <section id="programs" className="page-section" aria-labelledby="programs-heading">
        <h2 id="programs-heading" className="objectives-header">
          {t("programs-title")}
        </h2>
        <ul className="objectives-grid">
          <li className="objective-card">
            <div className="objective-title">
              <HealthIcon className="objective-icon" />
              <span>{t("program-title-1")}</span>
            </div>
            <p>{t("program-1")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <MegaphoneIcon className="objective-icon" />
              <span>{t("program-title-2")}</span>
            </div>
            <p>{t("program-2")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <BriefcaseIcon className="objective-icon" />
              <span>{t("program-title-3")}</span>
            </div>
            <p>{t("program-3")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <CandleIcon className="objective-icon" />
              <span>{t("program-title-4")}</span>
            </div>
            <p>{t("program-4")}</p>
          </li>
        </ul>
      </section>

      <section id="activities" className="page-section" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="objectives-header">
          {t("activities")}
        </h2>

        <ul className="gallery">
          <li className="gallery-item">
            <img src={activity1} alt={t("gallery-alt-1")} />
          </li>
          <li className="gallery-item">
            <img src={activity2} alt={t("gallery-alt-2")} />
          </li>
          <li className="gallery-item">
            <img src={activity3} alt={t("gallery-alt-3")} />
          </li>
        </ul>
      </section>

      <section id="contact" className="page-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="objectives-header">
          {t("call")}
        </h2>
        <p>{t("contact-intro")}</p>
        <ul className="contact-details">
          <li>
            <MailIcon className="contact-icon" />
            <span className="contact-label">{t("contact-email-label")}:</span>
            <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr">{CONTACT_EMAIL}</a>
          </li>
          <li>
            <PhoneIcon className="contact-icon" />
            <span className="contact-label">{t("contact-phone-label")}:</span>
            <a href={`tel:${CONTACT_PHONE_TEL}`} dir="ltr">{CONTACT_PHONE_DISPLAY}</a>
          </li>
        </ul>
        <p className="closing-statement">{t("closing-statement")}</p>
      </section>
    </main>
  );
}

export default Body;