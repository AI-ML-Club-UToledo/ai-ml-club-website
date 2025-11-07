import React, { useEffect, useState, useRef } from 'react';
import './ClubStats.css';

function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '', parentRef }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          hasAnimated.current = true;
          let startTime = null;
          const startValue = 0;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef} className="counter-number">
      {prefix}{count}{suffix}
    </span>
  );
}

function ClubStats() {
  const containerRef = useRef(null);

  const stats = [
    {
      value: <AnimatedCounter end={150} parentRef={containerRef} />,
      label: 'Active Members',
      icon: '👥',
    },
    {
      value: <AnimatedCounter end={25} parentRef={containerRef} />,
      label: 'Events Hosted',
      icon: '🎯',
    },
    {
      value: <AnimatedCounter end={12} parentRef={containerRef} />,
      label: 'Projects Completed',
      icon: '🚀',
    },
    {
      value: <AnimatedCounter end={8} suffix="+" parentRef={containerRef} />,
      label: 'Workshops Conducted',
      icon: '💡',
    },
  ];

  return (
    <div ref={containerRef} className="club-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default ClubStats;

