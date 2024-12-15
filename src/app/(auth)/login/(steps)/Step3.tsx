'use client'

import { z } from 'zod';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Card } from '@/components/Card';
import { StepperProps } from '@/interfaces/stepperProps';
import { alphanumericSchema, isValidName } from '@/app/lib/zodSchemas';

export default function Step3({ onContinue }: StepperProps) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if(userNameError === '' && nameError === ''){
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    
  }, [userNameError, nameError])
  
  console.log('alphanumericSchema:', alphanumericSchema);
  console.log('isValidName:', isValidName);

  const handleUserNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setUserName(value);
      try {
        await alphanumericSchema.safeParse({userName: value});
        setUserNameError(''); 
      } catch (error) {
        if (error instanceof z.ZodError) {
          setUserNameError(error.errors[0].message); // Set error message from Zod
        }
      }
      console.log('userNameError', userNameError)
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setName(value);
      try {
        isValidName.safeParse({name: value});
        setNameError(''); 
      } catch (error) {
        if (error instanceof z.ZodError) {
          setNameError(error.errors[0].message); // Set error message from Zod
        }
      }
      console.log('userNameError', userNameError)
    };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-900'>
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
          <h1 className='mb-5 text-2xl text-[#E3E6EA]'>
            Let&apos;s get started.
          </h1>
          <p className='mb-5 text-base text-[#59616A]'>How can we call you?</p>

          {/* Email Input */}
          <div className='mb-5'>
            <input
              type='string'
              value={name}
              onChange={handleNameChange}
              placeholder='Name'
              className='mb-5 h-[50px] w-full rounded-md border border-borderOutline bg-inherit px-4 py-2 text-sm text-placeholderColor text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500'
              required
            />

            <input
              type='string'
              value={userName}
              onChange={handleUserNameChange}
              placeholder='@username'
              className='h-[50px] w-full rounded-md border border-borderOutline bg-inherit px-4 py-2 text-sm text-placeholderColor text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500'
            />
            {/* Error Message */}
            {userNameError && <p className="text-red-500 text-xs text-left mt-1">{userNameError}</p>}
          </div>

          {/* Start Creating Button */}
          <button
            style={{
              backgroundImage: "url('/assets/create_button.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className='h-[50px] w-full rounded-full font-medium text-white hover:opacity-90'
            disabled={isButtonDisabled}
            onClick={onContinue}
          />

          <p className='mt-5 text-[14px] font-medium text-[#59616A]'>
            You can change your name and username at anytime.
          </p>
        </div>
      </Card>
    </div>
  );
}
