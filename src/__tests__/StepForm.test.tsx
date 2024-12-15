import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StepForm from '@/app/(auth)/login/page'; // Assuming StepForm is exported in page.tsx

describe('StepForm', () => {
  it('renders the first step by default', () => {
    render(<StepForm />);

    expect(screen.getByText('Welcome to MusicGPT')).toBeInTheDocument(); // Check for Step1 content
  });
});
