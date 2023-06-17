import React, { useState, useRef } from 'react';
import Menu from './Components/Menu';
import InicioSection from './Components/InicioSection';
import ProductSection from './Components/ProductSection';
import AboutUsSection from './Components/AboutUsSection';
import InfoSection from './Components/InfoSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('InicioSection');
  const sectionsRef = {
    InicioSection: useRef(null),
    ProductSection: useRef(null),
    AboutUsSection: useRef(null),
    InfoSection: useRef(null),
  };

  const handleMenuItemClick = (sectionName) => {
    setCurrentSection(sectionName);
    scrollToSection(sectionName);
  };

  const scrollToSection = (sectionName) => {
    sectionsRef[sectionName].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Menu onMenuItemClick={handleMenuItemClick} />
      <div className="content-container">
        <div ref={sectionsRef.InicioSection}>
          <InicioSection />
        </div>
        <div ref={sectionsRef.ProductSection}>
          <ProductSection />
        </div>
        <div ref={sectionsRef.AboutUsSection}>
          <AboutUsSection />
        </div>
        <div ref={sectionsRef.InfoSection}>
          <InfoSection />
        </div>
      </div>
    </div>
  );
};

export default App;