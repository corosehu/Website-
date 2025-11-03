import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "How do I start a deal?",
    answer: "Simply contact me on Telegram to discuss your needs."
  },
  {
    question: "Is middleman service supported?",
    answer: "Yes, I am happy to work with a middleman for your peace of mind."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes, discounts are available for bulk orders. Let's discuss your specific needs."
  },
  {
    question: "How fast is delivery?",
    answer: "Delivery times vary depending on the service, but I always aim for the fastest possible turnaround."
  },
  {
    question: "Are your services safe and private?",
    answer: "Absolutely. All services are confidential and performed with the utmost security."
  }
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <section className="faq">
      <h2>Got Questions?</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-title" onClick={() => toggle(index)}>
              <h3>{faq.question}</h3>
              <span>{open === index ? '-' : '+'}</span>
            </div>
            <div className={open === index ? 'accordion-content show' : 'accordion-content'}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
