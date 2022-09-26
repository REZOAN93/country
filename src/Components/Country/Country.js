import React from 'react';

const Country = (props) => {
    const {name,capital,flags,region}=props.country;
    return (
        <div className='country'>
            <h1>Country Name : {name.common}</h1>
            <h2>{capital}</h2>
            <img src={flags.png} alt="" srcset="" />
            <p><small>{region}</small></p>
        </div>
    );
};

export default Country;