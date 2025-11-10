import './Header.css';

const scrollToHome = () => {
  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    scrollToHome();
  }
};

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <img src="/logo.png" alt="AI/ML Club Logo" className="header-logo-img" />
          <h1
            className="header-logo"
            onClick={scrollToHome}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            AI/ML Club
          </h1>
        </div>
        <nav className="header-nav">
          <a href="#home" className="nav-btn home-nav-btn">Home</a>
          <a href="#about" className="nav-btn">About</a>
          <a href="#events" className="nav-btn">Events</a>
          <a href="#members" className="nav-btn">Our Team</a>
          <a href="#contact" className="nav-btn">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header

