import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project inquiry submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', service: '', budget: '', message: '' });

    setTimeout(() => setSubmitted(false), 10000);
  };

  return (
    <div className="page contact-page">
      <div className="container">
        <div className="page-header">
          <h1>CONTACT US</h1>
          <p className="page-subtitle">Ready to start your web development project?</p>
        </div>

        <div className="contact-content glass-dark">
          {/* LEFT SIDE INFO */}
          <div className="contact-info">
            <h2 className="fw-bold mb-3">Let's Build Something Great Together 🚀</h2>
            <p className="text-light">
              Tell us about your project and we'll provide a detailed quote and timeline.
              No obligation — just a free consultation to get started.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@webdevproo.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8590050875</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏱️</span>
                <div>
                  <h4>Response Time</h4>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="website">New Website</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-3k">$1,000 - $3,000</option>
                  <option value="3k-5k">$3,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="over-10k">$10,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Get My Free Quote
              </button>

              {submitted && (
                <div className="success-message">
                  ✅ Thank you! We'll get back to you within 24 hours with your quote.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
