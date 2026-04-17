import { useEffect, useState } from 'react';
import './Homescreen.css';

const WORDS = ['LEARN.', 'INNOVATE.', 'BUILD.'];

function Homescreen() {
  const [typingText, setTypingText] = useState('');
  const [completed, setCompleted] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let mounted = true;
    const currentIndex = completed.length;

    if (currentIndex >= WORDS.length) return;

    const type = async (word) => {
      setIsTyping(true);
      const perChar = 80;

      for (let i = 1; i <= word.length; i++) {
        if (!mounted) return;
        setTypingText(word.slice(0, i));
        await new Promise((r) => setTimeout(r, perChar + Math.floor(Math.random() * 30)));
      }

      if (!mounted) return;
      setIsTyping(false);
      setCompleted((prev) => [...prev, word]);
      setTypingText('');

      await new Promise((r) => setTimeout(r, 700));
    };

    type(WORDS[currentIndex]);

    return () => {
      mounted = false;
    };
  }, [completed.length]);

  return (
    <div
      id="home"
      className="homescreen"
      onContextMenu={(e) => e.preventDefault()}
    >
      <video className="bg-video" autoPlay muted loop playsInline draggable="false">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1 className="homescreen-text" aria-live="polite">
          {completed.map((word) => (
            <span key={word} className="completed-word">
              {word}
            </span>
          ))}
          {(typingText || isTyping) && (
            <span className="typing-line">
              <span className={`typing-word ${isTyping ? 'typing' : ''}`}>{typingText}</span>
              {isTyping && <span className="typing-caret" aria-hidden="true" />}
            </span>
          )}
        </h1>

        <p className="subtext">A student-led AI/ML community focused on building real-world projects, hosting workshops, and growing together.</p>

        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-arrow">↓</span>
          <span className="scroll-label">Scroll to explore</span>
        </div>
      </div>
    </div>
  )
}

export default Homescreen
