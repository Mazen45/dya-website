import React from "react";
import { useTranslation } from "react-i18next";


function Body() {
    const { t, i18n } = useTranslation();
    return <div className="info">

        
        <h1>{t("title")}</h1>
        <h2>{t("description")}</h2>
     
      <div className="hero">
        <img
        src="src/assets/img.jpeg"
        alt="فريق جمعية شباب البلد"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
        />
  <div
    className="hero-caption"
    style={{ position: "relative", zIndex: 1 }}
  >
  </div>
</div>
        <div className="cards">
            <div className="card">
                <h2>{t("vision-title")}</h2>
                <p>{ t("vision")}</p>
            </div>
            <div className="card">
                <h2>{t("mission-title")}</h2>
                <p>{ t("mission")}</p>
            </div>
        </div>

        <div className="objectives">
            <h2 className="objectives-header">{t("goals-title")}</h2>
            <div className="objectives-grid">
           
                <div className="objective-card">
                    <div className="objective-title">
                        <i className="fa-solid fa-bullseye"></i>
                        <span>{t("goal-title-1")}</span>
                    </div>
                    <p>{t("goal-1")}</p>
                </div>

            <div className="objective-card">
                <div className="objective-title">
                    <i className="fa-solid fa-users"></i>
                    <span>{t("goal-title-2")}</span>
                </div>
                <p>{t("goal-2")}</p>
            </div>

            <div className="objective-card">
                <div className="objective-title">
                    <i className="fa-solid fa-leaf"></i>
                    <span>{t("goal-title-3")}</span>
                </div>
                <p>{t("goal-3")}</p>
            </div>

            <div className="objective-card">
                <div className="objective-title">
                    <i className="fa-solid fa-book-open"></i>
                    <span>{t("goal-title-4")}</span>
                </div>
                <p>{t("goal-4")}</p>
            </div>

            <div className="objective-card">
                <div className="objective-title">
                    <i className="fa-solid fa-heart"></i>
                    <span>{t("goal-title-5")}</span>
                </div>
                <p>{t("goal-5")}</p>
                </div>
            </div>
        </div>

        <h2 className="gallery-title" style={{ fontSize: "22px", textAlign: "center", marginBottom: "20px" }}>
            { t("activities")}
</h2>

<div className="gallery">
  <div className="gallery-item">
    <img
      src="src/assets/activity1.jpeg"
      alt="نشاط تدريبي للأشخاص ذوي الإعاقة"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
  <div className="gallery-item">
    <img
      src="src/assets/activity2.jpeg"
      alt="ورشة توعية مجتمعية"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
  <div className="gallery-item">
    <img
      src="src/assets/activity3.jpeg"
      alt="فعالية دمج مجتمعي"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
</div>



    </div>

}


export default Body;