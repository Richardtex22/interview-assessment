import { render, screen, fireEvent } from '@testing-library/react';
import PageLayout from './PageLayout';

test('finds the favorite artist', () => {
  render(<PageLayout />);
  const headerElement = screen.getByText(/My Favorite Music Artist is: Nat King Cole/i);
  expect(headerElement).toBeInTheDocument();
});
test('finds the cards lists', () => {
  render(<PageLayout />);
  const cardElement = screen.getAllByRole(/card/i);
  expect(cardElement).toHaveLength(6);
});
test('finds all the buttons', () => {
  render(<PageLayout />);
  const buttonElement = screen.getAllByRole(/button/i);
  expect(buttonElement).toHaveLength(6);
});
test('click the button, change the header text', () => {
  render(<PageLayout />);
  const buttonElement = screen.getAllByRole(/button/i);
  expect(buttonElement).toHaveLength(6);
  fireEvent.click(buttonElement[0])
  expect(screen.getByText(/My Favorite Music Artist is: Ella Fitzgerald/i)).toBeInTheDocument();
});