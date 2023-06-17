import React from "react";
import "./InfoSection.css"; // Archivo CSS para estilos

const InfoSection = () => {
  return (
    <div className="info-section">
      <h2>Información</h2>
      <div className="info-container">
        <div className="info-card">
          <img src="/icon-envio.png" alt="icon envio" />
          <h3>Envíos</h3>
          <p>
            El costo de envío dependerá de la tarifa que se tiene hasta el lugar
            al que se enviará. Para realizar tu envió es necesario que nos
            proporciones los siguientes datos: <br /> <br />
            -Nombre y apellido <br /> -Dirección exacta con referencia <br />{" "}
            -Número de teléfono <br />
            <br /> -Envió por cargo express, guatex y forza.
          </p>
        </div>
        <div className="info-card">
        <img src="/icon-cotizacion.png" alt="icon cotizacion" />
          <h3>Cotización</h3>
          <p>
            1.Puedes enviarme algún diseño que te haya gustado y quisieras que
            replicará. <br /> 2. Si deseas modificar color, medidas y detalles,
            puedes hacerlo al momento de la cotización. <br /> 3. Se analiza
            proceso, material y costos. <br /> 4. En ese momento te doy una
            fecha de entrega, usualmente es entre 10 a 25 días de espera. <br />{" "}
            5. Te envío el precio y confirma si te parece. <br /> 6. Se inicia
            hacer en el momento que se envíe el comprobante de pago por via
            whatsApp del 100% a cancelar.
          </p>
        </div>
        <div className="info-card">
        <img src="/icon-pedido.png" alt="icon pedido" />
          <h3>Pedidos</h3>
          <p>
            1. Selecciona el diseño que te haya gustado para saber si aún esta
            disponible o si se puede hacer uno similar, esto haciendo clic en el
            icono de WhatsApp en la sección según el producto. <br /> <br />
            2. Si el diseño está disponible se comienza a realizar el proceso de
            pago y de envío.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;