import NetworkBackground from '../NetworkBackground';
import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <NetworkBackground />
      <div className="section-content">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          The AI/ML Club is where curiosity meets creation. We explore the world of Artificial Intelligence and Machine Learning through hands-on projects, workshops, and collaborations. Our goal? To learn, innovate, and build — turning bold ideas into real impact. Whether you're new to AI or an expert in the making, this is your space to grow, connect, and create the future.
        </p>
        <a
          href="https://invonet.utoledo.edu/organization/ai"
          className="join-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us
        </a>
        
        <div className="what-we-do">
          <h3 className="what-we-do-title">What We Do</h3>
          <div className="what-we-do-cards">
            <div className="what-we-do-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="card-title">Workshops</h4>
              <p className="card-description">
                Hands-on workshops and interactive sessions to master AI and ML concepts from fundamentals to advanced techniques.
              </p>
            </div>
            
            <div className="what-we-do-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="card-title">Collab with Tech Companies</h4>
              <p className="card-description">
                Partner with leading tech companies to gain real-world experience, industry insights, and networking opportunities.
              </p>
            </div>
            
            <div className="what-we-do-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7 6.3C15.1 5.9 15.1 5.3 14.7 4.9L13.8 4C13.4 3.6 12.8 3.6 12.4 4L4 12.4V16H7.6L16 7.6L14.7 6.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 20H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="card-title">AI Projects</h4>
              <p className="card-description">
                Build innovative AI projects and solutions that solve real-world problems using cutting-edge machine learning technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

