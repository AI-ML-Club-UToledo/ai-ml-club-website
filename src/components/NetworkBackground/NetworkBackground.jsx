import { useRef, useEffect } from 'react';
import './NetworkBackground.css';

function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();

    const N = 32;
    const LINK_DISTANCE = 160;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 2.5 + Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
    }));

    const drawLink = (a, b) => {
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < LINK_DISTANCE) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    };

    const drawNode = (node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, 2 * Math.PI);
      ctx.fill();
    };

    const updateNode = (node) => {
      node.x += node.dx;
      node.y += node.dy;
      if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.dy *= -1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw links
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = 'rgba(80,220,255,0.18)';
      ctx.lineWidth = 1.1;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          drawLink(nodes[i], nodes[j]);
        }
      }
      ctx.restore();
      
      // Draw nodes
      ctx.save();
      ctx.shadowColor = '#22e0e0';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#22e0e0';
      ctx.globalAlpha = 0.7;
      nodes.forEach(drawNode);
      ctx.restore();
      
      // Update positions
      nodes.forEach(updateNode);
      
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      updateSize();
      // Reposition nodes if canvas size changed significantly
      nodes.forEach(node => {
        if (node.x > canvas.width) node.x = canvas.width;
        if (node.y > canvas.height) node.y = canvas.height;
      });
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="network-bg"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

export default NetworkBackground;

