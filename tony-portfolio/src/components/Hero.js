import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hi, I’m Tony 👋 — Your Instagram Growth Expert</h1>
      <p>Delivering 100% Trusted • Fast • Genuine Services</p>
      <a href="#" className="btn">View My Work</a>
      <a href="https://t.me/heartsaved" className="btn">Contact on Telegram</a>
    </motion.section>
  );
};

export default Hero;
