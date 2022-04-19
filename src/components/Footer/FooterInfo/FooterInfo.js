import React from 'react';
import './_FooterInfo.css';

const FooterInfo = () => {
  return (
    <>
    <div className='footerInfo'>
      <div className='footerInfoContent'>
        <h3 className='footerInfoContent_h3'>Horarios</h3>
        <div className='footerInfoContent_div'>
          <p className='footerInfoContent_div_p'>Lunes a Sábados de 10 a 20hs</p> 
        </div>     
      </div>
      <div className='footerInfoContent'>
        <h3 className='footerInfoContent_h3'>Contacto</h3>
        <div className='footerInfoContent_div'>
          <p className='footerInfoContent_div_p'>+54 9 11 4446-4540</p>
          <p className='footerInfoContent_div_p'>info@example.com</p>
        </div>     
      </div>
    </div>
    <div className='footerSubscribe'>
    <h3 className='footerSubscribe_h3'>Santisublime</h3>
    <div className='footerInfoContent_div'>
      <p className='footerInfoContent_div_p'>¡Cuidamos los detalles porque nos gusta lo que hacemos!</p>
  </div>
  </div>
  </>
  );
};

export default FooterInfo;