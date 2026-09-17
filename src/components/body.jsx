import React from "react";
import { useTranslation } from "react-i18next";

function Body() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <main className="info" lang={i18n.language} dir={isRTL ? "rtl" : "ltr"}>
      <h1>{t("title")}</h1>
      <p className="description">{t("description")}</p>

      <div className="hero" role="img" aria-label={t("hero-alt", "صورة فريق جمعية شباب البلد")}>
        <img
          src="src/assets/img.jpeg"
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />
        <div className="hero-caption" style={{ position: "relative", zIndex: 1 }}></div>
      </div>

      <section className="cards" aria-labelledby="vision-mission-heading">
        <h2 id="vision-mission-heading" className="sr-only">
          {t("vision-title")} / {t("mission-title")}
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

      <section className="objectives" aria-labelledby="objectives-heading">
        <h2 id="objectives-heading" className="objectives-header">
          {t("goals-title")}
        </h2>
        <ul className="objectives-grid">
          <li className="objective-card">
            <div className="objective-title">
              <i className="fa-solid fa-bullseye" aria-hidden="true" focusable="false"></i>
              <span>{t("goal-title-1")}</span>
            </div>
            <p>{t("goal-1")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <i className="fa-solid fa-users" aria-hidden="true" focusable="false"></i>
              <span>{t("goal-title-2")}</span>
            </div>
            <p>{t("goal-2")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <i className="fa-solid fa-leaf" aria-hidden="true" focusable="false"></i>
              <span>{t("goal-title-3")}</span>
            </div>
            <p>{t("goal-3")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <i className="fa-solid fa-book-open" aria-hidden="true" focusable="false"></i>
              <span>{t("goal-title-4")}</span>
            </div>
            <p>{t("goal-4")}</p>
          </li>

          <li className="objective-card">
            <div className="objective-title">
              <i className="fa-solid fa-heart" aria-hidden="true" focusable="false"></i>
              <span>{t("goal-title-5")}</span>
            </div>
            <p>{t("goal-5")}</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="gallery-heading">
        <h2
          id="gallery-heading"
          className="gallery-title"
          style={{ fontSize: "22px", textAlign: "center", marginBottom: "20px" }}
        >
          {t("activities")}
        </h2>

        <ul className="gallery">
          <li className="gallery-item">
            <img
              src="src/assets/activity1.jpeg"
              alt="نشاط تدريبي للأشخاص ذوي الإعاقة"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </li>
          <li className="gallery-item">
            <img
              src="src/assets/activity2.jpeg"
              alt="ورشة توعية مجتمعية"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </li>
          <li className="gallery-item">
            <img
              src="src/assets/activity3.jpeg"
              alt="فعالية دمج مجتمعي"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Body;