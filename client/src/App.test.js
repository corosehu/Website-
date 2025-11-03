import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero section title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hi, I’m Tony/i);
  expect(titleElement).toBeInTheDocument();
});
