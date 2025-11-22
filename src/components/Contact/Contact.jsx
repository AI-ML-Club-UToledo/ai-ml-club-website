import NetworkBackground from '../NetworkBackground'
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <NetworkBackground />
      <div className="contact-shell">
        <div className="contact-heading">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-description">
            Whether you want to attend a workshop, collaborate on a project, or
            bring AI/ML to your organization, we’re here for it.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-card contact-main-card">
            <div className="contact-card-header">
              <p className="contact-card-eyebrow">Reach the executive board</p>
              <h3>Say hello to the AI/ML Club</h3>
              <p>
                Pick the channel that works best for you and we’ll get back as
                quickly as possible.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:aiml@utoledo.edu"
                className="contact-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={22} />
                <div>
                  <span>Email the team</span>
                  <strong>aiml@utoledo.edu</strong>
                </div>
              </a>
              <a
                href="https://instagram.com/aiml_utoledo"
                className="contact-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={22} />
                <div>
                  <span>Follow us</span>
                  <strong>@aiml_utoledo</strong>
                </div>
              </a>
            </div>

            <div className="contact-meta-grid">
              <div className="contact-meta-item">
                <FaClock size={18} />
                <div>
                  <span>Typical reply time</span>
                  <strong>Within 24 hours</strong>
                </div>
              </div>
              <div className="contact-meta-item">
                <FaMapMarkerAlt size={18} />
                <div>
                  <span>Meetup location</span>
                  <strong>Nitschke Hall • UT</strong>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <p>Planning a workshop or collab? Mention it in your message.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

