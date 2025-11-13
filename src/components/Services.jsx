import React from "react";
import "./Sections.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">💡 Our Services: Building Digital Foundations</h2>
        <p className="section-subtitle">
          We engineer scalable, full-stack digital platforms designed for your long-term success.
        </p>
        <div className="card-grid">
          <div className="card">
            <div className="icon">🧩</div>
            <h3>Custom Web Applications</h3>
            <p>Tailored tools like CRMs, dashboards, and booking systems to solve your business challenges.</p>
          </div>
          <div className="card">
            <div className="icon">🛍️</div>
            <h3>High-Conversion E-commerce</h3>
            <p>Secure and scalable online stores integrated with payment, shipping, and inventory systems.</p>
          </div>
          <div className="card">
            <div className="icon">⚙️</div>
            <h3>CMS & Platform Integration</h3>
            <p>Custom WordPress, Shopify, or headless CMS setups for complete content control.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
