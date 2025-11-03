// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ([jest.fn(), true]),
}));

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    div: jest.fn().mockImplementation(({ children }) => children),
  },
  useAnimation: () => ([{ start: jest.fn() }]),
}));
