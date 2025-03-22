import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});
// The beforeEach function is called before each test, and the afterEach function is called after each test.
test('fetches and displays bugs', async () => {
  const fakeBugs = [
    { _id: '1', title: 'Bug 1', description: 'First bug', status: 'open' },
    { _id: '2', title: 'Bug 2', description: 'Second bug', status: 'in-progress' },
  ];

  // Mocking the fetch function to return the fakeBugs
  global.
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(fakeBugs),
    })
  );

  render(<App />);
  
  // Waiting for the bugs to be rendered
  await waitFor(() => {
    expect(screen.getByText(/Bug 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Bug 2/i)).toBeInTheDocument();
  });
});
