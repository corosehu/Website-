import React from 'react';
import './Workflow.css';

const steps = [
  { title: 'Contact via Telegram', description: 't.me/heartsaved' },
  { title: 'Discuss Your Needs', description: '' },
  { title: 'Confirm Safe Deal', description: '(Direct or via Middleman)' },
  { title: 'Fast Delivery', description: '' },
  { title: 'Receive Proof & Results', description: '' },
];

const Workflow = () => {
  return (
    <section className="workflow">
      <h2>How It Works</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
