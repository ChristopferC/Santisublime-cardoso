import React from 'react';
import HeaderInformation from '../../HeaderInformation/HeaderInformation';
import Title from '../../Title/Title';
import AboutContent from './AboutContent/AboutContent';
import Sublimate from './img/sublimate.jpg';
import './_AboutContainer.css';

const AboutContainer = () => {
  return (
    <>
    <HeaderInformation text={'Traenos tu diseño, nosotros hacemos el resto'} />
    <section className='aboutContainer'>
        <Title text={'¿Qué es la sublimación?'} />
        <AboutContent img={Sublimate} p={'La sublimación es un proceso de estampado que se puede utilizar sobre infinidad de materiales. Consiste en plasmar una imagen en un soporte (como remeras, tazas, chapas, llaveros, etc.), consiguiendo un producto personalizado y exclusivo. Mediante esta técnica, se consigue que la impresión penetre de manera permanente en el material, proporcionando así que los colores se mantengan vivos, y permitan ser lavados infinidad de veces sin perder su calidad.'}/>
    </section>
    </>
  );
};

export default AboutContainer;