import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MyApp</h3>
            <p>Building amazing web experiences</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://wa.me/918590050875" aria-label="Whatsapp">📲</a>
              <a href="https://www.facebook.com/share/16Wod16SLz/" aria-label="Facebook">📘</a>
              <a href="https://www.instagram.com/salman_rasheed_m?igsh=MWVueGJvMnhyMnh0bw==" aria-label="Instagram">📷</a>
              <a href="https://www.linkedin.com/in/salmanrasheedm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;