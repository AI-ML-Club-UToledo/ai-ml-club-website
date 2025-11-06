import React from 'react';
import NetworkBackground from '../NetworkBackground';
import './Contact.css';

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{marginRight: '0.7em', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#4ff0ff"/>
      <circle cx="12" cy="12" r="5" fill="#0a1833"/>
      <circle cx="17.2" cy="6.8" r="1.2" fill="#0a1833"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{marginRight: '0.7em', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#4ff0ff"/>
      <polyline points="4,7 12,13 20,7" stroke="#0a1833" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <NetworkBackground />
      <div className="section-content contact-center">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-subtitle">We’d love to hear from you!</div>
        <div className="contact-btn-row">
          <a
            href="https://instagram.com/aiml_utoledo"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon /><span>Instagram</span>
          </a>
          <a
            href="mailto:aiml@utoledo.edu"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon /><span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

