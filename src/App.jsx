import { useEffect } from 'react'
import Header from './components/Header'
import Homescreen from './components/Homescreen'
import About from './components/About'
import Events from './components/Events'
import Members from './components/Members'
import Contact from './components/Contact'
import './App.css'

const SEO_BY_SECTION = {
  home: {
    title: 'AI/ML Club',
    description: 'AI/ML Club at the University of Toledo empowers students through hands-on AI and machine learning projects, workshops, and industry collaborations.',
  },
  about: {
    title: 'About Us',
    description: 'Learn about the AI/ML Club at the University of Toledo—our mission to foster innovation, teach AI/ML skills, and build a community of future tech leaders.',
  },
  events: {
    title: 'Events',
    description: 'Explore AI/ML Club events at the University of Toledo, including workshops, interactive competitions, and project sessions designed to enhance your AI skills.',
  },
  members: {
    title: 'Our Team',
    description: 'Meet the AI/ML Club team at the University of Toledo—dedicated students driving innovation, organizing events, and leading AI and machine learning initiatives.',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with the AI/ML Club at the University of Toledo for collaborations, events, or membership inquiries. Connect with us and start building in AI/ML.',
  },
}

const setMetaTag = (selector, attribute, value) => {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    const match = selector.match(/\[(name|property)="([^"]+)"\]/)
    if (match) {
      tag.setAttribute(match[1], match[2])
    }
    document.head.appendChild(tag)
  }

  tag.setAttribute(attribute, value)
}

const applySeo = (sectionKey) => {
  const seo = SEO_BY_SECTION[sectionKey] || SEO_BY_SECTION.home

  document.title = seo.title
  setMetaTag('meta[name="description"]', 'content', seo.description)
  setMetaTag('meta[property="og:title"]', 'content', seo.title)
  setMetaTag('meta[property="og:description"]', 'content', seo.description)
  setMetaTag('meta[name="twitter:title"]', 'content', seo.title)
  setMetaTag('meta[name="twitter:description"]', 'content', seo.description)

  let favicon = document.querySelector('link[rel="icon"]')
  if (!favicon) {
    favicon = document.createElement('link')
    favicon.setAttribute('rel', 'icon')
    document.head.appendChild(favicon)
  }
  favicon.setAttribute('href', '/logo.png')
}

function App() {
  useEffect(() => {
    const sectionIds = Object.keys(SEO_BY_SECTION)

    const updateFromHash = () => {
      const currentSection = window.location.hash.replace('#', '') || 'home'
      applySeo(currentSection)
    }

    updateFromHash()
    window.addEventListener('hashchange', updateFromHash)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          applySeo(visibleEntry.target.id)
        }
      },
      {
        threshold: [0.35, 0.5, 0.7],
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener('hashchange', updateFromHash)
      observer.disconnect()
    }
  }, [])

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
