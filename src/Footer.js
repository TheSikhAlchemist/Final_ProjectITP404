import React, { useState, useEffect } from 'react';
import './Footer.css'; // Import the CSS file for the footer

const Footer = ({ companyName }) => {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    document.title = "Gradient News Footer"; // Set the document title
  }, []);
  return (
    <footer className="footer">
      <div>
        &copy; {currentYear} {companyName}
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  companyName: 'Your Company Name',
};

export default Footer;