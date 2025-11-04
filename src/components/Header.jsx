import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-logo">AI/ML Club</h1>
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

