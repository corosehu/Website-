import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <motion.section
      className="faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Got Questions?</h2>
      <div className="accordion">
        <div className="accordion-item">
          <h3>How do I start a deal?</h3>
          <p>Contact me on Telegram.</p>
        </div>
        <div className="accordion-item">
          <h3>Is middleman service supported?</h3>
          <p>Yes, I'm open to working with middlemen.</p>
        </div>
        <div className="accordion-item">
          <h3>Do you offer bulk discounts?</h3>
          <p>Yes, we can discuss this.</p>
        </div>
        <div className="accordion-item">
          <h3>How fast is delivery?</h3>
          <p>Delivery is fast and efficient.</p>
        </div>
        <div className="accordion-item">
          <h3>Are your services safe and private?</h3>
          <p>Yes, all services are safe and private.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
