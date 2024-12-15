import Image from 'next/image';

import { Card } from '@/components/Card';

export default function Home() {
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
          <h1 className='mb-5 text-2xl text-[#E3E6EA]'>Welcome to MusicGPT</h1>
          <p className='mb-5 text-base text-[#59616A]'>
            Sign up or log in to your existing account.
          </p>

          <div className='mt-5 flex justify-center gap-2.5 py-5'>
            <SocialButton url='/assets/apple.svg' customWidth={16} />
            <SocialButton url='/assets/google.svg' />
            <SocialButton url='/assets/discord.svg' />
            <SocialButton url='/assets/fb.svg' />
          </div>

          <div className='relative mb-5'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-[#2C343C]'></div>
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-[#13191F] px-2 text-[#59616A]'>or</span>
            </div>
          </div>

          {/* Email Input */}
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Email'
              className='h-[50px] w-full rounded-md border border-gray-600 bg-inherit px-4 py-2 text-sm text-[#BBC1CD] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500'
            />
          </div>

          {/* Continue Button */}
          <button className='mb-5 h-[50px] w-full rounded-md bg-[#232A33] px-4 py-2 font-medium text-white hover:bg-blue-700'>
            Continue
          </button>

          <p className='mt-5 text-[14px] font-medium text-[#59616A]'>
            By continuing, you agree to our Terms & Privacy
          </p>
        </div>
      </Card>
    </div>
  );
}

// Social Button Component
const SocialButton = ({
  url,
  customWidth
}: {
  url: string;
  customWidth?: number;
}) => {
  return (
    <button className='flex h-[50px] w-[85px] items-center justify-center rounded-md border border-[#363E46] text-white hover:bg-gray-600'>
      <Image src={url} alt='Music Gpt' width={customWidth ?? 20} height={20} />
    </button>
  );
};
