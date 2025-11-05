import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p>© 2025 Tony | All Rights Reserved</p>
      <div className="links">
        <a href="https://t.me/heartsaved">Portal</a>
        <a href="https://t.me/+-0TTqbxQ-mJmOWJl">Work Channel</a>
        <a href="https://t.me/CoroseTerms">Terms</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
