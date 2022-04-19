import React from 'react';
import './_AboutBrand.css';

const AboutBrand = (props) => {
  return (
    <div className='aboutBrand'>
        <img src={props.img} alt={props.h3} className='aboutBrand_img' />
    </div>
  );
};

export default AboutBrand;