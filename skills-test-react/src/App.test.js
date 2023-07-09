import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Contact', () => {
  render(<App />);
  const text = screen.getByText(/Contact/i);
  expect(text).toBeInTheDocument();
});
