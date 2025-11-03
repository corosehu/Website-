import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h2>Who I Am</h2>
        <p>
          I’m Tony, a professional Instagram specialist focused on delivering fast and safe results.
          I help creators and brands grow their presence with genuine engagement, high-quality accounts,
          and verified strategies. I’m also open to working through middlemen for full trust.
        </p>
        <div className="features">
          <div className="feature-card">
            <span>⚡</span>
            <h3>Fast Work</h3>
          </div>
          <div className="feature-card">
            <span>💯</span>
            <h3>Trusted Deals</h3>
          </div>
          <div className="feature-card">
            <span>🌍</span>
            <h3>Worldwide Clients</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
