import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Professional Web Development Services</h1>
            <p className="hero-subtitle">
              We create stunning, modern websites that drive results for your business.
            </p>

            <div className="hero-buttons">
              <button
                className="glass-btn primary"
                onClick={() => {
                  const section = document.getElementById("services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Our Services
              </button>

              <Link to="/contact" className="glass-btn secondary">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <img src="/media/hero.jpg" alt="Web Development Services" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
