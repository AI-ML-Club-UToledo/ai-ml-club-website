import React from 'react';
import './Contact.css';

function NetworkBackground() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
  const N = 32;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 2.5 + Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
    }));
    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalAlpha = 0.18;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = nodes[i], b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 160) {
            ctx.strokeStyle = 'rgba(80,220,255,0.18)';
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();
      for (const node of nodes) {
        ctx.save();
        ctx.shadowColor = '#22e0e0';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#22e0e0';
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.restore();
        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > width) node.dx *= -1;
        if (node.y < 0 || node.y > height) node.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="about-network-bg"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}


function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{marginRight: '0.7em', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#4ff0ff"/>
      <circle cx="12" cy="12" r="5" fill="#0a1833"/>
      <circle cx="17.2" cy="6.8" r="1.2" fill="#0a1833"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{marginRight: '0.7em', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#4ff0ff"/>
      <polyline points="4,7 12,13 20,7" stroke="#0a1833" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <NetworkBackground />
      <div className="section-content contact-center">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-subtitle">We’d love to hear from you!</div>
        <div className="contact-btn-row">
          <a
            href="https://instagram.com/aiml_utoledo"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon /><span>Instagram</span>
          </a>
          <a
            href="mailto:aiml@utoledo.edu"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon /><span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

