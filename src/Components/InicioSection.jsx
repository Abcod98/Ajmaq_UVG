import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './InicioSection.css';

const InicioSection = () => {

  return (
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider">
          <img id='slider-1' src="/banner1.png" alt="slider 1" />
          <img id='slider-2' src="/banner2.png" alt="slider 2" />
          <img id='slider-3' src="/banner3.png" alt="slider 3" />
        </div>
        <div className="slider-nav">
          <a href="#slider-1"></a>
          <a href="#slider-2"></a>
          <a href="#slider-3"></a>
        </div>
      </div>
    </section>
  );
};

export default InicioSection;
