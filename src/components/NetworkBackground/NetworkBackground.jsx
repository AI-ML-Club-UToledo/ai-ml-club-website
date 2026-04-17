import { useRef, useEffect } from 'react';
import './NetworkBackground.css';

function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();

    const getConfig = (width) => {
      if (width <= 480) {
        return { count: 16, linkDistance: 90, speed: 0.1 };
      }
      if (width <= 768) {
        return { count: 22, linkDistance: 120, speed: 0.12 };
      }
      return { count: 32, linkDistance: 160, speed: 0.15 };
    };

    const buildNodes = (config) => Array.from({ length: config.count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 2.2 + Math.random() * 1.4,
      dx: (Math.random() - 0.5) * config.speed,
      dy: (Math.random() - 0.5) * config.speed,
    }));

    let config = getConfig(canvas.width);
    let nodes = buildNodes(config);

    let frameId = null;
    let isVisible = false;

    const drawLink = (a, b) => {
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < config.linkDistance) {
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
      if (!isVisible || document.hidden) {
        frameId = null;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = 'rgba(80,220,255,0.18)';
      ctx.lineWidth = 1.1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          drawLink(nodes[i], nodes[j]);
        }
      }
      ctx.restore();

      ctx.save();
      ctx.shadowColor = '#22e0e0';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#22e0e0';
      ctx.globalAlpha = 0.7;
      nodes.forEach(drawNode);
      ctx.restore();

      nodes.forEach(updateNode);
      frameId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (frameId == null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (frameId != null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const handleResize = () => {
      updateSize();
      config = getConfig(canvas.width);
      nodes = buildNodes(config);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else if (isVisible) {
        startAnimation();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '120px 0px',
      }
    );

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    observer.observe(canvas.parentElement || canvas);

    return () => {
      stopAnimation();
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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

