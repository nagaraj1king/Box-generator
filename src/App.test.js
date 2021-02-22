import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Use "A", "S", "D", "W" keys to move box/i);
  expect(linkElement).toBeInTheDocument();
});


