import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Particle', () => () => null);
jest.mock('./components/ScrollToTop', () => () => null);

test('renders the portfolio hero and primary call to action', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 2, name: /javerine tan/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute('href', '/project');
});
