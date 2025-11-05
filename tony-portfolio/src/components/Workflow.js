import React from 'react';
import { motion } from 'framer-motion';

const Workflow = () => {
  return (
    <motion.section
      className="workflow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>How It Works</h2>
      <div className="timeline">
        <div className="step">Contact via Telegram</div>
        <div className="step">Discuss Your Needs</div>
        <div className="step">Confirm Safe Deal</div>
        <div className="step">Fast Delivery</div>
        <div className="step">Receive Proof & Results</div>
      </div>
    </motion.section>
  );
};

export default Workflow;
