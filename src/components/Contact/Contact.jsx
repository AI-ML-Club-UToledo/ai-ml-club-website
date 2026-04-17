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

const CONTACT_CHANNELS = [
  {
    key: 'email',
    label: 'Email',
    value: 'aiml@utoledo.edu',
    href: 'mailto:aiml@utoledo.edu',
    Icon: EmailIcon,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    value: '@aiml_utoledo',
    href: 'https://instagram.com/aiml_utoledo',
    external: true,
    Icon: InstagramIcon,
  },
  {
    key: 'community',
    label: 'Join the Club',
    value: 'Workshops, projects, and events all semester long',
    href: 'https://invonet.utoledo.edu/organization/ai',
    external: true,
    isText: true,
    Icon: CommunityIcon,
  },
];

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
          {CONTACT_CHANNELS.map(({ key, label, value, href, external, Icon, isText }) => (
            <div className="contact-info-card" key={key}>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="contact-info-icon contact-info-icon-link"
                  aria-label={`Open ${label}`}
                >
                  <Icon />
                </a>
              ) : (
                <div className="contact-info-icon">
                  <Icon />
                </div>
              )}
              <div className="contact-info-text">
                <span className="contact-info-label">{label}</span>
                {isText ? (
                  <p className="contact-info-value">{value}</p>
                ) : (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="contact-info-value"
                  >
                    {value}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;
