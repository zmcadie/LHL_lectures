import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/RPS - Grand Slam/i);
  expect(headerElement).toBeInTheDocument();
});
