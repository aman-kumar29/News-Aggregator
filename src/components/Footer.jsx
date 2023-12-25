import React from 'react';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="https://www.facebook.com/">Home</a></li>
            <li><a href="https://www.facebook.com/">About</a></li>
            <li><a href="https://www.facebook.com/">Services</a></li>
            <li><a href="https://www.facebook.com/">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <span>Follow us:</span>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
