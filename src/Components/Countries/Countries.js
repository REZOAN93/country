import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h1>Hellow from countries:{countries.length}</h1>
            <div className='countries-container'>
                {countries.map(cd=><Country country={cd}></Country>)}
            </div>
        </div>
    );
};

export default Countries;