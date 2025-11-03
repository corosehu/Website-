import React from 'react';
import './Contact.css';
import './Button.css';

const Contact = () => {
  return (
    <section className="contact glass-panel">
      <h2>Let’s Work Together 🤝</h2>
      <p>Have a project in mind or need IG-related help? Message me directly on Telegram.</p>
      <a href="https://t.me/heartsaved" className="btn" target="_blank" rel="noopener noreferrer">
        Message Tony on Telegram
      </a>
    </section>
  );
};

export default Contact;
