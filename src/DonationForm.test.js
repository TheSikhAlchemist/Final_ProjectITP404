import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import DonationForm from './DonationForm';

describe('DonationForm Component', () => {
  it('renders without crashing', () => {
    render(<DonationForm />);
  });

  it('displays error messages for empty form submission', async () => {
    const { getByLabelText, getByText } = render(<DonationForm />);
    
    fireEvent.click(getByText('Submit'));

    expect(getByText('Please enter a valid full name without special characters or numbers.')).toBeInTheDocument();
    expect(getByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(getByText('Please enter a valid donation amount.')).toBeInTheDocument();
  });
  


  // Add more specific validation tests for email and donation amount

  it('updates document title on component mount', () => {
    render(<DonationForm />);
    expect(document.title).toBe('Gradient News Domnation Page');
  });

  

  
});
