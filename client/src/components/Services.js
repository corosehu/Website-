import React from 'react';
import './Services.css';
import { FiTrendingUp, FiCheckSquare, FiUsers, FiShare2, FiBriefcase, FiLock } from 'react-icons/fi';

const services = [
  { icon: <FiTrendingUp size={32} />, title: 'Instagram Growth & Engagement' },
  { icon: <FiCheckSquare size={32} />, title: 'Account Setup, Recovery & Verification' },
  { icon: <FiUsers size={32} />, title: 'Niche Audience Targeting' },
  { icon: <FiShare2 size={32} />, title: 'Influencer Collaboration Setup' },
  { icon: <FiBriefcase size={32} />, title: 'Brand Consulting' },
  { icon: <FiLock size={32} />, title: 'Safe Middleman Deals' },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Services That Deliver Results</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card glass-panel" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
