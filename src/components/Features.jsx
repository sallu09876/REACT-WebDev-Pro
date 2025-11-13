import React from "react";
import "./Sections.css";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">⚡ The Features We Guarantee: Speed, Security & Scale</h2>
        <p className="section-subtitle">
          We hardwire excellence into every line of code — ensuring flawless performance and reliability on every device.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile-First Responsiveness</h3>
            <p>Seamless display and usability on every screen size.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Enterprise-Grade Security</h3>
            <p>SSL, proactive security, and top-level protection for your data.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Superior Speed Optimization</h3>
            <p>Optimized code for lightning-fast load times and improved SEO.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
