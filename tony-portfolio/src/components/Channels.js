import React from 'react';
import { motion } from 'framer-motion';

const Channels = () => {
  return (
    <motion.section
      className="channels"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Where You Can Find Me</h2>
      <div className="links">
        <a href="https://t.me/heartsaved">Main Portal</a>
        <a href="https://t.me/+xW9i8aYsyoBlNGU1">Shop Channel</a>
        <a href="https://t.me/TrueVia">Vouch Channel</a>
        <a href="http://Oguser.com/corose">OGU Profile</a>
        <a href="https://t.me/+-0TTqbxQ-mJmOWJl">Work Profile</a>
        <a href="https://t.me/CoroseTerms">TOS</a>
      </div>
    </motion.section>
  );
};

export default Channels;
