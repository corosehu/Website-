import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Tony is the best! Super fast and reliable.",
    author: "@client1",
  },
  {
    quote: "Got my account verified in no time. Highly recommend!",
    author: "@client2",
  },
  {
    quote: "Amazing service and great communication.",
    author: "@client3",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Clients Say</h2>
      <div className="scrolling-wrapper">
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p>"{testimonial.quote}"</p>
              <span>{testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
