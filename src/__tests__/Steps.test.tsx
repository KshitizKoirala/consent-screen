import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import Step1 from '@/app/(auth)/login/(steps)/Step1';

describe('Steps Load', () => {
  it('renders Step1 content', () => {
    render(<Step1 onContinue={jest.fn()} />); // Mock onContinue function
    expect(screen.getByText('Welcome to MusicGPT')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
  });
  
  it('calls onContinue function on button click', () => {
    const mockOnContinue = jest.fn();
    render(<Step1 onContinue={mockOnContinue} />);
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});

