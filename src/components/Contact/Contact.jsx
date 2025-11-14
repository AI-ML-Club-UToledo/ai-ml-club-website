import NetworkBackground from '../NetworkBackground';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

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
            <FaInstagram size={22} className="contact-icon" /><span>Instagram</span>
          </a>
          <a
            href="mailto:aiml@utoledo.edu"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={22} className="contact-icon" /><span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

