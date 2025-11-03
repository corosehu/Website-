import React from 'react';
import './CaseStudies.css';

const studies = [
  {
    title: '+15k Followers in 3 Weeks',
    image: 'https://via.placeholder.com/400x300.png?text=Before/After',
  },
  {
    title: 'Brand Verified Successfully',
    image: 'https://via.placeholder.com/400x300.png?text=Before/After',
  },
];

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <h2>Results That Speak</h2>
      <div className="studies-grid">
        {studies.map((study, index) => (
          <div className="study-card" key={index}>
            <div className="study-image">
              <img src={study.image} alt={study.title} />
            </div>
            <h3>{study.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
