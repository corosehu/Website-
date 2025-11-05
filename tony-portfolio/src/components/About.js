import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Who I Am</h2>
      <p>I’m Tony, a professional Instagram specialist focused on delivering fast and safe results. I help creators and brands grow their presence with genuine engagement, high-quality accounts, and verified strategies. I’m also open to working through middlemen for full trust.</p>
      <div className="features">
        <div>⚡ Fast Work</div>
        <div>💯 Trusted Deals</div>
        <div>🌍 Worldwide Clients</div>
      </div>
    </motion.section>
  );
};

export default About;
