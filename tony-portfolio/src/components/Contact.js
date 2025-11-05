import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Let’s Work Together 🤝</h2>
      <p>Have a project in mind or need IG-related help? Message me directly on Telegram.</p>
      <a href="https://t.me/heartsaved" className="btn">Message Tony on Telegram</a>
    </motion.section>
  );
};

export default Contact;
