import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from "./Header.jsx"
import Body from "./body.jsx";
import Footer from "./Footer.jsx"
function App() {
  const { t } = useTranslation();

  return (
      <div id="top">
      <a href="#main-content" className="skip-link">{t("skip")}</a>
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
