import React from 'react';
import './Channels.css';

const links = [
  { name: 'Main Portal', url: 'https://t.me/heartsaved' },
  { name: 'Shop Channel', url: 'https://t.me/+xW9i8aYsyoBlNGU1' },
  { name: 'Vouch Channel', url: 'https://t.me/TrueVia' },
  { name: 'OGU Profile', url: 'http://Oguser.com/corose' },
  { name: 'Work Profile', url: 'https://t.me/+-0TTqbxQ-mJmOWJl' },
  { name: 'TOS', url: 'https://t.me/CoroseTerms' },
];

const Channels = () => {
  return (
    <section className="channels">
      <h2>Where You Can Find Me</h2>
      <div className="links-grid">
        {links.map((link, index) => (
          <a href={link.url} className="link-card" key={index} target="_blank" rel="noopener noreferrer">
            <h3>{link.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Channels;
