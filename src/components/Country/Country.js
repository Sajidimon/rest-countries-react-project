import React from 'react';
import './Country.css'

const Country = (props) => {
    
    return (
        <div className='country'>
            <h3>Country name: {props?.country?.name.common}</h3>
            <img src={props?.country?.flags.png} alt="" />
            <p>Country population: {props?.country?.population}</p>
        </div>
    );
};

export default Country;