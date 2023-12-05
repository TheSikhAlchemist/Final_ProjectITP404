import React, { useState, useEffect } from 'react';
import NewsComponent from './NewsComponent';
import './CountrySelector.css'; // Import the CSS file


const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    document.title = "Gradient News Page"; // Set the document title
  }, []);

  return (
    <div className="container">
      <h1>Choose a Country</h1>
      <center>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="us">United States</option>
        <option value="in">India</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="br">Brazil</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="ru">Russia</option>
        <option value="cn">China</option>
      </select>
      </center>
      <hr />
      <NewsComponent country={selectedCountry} />
    </div>
  );
};

export default CountrySelector;