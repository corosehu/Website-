import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    let magneticElements = [];

    const onMouseMove = (e) => {
      gsap.to(cursor, { duration: 0.6, x: e.clientX, y: e.clientY, ease: 'power3.out' });
      gsap.to(dot, { duration: 0.2, x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = (e) => {
      const el = e.currentTarget;
      gsap.to(cursor, {
        duration: 0.3,
        scale: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      });

      // Magnetic effect
      const x = e.clientX;
      const y = e.clientY;
      const { height, width, left, top } = el.getBoundingClientRect();
      gsap.to(el, { duration: 0.3, x: (x - left - width / 2) * 0.2, y: (y - top - height / 2) * 0.2, ease: 'power2.out' });
    };

    const onMouseLeave = (e) => {
      const el = e.currentTarget;
      gsap.to(cursor, {
        duration: 0.3,
        scale: 1,
        backgroundColor: 'transparent',
        borderWidth: 2,
      });
      gsap.to(el, { duration: 0.3, x: 0, y: 0, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', onMouseMove);

    // Use a timeout to ensure all components have mounted
    setTimeout(() => {
      magneticElements = document.querySelectorAll('a, button, [data-magnetic]');
      magneticElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    }, 500);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      magneticElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor-circle" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
};

export default CustomCursor;
