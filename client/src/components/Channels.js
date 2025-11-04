import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Channels.css';
import { FiCompass, FiShoppingCart, FiCheckCircle, FiUser, FiBriefcase, FiFileText } from 'react-icons/fi';

const links = [
  { name: 'Main Portal', url: 'https://t.me/heartsaved', icon: <FiCompass size={28} /> },
  { name: 'Shop Channel', url: 'https://t.me/+xW9i8aYsyoBlNGU1', icon: <FiShoppingCart size={28} /> },
  { name: 'Vouch Channel', url: 'https://t.me/TrueVia', icon: <FiCheckCircle size={28} /> },
  { name: 'OGU Profile', url: 'http://Oguser.com/corose', icon: <FiUser size={28} /> },
  { name: 'Work Profile', url: 'https://t.me/+-0TTqbxQ-mJmOWJl', icon: <FiBriefcase size={28} /> },
  { name: 'TOS', url: 'https://t.me/CoroseTerms', icon: <FiFileText size={28} /> },
];

const Channels = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="channels">
      <h2>Where You Can Find Me</h2>
      {isMobile ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {links.map((link, index) => (
            <SwiperSlide key={index}>
              <a href={link.url} className="link-card glass-panel" target="_blank" rel="noopener noreferrer">
                {link.icon}
                <h3>{link.name}</h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="links-grid">
          {links.map((link, index) => (
            <a href={link.url} className="link-card glass-panel" key={index} target="_blank" rel="noopener noreferrer">
              {link.icon}
              <h3>{link.name}</h3>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Channels;
