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
    <div id="home" className="homescreen">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <h1 className="homescreen-text" aria-live="polite">
        {completed.map((word, index) => (
          <span key={word} className="completed-word">
            {word}
            {index < completed.length - 1 ? ' ' : ''}
          </span>
        ))}
        <span className={`typing-word ${isTyping ? 'typing' : ''}`}>{typingText}</span>
        {isTyping && <span className="typing-caret" aria-hidden="true" />}
      </h1>
    </div>
  )
}

export default Homescreen
