import React from 'react';
import "../components/WhyChooseUs.jsx";
import Service from '../assets/service.jpg';

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-header">
          <h1>ABOUT US</h1>
          <p className="page-subtitle">Professional web development solutions for your business</p>
        </div>

        <div className="content-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose Our Services?</h2>
              <p>
                We specialize in creating high-quality websites that help businesses grow online.
                From simple landing pages to complex web applications, we deliver solutions that
                are fast, secure, and user-friendly.
              </p>
              <p>
                Our team has years of experience working with modern technologies like React,
                Node.js, and responsive design frameworks. We focus on creating websites that
                not only look great but also perform excellently across all devices.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>
                  <img src={Service} alt="Services" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }} />
                </span>
              </div>
            </div>
          </div>

          {/* <div className="values-section">
            <h2>Our Service Areas</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Website Development</h3>
                <p>Custom websites built with modern frameworks and best practices</p>
              </div>
              <div className="value-card">
                <h3>E-commerce Sites</h3>
                <p>Complete online stores with payment integration and inventory management</p>
              </div>
              <div className="value-card">
                <h3>Maintenance & Support</h3>
                <p>Ongoing website updates, security patches, and technical support</p>
              </div>
            </div>
          </div> */}
          <div>
            <section className="why-choose">
              <div className="container split-layout">
                <div className="text-content">
                  <h2 className="section-title">🎯 Focused on Your ROI</h2>
                  <p className="section-subtitle">
                    We’re not just coders — we’re your technology partners, dedicated to maximizing your business growth.
                  </p>
                  <blockquote>
                    “We deliver code that doesn’t just work — it generates results.”
                  </blockquote>
                  <ul className="benefits-list">
                    <li>✅ Dedicated Project Management</li>
                    <li>✅ Post-Launch Support & Maintenance</li>
                    <li>✅ UX-Focused, ROI-Driven Design</li>
                  </ul>
                </div>
                <div className="image-side">
                  <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/web-2691919_1280.jpg" alt="Why Choose Us" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;