import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I’m Tony — Your Instagram Growth Expert</h1>
        <p>Delivering 100% Trusted • Fast • Genuine Services</p>
        <div className="hero-buttons">
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="https://t.me/heartsaved" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Contact on Telegram</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
