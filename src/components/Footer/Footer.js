import React from 'react';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterSocials from './FooterSocials/FooterSocials';
import './_Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
        <div className='footerMainContent'>  
            <FooterInfo />
            <FooterSocials />
        </div>
        <div className='footerSecondContent'>
            <p className='footerSecondContent_p'>© 2022 Copyright - Christopfer Cardoso</p>
        </div>
        </footer>
    );
};

export default Footer;

