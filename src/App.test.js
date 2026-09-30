import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page by default', () => {
  render(<App />);

  expect(screen.getByText(/home page/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /following/i })).toBeInTheDocument();
});

test('navigates to the following page', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('link', { name: /following/i }));

  expect(screen.getByText(/following page/i)).toBeInTheDocument();
});
