// import React, { useState } from "react";
// import Step1 from "./steps/Step1";
// import Step2 from "./steps/Step2";
// import Step3 from "./steps/Step3";

// const StepForm = () => {
//   const [currentStep, setCurrentStep] = useState(1); // Tracks the current step

//   const nextStep = () => setCurrentStep((prev) => prev + 1);
//   const prevStep = () => setCurrentStep((prev) => prev - 1);

//   // Renders the current step component
//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <Step1 onContinue={nextStep} />;
//       case 2:
//         return <Step2 onContinue={nextStep} onBack={prevStep} />;
//       case 3:
//         return <Step3 onContinue={nextStep} onBack={prevStep} />;
//       default:
//         return <div>Form Complete!</div>;
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#13191F]">
//       {renderStep()}
//     </div>
//   );
// };

// export default StepForm;
