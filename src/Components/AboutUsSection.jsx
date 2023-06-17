import React from 'react';
import './AboutUsSection.css';

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="content">
        <div className="left-section img-ajma">
          <img
            src="/ajma.jpg"
            alt="Imagen Sobre Nosotros"
            className="about-us-image"
          />
        </div>
        <div className="right-section">
          <h2 className="title">¿Por qué Ajmaq?</h2>
          <p className="description">Es uno de los 20 nahuales del calendario Maya T'zolkin.</p>
          <p className="description">Un nahual es la energía que acompaña a cada individuo dependiendo de su fecha de origen.</p>
          <p>Ajmaq forma parte de mí, es especial, me identifica y me guía.</p>
        </div>
      </div>
      <div className="content reverse-order">
        <div className="left-section">
          <h2 className="title">Emprendimiento</h2>
          <p className="description">Este proyecto inició como una tarea y en ese momento el proyecto tenía otro nombre </p>
          <p>Con el tiempo lo retomé como un pasatiempo y luego pensé en el impacto social, ambiental y económico que puede
             causar y que deseo para un mejor futuro. Ahora como proyecto pensé rápidamente en "Ajmaq".</p>
                 <p>Me alegra crear este emprendimiento con el propósito de promover la creatividad, acción por el clima, crecimiento económico, reducción de desigualdad entre otros.
                    Que aún sigo en eso y es bueno compartir con ustedes este progreso</p>
                    <p>Te invito a que puedas buscar y conocer tu nahual, pueda que te sorprenda.</p>
        </div>
        <div className="right-section">
          <img
            src="/persona.jpg"
            alt="Otra Imagen"
            className="about-us-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
