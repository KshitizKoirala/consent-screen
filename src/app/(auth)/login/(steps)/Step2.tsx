'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Card } from '@/components/Card';
import { StepperProps } from '@/interfaces/stepperProps';

export default function Step2({ onContinue }: StepperProps) {
  const DEFAULT_PASSWORD = 1111;
  const [code, setCode] = useState(['', '', '', '']);
  const [codeError, setCodeError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (value: string, index: number) => {
    if (value.length > 1) return; // Only allow one digit
    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);

    // Focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // Check if password matches
    if (newCode.length === 4 && newCode.every(item => item.trim() !== '')) {
      const codeAsString = newCode.join('');
      if (parseInt(codeAsString) === DEFAULT_PASSWORD) {
        setIsButtonDisabled(false);
        setCodeError('')
      }
      else{
        setCodeError('Invalid OTP.')
      }
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-900'>
      <Card>
        <div className='w-[450px] rounded-lg p-8 text-center text-white'>
          <div className='mb-10 flex justify-center font-medium'>
            <Image
              src='/assets/email_icon.png'
              alt='email'
              width={64}
              height={64}
            />
          </div>
          <h2 className='mb-10 text-2xl text-[#E3E6EA]'>Confirm your email</h2>
          <p className='fonr-medium mb-10 text-base text-[#59616A]'>
            Enter the verification code we emailed to{' '}
            <span className='font-semibold text-[#858B98]'>
              email@musicgpt.com
            </span>
          </p>

          {/* Verification Code Input */}
          <div className={codeError.length !== 0 ? '' : 'mb-6'} >
            <span className='flex justify-center gap-5'>
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-input-${index}`}
                  type='text'
                  value={digit}
                  maxLength={1}
                  onChange={e => handleInputChange(e.target.value, index)}
                  className='h-16 w-16 rounded-md border border-[#363E46] bg-[#232A33] text-center text-2xl text-white outline-none focus:border-blue-500'
                />
              ))}
            </span>
            {/* Error Message */}
            {codeError && <p className="text-red-500 text-xs text-left mb-6 mt-1 ml-8">{codeError}</p>}
          </div>

          {/* Continue Button */}
          <button
            className={`mb-5 h-[50px] w-full rounded-md px-4 py-2 font-medium text-white ${!isButtonDisabled ? 'bg-[#232A33] hover:bg-blue-700' : 'cursor-not-allowed bg-[#232A33]'}`}
            disabled={isButtonDisabled}
            onClick={onContinue}
          >
            Continue
          </button>

          {/* Resend Code */}
          <p className='mt-5 text-[14px] font-medium text-[#59616A]'>
            Didn&apos;t receive code? Resend email (59s)
          </p>
        </div>
      </Card>
    </div>
  );
}
