import React from "react";
import "./Sections.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="container split-layout">
        <div className="text-content">
          <h2 className="section-title">🎯 Why Choose Us:</h2>
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
        {/* <div className="image-side">
          <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/web-2691919_1280.jpg" alt="Why Choose Us" />
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
