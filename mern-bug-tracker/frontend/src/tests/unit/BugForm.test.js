import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('renders bug form and validates inputs', () => {

  const mockAddBug = jest.fn();
  render(<BugForm addBug={mockAddBug} />);
  
  // Checking for input fields using getByLabelText
  const titleInput = screen.getByLabelText(/Title:/i);
  const descriptionInput = screen.getByLabelText(/Description:/i);

  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  
  // Attempting to submit an empty form should show an error message
  const submitButton = screen.getByText(/Submit Bug/i);
  fireEvent.click(submitButton);
  expect(screen.getByText(/Please fill out all fields/i)).toBeInTheDocument();
  
  // Filling out the form and submit
  fireEvent.change(titleInput, { target: { value: 'Bug Title' } });
  fireEvent.change(descriptionInput, { target: { value: 'Bug Description' } });
  fireEvent.click(submitButton);
  
  expect(mockAddBug).toHaveBeenCalledWith({
    title: 'Bug Title',
    description: 'Bug Description',
    status: 'open'
  });
});
