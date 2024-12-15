'use client';

import React, { useState } from 'react';
import Step1 from './(steps)/Step1';
import Step2 from './(steps)/Step2';
import Step3 from './(steps)/Step3';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1); // Tracks the current step

  const nextStep = () => setCurrentStep(prev => prev + 1);
  // const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Renders the current step component
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onContinue={nextStep} />;
      case 2:
        return <Step2 onContinue={nextStep} />;
      case 3:
        return <Step3 onContinue={nextStep} />;
      default:
        return <div>Form Complete!</div>;
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-background'>
      {renderStep()}
    </div>
  );
};

export default StepForm;
