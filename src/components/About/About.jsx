import React, { useRef, useEffect } from 'react';
import './About.css';

function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    // Network nodes
    const N = 18;
    const nodes = Array.from({ length: N }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 2.5 + Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw links
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
      // Draw nodes
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
        // Animate
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

function About() {
  return (
    <section id="about" className="section about-section">
      <NetworkBackground />
      <div className="section-content">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          The AI/ML Club is where curiosity meets creation. We explore the world of Artificial Intelligence and Machine Learning through hands-on projects, workshops, and collaborations. Our goal? To learn, innovate, and build — turning bold ideas into real impact. Whether you’re new to AI or an expert in the making, this is your space to grow, connect, and create the future.
        </p>
        <a
          href="https://invonet.utoledo.edu/organization/ai"
          className="join-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us
        </a>
      </div>
    </section>
  );
}

export default About;

