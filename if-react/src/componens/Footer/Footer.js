import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3>About</h3>
        <a>How Triphouse works</a>
        <a>Careers</a>
        <a>Privacy</a>
        <a>Terms</a>
      </div>
      <div>
        <h3>Property types</h3>
        <a>Guest houses</a>
        <a>Hotels</a>
        <a>Apartments</a>
        <a>Villas</a>
        <a>Holiday homes</a>
        <a>Hostels</a>
      </div>
      <div>
        <h3>Support</h3>
        <a>Contact Customer Service</a>
        <a>FAQ</a>
      </div>
    </div>
  );
};

export default Footer;
