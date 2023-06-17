import React, { useState, useEffect } from 'react';
import './Menu.css';
import menuIcon from '/menu.png';

const Menu = ({ onMenuItemClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (sectionName) => {
    onMenuItemClick(sectionName);
    setMenuOpen(false);
  };

  return (
    <nav className="menu">
      {!isLargeScreen && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </div>
      )}
      {(isLargeScreen || menuOpen) && (
        <ul className="menu-items">
          <li>
            <button onClick={() => handleMenuItemClick('InicioSection')}>Inicio</button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick('ProductSection')}>Productos</button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick('AboutUsSection')}>Sobre Nosotros</button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick('InfoSection')}>Información</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;