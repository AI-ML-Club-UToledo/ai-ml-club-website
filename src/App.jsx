import Header from './components/Header'
import Homescreen from './components/Homescreen'
import About from './components/About'
import Events from './components/Events'
import Members from './components/Members'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Homescreen />
        <About />
        <Events />
        <Members />
        <Contact />
      </main>
    </div>
  )
}

export default App
