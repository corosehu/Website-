import React from 'react';
import './Channels.css';

const links = [
  { name: 'Main Portal', url: 'https://t.me/heartsaved', icon: 'fas fa-compass' },
  { name: 'Shop Channel', url: 'https://t.me/+xW9i8aYsyoBlNGU1', icon: 'fas fa-store' },
  { name: 'Vouch Channel', url: 'https://t.me/TrueVia', icon: 'fas fa-check-circle' },
  { name: 'OGU Profile', url: 'http://Oguser.com/corose', icon: 'fas fa-user-circle' },
  { name: 'Work Profile', url: 'https://t.me/+-0TTqbxQ-mJmOWJl', icon: 'fas fa-briefcase' },
  { name: 'TOS', url: 'https://t.me/CoroseTerms', icon: 'fas fa-file-alt' },
];

const Channels = () => {
  return (
    <section className="channels">
      <h2>Where You Can Find Me</h2>
      <div className="links-grid">
        {links.map((link, index) => (
          <a href={link.url} className="link-card" key={index} target="_blank" rel="noopener noreferrer">
            <i className={link.icon}></i>
            <h3>{link.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Channels;
