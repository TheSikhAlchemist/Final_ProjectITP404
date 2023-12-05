import React, { useState, useEffect } from 'react';
import './Homepage.css'; 
import unknownImage1 from './img/Unknown-1.jpeg'
import unknownImage2 from './img/images.jpeg'


const HomePage = () => {
  useEffect(() => {
    document.title = "Gradient News Homepage"; // Set the document title
  }, []);
  
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Gradient News</h1>
        <p>Where Stories Flow in Shades of Insight</p>
      </header>
      <div className="content">
        <div className="image-container">
          <img src={unknownImage1} alt="Image 1" />
          <img src={unknownImage2} alt="Image 2" />
          {/* Add more images as needed */}
        </div>
        <div className="slogan">
          <h2>Explore the Spectrum of Stories</h2>
          <p>From Tech Marvels to Global Wonders,<br />Dive into the Colors of Knowledge.</p>
          <h2>Stay Tuned, Stay Informed</h2>
          <p>Curated, Unbiased, and Always Fresh.</p>
        </div>
      </div>
    
    </div>
  );
};

export default HomePage;