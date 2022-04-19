import React from 'react';
import './_FooterSocials.css';

const FooterSocials = () => {
  return (
    <div className='footerSocials'>
      <h3 className='footerSocials_h3'>Nuestras redes</h3>
      <div className='footerSocials_div'>
        <a href='https://www.facebook.com/santisublime/' target='_blank' className='footerSocials_div_a fab fa-facebook fa-3x' />
        <a href='https://www.instagram.com/santisublime/?hl=es-la' target='_blank' className='footerSocials_div_a fab fa-instagram fa-3x' />
      </div>
    </div>
  );
};

export default FooterSocials;