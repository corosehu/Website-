import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Swiper components and styles for Jest
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-mock">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide-mock">{children}</div>,
}));
jest.mock('swiper/css', () => jest.fn());
jest.mock('swiper/css/pagination', () => jest.fn());

test('renders the hero section title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hi, I’m Tony/i);
  expect(titleElement).toBeInTheDocument();
});
