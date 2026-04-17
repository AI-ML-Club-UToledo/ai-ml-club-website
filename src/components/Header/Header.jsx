import { useState } from 'react';
import './Header.css';

const scrollToSection = (sectionId, block = 'start') => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth', block });
  window.history.replaceState(null, '', `#${sectionId}`);
};

const scrollToHome = () => {
  scrollToSection('home');
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      scrollToHome();
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (sectionId, block = 'start') => (e) => {
    e.preventDefault();
    scrollToSection(sectionId, block);
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <img src="/logo.png" alt="AI/ML Club Logo" className="header-logo-img" />
          <h1
            className="header-logo"
            onClick={() => {
              scrollToHome();
              closeMenu();
            }}
            role="button"
            tabIndex={0}
            onKeyDown={handleLogoKeyDown}
          >
            AI/ML Club
          </h1>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="nav-btn home-nav-btn" onClick={handleNavClick('home')}>Home</a>
          <a href="#about" className="nav-btn" onClick={handleNavClick('about')}>About Us</a>
          <a href="#events" className="nav-btn" onClick={handleNavClick('events')}>Events</a>
          <a href="#members" className="nav-btn" onClick={handleNavClick('members')}>Our Team</a>
          <a href="#contact" className="nav-btn" onClick={handleNavClick('contact', 'end')}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header

