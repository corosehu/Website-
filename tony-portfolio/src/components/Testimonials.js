import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.section
      className="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>What Clients Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"Great service, fast and reliable!"</p>
          <span>- Client A</span>
        </div>
        <div className="testimonial-card">
          <p>"Tony is the best in the business."</p>
          <span>- Client B</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
