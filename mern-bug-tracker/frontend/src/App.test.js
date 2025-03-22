import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  // Checking for an element that confirms the App rendered correctly
  const heading = screen.getByText(/Bug Tracker/i);
  expect(heading).toBeInTheDocument();
});
