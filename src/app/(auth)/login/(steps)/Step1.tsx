'use client'

// https://www.figma.com/design/rJD9LBl3wrs697NKGPo488/Untitled?node-id=0-1&p=f&t=CCilopJLKLxHVMMn-0


import { z } from 'zod';
import Image from 'next/image';
import { useState } from 'react';

import { Card } from '@/components/Card';
import { emailSchema } from '@/app/lib/zodSchemas';
import { StepperProps } from '@/interfaces/stepperProps';

export default function Step1({ onContinue }: StepperProps) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    try {
      emailSchema.parse({ email: value });
      setEmailError(''); 
      setIsButtonDisabled(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message); // Set error message from Zod
        setIsButtonDisabled(true);
      }
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <Card>
        <div className='w-[450px] rounded-lg p-8 text-center text-white'>
          <div className='mb-5 flex justify-center'>
            <Image
              src='/assets/subtract.png'
              alt='Music Gpt'
              width={36}
              height={35}
            />
          </div>
          <h1 className='mb-5 text-2xl text-headerMain'>Welcome to MusicGPT</h1>
          <p className='mb-5 text-base text-headerDescription'>
            Sign up or log in to your existing account.
          </p>

          <div className='mt-5 flex justify-center gap-2.5 py-5'>
            <SocialButton logoUrl='/assets/apple.svg' customWidth={16} url='apple' />
            <SocialButton logoUrl='/assets/google.svg' url='google' />
            <SocialButton logoUrl='/assets/discord.svg' url='discord' />
            <SocialButton logoUrl='/assets/fb.svg' url='fb' />
          </div>

          <div className='relative mb-5'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-[#2C343C]'></div>
            </div>
            <div className='relative flex justify-center'>
              <span className='px-2 text-bgText'>or</span>
            </div>
          </div>

          {/* Email Input */}
          <div className='mb-5'>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='Email'
              className='h-[50px] w-full rounded-md border border-borderOutline bg-inherit px-4 py-2 text-sm text-placeholderColor text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500'
            />
            {/* Error Message */}
            {emailError && <p className="text-red-500 text-xs text-left mt-1">{emailError}</p>}
          </div>

          {/* Continue Button */}
          <button
            className={`mb-5 h-[50px] w-full rounded-md px-4 py-2 font-medium text-white ${!isButtonDisabled ? 'bg-[#232A33] hover:bg-blue-700' : 'cursor-not-allowed bg-[#232A33]'}`}
            disabled={isButtonDisabled}
            onClick={onContinue}
          >
            Continue
          </button>

          <p className='mt-5 text-[14px] font-medium text-headerDescription'>
            By continuing, you agree to our Terms & Privacy
          </p>
        </div>
      </Card>
    </div>
  );
}

// Social Button Component
const SocialButton = ({
  logoUrl,
  customWidth,
  url
}: {
  logoUrl: string;
  customWidth?: number;
  url: string;
}) => {
  return (
    <button className='flex h-[50px] w-[85px] items-center justify-center rounded-md border border-borderOutline text-white hover:bg-gray-600' onClick={()=>console.log(url)}>
      <Image src={logoUrl} alt='Music Gpt' width={customWidth ?? 20} height={20} />
    </button>
  );
};
