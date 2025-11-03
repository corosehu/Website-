import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero section title', async () => {
  render(<App />);
  const titleElement = await screen.findByText(/Hi, I’m Tony/i);
  expect(titleElement).toBeInTheDocument();
});
