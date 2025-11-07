import React, { useEffect, useState } from 'react'
import ClubStats from './ClubStats'
import './Homescreen.css'

function Homescreen() {
  const words = ['LEARN.', 'INNOVATE.', 'BUILD.']
  const [wordIndex, setWordIndex] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [completed, setCompleted] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let mounted = true

    const type = async (word) => {
      setIsTyping(true)
      // per-character typing speed (ms)
      const perChar = 80
      for (let i = 1; i <= word.length; i++) {
        if (!mounted) return
        setTypingText(word.slice(0, i))
        // small variation for more natural feel
        // use await with timeout
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, perChar + Math.floor(Math.random() * 30)))
      }

      if (!mounted) return
      setIsTyping(false)
      // push completed word (triggers fade-in via CSS)
      setCompleted((p) => [...p, word])
      setTypingText('')

      // pause after completing a word
      // slightly longer pause between words
      // do not start next if this was last word
      const pauseAfter = 700
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, pauseAfter))

      if (!mounted) return
      if (wordIndex + 1 < words.length) {
        // advance to next word by updating index
        setWordIndex((w) => w + 1)
      }
    }

    // start typing current word
    if (wordIndex < words.length) {
      type(words[wordIndex])
    }

    return () => { mounted = false }
    // we intentionally depend on wordIndex so typing runs sequentially
  }, [wordIndex])

  return (
    <div id="home" className="homescreen">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="homescreen-content">
        <h1 className="homescreen-text" aria-live="polite">
          {completed.map((w, i) => (
            <span key={`c-${i}`} className="completed-word">
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}

          <span className={`typing-word ${isTyping ? 'typing' : ''}`}>{typingText}</span>
          {/* caret shown only while typing */}
          {isTyping && <span className="typing-caret" aria-hidden="true" />}
        </h1>
        <ClubStats />
      </div>
    </div>
  )
}

export default Homescreen
