// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  unobserve() {}
};

jest.mock('framer-motion', () => {
  const React = jest.requireActual('react');
  const framerMotion = jest.requireActual('framer-motion');

  return {
    ...framerMotion,
    motion: {
      ...framerMotion.motion,
      div: React.forwardRef((props, ref) => {
        return <div {...props} ref={ref} />;
      }),
    },
  };
});
