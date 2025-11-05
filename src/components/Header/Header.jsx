import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <img src="/logo.png" alt="AI/ML Club Logo" className="header-logo-img" />
          <h1
            className="header-logo"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            AI/ML Club
          </h1>
        </div>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#members">Members</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

