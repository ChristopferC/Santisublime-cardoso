import React from 'react';
import Title from '../../Title/Title';
import ContactDetails from './ContactDetails/ContactDetails';
import './_ContactContainer.css';
import Map from '../Map/Map';

const ContactContainer = () => {
  return (
    <>
      <section>
        <Title text={'Si estás cerca, ¡vení a conocernos! ¡Te esperamos con la mejor onda!'} />
        <div className='mapContainer'><Map/></div>
      </section>
      <section className='contactContainer'>
        <Title text={'¿Tenés alguna duda? Contáctanos'} />
        <ContactDetails />
      </section>
    </>
  );
};

export default ContactContainer;