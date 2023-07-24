import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h2>Art With You</h2>
      </div>
      <div className="footer-column">
        <h3>Contact Numbers</h3>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Mobile: +1 (987) 654-3210</p>
      </div>
      <div className="footer-column">
        <h3>Links</h3>
        <ul>
          <li>
            <a href="/donate">Donate</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
