import './Homescreen.css'

function Homescreen() {
  return (
    <div id="home" className="homescreen">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <h1 className="homescreen-text">Learn. Innovate. Build.</h1>
    </div>
  )
}

export default Homescreen
