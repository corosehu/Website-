import React from 'react';
import './Services.css';

const services = [
  { title: 'Instagram Growth & Engagement' },
  { title: 'Account Setup, Recovery & Verification' },
  { title: 'Niche Audience Targeting' },
  { title: 'Influencer Collaboration Setup' },
  { title: 'Brand Consulting' },
  { title: 'Safe Middleman Deals' },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Services That Deliver Results</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card glass-panel" key={index}>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
