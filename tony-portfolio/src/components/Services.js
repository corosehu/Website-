import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.section
      className="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Services That Deliver Results</h2>
      <div className="service-cards">
        <div className="card">Instagram Growth & Engagement</div>
        <div className="card">Account Setup, Recovery & Verification</div>
        <div className="card">Niche Audience Targeting</div>
        <div className="card">Influencer Collaboration Setup</div>
        <div className="card">Brand Consulting</div>
        <div className="card">Safe Middleman Deals</div>
      </div>
    </motion.section>
  );
};

export default Services;
