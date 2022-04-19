import React from 'react';
import { Link } from 'react-router-dom';
import './_BackButton.css';

const BackButton = () => {
    return (
        <button className='backButton'><Link to='/' className='backButton_a'>Volver</Link></button>
    )
}

export default BackButton;