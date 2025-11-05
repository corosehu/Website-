import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  return (
    <motion.section
      className="case-studies"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Results That Speak</h2>
      <div className="case-cards">
        <div className="case-card">
          <p>+15k Followers in 3 Weeks</p>
        </div>
        <div className="case-card">
          <p>Brand Verified Successfully</p>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
