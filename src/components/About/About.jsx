import React from 'react';
import NetworkBackground from '../NetworkBackground';
import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <NetworkBackground />
      <div className="section-content">
        <h2 className="section-title">About</h2>
        <p className="section-text">
          The AI/ML Club is where curiosity meets creation. We explore the world of Artificial Intelligence and Machine Learning through hands-on projects, workshops, and collaborations. Our goal? To learn, innovate, and build — turning bold ideas into real impact. Whether you're new to AI or an expert in the making, this is your space to grow, connect, and create the future.
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

