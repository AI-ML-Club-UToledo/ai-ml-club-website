import NetworkBackground from '../NetworkBackground';
import './Contact.css';

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="contact-icon" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="contact-icon" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="contact-icon" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <NetworkBackground />

      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-subtitle">
            Join the club, collaborate on projects, or reach out with questions — we'd love to hear from you.
          </p>
        </div>

        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <EmailIcon />
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">Email</span>
              <a href="mailto:aiml@utoledo.edu" className="contact-info-value">aiml@utoledo.edu</a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <InstagramIcon />
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">Instagram</span>
              <a href="https://instagram.com/aiml_utoledo" target="_blank" rel="noopener noreferrer" className="contact-info-value">@aiml_utoledo</a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <CommunityIcon />
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">Community</span>
              <p className="contact-info-value">Workshops, projects, and events all semester long</p>
            </div>
          </div>
        </div>

        <div className="contact-btn-row">
          <a
            href="https://invonet.utoledo.edu/organization/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn primary"
          >
            <CommunityIcon />
            <span>Join the Club</span>
          </a>

          <a
            href="mailto:aiml@utoledo.edu"
            rel="noopener noreferrer"
            className="contact-btn secondary"
          >
            <EmailIcon />
            <span>Email Us</span>
          </a>

          <a
            href="https://instagram.com/aiml_utoledo"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn secondary"
          >
            <InstagramIcon />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
